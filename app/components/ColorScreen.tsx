'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import Link from 'next/link'

interface ColorScreenProps {
  backgroundColor: string
  children: React.ReactNode
}

const screens = [
  '/black-screen',
  '/white-screen',
  '/red-screen',
  '/green-screen',
  '/blue-screen',
  '/yellow-screen',
]

export default function ColorScreen({ backgroundColor, children }: ColorScreenProps) {
  const router = useRouter()
  const [showModal, setShowModal] = useState(false)

  // 处理键盘事件
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const currentIndex = screens.indexOf(window.location.pathname)
      if (e.key === 'ArrowRight') {
        const nextIndex = (currentIndex + 1) % screens.length
        router.push(screens[nextIndex])
      } else if (e.key === 'ArrowLeft') {
        const prevIndex = (currentIndex - 1 + screens.length) % screens.length
        router.push(screens[prevIndex])
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [router])

  // 处理双击事件
  const handleDoubleClick = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }

  return (
    <div
      className="h-screen w-screen flex justify-center items-center"
      style={{ backgroundColor }}
      onDoubleClick={handleDoubleClick}
    >
      <div className={clsx('bg-gray-500 w-4/5 max-h-4/5 overflow-y-auto rounded-lg p-4 text-white opacity-0',
        {
          'opacity-100': showModal,
        }
      )}>
        <div className='flex items-center'>
          <div className='flex-auto'></div>
          <button onClick={() => setShowModal(false)} className='cursor-pointer'>
            <Image src="/close.svg" width={24} height={24} alt={'close'} />
          </button>
        </div>
        <div className="modal">{children}</div>
        <ul className='mt-10'>
          <li><Link href="https://blog.crazykids.tech/" target="_blank">CrazyKids’s Blog</Link></li>
          <li><Link href="https://www.crazykids.tech" target="_blank">Memora - Read it later</Link></li>
        </ul>
        <Link href="/" title="Full Screen Color Tool" className='mt-10'>Back to All Colors</Link>
      </div>
      <div 
        onClick={() => setShowModal(true)}
        className="absolute right-4 bottom-4 cursor-pointer p-2 opacity-0 transition-opacity duration-300 hover:opacity-100"
      >
        <Image src="/info.svg" width={24} height={24} alt={'info'} />
      </div>
    </div>
  )
} 
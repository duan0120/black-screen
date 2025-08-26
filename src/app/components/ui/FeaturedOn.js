import { Link } from '@heroui/react';
export default function FeaturedOn() {
  return (
    <div className='flex items-center flex-wrap gap-1'>
      <Link href="https://aistage.net" className="text-sm hover:text-primary" target="_blank">AIStage</Link>
      <span className="mx-2">|</span>
      <Link href="https://startupfa.me/s/black-screen?utm_source=black-screen.cc" target="_blank">
        <img src="https://startupfa.me/badges/featured-badge-small.webp" alt="Featured on Startup Fame" className='h-[36px] w-auto' />
      </Link>
      <span className="mx-2">|</span>
      <a href="https://turbo0.com/item/black-screen" target="_blank" rel="noopener noreferrer">
        <img src="https://img.turbo0.com/badge-listed-light.svg" alt="Listed on Turbo0" className='h-[36px] w-auto' />
      </a>
      <span className="mx-2">|</span>
      <a href="https://submitaitools.org" target="_blank" >
        <img src="https://submitaitools.org/static_submitaitools/images/submitaitools.png" alt="Submit AI Tools – The ultimate platform to discover, submit, and explore the best AI tools across various categories." className='h-[36px] w-auto' />
      </a>
    </div>
  )
}

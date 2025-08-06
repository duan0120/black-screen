import { Link } from '@heroui/react';
export default function FeaturedOn() {
  return (
    <div className='flex items-center flex-wrap gap-1'>
      <Link href="https://aistage.net" className="text-sm hover:text-primary" target="_blank">AIStage</Link>
      <span className="mx-2">|</span>
      <Link href="https://startupfa.me/s/brat-gen?utm_source=brat-gen.com" target="_blank"><img src="https://startupfa.me/badges/featured/default.webp" alt="Featured on Startup Fame" className='h-[36px] w-auto' /></Link>
    </div>
  )
}

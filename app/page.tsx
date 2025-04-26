import Link from "next/link";

export default function Home() {
  
  return (
    <div className="m-0 p-5 text-center">
      <header>
        <h1 className="text-[2rem] font-bold text-[#333] mb-2.5">Full Screen Color Tools for Focus and Testing</h1>
        <p className="text-[1rem] text-[#666] max-w-[620px] mt-0 mr-auto mb-5 ml-auto">Discover our free full screen color tool. Choose black, white, red, green, blue, or yellow screens for focus, screen testing, eye relaxation, or creative projects. Double-click to go full screen, and use arrow keys to switch colors seamlessly.</p>
      </header>
      <section className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(120px,1fr))] max-w-[840px] mt-0 mr-auto mb-10 ml-auto">
        <Link href="/black-screen" className="aspect-square flex items-center justify-center text-white font-bold text-[1rem] rounded-lg transition-transform duration-200 bg-black hover:scale-105">Black Screen</Link>
        <Link href="/white-screen" className="aspect-square flex items-center justify-center text-black font-bold text-[1rem] rounded-lg transition-transform duration-200 bg-white border-1 border-solid border-[#ccc] hover:scale-105">White Screen</Link>
        <Link href="/red-screen" className="aspect-square flex items-center justify-center text-white font-bold text-[1rem] rounded-lg transition-transform duration-200 bg-[red] hover:scale-105">Red Screen</Link>
        <Link href="/green-screen" className="aspect-square flex items-center justify-center text-white font-bold text-[1rem] rounded-lg transition-transform duration-200 bg-[green] hover:scale-105">Green Screen</Link>
        <Link href="/blue-screen" className="aspect-square flex items-center justify-center text-white font-bold text-[1rem] rounded-lg transition-transform duration-200 bg-[blue] hover:scale-105">Blue Screen</Link>
        <Link href="/yellow-screen" className="aspect-square flex items-center justify-center text-black font-bold text-[1rem] rounded-lg transition-transform duration-200 bg-[yellow] hover:scale-105">Yellow Screen</Link>
      </section>
      <section className="mt-10 mb-10 ml-auto mr-auto max-w-[840px] p-5 bg-white rounded-lg block">
        <h2 className="block font-bold text-2xl text-[#333] mb-[15px]">Why Use Our Color Screens?</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5 mt-5">
          <div className="block">
            <h3 className="block font-bold text-[1.2rem] text-[#444] mb-2.5">Focus & Productivity</h3>
            <p className="block text-base text-[#666] mt-0 mr-auto mb-5 ml-auto">Use black or blue screens to minimize distractions during coding or studying. Double-click for full-screen focus.</p>
          </div>
          <div className="block">
            <h3 className="block font-bold text-[1.2rem] text-[#444] mb-2.5">Screen Testing</h3>
            <p className="block text-base text-[#666] mt-0 mr-auto mb-5 ml-auto">Test dead pixels or clean monitors with white or black screens. Switch colors with arrow keys for quick checks.</p>
          </div>
          <div className="block">
            <h3 className="block font-bold text-[1.2rem] text-[#444] mb-2.5">Creative Uses</h3>
            <p className="block text-base text-[#666] mt-0 mr-auto mb-5 ml-auto">Red, green, or blue screens for video backgrounds or lighting. Cycle through colors using arrow keys.</p>
          </div>
          <div className="block">
            <h3 className="block font-bold text-[1.2rem] text-[#444] mb-2.5">Eye Relaxation</h3>
            <p className="block text-base text-[#666] mt-0 mr-auto mb-5 ml-auto">Yellow or black screens reduce eye strain. Double-click for a full-screen, distraction-free experience.</p>
          </div>
        </div>
      </section>
      <section className="mt-10 mb-10 ml-auto mr-auto max-w-[840px] p-5 bg-white rounded-lg block">
        <h2 className="block font-bold text-2xl text-[#333] mb-[15px]">Frequently Asked Questions</h2>
        <div className="mb-5 text-left">
          <h3 className="block font-bold text-[1.2rem] text-[#444] mb-2.5">How do I go full screen?</h3>
          <p className="block text-base text-[#666] mt-0 mr-auto mb-5 ml-auto">Double-click anywhere on the screen to enter full-screen mode, perfect for focus or testing.</p>
        </div>
        <div className="mb-5 text-left">
          <h3 className="block font-bold text-[1.2rem] text-[#444] mb-2.5">How can I switch colors?</h3>
          <p className="block text-base text-[#666] mt-0 mr-auto mb-5 ml-auto">Use the left or right arrow keys to cycle through black, white, red, green, blue, and yellow screens.</p>
        </div>
        <div className="mb-5 text-left">
          <h3 className="block font-bold text-[1.2rem] text-[#444] mb-2.5">What is a full screen color tool?</h3>
          <p className="block text-base text-[#666] mt-0 mr-auto mb-5 ml-auto">It displays a solid color across your screen for focus, testing, or creative purposes, with easy controls.</p>
        </div>
        <div className="mb-5 text-left">
          <h3 className="block font-bold text-[1.2rem] text-[#444] mb-2.5">Does a black screen save power?</h3>
          <p className="block text-base text-[#666] mt-0 mr-auto mb-5 ml-auto">Yes, on OLED screens, black pixels use less power, extending battery life.</p>
        </div>
      </section>
      <footer className="p-5 mt-10">
        <p className="block text-base text-[#666] mt-0 mr-auto mb-5 ml-auto">© 2025 CrazyKids. All rights reserved.</p>
        <div>
          <a href="https://blog.crazykids.tech">CrazyKids’s Blog</a>
          <span className="ml-2 mr-2">•</span>
          <a href="https://www.memora.top">Memora</a>
        </div>
      </footer>
    </div>
  )
}

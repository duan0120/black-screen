import ColorScreen from '../components/ColorScreen'

export default function BlackScreen() {
  return <ColorScreen backgroundColor="black">
    <h1 className="text-2xl font-bold mb-4">Black Screen Tool</h1>
    <p className="mb-4">
      Our free black screen tool is perfect for focus or OLED power saving. Whether you’re focusing on work, testing
      your display, or saving power, double-click to go full screen or use arrow keys to switch colors seamlessly.
    </p>
    <h2 className="text-xl font-semibold mb-2">Why Use Our Black Screen Tool?</h2>
    <ul className="text-left mb-4 list-disc pl-6">
      <li>Minimize distractions for coding, studying, or deep focus.</li>
      <li>Save power on OLED displays with a solid black screen.</li>
      <li>Test monitors for dead pixels or screen issues.</li>
      <li>Reduce eye strain during long work or gaming sessions.</li>
    </ul>
    <h2 className="text-xl font-semibold mb-2">How to Use</h2>
    <p className="mb-4">
      Double-click anywhere to enter full-screen mode. Use left or right arrow keys to cycle through black, white, red,
      green, blue, and yellow screens for a customized experience.
    </p>
  </ColorScreen>
}

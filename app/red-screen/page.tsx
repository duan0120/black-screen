import ColorScreen from '../components/ColorScreen'

export default function RedScreen() {
  return <ColorScreen backgroundColor="red">
    <h1 className="text-2xl font-bold mb-4">Red Screen Tool</h1>
    <p className="mb-4">
      Our free red screen tool is perfect for creative lighting or focus. Whether you’re focusing on work, testing
      your display, or saving power, double-click to go full screen or use arrow keys to switch colors seamlessly.
    </p>
    <h2 className="text-xl font-semibold mb-2">Why Use Our Red Screen Tool?</h2>
    <ul className="text-left mb-4 list-disc pl-6">
      <li>Create warm lighting for video or photography.</li>
      <li>Enhance focus with a bold red color.</li>
      <li>Use as a background for creative projects.</li>
    </ul>
    <h2 className="text-xl font-semibold mb-2">How to Use</h2>
    <p className="mb-4">
      Double-click anywhere to enter full-screen mode. Use left or right arrow keys to cycle through black, white, red,
      green, blue, and yellow screens for a customized experience.
    </p>
  </ColorScreen>
}

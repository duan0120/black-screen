import ColorScreen from '../components/ColorScreen'

export default function GreenScreen() {
  return <ColorScreen backgroundColor="green">
    <h1 className="text-2xl font-bold mb-4">Green Screen Tool</h1>
    <p className="mb-4">
      Our free green screen tool is perfect for video backgrounds or testing. Whether you’re focusing on work, testing
      your display, or saving power, double-click to go full screen or use arrow keys to switch colors seamlessly.
    </p>
    <h2 className="text-xl font-semibold mb-2">Why Use Our Green Screen Tool?</h2>
    <ul className="text-left mb-4 list-disc pl-6">
      <li>Create video backgrounds for streaming or editing.</li>
      <li>Test display quality with a solid green color.</li>
      <li>Use in creative video production.</li>
    </ul>
    <h2 className="text-xl font-semibold mb-2">How to Use</h2>
    <p className="mb-4">
      Double-click anywhere to enter full-screen mode. Use left or right arrow keys to cycle through black, white, red,
      green, blue, and yellow screens for a customized experience.
    </p>
  </ColorScreen>
}

import ColorScreen from '../components/ColorScreen'

export default function WhiteScreen() {
  return <ColorScreen backgroundColor="white">
    <h1 className="text-2xl font-bold mb-4">White Screen Tool</h1>
    <p className="mb-4">
      Our free white screen tool is perfect for display testing or screen cleaning. Whether you’re focusing on work, testing
      your display, or saving power, double-click to go full screen or use arrow keys to switch colors seamlessly.
    </p>
    <h2 className="text-xl font-semibold mb-2">Why Use Our White Screen Tool?</h2>
    <ul className="text-left mb-4 list-disc pl-6">
      <li>Check monitors for dead pixels or defects.</li>
      <li>Clean screens with a bright white display.</li>
      <li>Use as a light source in dark environments.</li>
    </ul>
    <h2 className="text-xl font-semibold mb-2">How to Use</h2>
    <p className="mb-4">
      Double-click anywhere to enter full-screen mode. Use left or right arrow keys to cycle through black, white, red,
      green, blue, and yellow screens for a customized experience.
    </p>
  </ColorScreen>
}

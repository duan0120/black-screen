import ColorScreen from '../components/ColorScreen'

export default function YellowScreen() {
  return <ColorScreen backgroundColor="yellow">
    <h1 className="text-2xl font-bold mb-4">Yellow Screen Tool</h1>
    <p className="mb-4">
      Our free yellow screen tool is perfect for focus or eye relaxation. Whether you’re focusing on work, testing
      your display, or saving power, double-click to go full screen or use arrow keys to switch colors seamlessly.
    </p>
    <h2 className="text-xl font-semibold mb-2">Why Use Our Yellow Screen Tool?</h2>
    <ul className="text-left mb-4 list-disc pl-6">
      <li>Relax eyes with a warm, soft yellow color.</li>
      <li>Enhance focus in creative tasks.</li>
      <li>Test displays with a bright yellow screen.</li>
    </ul>
    <h2 className="text-xl font-semibold mb-2">How to Use</h2>
    <p className="mb-4">
      Double-click anywhere to enter full-screen mode. Use left or right arrow keys to cycle through black, white, red,
      green, blue, and yellow screens for a customized experience.
    </p>
  </ColorScreen>
}

import ColorScreen from '../components/ColorScreen'

export default function BlueScreen() {
  return <ColorScreen backgroundColor="blue">
    <h1 className="text-2xl font-bold mb-4">Blue Screen Tool</h1>
    <p className="mb-4">
      Our free blue screen tool is perfect for focus or eye comfort. Whether you’re focusing on work, testing
      your display, or saving power, double-click to go full screen or use arrow keys to switch colors seamlessly.
    </p>
    <h2 className="text-xl font-semibold mb-2">Why Use Our Blue Screen Tool?</h2>
    <ul className="text-left mb-4 list-disc pl-6">
      <li>Reduce eye strain during long work sessions.</li>
      <li>Enhance focus with a calming blue color.</li>
      <li>Test displays with a solid blue screen.</li>
    </ul>
    <h2 className="text-xl font-semibold mb-2">How to Use</h2>
    <p className="mb-4">
      Double-click anywhere to enter full-screen mode. Use left or right arrow keys to cycle through black, white, red,
      green, blue, and yellow screens for a customized experience.
    </p>
  </ColorScreen>
}

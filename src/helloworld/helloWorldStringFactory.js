export default function createHelloWorldStringCreator (helloStringCreator, worldStringCreator) {
  return {
    getString () {
      return helloStringCreator.getString() + worldStringCreator.getString()
    }
  }
}

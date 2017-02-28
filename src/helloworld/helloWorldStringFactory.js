export default function createHelloWorldStringCreator (helloStringCreator, worldStringCreator, separatorCreator) {
  return {
    getString () {
      return helloStringCreator.getString() + separatorCreator.getString() + worldStringCreator.getString()
    }
  }
}

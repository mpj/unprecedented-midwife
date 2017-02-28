export default function createHelloWorldStringCreator (
  helloStringCreator,
  worldStringCreator,
  separatorCreator,
  spaceStringCreator
) {
  return {
    getString () {
      return [
        helloStringCreator.getString(),
        spaceStringCreator.getString(),
        worldStringCreator.getString()
      ].join(separatorCreator.getString())
    }
  }
}

import createHelloStringCreator from './hello/helloStringFactory'
import createHelloWorldStringCreator from './helloworld/helloWorldStringFactory'
import createSeparatorStringCreator from './separator/separatorFactory'
import createSpaceStringCreator from './space/spaceFactory'
import createWorldStringCreator from './world/worldStringFactory'

function getHelloWorldString () {
  const helloStringCreator = createHelloStringCreator()
  const worldStringCreator = createWorldStringCreator()
  const separatorCreator = createSeparatorStringCreator()
  const spaceStringCreator = createSpaceStringCreator()
  const helloWorldStringCreator = createHelloWorldStringCreator(helloStringCreator, worldStringCreator, separatorCreator, spaceStringCreator)
  return helloWorldStringCreator.getString()
}

export default function helloWorldReducer(state, action) {
  switch(action.type) {
    case 'init':
      return {
        stringName: getHelloWorldString()
      }
    default:
      return state
  }
}

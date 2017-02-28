import createHelloStringCreator from './hello/helloStringFactory'
import createHelloWorldStringCreator from './helloworld/helloWorldStringFactory'
import createWorldStringCreator from './world/worldStringFactory'

function getHelloWorldString () {
  const helloStringCreator = createHelloStringCreator()
  const worldStringCreator = createWorldStringCreator()
  const helloWorldStringCreator = createHelloWorldStringCreator(helloStringCreator, worldStringCreator)
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

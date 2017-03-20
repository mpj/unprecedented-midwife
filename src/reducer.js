export default function helloWorldReducer (state, action) {
  switch (action.type) {
    case 'init':
      return {
        stringName: 'helloWorld'
      }
    default:
      return state
  }
}

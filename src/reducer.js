// @flow
export type State = {
  stringName?: string
}

export type Action = {
  type: 'init'
}

export default function helloWorldReducer(state: State = {}, action: Action) {
  switch(action.type) {
    case 'init':
      return {
        stringName: 'helloWorld'
      }
    default:
      return state
  }
}

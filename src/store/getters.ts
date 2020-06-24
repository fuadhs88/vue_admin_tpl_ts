import { State } from './index'

const getters = {
  appName: (state: State) => {
    return state.app.name
  }
}

export default getters

import { State } from './index'

const getters = {
  appName: (state: State) => {
    return state.app.name
  },
  appMenus: (state: State) => {
    return state.menus.routeList
  },
  roleName: (state: State) => {
    return state.menus.roleName
  }
}

export default getters

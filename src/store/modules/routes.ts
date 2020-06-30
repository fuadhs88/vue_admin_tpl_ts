import { ActionContext } from 'vuex'
import { State } from '..'
import * as systemApi from '@/api/system'
import router from '@/router'
import helper from '@/utils/helper'
import Layouts from '@/views/layouts/main.vue'

export interface routeItem {
  path: string
  name?: string
  component?: any
  components?: any
  alias?: string | string[]
  children?: routeItem[]
  meta?: any
  redirect?: any
  caseSensitive?: boolean
}

export interface RouteState {
  routeList: routeItem[]
  roleName: string
}

const state: RouteState = {
  routeList: [],
  roleName: ''
}

const mutations = {
  SET_MENUS: (state: RouteState, list: routeItem[]) => {
    state.routeList = list
    router.addRoutes(list)
  },
  SET_ROLE_NAME: (state: RouteState, name: string) => {
    state.roleName = name
  }
}

export interface item {}
const actions = {
  getMenus(context: ActionContext<RouteState, State>) {
    let Menus: routeItem[] = []
    systemApi
      .getMenus({})
      .then(resp => {
        if (resp.status !== 0) {
          throw '获取菜单数据失败'
        }

        resp.data.menus.forEach((item: any) => {
          if (item.C.Cdisplay) {
            // 一级菜单
            let CItem: routeItem = {
              path: item.C.Cpath,
              name: item.C.Cname,
              meta: { name: item.C.Cname, ico: item.C.Cstyle },
              component: Layouts,
              redirect: item.C.Cpath + '/index',
              children: []
            }

            let Funcs = item.F
            for (let func in Funcs) {
              let funObj = item.F[func]
              if (funObj.display) {
                // 二级菜单
                let FItem: routeItem = {
                  path: funObj.route,
                  name: funObj.name,
                  meta: { name: funObj.name, ico: funObj.style, requireAuth: false },
                  component: () =>
                    import('@/views/' + item.C.class_name + '/' + helper.strToUpperCase(funObj.fun_path) + '.vue')
                }
                CItem.children?.push(FItem)
              }
            }
            Menus.push(CItem)
          }
        })
        console.log(Menus)

        context.commit('SET_MENUS', Menus)
        context.commit('SET_ROLE_NAME', resp.data.roleName)
      })
      .catch(e => {
        console.log(e)
      })
  }
}
const routes = {
  namespaced: true,
  state,
  mutations,
  actions
}
export default routes

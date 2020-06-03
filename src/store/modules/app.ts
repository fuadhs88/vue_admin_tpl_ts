import { ActionContext } from "vuex";
import { State } from "..";
import * as userApi from "@/api/user"


export interface AppState {
  name: string;
}

const state: AppState = {
  name: "--"
};

const mutations = {
  SET_NAME: (state: AppState, name: string) => {
    state.name = name;
  }
};
export interface UserInfoReqType { 
  id: number
}
const actions = {
  setName(context: ActionContext<AppState, State>, name: string) {
    console.log(name);
    // context.commit("SET_NAME", name);
    // 请求API 成功后设置状态 并修改 Mutations

    const userInfoReq: UserInfoReqType = { id: 1 };

    userApi.getInfo(userInfoReq).then(resp => { 
      
      context.commit("SET_NAME", resp.data.name);
    });

    // return new Promise((resolve, reject) => {
    //   try {
    //     setTimeout(() => {
         
    //       resolve();
    //     }, 1000);
    //   } catch (e) {
    //     reject(e);
    //   }
    // });
  }
};

const app = {
  namespaced: true,
  state,
  mutations,
  actions
};
export default app;

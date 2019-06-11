import Vue from 'vue';
import Vuex from 'vuex';



//Vue.use(VueSocketio, socketio('ws://118.25.136.149:2333/'), store);
Vue.use(Vuex);

const state={
   
    userid:1,  //用户名
    loginin:false,//登录状态
    userName:'yyy',
    
};
const getters={
    getUserid(){
        return state.userid
    },
    getLoginin(){
        return state.loginin
    },
    getUserName(){
        return state.userName
    },
   
};

const mutations={
    changeUserid(state,num){
        state.userid=num;
    },
    changeUserName(state,string){
        state.userName=string;
    },
    changeLoginin(state,boolean){
        state.loginin=boolean;
    }
    
};

const actions={
   
    getNewUserid(context,num){
        context.commit('changeUserid',num)
    },

    getNewLoginin(context,boolean){
        context.commit('changeLoginin',boolean)
    },
    getNewUserName(context,string){
        context.commit('changeUserName',string)
    },
   
};
const store=new Vuex.Store ({
    state,
    getters,
    mutations,
    actions
});
   

export default store;
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  pageTitle: {
    about: 'About',
    contact: 'Contact',
    question: 'question'
  },
  count: 0,
  questions: [
    {
      title: '1',
      values: ['apple', 'orange'],
      show: false
    }
  ],
  buttonValue: 'next'
}

export default new Vuex.Store({
  state,

  // The getter function receives the following arguments:
  // state       will be module local state if defined in a module.
  // getters     same as `store.getters`, module local getters of the current module
  // rootState   global state
  // rootGetters all getters
  getters,

  // The handler function receives a context object that exposes the following properties:
  // context.state       same as `store.state`, or local state if in modules
  // context.rootState   same as `store.state`, only in modules
  // context.commit      same as `store.commit`
  // context.dispatch    same as `store.dispatch`
  // context.getters     same as `store.getters`, or local getters if in modules
  // context.rootGetters same as `store.getters`, only in modules/
  // ex:
  //   actionFnName: (context)=>{}
  actions,

  // Register mutations on the store.
  // The handler function always receives state as the first argument,
  // and receives a second payload argument if there is one.
  // ex:
  //   mutationFnName: (state, payload)=>{}
  mutations

  // An object containing sub modules to be merged into the store.
  // Each module can contain state and mutations similar to the root options.
  // type: object
  // ex:
  //   {
  //     subModeule1: {
  //       state,
  //       mutations,
  //       actions,
  //       getters,
  //       modules
  //     }
  //   }
  // modules

  // An array of plugin functions to be applied to the store.
  // plugins

  // strict: false
  // Force the Vuex store into strict mode.

  // devtools: false
})

// instance properties{{{
// state
// getters
// }}}
// instance methods{{{
// commit
// Commit a mutation.
// Options can have root: true that allows to commit root mutations in namespaced modules.
// ex:
//   commit(type: string, payload?: any, options?: Object)
//   commit(mutation: Object, options?: Object)

// dispatch
// Dispatch an action.Returns a Promise that resolves all triggered action handlers. 
// Options can have root: true that allows to commit root mutations in namespaced modules.
// ex:
//   dispatch(type: string, payload?: any, options?: Object)
//   dispatch(action: Object, options?: Object)

// replaceState
// Replace the store's root state.
// Use this only for state hydration / time-travel purposes.
// ex:
//   replaceState(state: Object)

// watch
// vue の watch と同じ。
// ex:
//   watch(fn: Function, callback: Function, options?: Object): Function

// subscribe
// Subscribe to store mutations.
// The handler is called after EVERY MUTATION and receives the mutation descriptor and post-mutation state as arguments:
// ex:
//   store.subscribe((mutation, state)=>{
//     console.log(mutation.type)
//     console.log(mutation.payload)
//   })

// subscribeAction
// Subscribe to store actions.
// The handler is called for EVERY DISPATCHED ACTION and receives the action descriptor and current store state as arguments:
// ex:
//   store.subscribeAction((action, state)=>{
//     console.log(action.type)
//     console.log(action.payload)
//   })
//   store.subscribeAction({
//     before: (action, state)=>{
//       console.log(`before action ${action.type}`)
//     },
//     after: (action, state)=>{
//       console.log(`after action ${action.type}`)
//     }
//   })

// registerModule
// Register a dynamic module.
// ex:
//   registerModule(path: string | Array<string>, module: Module, options?: Object)

// unregisterModule
// Unregister a dynamic module.
// ex:
//   unregisterModule(path: string | Array<string>)

// hotUpdate
// HOT MODULES REPLACEMENT(HMR) allows all kinds of modules to be updated at runtime without the need for a full refresh.
// Hot swap new actions and mutations.
// ex:
//   hotUpdate(newOptions: Object)
// }}}
// Component Binding Helpers{{{
// mapStates
// mapGetters
// mapActions
// mapMutations

// createNamespacedHelpers
// 名前空間付けられたコンポーネントバインディングのヘルパーを作成する。
// ex:
//   createNamespacedHelpers(namespace: string): Object
// }}}

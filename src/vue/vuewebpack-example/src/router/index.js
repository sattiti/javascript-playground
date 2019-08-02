import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'

Vue.use(Router)

export default new Router({
  // routes
  // properties:
  //   path: string
  //   component?: Component
  //   name?: string                                                for named routes
  //   components?: {[name: string]: Component}                     for named view
  //   redirect?: string | Location | Function
  //   props?: boolean | Object | Function
  //   alias?: string | Array<string>
  //   children?: Array<RouteConfig>                                for nested routes
  //   beforeEnter?: (to: Route, from: Route, next: Function)=>void
  //   meta?: any;
  //   caseSensitive?: boolean
  //   pathToRegexpOptions?: Object                                 path-to-regexp options for compiling regex
  routes: [
    { path: '/about', name: 'about', component: About },
    { path: '/contact', name: 'contact', component: Contact },
  ]
})

// Builtin Components{{{
// <router-link>
// <router-link> is the component for enabling user navigation in a router-enabled app.
// It renders as an <a> tag with correct href by default, but can be configured with the tag prop.
// In addition, the link automatically gets an active CSS class when the target route is active.
// properties:
//   to="string"
//     Denotes the target route of the link.
//     ex:
//       <router-link to="home">Home</router-link>
//       <router-link :to="{path: home, name: 'user'}">Home</router-link>
//   replace="false" 
//     The navigation will not leave a history record.
//   append="false"
//     Always appends the relative path to the current path.
//   tag="a"
//     Use this prop to render another tag what you want.
//   active-class="router-link-active"
//     Configure the active CSS class applied when the link is active.
//   exact="false"
//     To force the link into exact match mode.
//     ex:
//       <!-- this link will only be active at `/` -->
//       <router-link to="/" exact>
//   event="click"
//     Specify the event(s) that can trigger the link navigation.
//   exact-active-class="router-link-exact-active"
//     Configure the active CSS class applied when the link is active with exact match.

// <router-view>
// The <router-view> component is a functional component that renders the matched component for the given path.
// properties:
//   name="default"
//   routes="Array<RouteConfig>"
//   mode="hash(browser) | abstract(nodejs)"
//     hash     Uses the URL hash for routing.
//     history  Requires HTML5 History API and server config.
//     abstract Works in all JavaScript environments
//   base="/"
//     The base URL of the app.
//   linkActiveClass="router-link-active"
//     Globally configure <router-link> default active class.
//   linkExactActiveClass="router-link-exact-active"
//     Globally configure <router-link> default active class for exact matches.
//   scrollBehavior="Function"
//   parseQuery | stringifyQuery="Function"
//   fallback="true"
//     Controls whether the router should fallback to hash mode when the browser does not support history.pushState but mode is set to history.
//
// }}}
// Instance Properites{{{
// router.app
// Vue instance.

// router.mode
// The mode of the router which is using.

// router.currentRouter
// }}}
// Instance Methods{{{
// router.beforeEach((to, from, next)=>{})
// router.beforeResolve((to, from, next)=>{})
// router.afterEach((to, from)=>{})

// router.push(location, onComplete?, onAbort?)
// router.replace(location, onComplete?, onAbort?)
// router.go(n)
// router.back()
// router.forward()

// router.getMatchedComponents(location?)
// router.resolve(location, current?, append?)
// router.addRoutes(routes: Array<RouteConfig>)
// 動的にルートをルーターに追加

// router.onReady(callback, [errorCallback])
// router.onError(callback)

// beforeRouteEnter
// beforeRouteUpdate
// beforeRouteLeave
// }}}
// Router Object{{{
// this.$route
//   path           A absolute string path that equals the path of the current route.
//   params         An dynamic segments and star segments Object.
//   query          An object that contains key/value pairs of the query string.
//   hash           The hash of the current route.
//   fullPath       The full resolved URL including query and hash.
//   matched        An Array containing route records for all nested path segments of the current route.
//   name           The name of the current route.
//   redirectedFrom The name of the route being redirected from.
// }}}

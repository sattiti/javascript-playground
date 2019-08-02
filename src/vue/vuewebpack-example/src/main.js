import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

const vm = new Vue({
  el: '#app',
  store,
  router,

  // Render methods
  // (createElement: () => VNode) => VNode
  //
  // method1
  // template: `<App/>`,
  // components: { App }
  //
  // method2
  render: h=>h(App)

  // renderError
  // (createElement: () => VNode, error: Error) => VNode
  // development モードでのみ動作する。
  // デフォルトの render 関数でエラーが発生した際に、代替となる描画結果を提供する。
})

// instance methods
// Event {{{
// on
// event 設定
// vm.$on(event, callback)
// ex:
//   vm.$on('test', function(e, msg){
//     console.log(msg)
//   })
//   vm.$emit('test', 'hi')

// off
// event 削除
// vm.$off([event, callback])

// once
// 1 回だけ実行する。
// vm.$once(event, callback)

// emit
// trigger
// vm.$emit(eventName, [...args])
// }}}
// lifecycle{{{
// mount
// vm.$mount([elementOrSelector])

// forceUpdate
// 強制的に再描画する。
// vm.$forceUpdate()

// vm.$nextTick([callback])
// callback の処理を遅らせ、DOM が更新された後に呼び出される。
// 実行環境で Promise がサポートされている場合は Promise を返す。

// vm.$destroy()
// vm を完全に破棄する。
// }}}
// directives{{{
// v-text
// 要素の textContent を更新する。
// ex:
//   どちらも同じ動作になる。
//   <span v-text="msg"></span>
//   <span>{{msg}}</span>

// v-html
// innerHTML を更新する。

// v-show
// 式の値の真偽に応じて、表示非表示する。

// v-if
// v-else-if
// v-else

// v-for
// key という特別な属性を使い、要素の順序を強制的に変更させる。
// ex:
//   <div v-for="(item, index) in items" :key="item.id">{{ item.key }}</div>

// v-on | @
// Modifiers:
//   .stop               event.stopPropagation()
//   .prevent            event.preventDefault()
//   .capture            capture mode
//   .self               only trigger handler if event was dispatched from this element.
//   .keyCode | keyAlias only trigger handler on certain keys.
//   .native             listen for a native event on the root element of component.
//   .once               trigger handler at most once.
//   .left               only trigger handler for left button mouse events.
//   .right              only trigger handler for right button mouse events.
//   .middle             only trigger handler for middle button mouse events.
//   .passive            attaches a DOM event with {passive: true}.
// ex:
//  動的イベント
//  <button @[event]="doThis"></button>

// v-bind | :
// Modifiers:
//   .prop  Bind as a DOM property instead of an attribute.
//   .camel transform the kebab-case attribute name into camelCase.
//   .sync  a syntax sugar that expands into a v-on handler for updating the bound value. 
// ex:
//   <img v-bind:src="imageSrc">
//   <button v-bind:[key]="value"></button>
//   <button :[key]="value"></button>
//   <div :class="[classA, { classB: isB, classC: isC }]">
//   <div v-bind="{id: someProp, 'other-attr': otherProp}"></div>

// v-model
// Modifiers:
//   .lazy   listen to change events instead of input
//   .number cast valid input string to numbers
//   .trim   trim input

// v-slot | #
// <template> のみ適応される。

// v-pre
// Skip compilation for this element and all its children.
// You can use this for displaying raw mustache tags.

// v-cloak
// to hide un-compiled mustache bindings until the Vue instance is ready.
// ex:
//   [v-cloak]{display: none} 
//   <div v-cloak>{{ msg }}</div>

// v-once
// Render the element and component once only.
// }}}
// Special Attributes{{{
// ref
// ref is used to register a reference to an element or a child component.
// The reference will be registered under the parent component’s $refs object.
// ex:
//   <p ref="p">hello</p>

// is
// 動的 component と DOM template の制限を回避するために使用する。
// }}}
// Builtin Components{{{
// transition
// properties
//   name                                      Used to automatically generate transition CSS class names.
//   appear                                    Whether to apply transition on initial render. Defaults to false.
//   css                                       Whether to apply CSS transition classes. Defaults to true.
//                                             If set to false, will only trigger JavaScript hooks registered via component events.
//   type                                      Specifies the type of transition events to wait for to determine transition end timing. Available values are transition | animation.
//                                             By default, it will automatically detect the type that has a longer duration.
//   mode                                      Controls the timing sequence of leaving/entering transitions. Available modes are out-in | in-out
//   duration | {enter: number, leave: number} Specifies the duration of transition.
//   enter-class           string
//   leave-class           string
//   appear-class          string
//   enter-to-class        string
//   leave-to-class        string
//   appear-to-class       string
//   enter-active-class    string
//   leave-active-class    string
//   appear-active-class   string
// Events:
//   before-enter
//   before-leave
//   before-appear
//   enter
//   leave
//   appear
//   after-enter
//   after-leave
//   after-appear
//   enter-cancelled
//   leave-cancelled (v-show only)
//   appear-cancelled

// transition-group
// properties:
//   その他は mode を除き、transition の properties と同じ。
//   tag        string, defaults to span.
//   move-class overwrite CSS class applied during moving transition.

// keep-alive
// properties:
//   include string or RegExp or Array. Any component with a matching name will be cached.
//   exclude string or RegExp or Array. Any component with a matching name will not be cached.
//   max     number. The maximum number of component instances to cache.

// slot
// properties:
//   name: 名前付き slot に対して使用される。
// }}}

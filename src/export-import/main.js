'use strict'

// import "MODULE_FILE.js"
// import NAME from "MODULE_FILE.js"
// import * as NAME from "MODULE_FILE.js"
// import { EXPORT } from "MODULE_FILE.js"
// import { EXPORT as ALIAS } from "MODULE_FILE.js"
// import { EXPORT1, EXPORT2 } from "MODULE_FILE.js"
// import { EXPORT1, EXPORT2 as ALIAS2 } from "MODULE_FILE.js"
// import NAME, * as NAME from "MODULE_FILE.js"
// var P = import(MODULE_FILE.js)

import { default as u } from './defaultExport.js'
u.test()

// 上と同じ
import u2 from './defaultExport.js'
u2.action()

// function だけインポート
import { getAge } from './namedExport.js'
console.log(getAge())

// class
import Animal from './classExport.js'
const a = new Animal('dog')
console.log(a.getName())

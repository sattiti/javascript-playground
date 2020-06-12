'use strict'

// array {{{
var nums = [3, 8, 9349, 32, 82, 1, 77, 20]

// asc
nums.sort((a, b)=>{
  if(a > b) return 1
  if(a < b) return -1
  return 0
})
console.log(`Asc: ${nums}`)

// desc
nums.sort((a, b)=>{
  if(a > b) return -1
  if(a < b) return 1
  return 0
})
console.log(`Desc: ${nums}`)
// }}}
// object {{{
const products = [
  {name: 'a', price: 10, cost: 90},
  {name: 'b', price: 10, cost: 10},
  {name: 'c', price: 2100, cost: 80},
  {name: 'd', price: 300, cost: 290},
  {name: 'e', price: 800, cost: 770},
  {name: 'f', price: 200, cost: 1000},
  {name: 'g', price: 120, cost: 990},
  {name: 'h', price: 94, cost: 920}
]

// Asc
products.sort((a, b)=>{
  if(a.price > b.price) return 1
  if(a.price < b.price) return -1
  if(a.cost > b.cost) return 1
  if(a.cost < b.cost) return -1
  return 0
})
console.log('Asc:')
console.log(products)

// Desc
products.sort((a, b)=>{
  if(a.price > b.price) return -1
  if(a.price < b.price) return 1
  if(a.cost > b.cost) return -1
  if(a.cost < b.cost) return 1
  return 0
})
console.log('Desc:')
console.log(products)
// }}}

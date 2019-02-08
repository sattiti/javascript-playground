fs       = require 'fs'
os       = require 'os'
path     = require 'path'
readline = require 'readline'

file = './FILEFILE'
rs   = fs.createReadStream file
rl   = readline.createInterface {input: rs, output: {}}

rl.on 'line', (line)->
  console.log line.trim()

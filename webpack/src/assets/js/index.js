import Post from "./Post"
import json from '../json.json'
import xml from '../file.xml'
import csv from '../transactions.csv'
import Logo from '../logo.png'
import '../css/styles.css'
import test from "@other_dir/test" // алиас пути в webpack.config.js
import * as $ from 'jquery'

const post = new Post('Пост #1', Logo)
console.log(post)
console.log(post.toString())
console.log(json)
console.log(xml)
console.log('csv', csv )
test()

$('pre').html(post.toString())

// Lazy loading
import('lodash').then(({ default: _ }) => {
    console.log('lodash', _.random(0, 28, true))
})
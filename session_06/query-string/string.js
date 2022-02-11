const url = require('url')
const queryString = require('querystring')

let rawUrl = "https://stackabuse.com/?page=2&limit=3"

let parsedUrl = url.parse(rawUrl)
let parsedQs = queryString.parse(parsedUrl.query)

console.log('Page: ' + parsedQs.page)
console.log('Limit: ' + parsedQs.limit)

// var https = require('https')
// var fs = require('fs')
//
// var options = {
//   key: fs.readFileSync('./ssl/default.key'),
//   cert: fs.readFileSync('./ssl/default.cer')
// }
//
// https.createServer(options, function(req, res) {
//   res.writeHead(200)
//   res.end('Hello Node')
// })
//   .listen(8090)

var http = require('http')
var Promise = require('bluebird')
var cheerio = require('cheerio')
var url = 'http://www.imooc.com/view/401'

function filterChapters(html) {
  var $ = cheerio.load(html)
  var chapters = $('.chapter')
  var courseData = []

  chapters.each(function(item) {
    var chapter = $(this)
    var chapterTitle = chapter.find('.name').text()
    var chapterDesc = chapter.find('.desc').text()
    var chapterData = {
      chapterTitle: chapterTitle,
      chapterDesc: chapterDesc
    }
    courseData.push(chapterData)
  })
  return courseData
}

function printCourseDataInfo(courseData) {
  courseData.forEach(function(item, key) {
    var chapterTitle = item.chapterTitle
    var chapterDesc = item.chapterDesc

    console.log('课程名：' + chapterTitle + '\n' + '课程描述:' + chapterDesc);
  })
}

function getPageAsync(url) {
  return new Promise(function(resolve, reject) {
    console.log('正在爬取' + url);

    http.get(url, function(res) {
      var html = ''

      res.on('data', function(data) {
        html += data
      })

      res.on('end', function() {
        resolve(html)
      })
    }).on('error', function(e) {
      reject(e)
      console.log('获取课程数据出错');
    })
  })
}

getPageAsync(url)
  .then(function(html) {
    // console.log();
    var courseData = filterChapters(html)
    printCourseDataInfo(courseData)
  })

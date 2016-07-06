var http = require('http')
var cheerio = require('cheerio')
let url = 'http://www.imooc.com/view/401'

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

http.get(url, function(res) {
  var html = ''

  res.on('data', function(data) {
    html += data
  })

  res.on('end', function() {
    var courseData = filterChapters(html)
    printCourseDataInfo(courseData)
  })
}).on('error', function() {
  console.log('获取课程数据出错');
})

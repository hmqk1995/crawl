module.exports = function(html) {
  var cheerio = require('cheerio');
  var $ = cheerio.load(html);

  var name = $('input[name=realname]').val(),
      major = $('#majorChange').text(),
      grade = $('#gradeChange').text();

      return {
        name: name,
        major: major,
        grade: grade
      };
};

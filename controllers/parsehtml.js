var cheerio = require('cheerio');

module.exports = function(html) {
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

module.exports.score = function(html) {
  var $ = cheerio.load(html);

  var table = $('table.datalist').html();
  return table;
};

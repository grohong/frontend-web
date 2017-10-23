var tredingUrl = 'http://1boon.kakao.com/ch/trending.json';
var pagesize = 10;
var page = 1;

var url = tredingUrl + '?pagesize=' + pagesize + '&page=' + page;
getJSON(url, done);

function done(result) {
  console.log(result);
}

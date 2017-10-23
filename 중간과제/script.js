var tredingUrl = 'http://1boon.kakao.com/ch/trending.json';
var pagesize = 10;
var page = 1;

var list = document.getElementById('list');

var url = tredingUrl + '?pagesize=' + pagesize + '&page=' + page;
getJSON(url, done);

//callback 함수
function done(result) {
  console.log(result.data);
  var data = result.data;

  for (var i=0; i<data.length; i++) {
    listGenerate(data[i].path, data[i].coverImage, data[i].title, data[i].totalView);
  }
}

//리스트 모델 함수
function listGenerate(link, imageUrl, title, viewCount) {
  //링크추가
  var listElement = document.createElement('a');
  listElement.setAttribute("class", "listElement");
  var linkUrl = "http://1boon.kakao.com/" + link;
  listElement.setAttribute("href", linkUrl);

  //이미지 추가
  var elementImage = document.createElement('span');
  var image = document.createElement('img');
  elementImage.setAttribute("class", "elementImage");
  image.setAttribute("src", imageUrl);
  elementImage.appendChild(image);

  listElement.appendChild(elementImage);

  //타이틀 추가
  var elementTitle = document.createElement('span');
  elementTitle.setAttribute("class", "elementTitle");
  elementTitle.innerHTML = title;

  listElement.appendChild(elementTitle);

  //조회수 추가
  var elementView = document.createElement('span');
  elementView.setAttribute("class", "elementView");
  elementView.innerHTML = viewCount + "명이 봤어요";

  listElement.appendChild(elementView);
  list.appendChild(listElement);
}

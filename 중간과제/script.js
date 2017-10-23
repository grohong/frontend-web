var tredingUrl = 'http://1boon.kakao.com/ch/trending.json';
var pagesize = 10;
var page = 1;

var list = document.getElementById('list');

var url = tredingUrl + '?pagesize=' + pagesize + '&page=' + page;
getJSON(url, done);

//callback 함수
function done(result) {
  console.log(result);
}

//리스트 모델 함수
function listGenerate() {
  var listElement = document.createElement('a');
  listElement.setAttribute("class", "listElement");

  //이미지 추가
  var elementImage = document.createElement('span');
  var image = document.createElement('img');
  elementImage.setAttribute("class", "elementImage");
  image.setAttribute("src", "http://t1.daumcdn.net/liveboard/AUCTIONTourShop/78119d3f39f8421b8301809ed2400d4c.jpg");
  elementImage.appendChild(image);

  listElement.appendChild(elementImage);

  //타이틀 추가
  var elementTitle = document.createElement('span');
  elementTitle.setAttribute("class", "elementTitle");
  elementTitle.innerHTML = "타이틀";

  listElement.appendChild(elementTitle);

  //조회수 추가
  var elementView = document.createElement('span');
  elementView.setAttribute("class", "elementView");
  var viewCount = 300
  elementView.innerHTML = viewCount + "명이 봤어요";

  listElement.appendChild(elementView);
  list.appendChild(listElement);
}

listGenerate();

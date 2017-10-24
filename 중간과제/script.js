//전역 변수 지정
var pagesize = 10;
var page = 1;


//카테고리 url설정
var trendingUrl = 'http://1boon.kakao.com/ch/trending.json';
var issueUrl = 'http://1boon.kakao.com/ch/issue.json';
var enterUrl = 'http://1boon.kakao.com/ch/enter.json';
var currentCategory;

//dom
var list = document.getElementById('list');
var loder = document.getElementById('loder');

var trending = document.getElementById('trending');
var issue = document.getElementById('issue');
var enter = document.getElementById('enter');

//이벤트 설정
trending.addEventListener('click', selectCategory);
issue.addEventListener('click', selectCategory);
enter.addEventListener('click', selectCategory);

//첫 페이지 로딩(trending 시작), 현재 보여주는 url 지정
var url = trendingUrl + '?pagesize=' + pagesize + '&page=' + page;
getJSON(url, done);
currentCategory = trending


//callback 함수
function done(result) {
  var data = result.data;

  for (var i=0; i<data.length; i++) {
    listGenerate(data[i].path, data[i].coverImage, data[i].title, data[i].totalView);
  }

  //로딩중 삭제
  loder.style.visibility = "hidden";
}

function selectCategory(event) {

  //.acitve 버튼 찾기
  if(event.path[1].getAttribute('class') == null) {

    //.acitve 설정
    currentCategory.removeAttribute('class');
    currentCategory = event.path[1];
    currentCategory.setAttribute('class', 'active')

    //active 계시물 삭제
    var index = list.children.length;
    for(var i=0; i<=index; i++) {
      list.removeChild(list.childNodes[0]);
    }


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

//더보기 버튼
function addPage() {
  page++;
  url = tredingUrl + '?pagesize=' + pagesize + '&page=' + page;
  //로딩중
  loder.style.visibility = "visible";
  getJSON(url, done);
}

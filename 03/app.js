// var log = document.getElementById('log');
// console.log(log);
// log.innerHTML = '안녕';

// var log = document.getElementById('log');
// console.log(log);
//
// // var a = document.querySelectorAll('#log a');
// // console.log(a.length, a[0], a[1])
//
// var div = document.createElement('div');
// div.style.border = "1px solid red";
// div.innerHTML = "hello!!";
//
//
// document.body.appendChild(div);
//
//
// log.innerHTML += '<div style="color:red">hello</div>';

// window.addEventListener('load', function(){
//     alert("load");
// });
//
// window.addEventListener('load', function(){
//     console.log('log2')
// });
//
//
// var log = document.getElementById('log');
// log.addEventListener('click', function(){
//   console.log('log click!!!');
// })
//
//
// function printLog(event){
//   console.log('click');
//   debugger;
// }


var divs = document.querySelectorAll('#wrap div');

//console.log(divs);

function changeBy(event){
  console.log('changeBy')

  //divs[0].style.backgroundColor = 'blue';
  //console.log(event.currentTarget);
  event.currentTarget.style.backgroundColor = 'blue';
}

divs[0].addEventListener('click', changeBy)


for(var i=0; i<6; i++) {
  divs[i].addEventListener('click', changeBy)
}

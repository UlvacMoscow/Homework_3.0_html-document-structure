const sliderNav = document.getElementsByClassName('slider-nav')[0];
let prevSlide = sliderNav.querySelector('[data-action="prev"]');
let nextSlide = sliderNav.querySelector('[data-action="next"]');
let firstSlide = sliderNav.querySelector('[data-action="first"]');
let lastSlide = sliderNav.querySelector('[data-action="last"]');
let parentSlide = document.querySelector('.slides');
const allSlide = document.getElementsByTagName('img');




parentSlide.firstElementChild.classList.add('slide-current');
firstSlide.classList.add('disabled');
prevSlide.classList.add('disabled');


//как я вижу выполнение программы, но пока не пойму как это реализовать. Я объявил всю навигацию
//*Slide. Обозначив начальное состояние disabled.
//При нажатие на кнопку следующий, disabled уходят, если нажата последний слайд, то вешаем disabled.
//И вот у меня завтык в том, как мне определить на какой я картинки, вывел allSlide, по нему я типа буду ориентироваться
// Но мне нужен счетчик чтобы сравниваться на какой я картинке, я не пойму как счетчик реализовать.
//Я нашел другой код, даже два, но там очень запутанно, и логика не ясна мне, я не могу понять что они там делают.
//https://github.com/BigDaddys/hj_11_homeworks/blob/master/html-document-structure/slider/js/slider.js  и вопрос что он вообще на первой строчке делает?
// а с 23 по 26 строчку я скопировал, но что он хотел сделать, я не понял. можете пояснить?
//вы поняли что я хотел сделать? Или так нельзя?

sliderNav.addEventListener('click', (event) => {
  console.log('1111', event)
  if(event.target.classList.contains('disabled')) {
    return;
  }

})

console.log(parentSlide.firstElementChild);
console.log(allSlide.length);
console.log(sliderNav);
console.log(prevSlide);
console.log(lastSlide);



function checkDisableSlide()  {

}

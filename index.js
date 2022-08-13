let sky = document.getElementById('sky');
let sun = document.getElementById('sun');
let mountains_behind = document.getElementById('mountains_behind');
let intro_text = document.getElementById('intro_text');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
  let value = window.scrollY;
  sky.style.left = value * 0.50 + 'px';
  sun.style.top = value * 1 + 'px';
  mountains_behind.style.top = value * 0.2 + 'px';
  mountains_front.style.top = value * 0 + 'px';
  intro_text.style.marginTop = value * 1.5 + 'px';
  btn.style.marginTop = value * 1.5 + 'px';
  header.style.top = value * 0.5 + 'px';
})
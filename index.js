/*
сначала мы делаем переменные на наши классы с которыми мы будем взаимодействовать
*/
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');

/* тут мы делаем переменную с ссылками из меню ".nav__link" , выбираем все элементы с помощью метода "querySelectorAll"*/
let menuLinks = menu.querySelectorAll('.nav__link');


/*
потом мы создаем событие, что когда происходит клик на данный класс, то происходит следующее действие, которое указанно в функции:
*/
burger.addEventListener('click',
function() {

    /*
мы используем метод classList.toggle - он используется чтобы включать и выключать класс, в общем работает как выключатель. Тут мы указываем класс который нужно добавлять при клике и убирать при повторном клике
*/
burger.classList.toggle('burger--active');


menu.classList.toggle('header__nav--active');

document.body.classList.toggle('stop-scroll');
// добавляет остановку скрола, когда открывается выпадающее меню
});

//Тут мы делаем так чтобы после нажатии на кнопку меню, само меню закрывалось.До этого мы сделали новую переменную "let menuLinks = menu.querySelectorAll('.nav__link');".  Сначала мы используем метод .forEach и добавляем туда функцию и называем ее( в данном случае "el", далее внутри этой функции "el" мы создаем событие при клике и делаем функцию "el.addEventListener('click', function()" , потом убираем классы с помощью метода "classList.remove" )
menuLinks.forEach(function(el) {
    el.addEventListener('click', function() {

        burger.classList.remove('burger--active');

        menu.classList.remove('header__nav--active');

        document.body.classList.remove('stop-scroll');
        // убирает остановку скрола, после того как меню пропадает
    });
});





const btnMore = document.querySelector('.articles-more');
const articlesItems = document.querySelectorAll('.articles__item');

btnMore.addEventListener('click', () => {
    articlesItems.forEach(el => { el.classList.add('articles-item--visible') });
    // btnMore.closest('.articles-center').classList.add('articles-center--hidden');
});
    


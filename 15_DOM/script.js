// BOM
// API
// DOM


// BOM => Browser Object Model
// объектная модель браузера


// API => application programming interface
// набор правил, с помощью которых одна программа общается с другой 
// одна программа использует функции, которые предоставлены во вне другой программой


// DOM => Document Object Model
// объектная модель документа
// стандартизирован



// ----------------------------------------
// ВOM
// нет единого стандарта
// взаимодействие с браузером



// window
// navigator
// history
// location
// screen
// document 



// window => самый главный объект в браузере
// отвечает за вкладку, является корневым объектом
// у него глобальная область видимости
// если открыть несколько вкладок, то будет создано соответст. кол-во объектов window
// console.log(window);





// navigator => информационный объект
// инфо о браузере, о языке, версия, местоположение и т.д.

// console.log(navigator);
// console.log(window.navigator);


// geolocation
// определить местоположение

// const geo = navigator.geolocation;

// function success(position) {
//     console.log(position);
//     const lat = position.coords.latitude;
//     const long = position.coords.longitude;
//     console.log(`Широта:${lat}`);
//     console.log(`Долгота:${long}`);
// }
// geo.getCurrentPosition(success)

// console.log(geo);




// history => история переходов
// отвечает за кнопки

// console.log(history);



// location
// адресная строка

// console.log(location);



// screen => информация об экране пользователя


// console.log(screen);




// document

// console.log(document);


// document.title = 'My title from js'

// const title = document.title;
// console.log(title);

// console.log(document.body);

// .write => вывод строки в документ
// document.write('text test')



// родитель - может быть только один, у узла может не быть родителя
// дети, дочерние узлы - те элементы, которые расположены в родителе 
// сиблинги - братья и сестры, они имеют такого же родителя




// поиск элементов 
// document.
// querySelector() => позволяет получить элемент на странице по селектору

// querySelectorAll => получить все элементы на странице по селектору
// const header = document.querySelectorAll('#list li');

// console.log(header);




// getElementById() => поиск элемента по ID
// const elem = document.getElementById('list')
// console.log(elem);

// getElementsByClassName() => поиск элемента по имени класса
// const elem = document.getElementsByClassName('main_header')
// console.log(elem);


// getElementsByTagName() => поиск элемента по тегу
// const elem = document.getElementsByTagName('li')
// console.log(elem);


// getElementsByName() => поиск элемента по атрибуту name
// const elem = document.getElementsByName('test')
// console.log(elem);


// const elem = document.querySelectorAll(`li:nth-child(2n+1)`);
// console.log(elem);


// const divWithButtons = document.getElementById('buttons_block');
// const buttons = divWithButtons.querySelectorAll('.btn');
// console.log(buttons);
// console.log(buttons.length);
// console.log(buttons[0]);

// buttons[0].style.backgroundColor = 'green'
// buttons[0].style.marginBottom = '100px'

// function test() {
//     console.log('works');
// }

// buttons.forEach((button) => {
//     console.log(button);
//     button.addEventListener('click', test)
// })

// const input = document.querySelector('[type = "submit"]')
// console.log(input);

// matches
// closest
// contains




// matches - проверяет, соответствует ли элемент указаному селектору
// true/false

// const elem = document.getElementById(`main`)

// console.log(elem.matches('p.paragraph'));
// console.log(elem.matches('h1.paragraph'));


// closest - поиск ближайшего предка по селектору

// const elem = document.querySelector('.third');
// const closestFirst = elem.closest('.first')
// console.log(closestFirst);


// contains - проверяет, содержит ли данный узел другой узел в качестве потомка
// true/false

// const elem1 = document.querySelector('.first')
// const elem3 = document.querySelector('.third')
// const out = document.querySelector('.out')

// console.log(elem1.contains(elem3));
// console.log(elem1.contains(out));

// id, style, className

// const elem = document.querySelector('.first')
// console.log(elem.id);
// console.log(elem.style);
// console.log(elem.className);





// DOM
// children - список дочерних узлов
// parentElement - родительский элемент
// previousElementSibling,nextElementSibling - получить предыдущего или следующего соседа

// console.log(elem.children);
// console.log(elem.parentElement);

// console.log(elem.previousElementSibling);
// console.log(elem.nextElementSibling);

// const btn = document.querySelector('.button')


// textContent - возвращает только текст всех вложенных узлов без html
// innerHTML - возвращает html всего, что вложено в элемент
// outerHTML - возвращает HTML текущего элемента и всего, что вложено

// console.log(btn.textContent);
// console.log(btn.innerHTML);
// console.log(btn.outerHTML);


// btn.textContent = 'Новый текст из JS'
// // btn.innerHTML = `
// // <div id="buttons_block" style="border: 1px solid orange">
// //     <h2>Block with buttons</h2>
// //     <button class="btn">Button 1</button>
// //     <button class="btn">Button 2</button>
// // </div>
// // `
// btn.outerHTML = `
// <div id="buttons_block" style="border: 1px solid orange">
//     <h2>Block with buttons</h2>
//     <button class="btn">Button 1</button>
//     <button class="btn">Button 2</button>
// </div>
// `




// Модификация DOM



// как создать элемент:

// createElement(tag)

// const link = document.createElement('a');

// link.textContent = 'new page'

// link.href = '#'

// link.id = 'myLink'

// link.className = 'link'

// console.log(link);


// const myDiv = document.querySelector('.test');

// append() - добавляет элементы в конец ноды
// prepend() - добавляет элементы в начало ноды
// before() - добавляет элементы снаружи до нода
// after()- добавляет элементы снаружи после нода
// replaceWith() - заменяет нод на наш элемент

// myDiv.append(link)
// myDiv.prepend(link)
// myDiv.before(link)
// myDiv.after(link)
// myDiv.replaceWith(link)



// insertAdjacentHTML(where, what)
// insertAdjacentText(where, what)
// insertAdjacentElement(where, what)


// where
//'afterbegin' - добавляет элемент сразу после открывающего тега
// 'afterend' - добавляет элемент сразу после закрывающего тега
// 'beforebegin' - добавляет элемент до открывающего тега
// 'beforeend' - добавляет элемент до закрывающего тега



// myDiv.insertAdjacentHTML('afterbegin', '<span>CONTENT</span>');
// myDiv.insertAdjacentText('afterend', '<span>CONTENT</span>');
// myDiv.insertAdjacentElement('beforeend', link);



// удалить элемент
// remove()

// myDiv.remove();



// клонировать узел
// cloneNode(true/false)
// true - глубокая копия - вместе с дочерними элементами
// false - неглубокая копия

// const clone = myDiv.cloneNode(true);
// const clone2 = myDiv.cloneNode(false);

// console.log(clone);
// console.log(clone2);



// appendChild()
// insertBefore()
// removeChild()
// replaceChild()


// hasAttribute() - проверить наличие => true/false
// getAttribute() - получить значение => true/false
// setAttribute() - установить аттрибут со значением
// removeAttribute() - удалить


// console.log(myDiv.hasAttribute('some'));
// console.log(myDiv.getAttribute('some'));
// console.log(myDiv.setAttribute('any', 'standard'));
// console.log(myDiv.removeAttribute('some'));





// стили

// const userFontSize = prompt('Введите размер шрифта:');

// const pattern = /[a-z]/gi;
// const newStr = userFontSize.replace(pattern,'')

const div = document.querySelector('.test');

// div.style.color = 'yellow';

// div.style.fontSize = `${newStr}px`;


// const currentClass = div.className;
// div.className = `${currentClass} class_from_js`;
// console.log(currentClass);


// classList
// add() - добавляет класс
// remove() - удаляет класс
// contains() - проверяет наличие класса (true/false)
// toggle() - переключатель классов. Если класс есть, он его удалит, если класса нет, то он его добавит


// div.classList.add('active');
// div.classList.remove('test');

// const isClassExists = div.classList.contains('test')
// console.log(isClassExists);

// div.classList.toggle('test')
// div.classList.toggle('test')




// События


// onclick 
// 'click'


const input = document.querySelector('.inp');

// input.onclick = function() {
//     console.log('input click');
// }
// input.onclick = function() {
//     console.log('one more click');
// }

// input.oninput = function() {
//     console.log('Ввод текста');
// }

// input.onchange = function() {
//     console.log('change');
// }
// input.onfocus = function() {
//     console.log('focus');
// }
// input.onblur = function() {
//     console.log('blur');
// }
// input.onmousemove = function() {
//     console.log('move');
// }
// input.onmouseenter = function() {
//     console.log('enter');
// }
// input.onmouseleave = function() {
//     console.log('leave');
// }
// input.onkeydown = function() {
//     console.log('key pressed');
// }
// input.onmouseleave = function() {
//     console.log('leave');
// }
// input.onmouseleave = function() {
//     console.log('leave');
// }

// function keyDownHandler() {
//     console.log('key pressed');
// }

// input.onkeydown = keyDownHandler;



// addEventListener(event, handler)
// removeEventListener(event, handler)

// function clickHandler() {
//     console.log('click');
// }


// input.addEventListener('click', clickHandler)


// input.addEventListener('click', () => {
//     console.log('another click');
// })
// input.removeEventListener('click', clickHandler)



// event - объект события

// function clickHandler(event) {
//     console.log(event.data);
// }
// input.addEventListener('input', clickHandler)

// document.oncontextmenu = function() {
//     return false
// }
// document.onselectstart = function() {
//     return false
// }
// document.onkeydown = function(e) {
//     if(e.key === 'F12') {
//         return false
//     }
// }
// document.addEventListener('contextmenu', () => {
//     console.log('click');
// })










// делегирование
// всплытие, погружение
// target, currentTarget
// data-* attr
// stopProgation()
// preventDefault()





















// CRP
// критический путь рендеринга





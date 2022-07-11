// Контекст === this - это всегда объект перед точкой.

// Контекст - это объект в рамках которого вызывается функция.

// this - вычисляется во время вызова функции.
// У Стрелочной функции нет своего this, он берется из родительской области видимости.

// Функция-конструктор - это обычная функция. Но есть два соглашения:
// - Имя функции-конструктора должно начинаться с большой буквы.
// - Функция-конструктор должна вызываться при помощи оператора `new`.

// Область видимости отвечает за доступность переменных.

// Область видимости (ОВ) создается в момент вызова функции.

// Замыкание - это функция у которой есть доступ к переменным за пределами своей ОВ.

// Виды Областей Видимости:
// - глобальная
// - функция
// - блок кода (выражение if, циклы for и др., везде где можно поставить фигурные скобки кроме скобок означающих создание объекта)
// - модуль

// Hoisting - это процесс присвоения переменным дефолтного значения на стадии компиляции.
//  Для переменных объявленных с помощью var значение будет undefined,
// а для функции декларации сохраняются в память полностью.

// Лексическое окружение - это теоретическая концепция, указание того где искать переменные.
//  А области видимости являются ее практической реализацией.

// Для простоты: Лексическое Окружение === Область видимости === Scope

/// DOM <<<<<

// document.querySelector('.class/id');
// document.querySelectorAll('.class/id/');

// .value
// .className
// .classList
// .dataset
// .style
// .attributes
// .setAttribute()

// const liEl = document.createElement('li'); // создаем элем

// liEl.textContent = ' 7 elem'; // < задаем текст
// // liEl.innerText = '7 elem'; // < не юзаем

// ul.append(liEl); // добавляет в конец
// ul.prepend(liEl); // добавляет в начало

// // liEl.remove();  < удаление элема
// // liEl = null;    < связка  с удалением

// button.addEventListener('click', onButtonClick);
// function onButtonClick() {
// 	document.querySelector('#btn').textContent = 'Clicked';
// }

//// OOP
// const person = {
// 	name: 'John',
// 	sayHi: function () {
// 		console.log(`Hi ${this.name}`);
// 	},
// 	// короткая запись метода
// 	sayBye() {
// 		console.log(`Bye ${this.name}`);
// 	},
// };

// person.sayHi();

// function sayHi() {
// 	return this;
// }
// console.log(sayHi()); // this вернет Window - это логическая ошибка JS, нужно использовать use strict.

// function Rabbit(name, color, maxSpeed, eats) {
// 	this.name = name;
// 	this.color = color;
// 	this.maxSpeed = maxSpeed;
// 	this.eats = eats;

// 	this.sayName = function () {
// 		console.log(`My name is ${this.name}`);
// 	};
// 	this.run = function () {
// 		console.log(`I am running with speed ${this.maxSpeed}`);
// 	};
// }

// const rabbit = new Rabbit('Bob', 'white', 8, true);
// const rabbit2 = new Rabbit('Jessika', 'brown', 17, true);
// const rabbit3 = new Rabbit('Eric', 'red', 37, false);

// console.log(rabbit.run());

// // как работает оператор new
// function Rabbit(name) {
// 	// this = {}; (неявно)
// 	// добавляет свойства к this
// 	this.name = name;
// 	// return this; (неявно)
// }

// Функциональный подход с использованием областей видимости
// function counter() {
// 	let counts = 0;
// 	return {
// 		inc: () => ++counts,
// 	};
// }

// const counter1 = counter();
// const counter2 = counter();

// OOP
// function Counter() {
// 	this.counts = 0;

// 	this.inc = function () {
// 		this.counts += 1;
// 	};
// }

// const counter3 = new Counter();

// counter3.inc();
// counter3.inc();
// counter3.inc();
// counter3.inc();

// console.log(counter3.counts);

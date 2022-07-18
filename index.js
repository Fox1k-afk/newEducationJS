// Наследование - это механизм позволяющий создать новый объект на основе уже существующего,
// при этом свойства и функциональность родительского объекта заимствуются новым объектом.

// Полиморфизм - мы можем поменять имплементацию у наследников

// Инкапсуляция - это сокрытие реализации.

// - Т.е. мы скрываем часть логики как работает наше приложение для того чтобы убрать сложность,
// чтоб для того кто будет использовать наш клас не задумывался о внутреннем устройстве.

// - Другая причина чтобы никто не смог к нам внедрится и что-то сломать.

// контекст === this === объект в рамках которого вызывается ф.

// данные - храним в объекте
// методы - храним в прототипе

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

//
//
//
//
//
//
//
//
//
//
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

//
//
//
//
//
//
//
//
//
//

////////////// OOP
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
//
//
//
//
//
//
/////////////////////// КЛАССЫ
// class Person {
// 	role = 'guest';

// 	constructor(name, role) {
// 		this.name = name;

// 		if (role) {
// 			this.role = role;
// 		}
// 	}

// 	sayHi() {
// 		console.log('Tratata');
// 	}
// 	['say' + 'Hi2']() {
// 		console.log('Tratata');
// 	}

// 	get name() {
// 		console.log(`Getter was called`, this._name);
// 		return this._name;
// 	}

// 	set name(value) {
// 		console.log(`Setter was called`, this._name);

// 		if (typeof value === 'string') {
// 			this._name = value;
// 		}
// 	}
// }

// const john = new Person('John');

//.. статический метод

// class Article {
// 	static FORMAT = {
// 		text: 'bold',
// 		color: 'red',
// 	};

// 	constructor(format) {
// 		this.format = format;
// 	}

// 	publish() {
// 		console.log(this.FORMAT);
// 	}

// 	static publish2() {
// 		console.log(Article.FORMAT);
// 	}
// }

// const article = new Article();

// article.publish();

// Article.publish2();

//.. наследование Классов

// class Vehicle {
// 	setColor(color) {
// 		this.color = color;
// 	}
// }

// class Car extends Vehicle {
// 	constructor(isLightOn) {
// 		super();
// 		this.isLightOn = isLightOn;
// 	}
// }

// const car = new Car();

// car.setColor('red');

// console.log(car.color);

// class Vehicle {
// 	constructor(color) {
// 		this.color = color;
// 	}

// 	setColor(color) {
// 		this.color = color;
// 	}
// }

// class Car extends Vehicle {
// 	constructor(color, isLightOn) {
// 		super(color);
// 		this.isLightOn = isLightOn;
// 	}
// }

// class Airplane extends Vehicle {}

// const car = new Car('red', true);
// const airplane = new Airplane('green');

// console.log(car);
// console.log(airplane);

//.. Приватные свойства

// class Calculator {
// 	#base;
// 	constructor(base) {
// 		this.#base = base;
// 	}
// 	add(num) {
// 		if (!isNaN(num)) {
// 			this.#base += num;
// 		}
// 	}
// }

// const calc = new Calculator(10);
// calc.add(10);

//
//
//
//
//
//////////////////////////////////// OOP с ютуба
// let a = {
// 	text: 'Hello',
// 	color: 'red',
// 	bold: 'true',
// 	show: function () {
// 		console.log(this.color);
// 	},
// };

// let b = {
// 	fontSize: '24px',
// 	__proto__: a,
// };

// let c = {
// 	fontFamily: 'Verdana',
// 	__proto__: b,
// };

// console.log(c);
// console.log(c.bold);
// console.log(c.hasOwnProperty('fontFamily'));

// let user = {
// 	login: '',
// 	password: '',
// 	validatePassword: function () {
// 		if (this.password.length > 6) {
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	},
// };

// user.password = 'hello123';
// console.log(user.validatePassword());

// let user_profile = {
// 	username: '',
// 	photo: '',
// 	age: 0,
// 	__proto__: user,
// };

// user_profile.age = 25;
// user_profile.username = 'Pupkin';
// console.log(user_profile);

//.. Классы
// class User {
// 	constructor(username, password) {
// 		this.username = username;
// 		this.password = password;
// 	}
// 	validatePassword() {
// 		console.log('work parent pass');
// 		if (this.password.length > 6) {
// 			return true;
// 		}
// 		return false;
// 	}
// }

// let a = 'Ivan';
// let b = '77777757';

// const person = new User(a, b);
// console.log(person);
// console.log(person.username);
// console.log(person.validatePassword());

// class Student extends User {
// 	constructor(username, password, nickname) {
// 		super(username, password);
// 		this.nickname = nickname;
// 	}
// 	getStudentCourses() {
// 		return [1, 2];
// 	}
// 	validatePassword() {
// 		super.validatePassword();
// 		if (this.password.length > 10) {
// 			return true;
// 		}
// 		return false;
// 	}
// }

// let firstStudent = new Student(a, b, 'Fox1k');
// console.log(firstStudent);
// console.log(firstStudent.getStudentCourses());
// console.log(firstStudent.validatePassword());

//
//
// class User {
// 	constructor(name) {
// 		this.name = name;
// 	}
// 	sayHello() {
// 		console.log(this.name + ' Hello ');
// 		return this.name;
// 	}
// }

// const alex = new User('Alex');
// console.log(alex);

// class Person extends User {
// 	constructor(name, email) {
// 		super(name);
// 		this.email = email;
// 	}
// 	sayHello() {
// 		console.log(super.sayHello());
// 		console.log(this.email);
// 	}
// }

// const li = new Person('li', 'li@email.ua');
// console.log(li.sayHello());
//
//
//
// class User {
// 	sayHello() {
// 		console.log(this.name + ' Hello ');
// 		return this.name;
// 	}
// }

// const alex = new User();
// console.log(alex.sayHello());

// class Person extends User {
// 	constructor(name) {
// 		super();
// 		this.name = name;
// 	}
// }

// const li = new Person('lu');
// console.log(li);
//
//
// //
// class User {
// 	constructor() {
// 		// this._name = name;
// 	}
// 	#test = 'Hohoho';
// 	#url = 'https://backend.ex';
// 	send() {

// 	}

// 	set name(name) {
// 		console.log('Privat = ' + this.#test);
// 		this._name = name.trim().toLowerCase();
// 	}
// 	get name() {
// 		return this._name;
// 	}
// 	one() {
// 		console.log(this.#test);
// 	}
// }
// const student = new User();
// student.name = '         Alex';
// // student._name = 'Ivan';
// console.log(student);
// console.log(student.name);
// // console.log(student.#test);

// class User2 extends User {}
// const student2 = new User2();
// student2.one();
// student2.name = 'Oleg';

const DELETE_BTN_CLASS = 'deleteBtn';
const EDIT_BTN_CLASS = 'editBtn';

const todoList = document.querySelector('.todo__list');
const input = document.querySelector('#inputDoing');
const button = document.querySelector('#btn');
const toDoTemplate = document.querySelector('#toDoTemplate').innerHTML;
const toDoForm = document.querySelector('#toDoForm');

toDoForm.addEventListener('submit', onToDoFormSubmit);
todoList.addEventListener('click', onTodoListClick);

addToDoItem('testvas');

function onToDoFormSubmit(e) {
	e.preventDefault();

	const toDoElem = input.value;

	if (!isValidToDo(toDoElem)) {
		showError();
		return;
	}

	addToDoItem(toDoElem);
	clearInput();
}

function onTodoListClick(e) {
	const classList = e.target.classList;
	const todoItem = getTodoItem(e.target);

	if (classList.contains(DELETE_BTN_CLASS)) {
		e.target.closest('.liItem').remove();
	}

	if (classList.contains(EDIT_BTN_CLASS)) {
		e.target.closest('.editBtn').classList.toggle('test');
	}

	if (todoItem) {
		if (e.target.classList.contains(EDIT_BTN_CLASS)) {
			return;
		}

		if (e.target.classList.contains(DELETE_BTN_CLASS)) {
			console.log('edit');
			return;
		}

		todoItem.classList.toggle('done');
	}
}
function getTodoItem(el) {
	return el.closest('.liItem');
}

function isValidToDo(toDoElem) {
	return toDoElem !== '';
}

function showError() {
	alert('Enter some text');
}

function addToDoItem(toDoElem) {
	const html = generateToDoHtml(toDoElem);

	todoList.insertAdjacentHTML('beforeend', html);
}

function generateToDoHtml(toDoElem) {
	return toDoTemplate.replace('{doList', toDoElem);
}

function clearInput() {
	input.value = '';
}

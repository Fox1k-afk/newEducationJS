const ul = document.querySelector('ul');
const input = document.querySelector('#inputDoing');
const button = document.querySelector('#btn');

button.addEventListener('click', onButtonClick);
function onButtonClick() {
	if (input.value !== '') {
		const liEl = document.createElement('li');
		ul.append(liEl);
		liEl.textContent = input.value;
		input.value = '';
	}
}

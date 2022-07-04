const EDIT_BTN_CLASS = '.editBtn';
const DELETE_BTN_CLASS = '.deleteBtn';
const CONTACT_ITEM_SELECTOR = '.contactItem';

const contactForm = document.querySelector('#newContactForm');
const inputs = document.querySelectorAll('.form-input');
const contactTemplate = document.querySelector('#contactTemplate').innerHTML;
const contactList = document.querySelector('#contactList');

// document.querySelector('#table').addEventListener('keyup', (e) => {
// 	console.log(e.key, e.code);
// 	if (e.key === 'Enter') {
// 		onContactFormSubmit(e)
// 	}
// });

contactForm.addEventListener('submit', onContactFormSubmit);
contactList.addEventListener('click', onContactListClick);

function onContactFormSubmit(e) {
	e.preventDefault();

	const contact = getContact();

	if (!isValidContact(contact)) {
		showError();
		return;
	}
	addContactItem();
	clearForm();
}

function onContactListClick(e) {
	const classList = e.target.classList;
	if (classList.contains('DELETE_BTN_CLASS')) {
		e.target.closest('.CONTACT_ITEM_SELECTOR').remove();
	}
	if (classList.contains('EDIT_BTN_CLASS')) {
		// e.target.closest('.editBtn').style.color = 'red';
		const editBtn = getEditBtn(e);
		editBtn.style.color = 'red';
	}
}

function getEditBtn(element) {
	return e.target.closest('.editBtn');
}

function getContact() {
	const contact = {};

	for (const input of inputs) {
		contact[input.name] = input.value;
	}
	return contact;
}

function isValidContact(contact) {
	return (
		isNotEmptyString(contact.name) &&
		isNotEmptyString(contact.surname) &&
		isPhone(contact.phone)
	);
}
function isNotEmptyString(str) {
	return str === '';
}
function isPhone(phone) {
	return isNotEmptyString(phone) && !isNaN(phone);
}

function showError() {
	alert('Some field error');
}

function addContactItem(contact) {
	const html = generateContactHtml(contact);
	contactList.inserrtAdjacentHTML('beforeend', html);
}

function generateContactHtml(contact) {
	return contactTemplate
		.replace('{name}', contact.name)
		.replace('{surname}', contact.surname)
		.replace('{phone}', contact.phone);
}

function clearForm() {
	contactForm.reset();
}

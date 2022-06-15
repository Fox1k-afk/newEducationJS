const ACTIONS = { '+': add, '-': sub, '*': mul, '/': div };
const ACTION_LIST = Object.keys(ACTIONS);

main();
function main() {
	const action = getAction();
	const operandsCount = getOperandsCount();
	const numbers = getNumbers(operandsCount);
	const result = calc(numbers, action);
	showResult(numbers, action, result);
}

function getAction() {
	let res;
	do {
		res = prompt(`Enter operator ${ACTION_LIST.join(', ')}`, '+');
	} while (!isValidAction(res));
	return res;
}

function isValidAction(action) {
	return ACTION_LIST.includes(action);
}

function getOperandsCount() {
	let operandsCount;
	do {
		operandsCount = prompt('Enter operands count', 2);
	} while (
		!isOperandsCountValid(operandsCount) ||
		operandsCount < 2 ||
		operandsCount > 5
	);
	return Number(operandsCount);
}

function isOperandsCountValid(operand) {
	return !isNaN(operand);
}

function getNumbers(operandsCount) {
	const numbers = [];
	for (let i = 1; i <= operandsCount; i++) {
		numbers.push(getOperand(i));
	}

	return numbers;
}
function getOperand(operandName) {
	let res;
	do {
		res = prompt(`Enter operand ${operandName}`);
	} while (!isOperandValid(res));
	return Number(res);
}

function isOperandValid(operand) {
	return !isNaN(operand);
}

function calc(numbers, action) {
	let res = numbers[0];

	for (let i = 1; i < numbers.length; i++) {
		res = ACTIONS[action](res, numbers[i]);
	}
	return res;
}

function add(a, b) {
	return a + b;
}
function sub(a, b) {
	return a - b;
}
function mul(a, b) {
	return a * b;
}
function div(a, b) {
	return a / b;
}

function showResult(numbers, action, result) {
	console.log(`${numbers.join(` ${action} `)} = ${result}`);
}
///////////////////////// second variation, probably bad ;(
// let operators = ['+', '-', '*', '/'],
// 	operation = getOperation(),
// 	question,
// 	count = 0,
// 	operand,
// 	total = 0;

// function getOperation(operation) {
// 	while (!operators.includes(operation)) {
// 		return prompt(`Choose operation ${operators.join(', ')}`, '+');
// 	}
// }
// do {
// 	question = prompt(
// 		`How many operands do you want to use? (More than 1 less than 5)`,
// 		2
// 	);
// 	count = +question;
// } while (count !== parseInt(question) || count < 2 || count > 4);

// let x = [];
// for (let i = 1; i <= count; i++) {
// 	do {
// 		question = prompt(`Enter ${i}-th number`);
// 		operand = +question;
// 	} while (operand !== parseFloat(question) || !Number.isFinite(operand));
// 	x.push(operand);
// }
// total = x[0];
// for (let i = 1; i < count; i++) {
// 	switch (operation) {
// 		case '+':
// 			total += x[i];
// 			break;
// 		case '-':
// 			total -= x[i];
// 			break;
// 		case '*':
// 			total *= x[i];
// 			break;
// 		case '/':
// 			total /= x[i];
// 			break;
// 	}
// }
// console.log(`${x.join(` ${operation} `)} = ${total}`);

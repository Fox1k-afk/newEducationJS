// const ACTIONS = ['+', '-', '*', '/'];

// main();
// function main() {
// 	const action = getAction();
// 	const operandA = getOperand('A', 2);
// 	const operandB = getOperand('B', 4);
// 	if (!isValidAction(action)) {
// 		return alert('Wrond action');
// 	}
// 	if (!isOperandValid(operandA) || !isOperandValid(operandB)) {
// 		return alert('Wrong operand');
// 	}
// 	const result = calc(operandA, operandB, action);
// 	showResult(operandA, operandB, action, result);
// }

// function getAction() {
// 	return prompt(`Enter operator ${ACTIONS.join(', ')}`, '+');
// }

// function isValidAction(action) {
// 	return ACTIONS.includes(action);
// }
// function isOperandValid(operand) {
// 	return !isNaN(operand);
// }
// function getOperand(operandName, def) {
// 	return Number(prompt(`Enter operand ${operandName}`, def));
// }

// function calc(operandA, operandB, action) {
// 	switch (action) {
// 		case '+':
// 			return add(operandA, operandB);
// 		case '-':
// 			return sub(operandA, operandB);
// 		case '*':
// 			return mul(operandA, operandB);
// 		case '/':
// 			return div(operandA, operandB);
// 		default:
// 			return 'Wrong action';
// 	}
// }

// function add(a, b) {
// 	return a + b;
// }
// function sub(a, b) {
// 	return a - b;
// }
// function mul(a, b) {
// 	return a * b;
// }
// function div(a, b) {
// 	return a / b;
// }

// function showResult(operandA, operandB, action, result) {
// 	console.log(`${operandA} ${action} ${operandB} = ${result}`);
// }
/////////////////////////
let operators = ['+', '-', '*', '/'],
	operation = getOperation(),
	question,
	count = 0,
	operand,
	total = 0;

function getOperation(operation) {
	while (!operators.includes(operation)) {
		return prompt(`Choose operation ${operators.join(', ')}`, '+');
	}
}
do {
	question = prompt(
		`How many operands do you want to use? (More than 1 less than 5)`,
		2
	);
	count = +question;
} while (count !== parseInt(question) || count < 2 || count > 4);

let x = [];
for (let i = 1; i <= count; i++) {
	do {
		question = prompt(`Enter ${i}-th number`);
		operand = +question;
	} while (operand !== parseFloat(question) || !Number.isFinite(operand));
	x.push(operand);
}
total = x[0];
for (let i = 1; i < count; i++) {
	switch (operation) {
		case '+':
			total += x[i];
			break;
		case '-':
			total -= x[i];
			break;
		case '*':
			total *= x[i];
			break;
		case '/':
			total /= x[i];
			break;
	}
}
console.log(`${x.join(operation)} = ${total}`);

// let operators = ['+', '-', '*', '/'],
// 	operation,
// 	question,
// 	count = 0,
// 	operand,
// 	total = 0;

// while (
// 	!operators.includes(
// 		(operation = prompt(`Choose operation (+, -, * or /)`, '+'))
// 	)
// );

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
// console.log(`${x.join(operation)} = ${total}`);

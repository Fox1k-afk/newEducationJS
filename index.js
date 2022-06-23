const questions = [
	{ question: 'Сколько будет 2+2?', answer: 4, type: 'prompt' },
	{ question: 'Солнце встает на востоке?', answer: true, type: 'confirm' },
	{ question: 'Сколько будет 5 / 0 ?', answer: Infinity, type: 'prompt' },
	{ question: 'Какого цвета небо ?', answer: 'Голубого', type: 'prompt' },
	{
		question:
			'Как правильный ответ на «Главный вопрос жизни, вселенной и всего такого»',
		answer: 42,
		type: 'prompt',
	},
];
let points = 0;

const handleQuestion = (question) => {
	let handler;
	if (question.type === 'prompt') {
		handler = prompt;
	} else if (question.type === 'confirm') {
		handler = confirm;
	}
	return handler(question.question) == question.answer;
};
questions.forEach((q) => {
	if (handleQuestion(q)) {
		points += 10;
	}
});

alert(`Ваш результат ${points} баллов!`);

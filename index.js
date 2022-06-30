const calculator = createCalculator(100);

calculator.add(10); // 110 - это текущее значение base
calculator.add(10); // 120
calculator.sub(20); // 100

calculator.set(20); // 20
calculator.add(10); // 30
calculator.add(10); // 40
calculator.add('qwe'); // NaN и значение 40 не менять
console.log(calculator.get()); // 40

function createCalculator(base) {
	if (!isNumber(base)) {
		base = 0;
	}
	return {
		add: (num) => (base += isNumber(num) ? num : 0),
		sub: (num) => (base -= isNumber(num) ? num : 0),
		set: (num) => (base = num),
		get: () => base,
	};
}

function isNumber(num) {
	return !isNaN(num);
}

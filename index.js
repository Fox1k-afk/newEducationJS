function Calculator(base) {
	if (!isNumber(base)) {
		base = 0;
	}
	this.base = base; // храним результат последней операции

	this.add = function (num) {
		this.base += isNumber(num) ? num : 0;
	};
	this.sub = function (num) {
		this.base -= isNumber(num) ? num : 0;
	};
	this.set = function (num) {
		this.base = num;
	};
	this.get = function () {
		this.base;
	};
}

function isNumber(num) {
	return !isNaN(num);
}

const calc = new Calculator(100);

calc.add(10); // 110 записывает в this.base (в консоль ничего выводить не нужно)
calc.add(10); // 120 записывает в this.base (в консоль ничего выводить не нужно)
calc.sub(20); // 100 записывает в this.base (в консоль ничего выводить не нужно)
calc.set(20); // 20 записывает в this.base (в консоль ничего выводить не нужно)
calc.add(10); // 30 записывает в this.base (в консоль ничего выводить не нужно)
calc.add('qwe'); // игнорируем все что не число и значение 30 не меняется
calc.get(); // 30 возвращаем значение

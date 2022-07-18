class Group {
	#students = [];
	addStudent(student) {
		if (this.#isStudent(student)) {
			this.#students.push(student);
		}
	}
	#isStudent(student) {
		return student instanceof Student;
	}
	get students() {
		return this.#students;
	}

	getAverageMark() {
		const sum = getMarksSum();
		if (!sum) {
			return 0;
		}
		return sum / this.#students.length;
	}
	getMarksSum() {
		return this.#students.reduce(
			(acc, student) => acc + student.getAverageMark(),
			0
		);
	}
}
class Student {
	constructor(name, marks) {
		this.name = name;
		this.marks = marks;
	}
	getAverageMark() {
		const sum = this.marks.reduce(this.sum);

		return sum / this.marks.length;
	}
	sum(a, b) {
		return a + b;
	}
}

const group = new Group();

group.addStudent(new Student('John', [10, 8]));
group.addStudent(new Student('Alex', [10, 9]));
group.addStudent(new Student('Bob', [6, 10]));

// При добавлении валидировать тип добавляемого объекта
// и если тип не Student - игнорировать. Функцию валидатор сделать приватной
console.log(group.students.length === 3);
group.addStudent({});
console.log(group.students.length === 3);

// Выводим средний балл группы
console.log(group.getAverageMark() === (10 + 8 + 10 + 9 + 6 + 10) / 6); // 8.83

group.students = [new Student('John', [10, 10, 5, 10])]; // Сделать group.students - readonly
console.log(group.students.length === 3);

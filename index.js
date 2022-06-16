const students = [
	{
		id: 10,
		name: 'John Smith',
		marks: [10, 8, 6, 9, 8, 7],
	},
	{
		id: 11,
		name: 'John Doe',
		marks: [9, 8, 7, 6, 7],
	},
	{
		id: 12,
		name: 'Thomas Anderson',
		marks: [6, 7, 10, 8],
	},
	{
		id: 13,
		name: 'Jean-Baptiste Emanuel Zorg',
		marks: [10, 9, 8, 9],
	},
];
function avgStudentMark(id) {
	const { marks } = students.find((st) => st.id == id);
	return marks.reduce((acc, m) => acc + m) / marks.length;
}
console.log(avgStudentMark(10));

function avgGroupMark(students) {
	return (
		students.reduce((acc, { id }) => acc + avgStudentMark(id), 0) /
		students.length
	);
}
console.log(avgGroupMark(students));

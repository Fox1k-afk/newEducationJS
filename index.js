let s = 1;
factorial(3);
// factorial(5);
function factorial(n) {
	if (n === 0) return;
	s = s * n;
	factorial(n - 1);
}
console.log(s);

// function factorial2(n) {
// 	return n != 1 ? n * factorial2(n - 1) : 1;
// }
// console.log(factorial2(5));

// function factorial3(n, res) {
// 	res = res || 1;
// 	if (!n) {
// 		return res;
// 	} else {
// 		return factorial3(n - 1, res * n);
// 	}
// }
// console.log(factorial3(0));

// function factorial4(num) {
// 	if (num === 1) {
// 		return 1;
// 	} else if (num === 0) {
// 		return 1;
// 	} else {
// 		return num * factorial4(num - 1);
// 	}
// }
// console.log(factorial4(5));

// let factorial5 = function (value) {
// 	if (value > 0) {
// 		console.log(value);
// 		return factorial5(value - 1);
// 	} else {
// 		return value;
// 	}
// };
// factorial5(5);

// console.log(max([1, 8, 37, 5, 16]));
// function max(arr) {
// 	arr.reduce(function (acc, curr) {
// 		if (curr > acc) {
// 			return curr;
// 		}
// 		return acc;
// 	}, 0);
// }

function max(arr) {
	return arr.reduce(function (p, v) {
		return p > v ? p : v;
	});
}
console.log(max([8]), 'one element test, must return 8');
console.log(max([1, 8, 37, 5, 17]), '5 elements test, must return 37');
console.log(max([8, 17]), '2 elements test, must return 17');

// function max2(arr) {
// 	return arr.reduce((a, b) => Math.max(a, b));
// }
// console.log(max2([8]), 'one element test, must return 8');
// console.log(max2([1, 8, 37, 5, 17]), '5 elements test, must return 37');
// console.log(max2([8, 17]), '2 elements test, must return 17');
//  whats happened

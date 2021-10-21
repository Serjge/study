// обьединение двух строк,  сортировка по алфовиту и вывод не повторяющих элементов

function longest(s1, s2) {
	return [...new Set(s1 + s2)].sort().join('');

}

console.log(longest('sdfsdfsfhs', 'sdgdfhehjsaa'))
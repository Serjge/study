// разделить строку на несколько частей по определеномму символу .split()

let str = 'My name is John';
let words = str.split(' ');
console.log(words);
//output: [ 'My', 'name', 'is', 'John' ]

//.concat() обьединяет множиство строк в одну

let str1 = 'My'.concat('name', 'is', 'John');
console.log(str1);

//output: MynameisJohn

//.joim() обратная функция .split()

let str3 = 'My name is John';
let words3 = str3.split(' ');
console.log('use split():', words);
let s = words3.join(' ');
console.log('use join():', s);
console.log('use split() and join():', str3.split(' ').join(' '));
//output: use split():[ 'My', 'name', 'is', 'John' ]
//output: use join():My name is John
//output: use split() and join():My name is John

// первые буквы заглавны

let str4 = 'this is an example.';
let words4 = str4.split(' ');
for (var i = 0; i < words4.length; i++) {
  words4[i] = words4[i][0].toUpperCase() + words4[i].slice(1);
}
console.log(words4.join(' '));

//output: This Is An Example.

//replace() замена одного текста на другой

let str5 = 'this is an example.';
let result5 = str5.replace('this', 'that');
console.log(result5);

//output:that is an example.

// первые буквы первые с помощью replace()

let str6 = 'this is an example.';
let words6 = str6.split(' ');
for (var i = 0; i < words6.length; i++) {
  words6[i] = words6[i].replace(words6[i][0], words6[i][0].toUpperCase());
}
console.log(words6.join(' '));

//output: This Is An Example.

let str7 = 'this is an example.';
let result7 = str7.replace(/\b\w/g, (x) => x.toUpperCase());
console.log(result7);

//output: This Is An Example.

//функция возращает последнии буквы маленкие в словах

function alienLanguage(str8) {
  let result8 = str8.toUpperCase().replace(/\w\b/g, (x) => x.toLowerCase());
  return result8;
}
let string8 = 'My name is John';
console.log(alienLanguage(string8));
//output: My NAMe Is JOHn

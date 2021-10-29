//конвертирование цвета

function colorOf(r, g, b) {
  let convert = (i) => {
    let str = i.toString(16);
    return str.length === 1 ? 0 + str : str;
  };

  return `#${convert(r)}${convert(g)}${convert(b)}`;
}

console.log(colorOf(1, 2, 3));
console.log(colorOf(155, 20, 255));

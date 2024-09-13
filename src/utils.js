/**
 * Склонение существительных после числительных (плюрализация)
 * @param value {Number} Число перед существительным
 * @param words {Array.<string>} Массив вариантов, например: ['товар', 'товара', 'товаров']
 * @param show {boolean} [show=true] Вставляет число в результат
 * @return {String}
 */
export function plur(value, words, show = true) {
  let num = value % 100;
  
  if (num > 19) {
    num = num % 10;
  }

  let out;

  if (num > 1 && num < 5) {
    out = words[1];
  } else if (num == 1) {
    out = words[0];
  } else {
    out = words[2];
  }

  return (show) ? `${value} ${out}` : out;
}

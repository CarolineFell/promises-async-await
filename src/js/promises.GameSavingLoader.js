// Для вас реализованы функции-заглушки, которые эмулируют чтение файла и преобразование
// прочитанного в json. Ваша задача - реализовать класс GameSavingLoader с методом load,
// который загружает данные (с помощью функции read), парсит их (с помощью функции json())
// и создаёт объект типа GameSaving.
import json from './promises.parcer';
import read from './promises.reader';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((response) => json(response))
      .then((response) => response)
      .catch((error) => { throw new Error(`An error occured: ${error}`); });
  }
}

// Пример использования класса (если бы это был синхронный код)

// export default class GameSavingLoader {
//   static load() {
//     const data = read(); // возвращается Promise!
//     const value = json(data); // возвращается Promise!
//     return value;
//   }
// }

// Вам нужно переписать метод load так, чтобы он возвращал Promise с данными (см. формат ниже).
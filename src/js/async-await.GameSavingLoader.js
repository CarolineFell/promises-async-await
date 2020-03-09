// Для вас реализованы функции-заглушки, которые эмулируют чтение файла и преобразование
// прочитанного в json. Ваша задача - реализовать класс GameSavingLoader с методом load,
// который загружает данные (с помощью функции read), парсит их (с помощью функции json())
// и создаёт объект типа GameSaving.
import json from './async-await.parcer';
import read from './async-await.reader';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const result = await json(data);
      return result;
    } catch (error) {
      throw new Error(`An error occured: ${error}`);
    }
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
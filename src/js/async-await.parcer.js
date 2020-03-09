// Перепишите предыдущую задачу с использованием async/await.
// Не забудьте про try-catch для отлова ошибок. Для этого используйте async IIFE (модуль app.js):

// (async () => {
//   // Your code here with await
// })();

export default function json(data) {
  return new Promise((resolve) => {
    // эмуляция обработки ArrayBuffer
    setTimeout(() => {
      resolve(String.fromCharCode.apply(null, new Uint16Array(data)));
    }, 500);
  });
}
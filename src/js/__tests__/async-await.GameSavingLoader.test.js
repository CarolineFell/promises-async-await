import read from '../async-await.reader';
import GameSavingLoader from '../async-await.GameSavingLoader';

jest.mock('../async-await.reader');

test('Should resolve GameSavingLoader', () => {
  const input = "{'id': 444,'created': 10032020,'userInfo': { 'id': 666, 'name': 'NoName', 'level': 95, 'points': 2000 }}";
  const buffer = new ArrayBuffer(input.length * 2);
  const bufferView = new Uint16Array(buffer);
  for (let i = 0; i < input.length; i += 1) {
    bufferView[i] = input.charCodeAt(i);
  }

  read.mockResolvedValue(buffer);
  expect.assertions(1);
  return expect(GameSavingLoader.load()).resolves.toEqual(input);
});

test('Should reject GameSavingLoader', () => {
  const error = 'read failed';
  read.mockRejectedValue(error);
  expect.assertions(1);
  return expect(GameSavingLoader.load()).rejects.toThrow(`An error occured: ${error}`);
});
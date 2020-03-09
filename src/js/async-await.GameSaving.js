export default class GameSaving {
  constructor(id, created, { userId, userName, userLevel, userPoints }) {
    this.id = id;
    this.created = created;
    this.userInfo = {
      id: userId,
      name: userName,
      level: userLevel,
      points: userPoints,
    };
  }
}

// Спецификации объекта типа GameSaving:

// {
//   "id": <number>, // id сохранения
//   "created": <timestamp>, // timestamp создания
//   "userInfo": {
//     "id": <number>, // user id
//     "name": <string>, // user name
//     "level": <number>, // user level
//     "points": <number> // user points
//   }
// }
import GameSavingLoader from './promises.GameSavingLoader';
import GameSaving from './promises.GameSaving';

GameSavingLoader.load().then((saving) => {
  // saving объект класса GameSaving
  const {
    id,
    created,
    userInfo: {
      id: userId,
      name: userName,
      level: userLevel,
      points: userPoints,
    },
  } = JSON.parse(saving);
  const gameSaving = new GameSaving(id, created, { userId, userName, userLevel, userPoints });
  console.log(gameSaving);
})
.catch((error) => { throw new Error(`An error occured: ${error}`) });
import GameSavingLoader from './async-await.GameSavingLoader';
import GameSaving from './async-await.GameSaving';

(async () => {
  try {
    const saving = await GameSavingLoader.load();
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
    return gameSaving;
  } catch (error) {
    throw new Error(`An error occured: ${error}`);
  }
})();
export const createBoard = (BOARD_SIZE) => {
  let counter = 0;
  const board = [];
  for (let row = 0; row < BOARD_SIZE; row++) {
    const underArray = [];
    for (let cell = 0; cell < BOARD_SIZE; cell++) {
      counter++;
      underArray.push(counter);
    }
    board.push(underArray);
  }
  return board;
};

export const direction = {
  RIGHT: 'ArrowRight',
  LEFT: 'ArrowLeft',
  UP: 'ArrowUp',
  DOWN: 'ArrowDown',
};

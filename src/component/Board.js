import React, { useState, useEffect } from 'react';
import { createBoard, direction } from '../lib/Utils';
import {
  LinkedNode as LinkedListNode,
  SingleLinkedList,
  Cell,
} from '../lib/LinkedList';

import './Board.css';
const BOARD_SIZE = 16;

function Board() {
  const [board, setBoard] = useState(createBoard(BOARD_SIZE));
  const [snakeCell, setSnakeCell] = useState(new Set([100]));
  const [snake, setSnake] = useState(new SingleLinkedList(new Cell(44, 16)));

  // ? use Effect is heres
  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      //   console.log('key pressed', e);
      const presedKey = getDirection(e.key);
      console.log('presed key', presedKey);
    });
  }, []);
  return (
    <React.Fragment>
      <div className="board">
        <button>manully move</button>
        {board.map((row, rowIdx) => (
          <div key={rowIdx}>
            {row.map((cell, cellIdx) => (
              <div
                key={cell}
                className={`cell ${snakeCell.has(cell) ? 'snake-clr' : ''}`}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

const getDirection = (key) => {
  if (key == direction.UP) return direction.UP;
  if (key == direction.DOWN) return direction.DOWN;
  if (key == direction.LEFT) return direction.LEFT;
  if (key == direction.RIGHT) return direction.RIGHT;
  return '';
};

const getNextCoords = (coords, direaction) => {
  if (direaction === direction.UP) {
    return {
      row: coords.row - 1,
      col: coords.col,
    };
  }
  if (direaction === direction.DOWN) {
    return {
      row: coords.row + 1,
      col: coords.col,
    };
  }
  if (direaction === direction.LEFT) {
    return {
      row: coords.row,
      col: coords.col - 1,
    };
  }
  if (direaction === direction.RIGHT) {
    return {
      row: coords.row,
      col: coords.col + 1,
    };
  }
  return '';
};
export default Board;

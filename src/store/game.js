import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
const initialState = {
  curSymbol: "x",
  board: new Array(9).fill(""),
  winner: null,
  stopGame: false,
  move: 0,
};
const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    isDraw(state) {
      state.move += 1;
      if (state.move === 9 && state.stopGame === false && !state.winner) {
        state.stopGame = true;
        alert("Remis!");
      }
    },
    check(state) {
      function char(a, b, c) {
        return !!a && a === b && b === c && a === c;
      }
      for (let i = 0; i < 3; i++) {
        if (
          char(
            state.board[i * 3],
            state.board[i * 3 + 1],
            state.board[i * 3 + 2]
          ) ||
          char(state.board[i], state.board[i + 3], state.board[i + 6])
        )
          state.winner = state.curSymbol;
      }
      if (
        char(state.board[0], state.board[4], state.board[8]) ||
        char(state.board[2], state.board[4], state.board[6])
      )
        state.winner = state.curSymbol;
    },
    changeSymbol(state) {
      state.curSymbol === "x"
        ? (state.curSymbol = "o")
        : (state.curSymbol = "x");
    },
    writeMove(state, action) {
      // const symbol = state.curSymbol;
      state.board[action.payload - 1] = state.curSymbol;
    },

    isWin(state) {
      if (state.winner) {
        alert(`Wygrywa ${state.winner}`);
        state.stopGame = true;
      }
    },
  },
});
export const store = configureStore({
  reducer: gameSlice.reducer,
});

export const gameActions = gameSlice.actions;

import createSlice from "@reduxjs/toolkit";
const initialState = {
  curSymbol: "x",
  board: new Array(9).fill(""),
  winner: undefinded,
  btn: undefinded,
  stopGame: false,
  move: 0,
};
const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    isDraw() {
      state.move += 1;
      if (state.move === 9 && state.stopGame === false && !state.winner) {
        state.stopGame = true;
        alert("Remis!");
      }
    },
    check() {
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
    changeSymbol() {
      state.curSymbol === "x"
        ? (state.curSymbol = "o")
        : (state.curSymbol = "x");
    },
    writeMove(id) {
      const symbol = state.curSymbol;
      state.board[id - 1] = state.curSymbol;
      return symbol;
    },

    isWin() {
      if (state.winner) {
        alert(`Wygrywa ${state.winner}`);
        state.stopGame = true;
      }
    },
  },
});
const store = configureStore({
  reducer: gameSlice.reducer,
});

export const gameActions = gameSlice.actions;
export default store;

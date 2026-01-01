export const initialState = {
  history: [],
  input: '',
  historyCursor: -1,
};

export const terminalReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return {
        ...state,
        input: action.payload,
      };
    case 'EXECUTE_COMMAND':
      return {
        history: [...state.history, { type: 'command', text: state.input }, ...action.payload,],
        input: '',
        historyCursor:-1
      };
    case 'CLEAR':
      return initialState;
    case 'HISTORY_UP': {
      const commands = state.history.filter((l) => l.type === "command");
      if (commands.length == 0) return state;

      const next = Math.min(state.historyCursor + 1, commands.length - 1);
      return {
        ...state,
        historyCursor: next,
        input: commands[commands.length - 1 - next].text,
      };
    }
    case 'HISTORY_DOWN': {
      const commands = state.history.filter((l) => l.type === "command");
      if (commands.length === 0) return state;
      const next = Math.max(state.historyCursor - 1, -1);

      return {
        ...state,
        historyCursor: next,
        input: next === -1 ? '' : commands[commands.length - 1 - next].text,
      };
    }
    default:
      return state;
  }
};

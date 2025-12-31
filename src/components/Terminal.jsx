import { useEffect, useReducer, useRef } from 'react';
import { terminalReducer, initialState } from '../reducer/TerminalReducer';
import TerminalLine from './TerminalLine';
import Prompt from './Prompt';

const Terminal = () => {
  const [state, dispatch] = useReducer(terminalReducer, initialState);
  
  const bottomRef = useRef(null);
  useEffect(()=>{
    bottomRef.current?.scrollIntoView({behavior:"smooth"});
  },[state.history]);

  const executeCommand = () => {
    const cmd = state.input.trim().toLowerCase();
    let output = [];

    switch (cmd) {
      case 'help':
        output = [
          { type: 'output', text: 'Available commads:' },
          { type: 'output', text: 'whoami,skills,projects,clear' },
        ];
        break;
      case 'whoami':
        output = [{ type: 'output', text: 'Praveen Kumar C' }];
        break;
      case 'skills':
        output = [{ type: 'output', text: 'Java, React, DSA, OS, DBMS' }];
        break;

      case 'projects':
        output = [{ type: 'output', text: 'Hostel Outpass Management System' }];
        break;

      case 'clear':
        dispatch({ type: 'CLEAR' });
        return;

      default:
        output = [{ type: 'output', text: `Command not found: ${cmd}` }];
    }

    dispatch({ type: 'EXECUTE_COMMAND', payload: output });
  };
  return (
    <div className="mt-8">
      {state.history.map((line, idx) => {
        return <TerminalLine key={idx} line={line} />;
      })}
      <Prompt
        value={state.input}
        onChange={(e) => dispatch({ type: 'INPUT_CHANGE', payload: e.target.value })}
        onEnter={executeCommand}
      ></Prompt>
      <div ref={bottomRef}/>
    </div>
    
  );
};

export default Terminal;

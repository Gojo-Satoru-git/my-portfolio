import { useContext, useEffect, useReducer, useRef } from 'react';
import { terminalReducer, initialState } from '../reducer/TerminalReducer';
import TerminalLine from './TerminalLine';
import Prompt from './Prompt';
import { scrollContext } from '../contexts.jsx/scrollContext';

const Terminal = ({skillsRef,projectsRef}) => {
  const [state, dispatch] = useReducer(terminalReducer, initialState);
  const scrollTo = (ref) => {
    if (!ref?.current) {
      console.warn('Scroll target ref is null or undefined', ref);
      return;
    }
    setTimeout(() => {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      console.log('Scrolled to:', ref.current);
    }, 50);
  };

  const bottomRef = useRef(null);

  const commandsList = ['help', 'whoami', 'skills', 'projects', 'clear'];
  const handleTab = () => {
    const match = commandsList.find((c) => c.startsWith(state.input));
    if (match) {
      dispatch({ type: 'INPUT_CHANGE', payload: match });
    }
  };

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
        scrollTo(skillsRef);
        output = [{ type: 'output', text: 'Opening Skills...' }];
        break;

      case 'projects':
        scrollTo(projectsRef);
        output = [{ type: 'output', text: 'Opening Projects..' }];
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
        onUp={() => dispatch({ type: 'HISTORY_UP' })}
        onDown={() => dispatch({ type: 'HISTORY_DOWN' })}
        onTab={handleTab}
      ></Prompt>
      <div ref={bottomRef} />
    </div>
  );
};

export default Terminal;

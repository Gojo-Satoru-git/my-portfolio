const TerminalLine = ({ line }) => {
  if (line.type === 'command') {
    return <p className="text-green-500">praveen@portfolio $ {line.text}</p>;
  }
  return <p className="text-gray-400">{line.text}</p>;
};
export default TerminalLine;

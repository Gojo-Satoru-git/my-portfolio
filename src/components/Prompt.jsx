const Prompt = ({ value, onChange, onEnter, onUp, onDown, onTab }) => {
  return (
    <div className="flex">
      <span>praveen@portfolio $</span>
      <input
        className="bg-transparent outline-none ml-2 flex 1"
        value={value}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter'){ 
            document.activeElement?.blur();
            onEnter();
          }
          if (e.key === 'ArrowUp') {
            e.preventDefault();
            onUp();
          }
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            onDown();
          }
          if (e.key === 'Tab') {
            e.preventDefault();
            onTab();
          }
        }}
        autoFocus
      ></input>
    </div>
  );
};

export default Prompt;

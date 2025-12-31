const Prompt = ({ value, onChange, onEnter }) => {
  return (
    <div className="flex">
      <span>$</span>
      <input
        className="bg-transparent outline-none ml-2 flex 1"
        value={value}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key == 'Enter') onEnter();
        }}
        autoFocus
      ></input>
    </div>
  );
};

export default Prompt;

const TerminalWindow = ({ children }) => {
  return (
    <>
      <div className="max-2-4xl mx-auto mt-0 rounded-lg border border-gray-700 bg-black shadow-2xl">
        <div className="flex items-center px-4 rounded-lg border border-gray-700 bg-black shadow-2xl">
          <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          <span className="ml-4 text-sm text-gray-400">praveen@portfolio ~ zsh</span>
        </div>
        <div className="p-4 max-h-[70vh] overflow-y-auto terminal-scroll">{children}</div>
      </div>
    </>
  );
};

export default TerminalWindow;
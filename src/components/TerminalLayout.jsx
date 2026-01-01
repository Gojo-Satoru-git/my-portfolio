

const TerminalLayout = ({children}) => {
    return (
        <div className="min-h-[100vh] bg-black text-green-400 font-mono px-6 py-8">
            {children}
        </div>
    )
}

export default TerminalLayout;
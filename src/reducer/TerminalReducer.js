
export const initialState = {
    history:[],
    input:""
}

export const terminalReducer = (state,action)=>{
    switch(action.type){
        case "INPUT_CHANGE":
            return {
                ...state,
                input:action.payload
            };
        case "EXECUTE_COMMAND":
            return {
                history:[
                    ...state.history,
                    {type:"command",text:state.input},
                    ...action.payload
                ],
                input:""
            };
        case "CLEAR":
            return initialState;
        default:
            return state;
    }
}
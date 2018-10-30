const initialState = {inputValue: "", recieveCityName: false, submitOk: false, error: ""};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "HANDLE_CHANGE_ON_INPUT": {
            return Object.assign({}, state, {
                inputValue: action.value
            })
        }
        case "HANDLE_SUBMIT_ON_INPUT": {
            return Object.assign({},state, {
                submitOk: true,
                inputValue: ""
            })
        }
        case "CATCH_ERROR": {
            return Object.assign({},state, {
                error: action.value,
            })
        }
        default:
            return state;
    }
};

export default reducer;
const initialState = {inputValue: "", cityName: "", icon: null, temperature: null, forecast: "", description: "", submitOk: false, error: ""};

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
        case "RECIEVE_CITY_NAME": {
            return Object.assign({},state, {
                cityName: action.value,
            })
        }
        case "RECIEVE_TEMPERATURE": {
            return Object.assign({},state, {
                temperature: action.value,
            })
        }
        case "RECIEVE_FORECAST": {
            return Object.assign({},state, {
                forecast: action.value,
            })
        }
        case "RECIEVE_DESCRIPTION": {
            return Object.assign({},state, {
                description: action.value,
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
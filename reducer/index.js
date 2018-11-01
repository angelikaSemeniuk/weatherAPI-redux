const initialState = {inputValue: "", cityName: "", icon: null, temperature: null, forecast: "", description: "", submitOk: false, error: "", messageError: "", recieveError: false};

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
                recieveError: true,
                submitOk: false,
                error: action.value,
                messageError: action.message
            })
        }
        case "RECIEVE_NECESSARY_DATA": {
            return Object.assign({}, state, {
                submitOk: true,
                recieveError: false,

            })
        }
        default:
            return state;
    }
};

export default reducer;
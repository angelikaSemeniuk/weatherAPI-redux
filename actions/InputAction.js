export function handleChangeOnInput(value) {
    return {
        type: "HANDLE_CHANGE_ON_INPUT",
        value: value
    }
}

export function handleSubmitOnInput(cityName) {
    return function (dispatch) {
        dispatch({type: "HANDLE_SUBMIT_ON_INPUT"});
        const apiKey= "bae6a4f0dda471185771ff1f42ec10d7";
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + "&units=metric&appid=" + apiKey)
            .then((response) => {
                return response.json();
            })
            .then(
                (data) => {
                    console.error("action-DATA-response", data);
                    dispatch({type: "RECIEVE_CITY_NAME", value: data.name});
                    dispatch({type: "RECIEVE_ICON", icon: data.weather[0].icon});
                },
                (error) => {
                    dispatch({type: "CATCH_ERROR", value: error});
                }
            )
    }
}
import React from "react";
import InputConrainer from "../containers/InputContainer";
import DescriptionContainer from "../containers/DescriptionContainer";

class TestApp extends React.Component {
    render() {
        return(
            <div className="main-container">
                <InputConrainer />
                <DescriptionContainer />
            </div>
        );
    }
}

export default TestApp
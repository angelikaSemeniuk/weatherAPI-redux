import React from "react";
import { connect } from "react-redux";
import {handleChangeOnInput, handleSubmitOnInput} from "../actions/index";

class InputContainer extends React.Component {
    render() {
        const input1 = <input type="text" value={this.props.inputValue} onChange={this.props.handleChangeOnInput.bind(this)} placeholder="Enter the name of the city" style={{borderColor: "red"}}/>;
        const input2 = <input type="text" value={this.props.inputValue} onChange={this.props.handleChangeOnInput.bind(this)} placeholder="Enter the name of the city"/>;
        return(
                <div className="input-container">
                    <form onSubmit={this.props.handleSubmitOnInput.bind(this, this.props.inputValue)}>
                        { this.props.recieveError ? input1 : input2 }
                    </form>
                </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        recieveError: state.recieveError
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeOnInput: (event) => {
            dispatch(handleChangeOnInput(event.target.value));
        },
        handleSubmitOnInput: (inputValue, event) => {
            event.preventDefault();
            dispatch(handleSubmitOnInput(inputValue));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputContainer);
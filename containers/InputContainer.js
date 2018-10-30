import React from "react";
import { connect } from "react-redux";
import {handleChangeOnInput, handleSubmitOnInput} from "../actions/index";

class InputContainer extends React.Component {
    render() {
        return(
                <div className="input-container">
                    <form onSubmit={this.props.handleSubmitOnInput.bind(this, this.props.inputValue)}>
                        <input type="text" value={this.props.inputValue} onChange={this.props.handleChangeOnInput.bind(this)}/>
                    </form>
                </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
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
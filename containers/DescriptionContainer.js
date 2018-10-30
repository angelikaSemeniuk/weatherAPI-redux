import React from "react";
import { connect } from "react-redux";

class DescriptionContainer extends React.Component {
    render() {
        return(
            this.props.submitOk &&
            <div className="description-container">
                <h3 dangerouslySetInnerHTML={{__html: this.props.cityName}}></h3>
                <i className={this.props.icon} />
                <p dangerouslySetInnerHTML={{__html: this.props.forecast}}></p>
                <p dangerouslySetInnerHTML={{__html: "Temperature, °C " + this.props.temperature}}></p>
                <p dangerouslySetInnerHTML={{__html: this.props.description}}></p>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        cityName: state.cityName,
        icon: state.icon,
        temperature: state.temperature,
        forecast: state.forecast,
        description: state.description,
        submitOk: state.submitOk
    }
};

export default connect(mapStateToProps)(DescriptionContainer);
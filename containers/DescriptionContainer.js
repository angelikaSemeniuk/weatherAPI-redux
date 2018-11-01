import React from "react";
import { connect } from "react-redux";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faUmbrella, faCloudSun, faSun } from '@fortawesome/free-solid-svg-icons';

library.add(faCloud, faUmbrella, faCloudSun, faSun);
class DescriptionContainer extends React.Component {
    render() {
        return(
            <div className="description-container" style={{width: "40%"}}>
                { this.props.submitOk &&
                <div className="description-container">
                    <h3 dangerouslySetInnerHTML={{__html: this.props.cityName}}></h3>
                    {this.props.forecast === "Clouds" && <FontAwesomeIcon icon="cloud"/>}
                    {this.props.forecast === "Rain" && <FontAwesomeIcon icon="umbrella"/>}
                    {this.props.forecast === "Clear" && <FontAwesomeIcon icon="cloud-sun"/>}
                    {this.props.forecast === "Sun" && <FontAwesomeIcon icon="sun"/>}
                    <p dangerouslySetInnerHTML={{__html: this.props.forecast}}></p>
                    <p dangerouslySetInnerHTML={{__html: "Temperature, °C : " + this.props.temperature}}></p>
                    <p dangerouslySetInnerHTML={{__html: "Description : " + this.props.description}}></p>
                </div> }

                { this.props.recieveError &&
                <div className="description-container">
                    <p dangerouslySetInnerHTML={{__html: this.props.error}}></p>
                    <p dangerouslySetInnerHTML={{__html: "Message:  " + this.props.messageError}}></p>
                </div> }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cityName: state.cityName,
        temperature: state.temperature,
        forecast: state.forecast,
        description: state.description,
        recieveError: state.recieveError,
        error: state.error,
        messageError: state.messageError,
        submitOk: state.submitOk
    }
};

export default connect(mapStateToProps)(DescriptionContainer);
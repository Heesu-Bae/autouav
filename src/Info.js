import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Info.css';

class Info extends Component {
    render() {
        return (
            <div className="Info">
                <div className="Info_Column">
                    <div className="Title">
                        Seamless communication via UAV
                    </div>
                    <div className="Description">
                        <p>First, Providing smooth communication services in high demand areas.</p>
                        <p>Second, Autonomously explore shaded areas.</p>
                        <p>Third, Custom caching service based on federated learning.</p>
                        <p>Fourth, Creation of the optimal ecosystem based on blockchain.</p>
                    </div>
                </div>
                <div className="Info_Column">
                    <p>Recent Ledger</p>
                </div>
            </div>
        )
    }
}

export default Info;
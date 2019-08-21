import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Info.css';

class Info extends Component {
    render() {
        return (
            <div className="Info">
                <div className="Info_Column">
                    <div className="Title_first">
                        Seamless communication via UAV
                    </div>
                    <div className="Description_first">
                        <p>First, Providing smooth communication services in high demand areas.</p>
                        <p>Second, Autonomously explore shaded areas.</p>
                        <p>Third, Custom caching service based on federated learning.</p>
                        <p>Fourth, Creation of the optimal ecosystem based on blockchain.</p>
                    </div>
                </div>
                <div className="Info_Column">
                    <div className="Title_second">
                        Recent Ledger
                    </div>
                    <div className="Description_second">
                        Contents....
                    </div>
                </div>
            </div>
        )
    }
}

export default Info;
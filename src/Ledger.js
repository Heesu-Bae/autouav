import React, {Component} from 'react';
import PropTypes from 'prop-types';
import logo from './logo.jpg';
import './Ledger.css';

class Ledger extends Component {
    render() {
        return (
            <div className="Ledger">
                <div className="Ledger_Column">
                    <div className="Title">
                        Channel 1
                    </div>
                    <div className="Description">
                        First Ledger
                    </div>
                </div>
                <div className="Ledger_Column">
                    <div className="Title">
                        Channel 2
                    </div>
                    <div className="Description">
                        First Ledger
                    </div>
                </div>
            </div>
        )
    }
}

export default Ledger;
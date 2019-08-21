import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Ledger.css';

class Ledger extends Component {
    render() {
        return (
            <div className="Ledger">
                <div className="Title">
                    Channel Information
                </div>
                <div className="Description">
                    First Ledger
                </div>
            </div>
        )
    }
}

export default Ledger;
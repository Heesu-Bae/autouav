import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Coin.css';

class Coin extends Component {
    render() {
        return (
            <div className="Coin">
                <div className="Title">
                    Coin Issuance History
                </div>
                <div className="Description">
                    Contents...
                </div>
            </div>
        )
    }
}

export default Coin;
import React, { Component } from 'react';
import './Score.css';
import PropTypes from 'prop-types';

class Score extends Component {

    _blueWin = () => {
        return (
        <div className="blueScore">
            {this.props.blueScore}
            {this.props.redScore}
            <img src={"blueWin.png"} />

          </div>
        )
      }

      _redWin = () => {
        return (
          <div className="redScore">
            {this.props.blueScore}
            {this.props.redScore}
            <img src={"redWin.png"} />
          </div>
        )
      }
    render() {
    return (
      <div>
        {this.props.whoWin==1 ? this._blueWin() : this._redWin()}
      </div>
    );
  }
}
export default Score;

import React, { Component } from 'react';
import '../static/assets/Score.css';
import PropTypes from 'prop-types';

class Score extends Component {

    _blueWin = () => {
        return (
        <div className="blueScore">
            <img src="https://github.com/SeongJinAhn/league-of-legend-win-prediction/blob/master/client/src/blueWin.png?raw=true" width="1000px" />

          </div>
        )
      }

      _redWin = () => {
        return (
          <div className="redScore">
            <img src="https://github.com/SeongJinAhn/league-of-legend-win-prediction/blob/master/client/src/redWin.png?raw=true" width="1000px"/>
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

import React, { Component } from 'react';
import '../static/assets/Score.css';
import PropTypes from 'prop-types';
import Request from 'react-http-request'

class Score extends Component {

    _blueWin = () => {
        return (
          <div className="redScore">
            <img src="https://github.com/SeongJinAhn/league-of-legend-win-prediction/blob/master/client/src/blueWin.png?raw=true" width="1000px"/>
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
      constructor(){
        super();
        this.state = {
          redPoint:0,
          bluePoint:0
        }
      }
    render() {
    return (
      <div>
        {console.log(this.props.teamQuery)}
        <Request
          url='http://143.248.47.141:81/calculate/score'
          query={this.props.teamQuery}
          method='get'
          accept='application/json'
          verbose={true}
        >
        {
          ({error, result, loading}) => {
             if (loading) {
               return <div>{JSON.stringify(loading)}</div>;
             } else {
              return <div>
                {alert('Win rate is '+JSON.parse(result.text).blueteam+' vs '+JSON.parse(result.text).redteam)}
                {parseFloat(JSON.parse(result.text).blueteam) > parseFloat(JSON.parse(result.text).redteam) ? this._blueWin() : this._redWin()}
              </div>;
             }
           }
         }
        </Request>
      </div>
    );
  }
}
export default Score;

import React, { Component } from 'react';
import '../static/assets/Champion.css';
import PropTypes from 'prop-types';
import App from '../App'

function ChampionImage({image,number,team}){
  if(team=='1')
  {
    return(
      <img className='teamImage' src={image}
      onMouseOver={e => (e.currentTarget.src="https://raw.githubusercontent.com/SeongJinAhn/league-of-legend-win-prediction/master/item/"+String(number)+"-1.jpg")}
      onMouseOut={e => (e.currentTarget.src=image)}
      />    
      )
  }
  else{
    return(
     <img className='champImage' src={image}
      />
   )
  }
}
class Champion extends Component {
  static propTypes = {
    title : PropTypes.string,
    image : PropTypes.string
  }
  render() {
    return (
      <div className="Champion">
        <ChampionImage image={this.props.image} number={this.props.number} team={this.props.team}
        />
      </div>
    );
  }
}
export default Champion;

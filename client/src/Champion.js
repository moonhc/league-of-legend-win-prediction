import React, { Component } from 'react';
import './Champion.css';
import PropTypes from 'prop-types';

function ChampionImage({image}){
  return(
    <img className='champImage' src={image} />
  )
}
class Champion extends Component {
  static propTypes = {
    title : PropTypes.string,
    image : PropTypes.string
  }

  render() {
    return (
      <div className="Champion">
        <ChampionImage image={this.props.image} />
      </div>
    );
  }
}
export default Champion;

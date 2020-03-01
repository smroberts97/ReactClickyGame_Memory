import React, { Component } from 'react';

const styles = {
  imageStyle: {
    height: 190,
    width: 190,
    border: '4px solid #343A40',
    borderRadius: '5%'
  }
}

class Card extends Component {

  render () {
    const props = this.props

    return (
      <img style={styles.imageStyle}
          className='clicky m-2 text-center bg-light text-center'
          key={props.id}
          src={props.src}
          alt={props.alt}
      /> 
    )
  }
}

export default Card;
import React from 'react';
import { View } from 'react-native';
import { Colors, Size } from '../constants';

const Card = ({ children }) => {
  const { cardStyle } = styles;

  return (
    <View style={cardStyle}>
      {children}
    </View>
  );
};

const styles = {
  cardStyle: {
    marginTop: Size.margin,
    marginLeft: Size.margin,
    marginRight: Size.margin,
    borderRadius: 15,
    padding: Size.padding,
    backgroundColor: Colors.white
  }
};

export default Card;

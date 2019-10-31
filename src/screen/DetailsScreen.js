import React from 'react'
import { View, Text } from 'react-native'
import { Colors, Size } from '../constants'
import CardListArea from '../components/CardListArea'

class DetailsScreen extends React.PureComponent {
  render() {
    const {
      homeStyle, textStyle, basicStyle
    } = styles;
    const { navigation } = this.props;
    const item = navigation.getParam('item');

    return (
      <View style={basicStyle}>
        <View style={homeStyle}>
          <Text style={textStyle}>{item.name}</Text>
        </View>
        <View>
          <CardListArea params={item} />
        </View>
      </View>
    );
  }
}

const styles = {
  basicStyle: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  homeStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.bg_header,
    height: 50,
  },
  textStyle: {
    color: Colors.white,
    fontSize: Size.t_2_size,
    fontWeight: '100',
  },
  componentStyle: {
    height: 75,
    borderWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  componentText: {
    fontWeight: '200',
    color: '#4d4d4d',
    fontSize: 14,
  }
};

export default DetailsScreen

import React from 'react'
import { View, Text } from 'react-native'
import { Colors } from '../constants'
import CardListService from '../components/CardListService'

class OptionScreen extends React.PureComponent {
  render() {
    const { navigation } = this.props;
    const {
      homeStyle, textStyle, basicStyle
    } = styles;
    const item = navigation.getParam('item');
    return (
      <View style={basicStyle}>
        <View style={homeStyle}>
          <Text style={textStyle}>{item.name}</Text>
        </View>
        <View>
          <CardListService params={item} />
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
    padding: 10,
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

export default OptionScreen

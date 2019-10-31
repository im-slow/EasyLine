import React from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import { Colors } from '../constants'
import CardListOffice from '../components/CardListOffice'

class OfficeScreen extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    const item = navigation.getParam('item');
    const { color } = item;
    return {
      headerStyle: {
        backgroundColor: color,
      }
    };
  }

  render() {
    const { navigation } = this.props;
    const {
      homeStyle, textStyle, basicStyle
    } = styles;
    const item = navigation.getParam('item');
    const { color, icon } = item;

    return (
      <View style={basicStyle}>
        <View style={homeStyle} backgroundColor={color}>
          <Icon
            name={icon}
            type="font-awesome"
            color="white"
          />
          <Text style={textStyle}>{item.name}</Text>
        </View>
        <View>
          <CardListOffice params={item} />
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

export default OfficeScreen

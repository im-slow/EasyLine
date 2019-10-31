import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { Icon } from 'react-native-elements'
import { withNavigation } from 'react-navigation'
import { Colors } from '../constants'

class CardItemOffice extends React.Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress = (item) => {
    // console.log(data.id);
    const { navigation } = this.props;
    navigation.navigate('Ticket', { item }); // params = AREA DI INGEGNERIA
  }

  changeIconName = (icon) => {
    let newIcon = '';
    if (icon === 'suitecase') newIcon = 'suitcase';
    else newIcon = icon;
    return newIcon;
  }

  render() {
    const { item } = this.props;
    const { name, color, icon } = item;
    const {
      componentStyle,
      componentText
    } = styles;
    const newIcon = this.changeIconName(icon);
    return (
      <TouchableHighlight
        onPress={() => { this.onPress(item) }}
        underlayColor="grey"
      >
        <View style={componentStyle}>
          <Text style={componentText}>{name}</Text>
          <Icon
            name={newIcon}
            type="font-awesome"
            color={color}
          />
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = {
  componentStyle: {
    height: 55,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.bg_card,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: Colors.white
  },
  componentText: {
    fontWeight: '200',
    color: Colors.component_text,
    fontSize: 13,
    left: 10,
    flex: 2
  },
};

export default withNavigation(CardItemOffice);

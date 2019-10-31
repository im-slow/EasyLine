import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { Icon } from 'react-native-elements'
import { withNavigation } from 'react-navigation'
import { Colors } from '../constants'

class CardItemArea extends React.Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress = (item) => {
    const { navigation } = this.props;
    navigation.push('Option', { item });
  }

  render() {
    const { item } = this.props;
    const { name } = item;

    const {
      componentStyle,
      componentText
    } = styles;

    return (
      <TouchableHighlight
        onPress={() => { this.onPress(item) }}
        underlayColor="grey"
      >
        <View style={componentStyle}>
          <Icon
            name="graduation-cap"
            type="font-awesome"
            color="#992b2b"
          />
          <Text style={componentText}>{name}</Text>
          <Icon
            name="angle-right"
            type="font-awesome"
            color="#cccccc"
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

export default withNavigation(CardItemArea);

import React from 'react'
import {
  View,
  Text,
  Button,
  TouchableHighlight
} from 'react-native'
import { Icon } from 'react-native-elements'
import { Colors } from '../constants'
import { axiosOfficeOfService } from '../API/Api'

class TicketScreen extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    const item = navigation.getParam('item');
    const { color } = item;
    return {
      headerStyle: {
        backgroundColor: color,
      }
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    const item = navigation.getParam('item');
    const { parent_id } = item;
    axiosOfficeOfService(parent_id).then((response) => {
      this.setState({ data: response[0] });
    });
  }

  render() {
    const { navigation } = this.props;
    const {
      headerStyle, headerTextStyle, basicStyle, basicContainer, buttonContainerStyle, buttonStyle, squareStyle, squareText, firstTextStyle, triangleStyle, flagContainer, firstTextContainer
    } = styles;
    const item = navigation.getParam('item');
    const { color, icon } = item;
    const { data } = this.state;

    return (
      <View style={basicStyle}>
        <View style={headerStyle} backgroundColor={color}>
          <Icon
            name={icon}
            type="font-awesome"
            color="white"
          />
          <Text style={headerTextStyle}>{item.name.toUpperCase()}</Text>
        </View>
        <View style={basicContainer}>
          <View style={firstTextContainer}>
            <Text style={firstTextStyle}>{data.closed_msg}</Text>
          </View>
          <View style={flagContainer}>
            <View style={squareStyle}>
              <Text style={squareText} color={color}>{data.name}</Text>
            </View>
            <View style={triangleStyle} />
          </View>
        </View>
        <View style={buttonContainerStyle}>
          <TouchableHighlight style={{ height: 50, backgroundColor: 'white' }}>
            <Text style={{ color: 'black', textAlign: 'center' }}>DETTAGLI</Text>
          </TouchableHighlight>
        </View>
        <View style={buttonStyle}>
          <Button
            color={color}
            title="PRENOTA"
            icon={{
              name: 'ticket-alt',
              type: 'font-awesome',
              color: 'white'
            }}
          />
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
  basicContainer: {
    backgroundColor: 'white',
    marginLeft: 15,
    marginRight: 15
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  headerTextStyle: {
    color: Colors.white,
    padding: 10,
  },
  firstTextContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  firstTextStyle: {
    color: '#ffa557',
    fontSize: 20,
    fontWeight: '100',
    paddingTop: 20,
    textAlign: 'center',
  },
  flagContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  squareStyle: {
    marginTop: 30,
    width: 240,
    height: 240,
    backgroundColor: 'white',
    boxShadow: '30 black',
    elevation: 50,
    flexDirection: 'column',
    alignItems: 'center',
  },
  squareText: {
    padding: 20,
    textAlign: 'center',
  },
  componentStyle: {
    height: 75,
    borderWidth: 0.5,
    backgroundColor: 'white',
  },
  triangleStyle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 120,
    borderRightWidth: 120,
    borderBottomWidth: 30,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'white',
    transform: [{
      rotate: '180deg',
    }],
    boxShadow: '30 black',
    elevation: 50,
  },
  componentText: {
    textAlign: 'center',
    fontWeight: '200',
    color: '#4d4d4d',
    fontSize: 14,
  },
  buttonStyle: {
    position: 'absolute',
    alignSelf: 'flex-end',
    width: '100%',
    height: 50,
    bottom: -12
  },
  buttonContainerStyle: {
    height: 50,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    textAlign: 'center'
  }
};

export default TicketScreen

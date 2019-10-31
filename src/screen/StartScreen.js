import React from 'react'
import {
  View, Text, Image, Button
} from 'react-native'

class StartScreen extends React.PureComponent {
  render() {
    const { navigation } = this.props;
    const {
      main, imageContainer, title, subTitle, button
    } = styles;

    return (
      <View style={main}>
        <View style={imageContainer}>
          <Image
            style={{ width: 200, height: 220 }}
            resizeMode="stretch"
            source={require('../img/UNIVAQ_LOGO.png')}
          />
          <Text style={{ textAlign: 'center' }}>UNIVERSITÀ DEGLI STUDI DELL'AQUILA</Text>
        </View>
        <Text style={title}>SERVIZI AGLI STUDENTI</Text>
        <Text style={subTitle}>PRENOTAZIONE</Text>
        <Text style={subTitle}>SEGRETERIE</Text>
        <View style={button}>
          <Button
            title="ENTRA"
            color="#800000"
            onPress={() => navigation.push('Home')}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  main: {
    backgroundColor: '#88242F',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 150,
  },
  imageContainer: {
    width: 300,
    height: 300,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 2,
  },
  title: {
    textAlign: 'center',
    paddingTop: 30,
    paddingBottom: 10,
    color: 'white',
    fontSize: 27,
    fontWeight: '100'
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '500'
  },
  button: {
    position: 'absolute',
    alignSelf: 'flex-end',
    width: '100%',
    height: 50,
    bottom: -10,
  }
}

export default StartScreen

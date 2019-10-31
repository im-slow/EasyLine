import React from 'react'
import { SectionList, Text, View } from 'react-native'
import { axiosServiceOfProvider } from '../API/Api'
import CardItemArea from './CardItemArea'
import { Colors } from '../constants'

class CardListArea extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const { params } = this.props;
    const { id } = params;
    axiosServiceOfProvider(id).then((response) => {
      this.setState({ data: response })
    });
  }

  keyExtractor(item) { return item.id.toString(); }

  renderItem({ item }) {
    return (
      <CardItemArea item={item} />
    );
  }

  renderSectionHeader({ section: { title } }) {
    const { componentStyle, textStyle } = styles;
    return (
      <View style={componentStyle}>
        <Text style={textStyle}>{title}</Text>
      </View>
    );
  }

  render() {
    const { data } = this.state;

    return (
      <SectionList
        sections={[
          {
            title: 'LAUREA TRIENNALE',
            data: data.filter((corso) => corso.type_label === 'LAUREA TRIENNALE')
          },
          {
            title: 'LAUREA MAGISTRALE',
            data: data.filter((corso) => corso.type_label === 'LAUREA MAGISTRALE')
          }
        ]}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        renderSectionHeader={this.renderSectionHeader}
      />
    );
  }
}

const styles = {
  componentStyle: {
    height: 25,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.bg_basic,
  },
  textStyle: {
    fontSize: 12,
    color: Colors.component_text
  }
}

export default CardListArea;

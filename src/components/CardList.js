import React from 'react'
import { FlatList } from 'react-native'
import CardItem from './CardItem'
import { axiosUnivaqProviders } from '../API/Api'

class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axiosUnivaqProviders().then((response) => {
      this.setState({ data: response })
    });
  }

  keyExtractor(item) {
    return item.id.toString();
  }

  renderItem({ item }) {
    return (
      <CardItem item={item} />
    );
  }

  render() {
    const { data } = this.state;
    return (
      <FlatList
        data={data}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    );
  }
}

export default CardList;

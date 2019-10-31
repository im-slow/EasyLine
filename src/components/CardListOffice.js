import React from 'react'
import { FlatList } from 'react-native'
import CardItemOffice from './CardItemOffice'
import { axiosServiceOfService } from '../API/Api'

class CardListOffice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const { params } = this.props;
    const { id } = params;
    axiosServiceOfService(id).then((response) => {
      this.setState({ data: response })
    });
  }

  keyExtractor(item) { return item.id.toString(); }

  renderItem({ item }) {
    return (
      <CardItemOffice item={item} />
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

export default CardListOffice;

import * as React from 'react';
import {
  Container,
  Content,
  Text,
  ListItem,
  Thumbnail,
  Body
} from 'native-base';
import { FlatList, ActivityIndicator } from 'react-native';
import HeaderBar from './../Components/HeaderBar';
import { StyleSheet } from 'react-native';
import { getCryptocurrency } from './../Services/Currency';
import I18n from './../i18n/i18n';

export default class Cryptocurrency extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount() {
    return getCryptocurrency()
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          coinList: responseJson.coinList,
          baseImageUrl: responseJson.baseImageUrl,
          baseLinkUrl : responseJson.baseLinkUrl,
        }, function() {
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  ContentBody(props: any){
    let isLoading = props.state.isLoading;
    if( isLoading ){
      return <ActivityIndicator />
    }else{
      return <FlatList
          data={props.state.coinList}
          renderItem={(i) => (
            <ListItem>
              <Thumbnail square size={80} source={{ uri: props.state.baseImageUrl + i.item.ImageUrl }} />
              <Body>
                <Text>{i.item.CoinName} ({i.item.Symbol})</Text>
                <Text note>{I18n.t('totalCoinSupply')} {i.item.TotalCoinSupply} {i.item.Symbol}</Text>
                <Text note>{I18n.t('coinAlgorithm')}: {i.item.Algorithm}</Text>
              </Body>
            </ListItem>
          )
          }
          keyExtractor={(item: any, index: any) => index.toString()}
          initialNumToRender={10}
        />
    }
  }
  render() {
    return (
      <Container>
        <HeaderBar
          searchBar={true}
          title={this.props.navigation.state.routeName}>
        </HeaderBar>
        <Content padder>
            <this.ContentBody state={this.state}/>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
});

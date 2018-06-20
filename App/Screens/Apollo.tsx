import * as React from 'react';
import {
  Container,
  Content,
  Text,
  ListItem,
  Body
} from 'native-base';
import { FlatList, ActivityIndicator } from 'react-native';
import HeaderBar from './../Components/HeaderBar';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { StyleSheet } from 'react-native';
import { getCurrencyNameByCode } from './../Services/Currency';
import I18n from './../i18n/i18n';

const ratesQuery = gql`
{
rates(currency: "USD") {
currency
rate
}
}
`;

export default class Apollo extends React.Component<any,any> {
  render() {
    return (
      <Container>
        <HeaderBar
          title={this.props.navigation.state.routeName}>
        </HeaderBar>
        <Content padder>
          <Query query={ratesQuery}>
            {({ loading, error, data }) => {
              if (loading) return <ActivityIndicator />;
              if (error) return <Text>{I18n.t('dataError')}(</Text>;
              if (!data) return <Text>{I18n.t('dataEmpty')}</Text>;
              let result = data.rates
              return (
                <FlatList
                  data={result}
                  renderItem={(i) => (
                    <ListItem>
                      <Body>
                        <Text>{i.item.currency} = {getCurrencyNameByCode(i.item.currency)}</Text>
                        <Text note>1 USD = {i.item.rate} {i.item.currency}</Text>
                      </Body>
                    </ListItem>
                  )
                  }
                  keyExtractor={(item: any, index: any) => index.toString()}
                  initialNumToRender={10}
                />
              );
            }}
          </Query>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
});

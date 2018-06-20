import * as React from 'react';
import { Header, Body, Title, Right, Left, Item, Button, Icon, Input, Text } from 'native-base';
import { StyleSheet, Platform } from 'react-native';
import { colors } from './../Config/Styles';
import I18n from './../i18n/i18n';

export default class HeaderBar extends React.Component<any> {
  render() {
    if(this.props.searchBar){
      return <Header searchBar rounded={Platform.OS === 'ios' ? true : false} style={styles.header} androidStatusBarColor={colors.androidStatusBarColor} iosBarStyle="light-content">
        <Item>
          <Icon name="ios-search" />
          <Input placeholder={I18n.t('phSearch')} />
          <Icon name="ios-people" />
        </Item>
        <Button transparent>
          <Text>{I18n.t('btnSearch')}</Text>
        </Button>
      </Header>
    } else {
      return <Header style={styles.header} androidStatusBarColor={colors.androidStatusBarColor} iosBarStyle="light-content">
        {this.props.left ? this.props.left : <Left />}
        <Body>
          <Title style={styles.headerTitle}>{I18n.t(this.props.title)}</Title>
        </Body>
        {this.props.right ? this.props.right : <Right />}
      </Header>
    }
  }
}

const styles = StyleSheet.create({
  header: {
    //backgroundColor: colors.headerBackground
  },
  headerTitle: {
    //color: colors.headerTitle
  }
});

import * as React from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';
import I18n from './../i18n/i18n';

export default class ToolbarMain extends React.Component<any> {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button
            full
            vertical
            active={this.props.navigation.state.index === 0}
            onPress={() => this.props.navigation.navigate("Home")}>
            <Icon name="home" />
            <Text>{I18n.t('titleHome')}</Text>
          </Button>
          <Button
            full
            vertical
            active={this.props.navigation.state.index === 1}
            onPress={() => this.props.navigation.navigate("Apollo")}>
            <Icon name="navigate" />
            <Text>{I18n.t('titleApollo')}</Text>
          </Button>
          <Button
            full
            vertical
            active={this.props.navigation.state.index === 1}
            onPress={() => this.props.navigation.navigate("Cryptocurrency")}>
            <Icon name="logo-bitcoin" />
            <Text>{I18n.t('titleCryptocurrency')}</Text>
          </Button>
          <Button
            vertical
            active={this.props.navigation.state.index === 2}
            onPress={() => this.props.navigation.navigate("About")}>
            <Icon name="information" />
            <Text>{I18n.t('titleAbout')}</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

import * as React from 'react';
import {
  Container,
  Content,
  Button,
  Text,
  ActionSheet
} from 'native-base';
import HeaderBar from './../Components/HeaderBar';
import { StyleSheet } from 'react-native';
import I18n from './../i18n/i18n';

const BUTTONS = [I18n.t('langEn'), I18n.t('langZh'), I18n.t('btnCancel')];
//const DESTRUCTIVE_INDEX = 1;
const CANCEL_INDEX = 2;

interface State {
  locale?: string,
//  clicked?: any
}

export default class Home extends React.Component<any, State> {
  setLocale(lang: string) {
    I18n.locale = lang;
    this.setState({ locale: lang });
  }
  render() {
    return (
      <Container>
        <HeaderBar
          title={this.props.navigation.state.routeName}>
        </HeaderBar>
        <Content padder>
          <Text>{I18n.t('greeting')}</Text>
          <Text>{I18n.t('homeMsg')}</Text>
          <Button
            onPress={() =>
              ActionSheet.show(
                {
                  options: BUTTONS,
                  cancelButtonIndex: CANCEL_INDEX,
                  //destructiveButtonIndex: DESTRUCTIVE_INDEX,
                  title: I18n.t('btnTitleSwitchLang')
                },
                buttonIndex => {
                  //this.setState({ clicked: BUTTONS[buttonIndex] });
                  if (buttonIndex === 0) {
                    this.setLocale('en');
                  } else if (buttonIndex === 1) {
                    this.setLocale('zh');
                  }
                }
              )}
          >
            <Text>{I18n.t('btnSwitchLang')}</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
});

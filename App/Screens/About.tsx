import * as React from 'react';
import {
  Container,
  Content,
  Left,
  Text,
  Button,
  Icon
} from 'native-base';
import HeaderBar from './../Components/HeaderBar';
import { StyleSheet, Image } from 'react-native';
import { colors } from './../Config/Styles';
import I18n from './../i18n/i18n';

export default class About extends React.Component<any,any> {
  render() {
    return (
      <Container>
        <HeaderBar
          left={<Left>
            <Button rounded transparent>
              <Icon type="FontAwesome" name='info-circle' style={styles.headerButton} />
            </Button>
          </Left>}
          title={this.props.navigation.state.routeName}>
        </HeaderBar>
        <Content padder>
          <Text>{I18n.t('retanStack')}</Text>
          <Text>{I18n.t('author')}</Text>
          <Image source={require('./../Assets/Images/stack.png')} resizeMode={'contain'} style={{ width: '100%', height: 80 }} />
          <Button rounded danger
            onPress={() => this.props.navigation.navigate("Home")}>
            <Text>{I18n.t('btnToHome')}</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles: any = StyleSheet.create({
  headerButton: {
    color: colors.headerTitle
  }
});

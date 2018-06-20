import * as React from 'react';
import Main from './App/Main';
import * as Expo from "expo";
import settings from './App/Config/Settings';
import { StyleProvider } from "native-base";
import getTheme from "./App/Theme/Components";
import variables from "./App/Theme/Variables/commonColor";
//import I18n from 'ex-react-native-i18n';

//interface Props {}
interface State {
  isReady?: boolean
}

export default class App extends React.Component<any/*Props*/, State> {
  constructor(props: any/*Props*/) {
    super(props);
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync(settings.nativeBaseFont);
    //I18n.initAsync();
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <StyleProvider style={getTheme(variables)}>
        <Main/>
      </StyleProvider>
    );
  }
}

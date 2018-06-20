// If you're running on a device or in the Android simulator be sure to change
let defaultLanguage: string = 'zh';

let gqlHttpLink: any = {
  uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql',
  credentials: 'same-origin'
};

let nativeBaseFont: any = {
  Roboto: require("native-base/Fonts/Roboto.ttf"),
  Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
  Ionicons: require("native-base/Fonts/Ionicons.ttf")
};

if (process.env.NODE_ENV === 'production') {
  gqlHttpLink = {
    uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql',
    credentials: 'same-origin'
  };
}

export const settings = {
  env: process.env.NODE_ENV,
  gqlHttpLink,
  nativeBaseFont,
  defaultLanguage
};

export default settings;

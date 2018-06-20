import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Icon, Text } from 'native-base';
import Home from './../Screens/Home';
import Apollo from './../Screens/Apollo';
import Cryptocurrency from './../Screens/Cryptocurrency';
import About from './../Screens/About';
import { colors } from './Styles';
import I18n from './../i18n/i18n';

import ToolbarMain from './../Components/ToolbarMain';


// export const AuthStack = createStackNavigator({
//   SignIn: {
//     screen: SignIn,
//   },
// }, {
//     headerMode: 'none',
//   });

export const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: I18n.t('titleHome'),
    },
    headerMode: 'none'
  }
});

export const TabsMain = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions:  {
        tabBarLabel: I18n.t('titleHome'),
        tabBarIcon: (iconObj: any) => <Icon name="home" style={{color: iconObj.tintColor}}/>,
      },
    },
    Apollo: {
      screen: Apollo,
      navigationOptions: {
        tabBarLabel: I18n.t('titleApollo'),
        tabBarIcon: (iconObj: any) => <Icon name="navigate" style={{color: iconObj.tintColor}}/>,
      },
    },
    Cryptocurrency: {
      screen: Cryptocurrency,
      navigationOptions: {
        tabBarLabel: I18n.t('titleCryptocurrency'),
        tabBarIcon: (iconObj: any) => <Icon name="logo-bitcoin" style={{color: iconObj.tintColor}}/>,
      },
    },
    About: {
      screen: About,
      navigationOptions: {
        tabBarLabel: I18n.t('titleAbout'),
        tabBarIcon: (iconObj: any) => <Text style={{color: iconObj.tintColor}}>No Icon</Text>,
      },
    },
  },
  {
    initialRouteName: "Home",
    tabBarOptions: {
  //    activeTintColor: colors.footerActive,
//      activeBackgroundColor: colors.footerActive,
  //    inactiveTintColor: colors.footerInActive,
//      inactiveBackgroundColor: ,
      showLabel: true,
      showIcon: true,
      style: {
  //      backgroundColor: colors.footerBackground
      },
      labelStyle: {
  //      color: colors.footerLabel
      },
      tabStyle: {
      },
      allowFontScaling: true
    },
    //tabBarComponent: (props: any) => <ToolbarMain {...props} /> //Uncomment to use custom <Footer>
  }
);

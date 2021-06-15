import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import QuizScreen from '../screens/QuizScreen';
import CustomSideBarMenu  from './CustomSideBarMenu';
import AddQuestionsScreen from '../screens/AddQuestionsScreen';
import { AppTabNavigator } from './AppTabNavigator';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
  }
   
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })

  
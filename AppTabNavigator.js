import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import QuizScreen from '../screens/QuizScreen';
import AddQuestionsScreen from '../screens/AddQuestionsScreen';


export const AppTabNavigator = createBottomTabNavigator({
  Quiz : {
    screen: QuizScreen,
    navigationOptions :{
      
      tabBarLabel : "Quiz",
    }
  },
  AddQuestions: {
    screen: AddQuestionsScreen,
    navigationOptions :{
      
      tabBarLabel : "Add Questions",
    }
  }
});

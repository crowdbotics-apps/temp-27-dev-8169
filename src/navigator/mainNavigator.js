import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen29401Navigator from '../features/BlankScreen29401/navigator';
import BlankScreen19400Navigator from '../features/BlankScreen19400/navigator';
import BlankScreen39399Navigator from '../features/BlankScreen39399/navigator';
import BlankScreen29380Navigator from '../features/BlankScreen29380/navigator';
import BlankScreen19379Navigator from '../features/BlankScreen19379/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen29401: { screen: BlankScreen29401Navigator },
BlankScreen19400: { screen: BlankScreen19400Navigator },
BlankScreen39399: { screen: BlankScreen39399Navigator },
BlankScreen29380: { screen: BlankScreen29380Navigator },
BlankScreen19379: { screen: BlankScreen19379Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

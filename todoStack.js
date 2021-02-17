import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from './components/Home';
import AddNewItem from './components/AddNewItem';
import Details from './components/Details';

const screens = {
    Home:{
        screen:Home
    },
    AddNewItem:{
        screen:AddNewItem
    },
    Details:{
        screen:Details
    },
}

const todoStack = createStackNavigator(screens);
export default createAppContainer(todoStack);
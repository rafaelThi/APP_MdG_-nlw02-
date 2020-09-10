import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from "@react-navigation/stack"


import LandingPage from '../pages/Landing';
import PageSell from '../pages/sellPage';
import PageBuy from '../pages/BuyPage';
import SavedPage from '../pages/Saved'


const {Navigator, Screen} = createStackNavigator();

function AppStack() {
    return(
        <NavigationContainer>
            <Navigator screenOptions={{headerShown:false,}} >
                <Screen name='Home' component={LandingPage} />
                <Screen name='Vender' component={PageSell} />
                <Screen name='Comprar' component={PageBuy} />
                <Screen name='Salvos' component={SavedPage} />
            </Navigator>
        </NavigationContainer>
    )
}


export default AppStack;
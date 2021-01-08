import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
/* import Home from "../screens/Home"; */
import About from "../screens/About";

import Contact from "../screens/Contact";
import Compra from "../screens/Compra";
import Agrega from "../screens/Agrega";
import HomeStack from './HomeStack';
import ContactStack from './ContactStack';


const Tab = createBottomTabNavigator();


export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="home" component={HomeStack} options={{ title: 'Wallet' }} /> 
            <Tab.Screen name="about" component={About} options={{ title: 'Añade' }} />
            <Tab.Screen name="contact" component={ContactStack} options={{ title: 'Contact' }} />
            <Tab.Screen name="compra" component={Compra} options={{ title: 'Compra' }} />
            <Tab.Screen name="Agrega" component={Agrega} options={{ title: 'Ajustes' }} />
           
        </Tab.Navigator>
    )

}


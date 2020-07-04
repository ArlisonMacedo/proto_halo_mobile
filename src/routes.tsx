import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator()


// pages

import Home from './pages/Home'
import Register from './pages/Register'

const Routes: React.FC = () => {
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{
                cardStyle: {
                    backgroundColor: '#f0f0f5'
                },
                headerStyle: {
                    backgroundColor: '#F25C69',
                },
                headerTintColor: '#fff'
            }} 
            
            >
                <AppStack.Screen  name="Home" component={Home} options={{
                    headerTitle: 'Halo',
                }} />
                <AppStack.Screen name="Register" component={Register} options={{
                    headerTitle: 'Registrar'
                }} />


            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes
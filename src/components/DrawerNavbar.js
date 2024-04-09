import * as React from 'react';
import { View, StyleSheet, Image, Text, } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import BottomNavbar from './BottomNavbar';
import ContactUs from '../pages/ContactUs';
import Profile from '../pages/Profile';
import MyIncome from '../pages/MyIncome';
import Feedback from '../pages/Feedback';
import PrivacyPolicy from '../pages/PrivacyPolicy';

const Drawer = createDrawerNavigator();

const DrawerNavbar = () => {
    const DrawerHeaderContent = props => {
        return (
            <DrawerContentScrollView contentContainerStyle={{ flex: 1 }}>
                <View
                    style={{
                        backgroundColor: '#4f4f4f',
                        height: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                        top: -5,
                    }}>
                    <Text style={{ color: '#fff' }}>Home</Text>
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        );
    };

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {
                    backgroundColor: '#fff',
                },
            }}
            drawerContent={DrawerHeaderContent}>
            <Drawer.Screen
                name={'4Sure'}
                component={BottomNavbar}
                options={{
                    drawerLabel: 'Home',
                    // drawerIcon: ({ focused, size, color }) => (
                    //     <MaterialCommunityIcons name="home" color={color} size={size} />
                    // ),
                }}
            />

            <Drawer.Screen
                name={'Profile'}
                component={Profile}
                options={{
                    drawerLabel: 'Profile',
                    // drawerIcon: ({ focused, size, color }) => (
                    //     <MaterialCommunityIcons
                    //         name="location-enter"
                    //         color={color}
                    //         size={size}
                    //     />
                    // ),
                }}
            />
            <Drawer.Screen
                name={'MyIncome'}
                component={MyIncome}
                options={{
                    drawerLabel: 'MyIncome',
                    // drawerIcon: ({ focused, size, color }) => (
                    //     <MaterialCommunityIcons
                    //         name="location-enter"
                    //         color={color}
                    //         size={size}
                    //     />
                    // ),
                }}
            />
            <Drawer.Screen
                name={'PrivacyPolicy'}
                component={PrivacyPolicy}
                options={{
                    drawerLabel: 'PrivacyPolicy',
                    // drawerIcon: ({ focused, size, color }) => (
                    //     <MaterialCommunityIcons
                    //         name="location-enter"
                    //         color={color}
                    //         size={size}
                    //     />
                    // ),
                }}
            />
            <Drawer.Screen
                name={'Feedback'}
                component={Feedback}
                options={{
                    drawerLabel: 'Feedback',
                    // drawerIcon: ({ focused, size, color }) => (
                    //     <MaterialCommunityIcons
                    //         name="location-enter"
                    //         color={color}
                    //         size={size}
                    //     />
                    // ),
                }}
            />
            <Drawer.Screen
                name={'ContactUs'}
                component={ContactUs}
                options={{
                    drawerLabel: 'ContactUs',
                    // drawerIcon: ({ focused, size, color }) => (
                    //     <MaterialCommunityIcons name="firewire" color={color} size={size} />
                    // ),
                }}
            />
        </Drawer.Navigator>
    );
};

const styles = StyleSheet.create({
    headerLeft: {
        marginLeft: 15,
    },
    headerTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
    },
    headerRight: {
        marginRight: 15,
    },
    // drawer content
    drawerLabel: {
        fontSize: 14,
    },
    drawerLabelFocused: {
        fontSize: 14,
        color: '#551E18',
        fontWeight: '500',
    },
    drawerItem: {
        height: 50,
        justifyContent: 'center',
    },
    drawerItemFocused: {
        backgroundColor: '#ba9490',
    },
});

export default DrawerNavbar;
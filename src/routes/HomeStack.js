import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import Home from '../layout/Home';
import Add from '../layout/Add.js';
import colors from '../assets/colors/colors';
import ExtendFeatures from "../layout/ExtendFeatures";
import Countdown from "../layout/Countdown";
import CalendarStreak from '../layout/CalendarStreak';
import SignIn from "../layout/SignIn";
import Detail from '../layout/Detail';
import Update from '../layout/Update';



const homeStack = createNativeStackNavigator();

function HomeStack(props) {
    const today = new Date();
    const shortFormatToday = today.toDateString();
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
        <homeStack.Navigator initialRouteName="Home" >
            {
                isLoggedIn ? (
                    <homeStack.Group>
                        <homeStack.Screen name='Home' component={Home}
                            options={{
                                headerTitle: shortFormatToday,
                                headerStyle: {
                                    backgroundColor: colors.appTheme,

                                },
                                headerTintColor: colors.buttonBackground,
                                headerTitleStyle: {
                                    fontFamily: 'Nunito-Sans-SemiBold',
                                    fontSize: 30,

                                },
                            }} />
                        <homeStack.Screen name='Detail' component={Detail}
                            options={
                                {
                                    title: '',
                                    headerStyle: {
                                        backgroundColor: colors.appTheme,
                                    },
                                    headerTintColor: colors.componentBackground,
                                    headerBackTitleStyle: {
                                        fontSize: 80,
                                    },
                                }
                            }
                        />
                        <homeStack.Screen name='Update' component={Update}
                            
                            options={
                                {
                                    title: '',
                                    headerStyle: {
                                        backgroundColor: colors.appTheme,
                                    },
                                    headerTintColor: colors.componentBackground,
                                    headerBackTitleStyle: {
                                        fontSize: 80,
                                    },
                                    
                                }
                            }
                        />
                        <homeStack.Screen name='AddHabit' component={Add}
                            options={
                                {
                                    title: '',
                                    headerStyle: {
                                        backgroundColor: colors.appTheme,
                                    },
                                    headerTintColor: colors.componentBackground,
                                    headerBackTitleStyle: {
                                        fontSize: 80,
                                    },
                                }
                            } />
                        <homeStack.Screen name='ExtendFeatures' component={ExtendFeatures}
                            options={
                                {
                                    title: 'Extend Features',
                                    headerStyle: {
                                        backgroundColor: colors.appTheme,

                                    },
                                    headerTintColor: colors.componentBackground,
                                    headerBackTitleStyle: {

                                        fontSize: 80,
                                    },
                                    headerLeft: (props) => null
                                }
                            }

                        />
                        <homeStack.Screen name='Countdown' component={Countdown}
                            options={
                                {
                                    title: '',
                                    headerStyle: {
                                        backgroundColor: colors.appTheme,
                                    },
                                    headerTintColor: colors.componentBackground,
                                    headerBackTitleStyle: {
                                        fontSize: 80,
                                    },
                                }
                            }
                        />
                        <homeStack.Screen name='CalendarStreak' component={CalendarStreak}
                            options={
                                {
                                    title: '',
                                    headerStyle: {
                                        backgroundColor: colors.appTheme,

                                    },
                                    headerTintColor: colors.componentBackground,
                                    headerBackTitleStyle: {

                                        fontSize: 80,
                                    },
                                    headerLeft: (props) => null
                                }
                            }
                        />
                    </homeStack.Group>
                ) : (
                    <homeStack.Group screenOptions={{ headerShown: false }}>
                        <homeStack.Screen name="SignIn" component={SignIn} />
                    </homeStack.Group>
                )
            }
        </homeStack.Navigator>
    );
};

export default HomeStack;
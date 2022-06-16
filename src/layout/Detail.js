import { React, useEffect, useState,useLayoutEffect } from "react";
import { Text, View, ScrollView, Image, TouchableOpacity, Alert, BackHandler } from 'react-native';
import colors from "../assets/colors/colors";
import { globalStyles } from "../styles/globalstyle";
import { deleteSelectedHabit,upDateField  } from '../api/HabitAPI';


export default function Detail({ route, navigation}) {

    const [hasTimer,setHasTimer] = useState(false);
    var isHabitChange = route.params.habitChange;

    function deletePressed() {
        Alert.alert("Are you sure", "You will lose the data", [{ text: "Cancel", onPress: () => console.log("delete canceled") },
        {
            text: "OK", onPress: () => {
                deleteSelectedHabit(route.params.habitData)
                navigation.navigate({
                    name: 'Home',
                    params: {dataChange:!isHabitChange},
                    merge:true,
                });
            }
        }
        ])
    }

    useEffect(() => {
        if (route.params?.dataChange != undefined)
            isHabitChange = route.param?.dataChange;

        if (route.params.habitData.timer != '00:00:00')
            setHasTimer(true);
    },[route.params?.dataChange])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <View style={[globalStyles.one_line_view]}>
                    <Text
                        style={[globalStyles.header_name_habit, { textAlign: 'left', width: '82%' }]}

                    >{route.params.habitData.name}</Text>
                    <TouchableOpacity onPress={() => deletePressed()}>
                        <Image style={{width:20,height:24,marginLeft:15,marginTop:12,}} source={require('../assets/images/binIcon.png')} />
                    </TouchableOpacity>
                </View>
            ),
        });
    }, [navigation, route.params.habitData.name]);
    return (
        <ScrollView contentContainerStyle={globalStyles.container}>
            <View style={[globalStyles.component]}>
                <View style={[globalStyles.one_line_view, globalStyles.habit_attributes, globalStyles.seperate_line]}>
                    <Image style={[globalStyles.habit_detail_icon]} source={require('../assets/images/alarm.png')} />
                    <Text style={[globalStyles.time_style]}>{route.params.habitData.alarm}</Text>

                </View>
                <View style={[globalStyles.one_line_view, globalStyles.habit_attributes, globalStyles.seperate_line]}>
                    <Image style={[globalStyles.habit_detail_icon]} source={require('../assets/images/timer.png')} />
                    <Text style={[globalStyles.time_style]}>{route.params.habitData.timer}</Text>

                </View>
                <View style={[globalStyles.one_line_view, globalStyles.habit_attributes, globalStyles.seperate_line]}>
                    <Image style={[globalStyles.habit_detail_icon]} source={require('../assets/images/descriptionIcon.png')} />
                    <Text style={[globalStyles.input_text, { overflow: 'visible', width: '80%',textAlign:'center' }]}>{route.params.habitData.description}</Text>
                </View>
            </View>

            <TouchableOpacity style={[globalStyles.edit_button]} 
                onPress={() => {
                    navigation.navigate('Update', { habitData: route.params.habitData,habitChange:isHabitChange })
                }
                }
            >
                <Image source={require('../assets/images/editBtn.png')} />
            </TouchableOpacity>
            <View style={[globalStyles.fullwidth, globalStyles.streak_view, globalStyles.one_line_view]}>
                <View style={{
                    width: '50%',
                    paddingLeft: 45,
                    borderRightColor: colors.componentBackground,
                    borderRightWidth: 2,
                }}>
                    <Text style={[globalStyles.number_streak]}>10</Text>
                    <Text style={{
                        fontFamily: 'Nunito-Sans-SemiBold',
                        fontSize: 15,
                        color: colors.buttonBackground,
                    }}>Max streak</Text>
                </View>
                <View style={{
                    width: '50%',
                    paddingLeft: 45,
                    borderLeftColor: colors.componentBackground,
                    borderLeftWidth: 2,
                }}>
                    <Text style={[globalStyles.number_streak, {
                        paddingLeft: 55,
                    }]}>5</Text>
                    <Text style={{
                        fontSize: 15,
                        fontFamily: 'Nunito-Sans-SemiBold',
                        right: 10,
                        color: colors.currentStreak,
                    }}>Current streak</Text>
                </View>
            </View>
            <View style={[globalStyles.component, globalStyles.footer, globalStyles.fullwidth, { backgroundColor: colors.appTheme }]}>
                {
                    hasTimer ? (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate("Countdown", { habitData: route.params.habitData, habitChange: isHabitChange })
                        }}>
                            <Text style={{ color: colors.componentBackground, fontSize: 25, marginTop: -10, }}>START</Text>

                        </TouchableOpacity>
                    ) : (
                            <TouchableOpacity onPress={() => {
                                const updateField = {
                                    'id': route.params.habitData.id,
                                    'isComplete': true,
                                }
                                upDateField(updateField);
                                navigation.navigate({
                                    name: 'Home',
                                    params: { dataChange: !isHabitChange },
                                    merge: true,
                                })
                                alert(`Congratulations!!! You have done ${route.params.habitData.name}`);
                            }}>
                                <Text style={{ color: colors.componentBackground, fontSize: 25, marginTop: -10, }}>COMPLETE</Text>

                            </TouchableOpacity>
                    )
                }
                
            </View>
        </ScrollView>
    )
}
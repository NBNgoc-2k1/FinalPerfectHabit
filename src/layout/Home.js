import React, { useEffect, useState,useCallback } from "react";
import {  View,  Image, TouchableOpacity, FlatList, RefreshControl,Share } from 'react-native';
import { globalStyles } from "../styles/globalstyle";
import 'react-native-gesture-handler';
import NormalHabit from '../components/HabitNameComponents/NormalHabit';
import CompletedHabit from '../components/HabitNameComponents/CompletedHabit';
import MissedHabit from '../components/HabitNameComponents/MissedHabit';
import { getHabits } from '../api/HabitAPI';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve,timeout))
}

function checkHabitChange(dataChange) {
    if (dataChange == undefined || dataChange == false){
        return false;
    }
    if (dataChange == true)
        return true;
}

export default function Home({navigation,route }) {

    const [normalHabitList, setNormalHabitList] = useState([]);
    const [completedHabitList, setCompletedHabitList] = useState([]);
    const [missedHabitList, setMissedHabitList] = useState([]);
    const [refreshing, setRefreshing] = React.useState(false);
    const dataList = [];

    var isHabitChange = false;

    const getInfoData = () => {
        getHabits(setDataList);
    }

    function setDataList(normalHabitList,completedHabitList,missedHabitList) {
        setNormalHabitList(normalHabitList);
        setCompletedHabitList(completedHabitList);
        setMissedHabitList(missedHabitList);
    }

    useEffect(() => {
        if (route.params?.dataChange != undefined){
            isHabitChange = route.params?.dataChange;
        }
        getInfoData();

    },[route.params?.dataChange,refreshing]);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    },[]);
    

    return (
        <View style={globalStyles.container}>
            <FlatList
                style={[globalStyles.component,{ marginBottom: 10 }]}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
                data={normalHabitList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    <NormalHabit
                        item={item}
                        onPress={() => {
                            navigation.navigate("Detail",{habitData:item,habitChange:checkHabitChange(route.params?.dataChange)})
                        }
                    }
                    />
                }
            />
            <FlatList
                style={[globalStyles.component,{ marginBottom: 10 }]}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
                data={completedHabitList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    <CompletedHabit
                        item={item}
                        onPress={() => {
                            navigation.navigate("Detail",{habitData:item,habitChange:checkHabitChange(route.params?.dataChange)})
                        }}
                    />
                }
            />
            <FlatList
                style={[globalStyles.component, { marginBottom: 10 }]}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
                data={missedHabitList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    <MissedHabit
                        item={item}
                        onPress={() => {
                            navigation.navigate("Detail",{habitData:item,habitChange:checkHabitChange(route.params?.dataChange)})
                        }
                    }
                    />
                }
            />
            <View style={[globalStyles.component, globalStyles.footer, globalStyles.fullwidth]}>
                <View style={[globalStyles.one_line_view, globalStyles.navigation_icon_list]}>
                    <TouchableOpacity
                        style={[globalStyles.navigation_icon]}
                        onPress={() => { navigation.navigate("ExtendFeatures") }}
                    >
                        <Image style={{ marginTop: 5, }} source={require('../assets/images/hamburgerIcon.png')} />

                    </TouchableOpacity>

                    <TouchableOpacity style={[globalStyles.navigation_icon]}
                        onPress={() => { navigation.navigate("CalendarStreak") }}
                    >
                        <Image style={{ marginTop: 0, width: 35, height: 35, }} source={require('../assets/images/calendarIcon.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[globalStyles.navigation_icon]}
                    >
                        <Image style={{ marginTop: 0, width: 35, height: 35, }} source={require('../assets/images/statisticIcon.png')} />
                    </TouchableOpacity>

                </View>
            </View>
            <TouchableOpacity style={[globalStyles.add_btn]} onPress={() => { navigation.navigate("AddHabit",
                {habitChange:checkHabitChange(route.params?.dataChange)})
            }}>
                <Image source={require('../assets/images/addBtn.png')} />
            </TouchableOpacity>
        </View>
    )
}
import React from 'react';
import { View,useState,useMemo } from 'react-native';
import moment from "moment";
import { Calendar, CalendarList } from 'react-native-calendars';
import colors from '../assets/colors/colors';

const todayString = moment().format("YYYY-MM-DD")
export default function CalendarStreak() {
    
    return (
        <View>
            <CalendarList
                pastScrollRange={24}
                futureScrollRange={24}
                current={todayString}
                horizontal
                pagingEnabled
                markingType={'period'}
                theme={{
                    todayBackgroundColor:colors.appTheme,
                    todayTextColor:colors.componentBackground,
                }}
                markedDates={{
                    [todayString]:{}
                }}
            />
            
        </View>
    )
}
import { React, useEffect} from "react";
import { View, ScrollView, Image, TouchableOpacity,Text} from 'react-native';
import { globalStyles } from "../styles/globalstyle";
import { useState,useLayoutEffect } from "react";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import colors from "../assets/colors/colors";
import  {upDateField}  from '../api/HabitAPI';

export default function Countdown({route,navigation}) {
    const [timerState,setTimerState] = useState("Pause");
    const [isPlaying, setIsPlaying] = useState(true);
    const [duration,setDuration] = useState(0);

    var isHabitChange = route.params.habitChange;


    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <View style={[globalStyles.one_line_view]}>
                    <Text
                        style={[globalStyles.header_name_habit, { textAlign: 'left', width: '82%' }]}

                    >{route.params.habitData.name}</Text>
                </View>
            ),
        });
    }, [navigation, route.params.habitData.name]);

    function ConvertTimerToSeconds(){
        var duration = 0;
        const hoursString = route.params.habitData.timer.substr(0,1);
        const hours = parseInt(hoursString);
        const minutesString = route.params.habitData.timer.substr(3,4);
        const minutes = parseInt(minutesString);
        const secondsString = route.params.habitData.timer.substr(6,7);
        const seconds = parseInt(secondsString);

        duration = (hours*3600 + minutes*60 + seconds);
        setDuration(duration);
    }

    const onComplete = () => {
        const updateField = {
            'id':route.params.habitData.id,
            'isComplete': true,
        }
        upDateField(updateField);
    }

    useEffect(() => {
        ConvertTimerToSeconds();
    },[])


    return (
        <ScrollView contentContainerStyle={globalStyles.container}>
            <View style={{
                marginTop: -50,
            }}>
                <CountdownCircleTimer
                    isPlaying={isPlaying}
                    duration={duration}
                    colors={["#ED5504"]}
                    onComplete={() => {
                        onComplete();
                        navigation.navigate({
                            name: 'Home',
                            params: { dataChange: !isHabitChange },
                            merge: true,
                        });
                    }
                    }
                >
                    {({ remainingTime }) => {
                        const hours = Math.floor(remainingTime / 3600);
                        const minutes = Math.floor((remainingTime % 3600) / 60);
                        const seconds = remainingTime % 60;
                        return (
                            <Text style={{
                                fontSize: 40,
                                color: colors.appTheme,
                            }}>
                                {hours}:{minutes}:{seconds}
                            </Text>
                        );
                    }}
                </CountdownCircleTimer>


            </View>
            <TouchableOpacity style={{
                marginTop: 25,
                marginLeft: 50,
                marginRight: 50,
            }} onPress={() => {
                setIsPlaying(!isPlaying)
                console.log(isPlaying);
                if (isPlaying == false) {
                    setTimerState("Pause")
                }
                else setTimerState("Resume")
            }}
            >
                <Text style={{
                    backgroundColor: colors.buttonBackground,
                    padding: 10,
                    borderRadius: 25,
                    color: colors.textButtonBackground,
                    fontFamily: 'Nunito-Sans-Bold',
                }}>{timerState}</Text>
            </TouchableOpacity>
            <View style={[globalStyles.component, globalStyles.footer, globalStyles.fullwidth]}>
                <Image style={{ marginTop: -25, }} source={require('../assets/images/line.png')} />
            </View>



        </ScrollView>
    )
    
}
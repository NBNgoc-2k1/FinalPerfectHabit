import { React,useState,useLayoutEffect, useEffect} from "react";
import { Text, View, ScrollView, Image, TouchableOpacity, TextInput} from 'react-native';
import { globalStyles } from "../styles/globalstyle";
import { DateTimePickerModal } from "react-native-modal-datetime-picker";
import TimerPicker from '../components/TimePicker/CustomTimePicker';
import { upDateField } from '../api/HabitAPI';

function isHabitUpdate(habitProp,currentValue) {
    if (habitProp == currentValue) return false;
    else return true;
}
export default function Update({route, navigation}) {
    const [nameHabit, setnameHabit] = useState(`${route.params.habitData.name}`);

    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');
    const [timerModal,setTimerModal] = useState(false);    
    const countdownTime = `${hours}:${minutes}:${seconds}`;
    const [show,setShow] = useState(false);
    const [date,setDate] = useState(new Date());
    const [description,setDescription] = useState(`${route.params.habitData.description}`);
    const [alarm,setAlarm] = useState(`${route.params.habitData.alarm}`);
    const [timer,setTimer] = useState(`${route.params.habitData.timer}`);
    var isHabitChange = route.params.habitChange;

    function confirmPress(nameHabit, alarm, timer, description,) {

        const updatedHabit = {
            "id": route.params.habitData.id,
            "name":nameHabit,
            "alarm":alarm,
            "timer":timer,
            "description":description
        }
        upDateField(updatedHabit)
    }

    const showDatePicker = () => {
        setShow(true);
    };

    const hideDatePicker = () => {
        setShow(false);
    };

    const handleConfirm = (selectedDate)=>{
        const currentDate = selectedDate || date;
        setDate(currentDate);
        let tempDate = new Date(currentDate);
        let textTimeAlarm;
        textTimeAlarm = tempDate.getHours() + ':' + tempDate.getMinutes();
        if (tempDate.getHours() < 10)
            textTimeAlarm = '0' + tempDate.getHours() + ':' + tempDate.getMinutes();
        if (tempDate.getMinutes() < 10)
            textTimeAlarm = tempDate.getHours() + ':' + '0' + tempDate.getMinutes();
        if (tempDate.getHours() < 10 && tempDate.getMinutes() < 10)
            textTimeAlarm = '0' + tempDate.getHours() + ':' + '0' + tempDate.getMinutes();
        setAlarm(textTimeAlarm);
        hideDatePicker();
    }

    useEffect(() => {
        console.log(isHabitChange)
        if (countdownTime != '00:00:00')
            setTimer(countdownTime);
    },[countdownTime])
    
    // Customize header
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <View style={[globalStyles.one_line_view]}>
                    <TextInput
                        style={[globalStyles.header_name_habit,{width:'93%'}]}
                        autoFocus
                        onChangeText={
                            (val) =>   setnameHabit(val)
                        }
                    >{nameHabit}</TextInput>
                </View>
            ),
        });
    }, [navigation, route.params.habitData.name]);
    return (
        <ScrollView contentContainerStyle={globalStyles.container}>
            <View style={[globalStyles.component, {
                position: "absolute",
                top: 20,
            }]}>

                <View style={[globalStyles.one_line_view, globalStyles.habit_attributes, globalStyles.seperate_line]}>
                    <Image style={[globalStyles.habit_detail_icon]} source={require('../assets/images/alarm.png')} />
                    <TouchableOpacity onPress={() => {
                        showDatePicker();
                    }}>
                        <Text style={[globalStyles.time_style]}>{alarm}</Text>

                    </TouchableOpacity>
                    <DateTimePickerModal
                        isVisible={show}
                        mode="time"
                        onConfirm={handleConfirm}
                        onChange={handleConfirm}
                        onCancel={hideDatePicker}
                        is24Hour={true}
                        display='default'
                    />
                </View>
                <View style={[globalStyles.one_line_view, globalStyles.habit_attributes, globalStyles.seperate_line]}>
                    <Image style={[globalStyles.habit_detail_icon]} source={require('../assets/images/timer.png')} />
                    <TouchableOpacity onPress={() => {
                        setTimerModal(!timerModal)
                        console.log(true);
                    }}>
                        <Text style={[globalStyles.time_style]}
                        >{timer}</Text>
                    </TouchableOpacity>
                    <TimerPicker
                        modalOpen={timerModal}
                        setModalOpen={setTimerModal}
                        setHours={setHours}
                        setMinutes={setMinutes}
                        setSeconds={setSeconds}
                    />
                </View>
                <View style={[globalStyles.one_line_view, globalStyles.habit_attributes, globalStyles.seperate_line]}

                >
                    <Image style={[globalStyles.habit_detail_icon]} source={require('../assets/images/descriptionIcon.png')} />
                    <TextInput
                        style={[globalStyles.input_text]}
                        multiline
                        placeholder='Description about your habit '
                        onChangeText={newText => setDescription(newText)}
                        value={description}
                    />
                </View>

            </View>

            <View style={[globalStyles.component, globalStyles.footer, globalStyles.fullwidth]}>
                <Image style={{ marginTop: -25, }} source={require('../assets/images/line.png')} />
            </View>
            <TouchableOpacity
                style={[globalStyles.confirm_btn]}
                onPress={
                    () => {
                        confirmPress(nameHabit, alarm, timer, description,)
                        if (!isHabitUpdate(route.params.habitData.name,nameHabit) &&
                            !isHabitUpdate(route.params.habitData.alarm,alarm) &&
                            !isHabitUpdate(route.params.habitData.timer,timer) &&
                            !isHabitUpdate(route.params.habitData.description,description))
                            isHabitChange=isHabitChange;
                        else isHabitChange=!isHabitChange;
                        navigation.navigate({
                            name: 'Home',
                            params: { dataChange: isHabitChange },
                            merge: true,
                        });
                        alert(`Habit ${nameHabit} updated succesfully`);
                    }
                }>
                <Image source={require('../assets/images/confirmBtn.png')} />
            </TouchableOpacity>


        </ScrollView>
    )
}
import { React,useState,useLayoutEffect, useEffect} from "react";
import { Text, View, ScrollView, Image, TouchableOpacity, TextInput} from 'react-native';
import { globalStyles } from "../styles/globalstyle";
import { DateTimePickerModal } from "react-native-modal-datetime-picker";
import TimerPicker from '../components/TimePicker/CustomTimePicker';
import { addNewHabit } from '../api/HabitAPI';

export default function AddHabit({route, navigation}) {
    const [nameHabit, setnameHabit] = useState('');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');
    const [timerModal,setTimerModal] = useState(false);    
    const countdownTime = `${hours}:${minutes}:${seconds}`;
    const [date,setDate] = useState(new Date());
    const [show,setShow] = useState(false);
    const [textTimeAlarm,setTextTimeAlarm] = useState('00:00');
    const [description,setDescription] = useState('');
    const [isMiss,setMiss] = useState(false);
    const [isComplete,setComplete] = useState(false);
    const [isValidHabit,setValidHabit] = useState(false);
    
    var isHabitChange = route.params.habitChange;

    // Customize header
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <TextInput
                    
                    autoFocus={true}
                    style={[globalStyles.header_name_habit,{width:'90%',}]}
                    value={nameHabit}
                    onChangeText={
                        
                        (val) => {
                            setnameHabit(val)
                            if (nameHabit != '')
                                setValidHabit(true);
                        } 
                        
                    }
                    // containerStyle={globalStyles.searchBarContainerStyle}
                    placeholder="Habit name..."
                    returnKeyType="search"
                    textContentType="none"
                    cancelButtonTitle="Cancel"
                />
            ),
        });
    }, [navigation, nameHabit]);
    function addHabit(name,alarm,timer,description,isComplete,isMiss) {

        var habitData = {
            "name": name,
            "alarm": alarm,
            "timer": timer,
            "isComplete": isComplete,
            "isMissed":isMiss,
            "description": description
        }
        addNewHabit(habitData);
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
        setTextTimeAlarm(textTimeAlarm);
        hideDatePicker();
    }

    return (
        <ScrollView contentContainerStyle={globalStyles.container}>
            <View style={[globalStyles.component,{
                position: "absolute",
                top: 20,
            }]}>
                
                <View style={[globalStyles.one_line_view,globalStyles.habit_attributes,globalStyles.seperate_line]}>
                    <Image style={[globalStyles.habit_detail_icon]} source={require('../assets/images/alarm.png')} />
                    <TouchableOpacity onPress={() => {
                        showDatePicker();
                    }}>
                        <Text style={[globalStyles.time_style]}>{textTimeAlarm}</Text>

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
                <View style={[globalStyles.one_line_view,globalStyles.habit_attributes,globalStyles.seperate_line]}>
                    <Image style={[globalStyles.habit_detail_icon]} source={require('../assets/images/timer.png')} />
                    <TouchableOpacity onPress={() => {
                        setTimerModal(!timerModal)
                    }}>
                        <Text style={[globalStyles.time_style]}>{countdownTime}</Text>
                    </TouchableOpacity>
                    <TimerPicker 
                        modalOpen={timerModal}
                        setModalOpen={setTimerModal}
                        setHours={setHours}
                        setMinutes={setMinutes}
                        setSeconds={setSeconds}
                    />
                </View>
                <View style={[globalStyles.one_line_view,globalStyles.habit_attributes,globalStyles.seperate_line]}
                    
                >
                    <Image style={[globalStyles.habit_detail_icon]} source={require('../assets/images/descriptionIcon.png')}/>
                    <TextInput 
                        style={[globalStyles.input_text]}
                        multiline
                        placeholder='Description about your habit '
                        onChangeText={newText => setDescription(newText)}
                    />
                </View>

            </View>
            
            <View style={[globalStyles.component,globalStyles.footer,globalStyles.fullwidth]}>
                <Image style={{marginTop:-25,}} source={require('../assets/images/line.png')}/>
            </View>
            <TouchableOpacity 
                style={[globalStyles.confirm_btn,]} 
                disabled={!isValidHabit}
                onPress={
                () => {
                    addHabit(nameHabit,textTimeAlarm,countdownTime,description,isComplete,isMiss)
                    navigation.navigate({
                        name: 'Home',
                        params: {dataChange:!isHabitChange},
                        merge:true,
                    });
                    alert(`Habit ${nameHabit} added`);
                }
            }>
                <Image source={require('../assets/images/confirmBtn.png')}/>
            </TouchableOpacity>

            
        </ScrollView>
    )
}
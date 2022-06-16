import {View, Modal,Text,TouchableOpacity} from 'react-native';
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import colors from '../../assets/colors/colors';
import {seconds as secondsData ,minutes as minutesData,hours as hoursData} from '../DataCompenent/TimePickerData'

export default function TimerPicker({
    modalOpen,
    setModalOpen,
    setHours,
    setMinutes,
    setSeconds,
}) {
    const [selectedHours, setSelectedHours] = useState('00');
    const [selectedMinutes, setSelectedMinutes] = useState('00');
    const [selectedSeconds, setSelectedSeconds] = useState('00');
    const pickerData = (data) => {
        return (data?.length > 0) && (
            data.map((val, index) => 
                    <Picker label={val} value={val} key={index} />
            )       
        )
    }

    
    //value
    
    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalOpen}
            onRequestClose={()=>{
                setModalOpen(!modalOpen)
            }}
        >
            
            <View style={{
                backgroundColor: colors.componentBackground,
                width: '33.3%',
                height: '20%',
                position: 'absolute',
                bottom: 0,
                left: 0,
                
            }}>
                <Text style={{
                    backgroundColor:colors.appTheme,
                    paddingLeft:40,
                    borderRightColor: colors.textComponentBackground,
                    borderRightWidth: 1,
                    color:colors.componentBackground}}>Hours </Text>
                <Picker
                    label='Hours'
                    visible={false}
                    selectedValue={selectedHours}
                    style={{ height: 50, width: '100%' }}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedHours(itemValue)
                    }>
                    {pickerData(hoursData)}
                </Picker>
            </View>
            <View style={{
                backgroundColor: colors.componentBackground,
                width: '33.3%',
                height: '20%',
                position: 'absolute',
                bottom: 0,
                left: 120,

            }}>
                <Text style={{
                    backgroundColor: colors.appTheme, 
                    paddingLeft: 30,
                    borderRightColor: colors.textComponentBackground,
                    borderRightWidth: 1,
                    color:colors.componentBackground}}>Minutes </Text>
                <Picker
                    selectedValue={selectedMinutes}
                    style={{ height: 50, width: '100%' }}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedMinutes(itemValue)
                    }>
                    {pickerData(minutesData)}
                </Picker>
                <TouchableOpacity style={{
                    width: '100%',
                    backgroundColor:colors.buttonBackground,
                    paddingLeft:50,
                    borderRadius:25,
                    marginTop:35,
                }}
                    onPress={() => {
                        setHours(selectedHours)
                        setMinutes(selectedMinutes)
                        setSeconds(selectedSeconds)
                        setModalOpen(!modalOpen)
                    }}>
                <Text>OK</Text>
            </TouchableOpacity>
            </View>
            <View style={{
                backgroundColor: colors.componentBackground,
                width: '33.3%',
                height: '20%',
                position: 'absolute',
                bottom: 0,
                left: 240,
            }}>
                <Text style={{
                    backgroundColor:colors.appTheme,
                        paddingLeft:30,
                    color:colors.componentBackground}}>Seconds </Text>
                <Picker
                    selectedValue={selectedSeconds}
                    style={{ height: 50, width: '100%' }}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedSeconds(itemValue)
                    }>
                    {pickerData(secondsData)}
                </Picker>
            </View>
            
        </Modal>
    )
}


import 'react-native-gesture-handler';
import {Text, View, ScrollView, Image,  TouchableOpacity, Switch } from 'react-native';
import { globalStyles } from "../styles/globalstyle";
import colors from '../assets/colors/colors';
import { useState } from 'react/cjs/react.development';
import  RateApp  from "../components/RateApp/RateApp";

export default function ExtendFeatures({navigation}) {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
z
    const [isEnabled,setEnabled] = useState(false);

    const toggleSwitch = () => {
        setEnabled(previousState => !previousState);
    }

    return(
        <ScrollView contentContainerStyle={{
            backgroundColor:'#fff',
            flexGrow:2,
            alignItems: 'center',}}>
            <View style={{
                backgroundColor:colors.buttonBackground,
            ...globalStyles.fullwidth,
                marginTop:10,
                }}>
                <Text style={{
                    fontFamily:"Nunito-Sans-SemiBold",
                    fontSize:20,
                    textAlign:'center',
                    
                }}>VIP Account</Text>
            </View>
            <View style={[globalStyles.one_line_view]}>
                <Image source={require('../assets/images/removeadsicon.png')} style={{ marginTop: 5 }} />
                <TouchableOpacity>
                    <Text numberOfLines={1}
                        style={[globalStyles.extend_feature_text, globalStyles.habit_list_name,]}>Remove Ads</Text>
                </TouchableOpacity>
            </View>
            <View style={[globalStyles.one_line_view]}>
                <Image source={require('../assets/images/paint.png')} style={{ marginTop: 5, }} />
                <TouchableOpacity>
                    <Text numberOfLines={1}
                        style={[globalStyles.extend_feature_text, globalStyles.habit_list_name,]}>Switch color</Text>
                </TouchableOpacity>
            </View>
            <View style={[globalStyles.one_line_view]}>
                <Image source={require('../assets/images/night-mode.png')} style={{ marginTop: 5,marginLeft:0}} />
                <Text numberOfLines={1}
                    style={[globalStyles.extend_feature_text, globalStyles.habit_list_name,]}>Dark Mode</Text>
                <Switch style={{marginLeft:-50,marginTop:-15,}}
                    trackColor={{false:colors.appBackground,true:colors.appTheme}}
                    thumbColor={isEnabled ? '#f3f3f3':'#f3f3f3'}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    
                />
            </View>
            <View style={[globalStyles.one_line_view,globalStyles.seperate_line]}>
                <Image source={require('../assets/images/search.png')} style={{ marginTop: 5 }} />
                <TouchableOpacity>
                    <Text numberOfLines={1}
                        style={[globalStyles.extend_feature_text, globalStyles.habit_list_name,]}>Search data</Text>
                </TouchableOpacity>
            </View>
            <View style={[globalStyles.one_line_view]}>
                <Image source={require('../assets/images/user.png')} style={{ marginTop: 5 }} />
                <TouchableOpacity>
                    <Text numberOfLines={1}
                        style={[globalStyles.extend_feature_text, globalStyles.habit_list_name,]}>Account Information</Text>
                </TouchableOpacity>
            </View>
            <View style={[globalStyles.one_line_view]}>
                <Image source={require('../assets/images/translation.png')} style={{ marginTop: 5 }} />
                <TouchableOpacity>
                    <Text numberOfLines={1}
                        style={[globalStyles.extend_feature_text, globalStyles.habit_list_name,]}>Language</Text>
                </TouchableOpacity>
            </View>
            <View style={[globalStyles.one_line_view]}>
                <Image source={require('../assets/images/star.png')} style={{ marginTop: 5 }} />
                <TouchableOpacity onPress={()=> {
                    setRateAppModal(!rateAppModal)
                }}>
                    <Text numberOfLines={1}
                        style={[globalStyles.extend_feature_text, globalStyles.habit_list_name,]}>Grade</Text>
                    <RateApp modalOpen={rateAppModal} setModalOpen={setRateAppModal}/>
                </TouchableOpacity>
            </View>
            <View style={[globalStyles.one_line_view]}>
                <Image source={require('../assets/images/share.png')} style={{ marginTop: 5 }} />
                <TouchableOpacity>
                    <Text numberOfLines={1}
                        style={[globalStyles.extend_feature_text, globalStyles.habit_list_name,]}>Invite Friends</Text>
                </TouchableOpacity>
            </View>
            <View style={[globalStyles.one_line_view]}>
                <Image source={require('../assets/images/logout.png')} style={{ marginTop: 5 }} />
                <TouchableOpacity onPress={
                    ()=>navigation.navigate("ExtendFeatures",{screen:"SignIn"})
                }>
                    <Text numberOfLines={1}
                        style={[globalStyles.extend_feature_text, globalStyles.habit_list_name,]}>Logout</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

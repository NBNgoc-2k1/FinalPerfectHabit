import React, { useState } from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { globalStyles } from "../styles/globalstyle";
import colors from "../assets/colors/colors";
import PhoneInput from 'react-native-phone-number-input';
// import { authentication } from '../../config';
import { GoogleAuthProvider, signInWithRedirect, } from '@firebase/auth';
import {getAuth} from 'firebase/auth';


export default function SignIn({ navigation }) {
    const [phoneNumber,setPhoneNumber] = useState('');
    
    const auth = getAuth();
    const signInGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth,provider)
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <LinearGradient
            colors={['#888DF1', '#BCD7F2']}
            style={[globalStyles.container]}
            start={{ x: -1, y: 0.1 }}
            end={{ x: 1, y: 1 }}
        >
            {/* <TouchableOpacity style={{
                    position:'absolute',
                    top: 60,
                    right:10,
                }} 
                >
                    <Text style={{
                        backgroundColor:colors.buttonBackground,
                        padding: 10,
                        borderRadius:25,
                        width: 100,
                        textAlign:'center',
                        color: colors.textButtonBackground,
                        fontFamily:'Nunito-Sans-Bold',
                    }}>Skip</Text>
                </TouchableOpacity> */}
            <Text style={[globalStyles.input_text]}>Sign in/Sign up with phone number</Text>
            <PhoneInput
                defaultValue={phoneNumber}
                defaultCode="VN"
                onChangeFormattedText={(number) => {
                    setPhoneNumber(number)
                }}
                containerStyle={{
                    marginTop: 20,
                    color: colors.textButtonBackground,
                    borderRadius: 20,
                }}
            />
            <TouchableOpacity style={{
                marginTop: 30,
            }}
                onPress={() => { }}
            >
                <Text style={{
                    backgroundColor: colors.buttonBackground,
                    padding: 10,
                    borderRadius: 25,
                    width: 100,
                    textAlign: 'center',
                    color: colors.textButtonBackground,
                    fontFamily: 'Nunito-Sans-Bold',
                }}>Get OTP</Text>
            </TouchableOpacity>
            <View
                style={{
                    top: 205,
                    right: 100,
                    width: '30%',
                    borderBottomColor: colors.componentBackground,
                    borderBottomWidth: 2,
                    position: 'relative'
                }}
            />
            <Text style={{
                fontSize: 30,
                top: 180,
                position: 'relative'

            }}>OR</Text>
            <View
                style={{
                    top: 155,
                    left: 100,
                    width: '30%',
                    borderBottomColor: colors.componentBackground,
                    borderBottomWidth: 2,
                    position: 'relative'
                }}
            />
            <View style={[globalStyles.one_line_view, {
                position: 'absolute',
                bottom: 40,
            }]}
            >
                <TouchableOpacity
                    style={[globalStyles.navigation_icon, {
                        right: 70,
                    }]}
                    onPress={() => { }}
                >
                    <Image style={{}} source={require('../assets/images/Facebook_f_logo_(2019).svg.png')} />

                </TouchableOpacity>

                <TouchableOpacity style={[globalStyles.navigation_icon, {
                    left: 40,
                }]}
                    onPress={() => signInGoogle()}
                >
                    <Image style={{}} source={require('../assets/images/googleicon.png')} />
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );

}
import { Text, TouchableOpacity, View, } from 'react-native';
import { globalStyles } from "../styles/globalstyle";

const HeaderDetail = ({props,propsName}) => {
    return (
        <View style={[globalStyles.one_line_view]}>
            <Text
                style={[globalStyles.header_name_habit, { textAlign: 'left', width: '82%' }]}

            >{propsName}</Text>
            <TouchableOpacity onPress={props.onPress}>
                <Image source={require('../assets/images/binIcon.png')} />
            </TouchableOpacity>
        </View>
    )
}

export default HeaderDetail
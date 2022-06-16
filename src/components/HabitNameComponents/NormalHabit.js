import { Text, TouchableOpacity, View, Image } from 'react-native';
import { globalStyles } from "../../styles/globalstyle";

const NormalHabit = props => {
    const contentNormal =
        (
            <View style={[{ justifyContent: 'center', marginBottom: 20, }]}>
                <Text numberOfLines={1}
                    style={[globalStyles.text_default_size, globalStyles.habit_list_name]}>
                    {props.item.name}</Text>
            </View>
        )
    
    return <TouchableOpacity onPress={props.onPress}>{contentNormal}</TouchableOpacity>
}

export default NormalHabit
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { globalStyles } from "../../styles/globalstyle";

const MissedHabit = props => {

    const contentMiss =
        (
            <View style={[globalStyles.one_line_view,{ justifyContent: 'center', marginBottom: 20, }]}>
                <Text numberOfLines={1}
                    style={[globalStyles.text_default_size, globalStyles.habit_list_name,globalStyles.complete_miss_habit]}>
                    {props.item.name}</Text>
                <Image source={require('../../assets/images/cancel.png')}
                    style={{ marginTop: 5 }} />
            </View>
        )
    return <TouchableOpacity onPress={props.onPress}>{contentMiss}</TouchableOpacity>
}

export default MissedHabit
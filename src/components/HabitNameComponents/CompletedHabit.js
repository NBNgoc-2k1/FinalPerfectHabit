import { Text, TouchableOpacity, View, Image } from 'react-native';
import { globalStyles } from "../../styles/globalstyle";

const CompletedHabit = props => {
    const contentComplete =
        (
            <View style={[globalStyles.one_line_view,{ justifyContent: 'center', marginBottom: 20, }]}>
                <Text numberOfLines={1}
                    style={[globalStyles.text_default_size, globalStyles.habit_list_name,globalStyles.complete_miss_habit]}>
                    {props.item.name}</Text>
                <Image source={require('../../assets/images/checkedIcon.png')}
                    style={{ marginTop: 5 }} />
            </View>
        )    

    return <TouchableOpacity onPress={props.onPress}>{contentComplete}</TouchableOpacity>
}

export default CompletedHabit
import { TextInput, View, } from 'react-native';
import { globalStyles } from "../styles/globalstyle";

const HeaderUpdate = props => {
    <View style={[globalStyles.one_line_view]}>
                        <TextInput
                            style={[globalStyles.header_name_habit]}
                            autoFocus
                            onChangeText={
                                (val) =>   setnameHabit(val)
                            }
                        >{nameHabit}</TextInput>
                    </View>
}

export default HeaderUpdate
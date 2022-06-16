import { StyleSheet,Dimensions } from "react-native";
import colors from '../assets/colors/colors';

const ScreenWidth = Dimensions.get('window').width;
export const globalStyles = StyleSheet.create({
    text_default_size:{
        fontSize:25,
    },
    container:{
        zIndex:1,
        flex: 1,
        backgroundColor:'#cecece',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    component:{
        zIndex:1,
        backgroundColor:'#ffffff',
        borderRadius: 25,
        width: 340,
        height: 250,
        overflow: "scroll",
        marginTop:20,
        paddingTop:30,
    },

    title_text: {
        fontFamily: 'Nunito-Sans-Bold',
        color: '#fff',
    },

    habit_list_name:{
        paddingLeft:30,
        paddingBottom:20,
        width:300,
    },
    completed_habit_name: {
        color: '#CECECE',
    },
    footer: {
        position: 'absolute',
        flex: 0.1,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius:0,
        borderTopColor:colors.textButtonBackground,
        borderTopWidth:2,
        height: 75,
        alignItems: 'center',
    },
    fullwidth:{
        width: '100%',
    },
    one_line_view:{
        flexDirection:"row",
    },
    navigation_icon_list: {
        marginTop:-10,
        marginLeft:-150,
    },
    navigation_icon:{
        marginLeft:10,
        marginRight:10,
        maxWidth:35,
        maxHeight:35,
    },
    
    add_btn:{
        zIndex:2,
        marginBottom:40,
        marginLeft:220,
    },
    confirm_btn:{
        zIndex:2,
        bottom: -277,
        left: 120,
    },
    edit_button:{
        marginTop:20,
        marginBottom:50,
        alignItems:"center",
        justifyContent:"center",
    },  
    input_text:{
        fontFamily:"Nunito-Sans-Regular",
        fontSize:15,
    },
    habit_detail_icon:{
        marginLeft: 20,
        marginRight: 20,
    },
    time_style:{
        fontSize:20,
        marginLeft:60,
    },
    habit_attributes:{
        paddingBottom:5,
        marginTop: 20,
    },
    seperate_line:{
        borderBottomColor:colors.appBackground,
        borderBottomWidth:2,
    },  
    extend_feature_text:{
        fontSize:20,
    },  
    streak_view:{
        backgroundColor:colors.appTheme,
        marginBottom:220,
        justifyContent:"center",
        height: 100,
        borderBottomColor:colors.componentBackground,
        borderBottomWidth:3,
    },  
    number_streak:{
        fontSize:35,
        color: colors.appBackground,
        left:-20,
        paddingLeft:35,
    },
    custom_rating_bar:{
        justifyContent:'center',
        flexDirection:'row',
        marginTop:30
    },  
    star_image:{
        width: 40,
        height: 40,
        resizeMode:'cover',
    },
    header_name_habit:{
        width: '92%',// also tried '100%'
        
        fontSize:30,
        backgroundColor: 'transparent',
        color: colors.componentBackground,
        textAlign:'right',
    },
    complete_miss_habit:{
        color: '#B8B8B8',
    }
})
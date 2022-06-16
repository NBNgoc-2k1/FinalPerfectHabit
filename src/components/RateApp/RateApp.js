import {View, Modal,Text,TouchableOpacity} from 'react-native';
import colors from '../../assets/colors/colors';
import { globalStyles } from "../../styles/globalstyle";
import { useState } from "react";

export default function RateApp(modalOpen,setModalOpen) {
    const [defaultRating,setDefaultRating] = useState(2);
    const [maxRating,setMaxRating] = useState([1,2,3,4,5]);

    const starImageFilled = '../../assets/images/star_filled.png';
    const starImageCorner = '../../assets/images/star_corner.png';

    const customRatingBar = () => {
        return (
            <View style={[globalStyles.custom_rating_bar]}>
            {
                maxRating.map((item,key) => {
                    return(
                        <TouchableOpacity
                            activeOpacity={0.7}
                            key={item}
                            onPress={() => setDefaultRating(item)}
                        >
                            <Image
                                style={globalStyles.star_image}
                                source={
                                    item <= defaultRating 
                                    ? {uri: starImageFilled}
                                    : {uri: starImageCorner}
                                }
                            />
                        </TouchableOpacity>
                    )
                })
            }
            </View>
        )
    }
    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalOpen}
            onRequestClose={()=>{
                setModalOpen(!modalOpen)
            }}
        >
            <customRatingBar/>
            <TouchableOpacity style={{
            }} 
                >
                <Text style={{
                    backgroundColor:colors.buttonBackground,
                    padding: 10,
                    borderRadius:25,
                    color: colors.textButtonBackground,
                    fontFamily:'Nunito-Sans-Bold',
                }}>RATE US</Text>
            </TouchableOpacity>
        </Modal>
    )
}
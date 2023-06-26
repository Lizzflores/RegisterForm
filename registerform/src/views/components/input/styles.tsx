import { StyleSheet } from "react-native";
import COLORS from "../../../conts/colors";

const styles=StyleSheet.create({
    label:{
        marginVertical:5,
        fontSize:14,
        color: COLORS.grey,
    },
    inputContainer:{
        height:55,
        backgroundColor:COLORS.light,
        flexDirection:'row',
        paddingHorizontal: 15,
        borderWidth:0.5,
        alignItems:'center',
    }


});

export default styles;

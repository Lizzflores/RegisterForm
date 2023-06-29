import { StyleSheet } from "react-native";
import COLORS from "../../../conts/colors";

const styles=StyleSheet.create({
button:{
    height:55,
    width:'100%',
    backgroundColor:COLORS.blue,
    justifyContent:'center',
    alignItems:'center',
    marginVertical:20,
},
buttonTitle:{
    color:COLORS.white,
    fontWeight:'bold',
    fontSize: 18
}
});
export default styles;

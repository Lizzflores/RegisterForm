import React from 'react';
import {Text, View, TextInput} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../../conts/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface InputProps {
  label: string;
  iconName: string;
  placeholder: string;
  error?: string;
  password?: boolean;
  onFocus?: () => void;


}

export const Input: React.FC<InputProps> = ({
  label,
  iconName,
  error,
  password,
  onFocus,
  placeholder,
  ...props
}) => {

const [isFocused, setisFocused]=React.useState(false);
const [hidePassword, setHidePassword]=React.useState(password);

const handleonFocus=()=>{
{onFocus}
    setisFocused(true);
};
const handleBlur=()=>{
    setisFocused(false);
};
  return (
    <View style={{marginBottom: 20}}>
      <Text style={styles.label}>{label}</Text>
      <View style={[
        styles.inputContainer,
        {
            borderColor: error? COLORS.red:
            isFocused?
            COLORS.darkBlue

            :COLORS.light},]}>
        <Icon
          name={iconName}
          style={{fontSize: 22, color: COLORS.darkBlue, marginRight: 10}}
        />
        <TextInput
       secureTextEntry={hidePassword}
          placeholder={placeholder}
          autoCorrect={false}
          onFocus={handleonFocus}
          onBlur={handleBlur}
          style={{color: COLORS.darkBlue, flex: 1}}
          {...props}
        />
        {password && <Icon
        onPress={()=>setHidePassword(!hidePassword)}
         style={{fontSize:22, color: COLORS.darkBlue}} name={hidePassword?'eye-outline':'eye-off-outline'}/>}

      </View>
     { error &&
      (<Text style={{color:COLORS.red, fontSize:12, marginTop:7}}>{error}</Text>)}
    </View>
  );
};

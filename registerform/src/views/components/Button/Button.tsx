import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

interface ButtonProps{
    title:string;
    onPress?:()=>void;
}

export const Button: React.FC<ButtonProps>=({title, onPress})=>{
    return(
       <TouchableOpacity
       activeOpacity={0.7}
        onPress={onPress} style={styles.button}>
        <Text style={styles.buttonTitle}>
        {title}
        </Text>

       </TouchableOpacity>
    );
}

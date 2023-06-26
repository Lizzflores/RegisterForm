import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import COLORS from '../../conts/colors';
import {Input} from '../components/input/input';

export const RegistrationScreen = ({}) => {
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <ScrollView
        contentContainerStyle={{
          paddingTop: 50,
          paddingHorizontal: 20,
        }}>
        <Text style={{color: COLORS.black, fontSize: 40, fontWeight: 'bold'}}>
          Register
        </Text>
        <Text style={{color: COLORS.grey, fontSize: 10, marginVertical: 10}}>
          Enter Your Details to Register
        </Text>
        <View style={{marginVertical: 20}}>
          <Input
          placeholder='Enter your email address'
          iconName='email-outline'
           label='Email'

           />
          <Input
          placeholder='Enter your password'
          iconName='lock-outline'
          label='Password'
          password
           />


        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

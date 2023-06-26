import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import COLORS from '../../conts/colors';
import {Input} from '../components/input/input';
import {Button} from '../components/Button/Button';


interface RegistrationScreenProps{
    navigation:any;
}

export const RegistrationScreen:React.FC<RegistrationScreenProps> = ({navigation}) => {

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
            placeholder="Enter your email address"
            iconName="email-outline"
            label="Email"
          />
          <Input
            placeholder="Enter your fullname"
            iconName="account-outline"
            label="Fullname"
          />
           <Input
            placeholder="Enter your phone number"
            iconName="phone-outline"
            label="Phone number"
          />
          <Input
            placeholder="Enter your password"
            iconName="lock-outline"
            label="Password"
            password
          />
          <Button title="Register" />
          <Text
          onPress={()=>navigation.navigate('LoginScreen')}
            style={{
              color: COLORS.black,
              textAlign: 'center',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Already have an account? Login
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

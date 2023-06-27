import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import COLORS from '../../conts/colors';
import {Input} from '../components/input/input';
import {Button} from '../components/Button/Button';
import { Keyboard } from 'react-native';


interface RegistrationScreenProps{
    navigation:any;

}

export const RegistrationScreen:React.FC<RegistrationScreenProps> = ({navigation}) => {

    const [inputs, setInputs]=React.useState({
        email:'',
        fullname:'',
        phone:'',
        password:'',
    });

    interface FormErrors{
        email?:string;
        fullname?:string;
        phone?:string;
        password?:any;
    }
    const [errors, setErrors]=React.useState<FormErrors>({});

    const validate=()=>{
        Keyboard.dismiss();
        let valid=true;
        if(!inputs.email){
            handleError('Please input email', 'email');
            valid=true;
        }else if(!inputs.email.match(/\S+@\S+\.\S+/)){
            handleError('Please input valid email','email');
        }

        if(!inputs.fullname){
            handleError('Please input fullname', 'fullname')
        }

        if(!inputs.phone){
            handleError('Please input phone number', 'phone')
        }

        if(!inputs.password){
            handleError('Please input password', 'password')
        }else if(inputs.password.length<5){
            handleError('Min password length of 5','password')
        }

        if(valid){
            register();
        }
    };

    const register=()=>{

    }
    const handleOnChange=(text:string, input:string)=>{
        setInputs(prevState=>({...prevState, [input]:text}));
    };

    const handleError=(errorMessage:any, input:string)=>{
        setErrors(prevState=>({...prevState, [input]:errorMessage}));
    };

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
            error={errors.email}
            onFocus={()=>{
                handleError(null, 'email');
            }}
            onChangeText={(text:string) => handleOnChange(text,'email')}
          />
          <Input
            placeholder="Enter your fullname"
            iconName="account-outline"
            label="Fullname"
            error={errors.fullname}
            onFocus={()=>{
                handleError(null, 'fullname');
            }}
            onChangeText={(text:string)  => handleOnChange(text,'fullname')}
          />
           <Input
           keyboardType="numeric"
            placeholder="Enter your phone number"
            iconName="phone-outline"
            label="Phone number"
            error={errors.phone}
            onFocus={()=>{
                handleError(null, 'phone');
            }}
            onChangeText={(text:string)  => handleOnChange(text,'phone')}
          />
          <Input
            placeholder="Enter your password"
            iconName="lock-outline"
            label="Password"
            error={errors.password}
            onFocus={()=>{
                handleError(null, 'password');
            }}
            password
            onChangeText={(text:string)  => handleOnChange(text,'password')}
          />
          <Button title="Register" onPress={validate} />
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

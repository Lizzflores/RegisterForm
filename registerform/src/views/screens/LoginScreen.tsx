import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Alert,
  Keyboard,
} from 'react-native';
import COLORS from '../../conts/colors';
import {Input} from '../components/input/input';
import {Button} from '../components/Button/Button';
import {Loader} from '../components/Loader/Loader';

interface LoginScreenProps {
  navigation: any;
}

interface Inputs {
  email: string;
  password: string;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const [inputs, setInputs] = React.useState<Inputs>({
    email: '',
    password: ''
  });

  interface FormErrors {
    email?: string;
    password?: any;
  }
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [loading, setLoading] = React.useState(false);

  const validate = async () => {
    Keyboard.dismiss();
    let valid = true;
    if (!inputs.email) {
      handleError('Please input email', 'email');
      valid = false;
    }

    if (!inputs.password) {
      handleError('Please input password', 'password');
      valid = false;
    }

    if (valid) {
      login();
    }
  };

  interface UserData {
    email: string;
    password: string;
  }

  const login = () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);

      let userData = await AsyncStorage.getItem('userData');

      if (userData) {
        let parsedUserData: UserData = JSON.parse(userData);
        if (
          inputs.email === parsedUserData.email &&
          inputs.password === parsedUserData.password
        ) {

           AsyncStorage.setItem(
            'userData',
            JSON.stringify({...parsedUserData, loggedIn: true}),

          );
          navigation.navigate('HomeScreen');
        } else {
          Alert.alert('Error', 'Invalid Details');
        }
      } else {
        Alert.alert('Error', 'User does not exist');
      }
    }, 2000);
  };
  const handleOnChange = (text: string, input: string) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (errorMessage: any, input: string) => {
    setErrors(prevState => ({...prevState, [input]: errorMessage}));
  };

  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <Loader visible={loading} />
      <ScrollView
        contentContainerStyle={{
          paddingTop: 50,
          paddingHorizontal: 20,
        }}>
        <Text style={{color: COLORS.black, fontSize: 40, fontWeight: 'bold'}}>
          Login
        </Text>
        <Text style={{color: COLORS.grey, fontSize: 10, marginVertical: 10}}>
          Enter Your Details to Login
        </Text>
        <View style={{marginVertical: 20}}>
          <Input
            placeholder="Enter your email address"
            iconName="email-outline"
            label="Email"
            error={errors.email}
            onFocus={() => {
              handleError(null, 'email');
            }}
            onChangeText={(text: string) => handleOnChange(text, 'email')}
          />

          <Input
            placeholder="Enter your password"
            iconName="lock-outline"
            label="Password"
            error={errors.password}
            onFocus={() => {
              handleError(null, 'password');
            }}
            password
            onChangeText={(text: string) => handleOnChange(text, 'password')}
          />
          <Button title="Login" onPress={validate} />
          <Text
            onPress={() => navigation.navigate('RegistrationScreen')}
            style={{
              color: COLORS.black,
              textAlign: 'center',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Don't have an account? Register
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

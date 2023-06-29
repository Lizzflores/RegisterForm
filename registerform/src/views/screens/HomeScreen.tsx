import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {Text, View} from 'react-native';
import {Button} from '../components/Button/Button';

interface HomeScreenProps {
  navigation: any;
}

interface UserDetails {
  fullname: string;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [userDetails, setUserDetails] = React.useState<UserDetails>();

  React.useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    const user = await AsyncStorage.getItem('userData');

    if (user) {
      setUserDetails(JSON.parse(user) as UserDetails);
    }
  };

  const logOut = async () => {
    AsyncStorage.setItem(
      'userData',
      JSON.stringify({...userDetails, loggedIn: false}),
    );
    navigation.navigate('LoginScreen');
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 40,
      }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        Welcome {userDetails?.fullname}
      </Text>
      <Button title="LogOut" onPress={logOut} />
    </View>
  );
};

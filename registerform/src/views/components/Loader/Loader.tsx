import React from 'react';
import {View, Text, useWindowDimensions, ActivityIndicator} from 'react-native';
import styles from './styles';
import COLORS from '../../../conts/colors';

interface LoaderProps {
  visible: boolean;
}

export const Loader: React.FC<LoaderProps> = ({visible}) => {
  const {height, width} = useWindowDimensions();
  return (
    <View>
         {visible && (
      <View style={[styles.container, {height, width}]}>
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={COLORS.blue} />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      </View>
    )}
    </View>

  );
};

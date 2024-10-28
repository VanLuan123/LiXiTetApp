import React from 'react';
import { StyleSheet, Text, StyleProp, ViewStyle, TextStyle , TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export interface FlatButtonProps {
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  title?: string;
  onPress?: () => void;
}

const  _FlatButton: React.FC<FlatButtonProps> = (props) => {
  const { title, onPress, containerStyle, titleStyle } = props;
  return (
    <TouchableOpacity onPress={onPress} style={StyleSheet.flatten([styles.container, containerStyle])}>
      <LinearGradient colors={['#FFF613', '#F37500']} style={styles.linearGradient}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 179,
    height: 44,
    borderRadius: 18,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'SVN-Gotham Bold',
  },
});

export const  FlatButton = React.memo( _FlatButton);

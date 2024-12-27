import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: 'primary' | 'secondary' | 'link'; // Add button types here
  style?: ViewStyle;
  textStyle?: TextStyle;
  prefix?: JSX.Element;
  suffix?: JSX.Element;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  disabled = false,
  loading = false,
  type = 'primary', // Default to 'primary'
  style,
  textStyle,
  prefix,
  suffix,
}) => {
  const getButtonStyles = () => {
    switch (type) {
      case 'link':
        return [styles.linkButton, style];
      case 'secondary':
        return [styles.secondaryButton, style];
      case 'primary':
      default:
        return [styles.button, disabled && styles.disabledButton, style];
    }
  };

  const getTextStyles = () => {
    switch (type) {
      case 'link':
        return [styles.linkText, textStyle];
      case 'secondary':
        return [styles.secondaryButtonText, textStyle];
      case 'primary':
      default:
        return [styles.buttonText, textStyle];
    }
  };

  return (
    <TouchableOpacity
      style={getButtonStyles()}
      onPress={onPress}
      disabled={disabled || loading}>
      {prefix && !loading && prefix}
      {loading && type === 'primary' ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={getTextStyles()}>{title}</Text>
      )}
      {suffix && !loading && suffix}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#5626E1',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Manrope-Bold',
  },
  secondaryButton: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    flexDirection: 'row',
    gap: 12,
  },
  secondaryButtonText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Manrope-Bold',
  },
  disabledButton: {
    backgroundColor: '#9E9E9E',
  },
  linkButton: {
    backgroundColor: 'transparent',
    marginBottom: 5,
  },
  linkText: {
    color: '#000',
    fontSize: 14,
    fontFamily: 'Manrope-Bold',
  },
});

export default Button;

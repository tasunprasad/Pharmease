import React from 'react';
import {Control, Controller} from 'react-hook-form';
import {
  TextInput as Input,
  StyleSheet,
  Text,
  TextInputProps,
  View,
} from 'react-native';

interface TextInput extends TextInputProps {
  control: Control<any>;
  name: string;
  label?: string;
  rules?: {
    required?: boolean | string;
    pattern?: {
      value: RegExp;
      message: string;
    };
    minLength?: {
      value: number;
      message: string;
    };
    maxLength?: {
      value: number;
      message: string;
    };
  };
}

const TextInput = ({
  control,
  name,
  label,
  rules,
  placeholder,
  secureTextEntry,
}: TextInput) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
        <View>
          {label && <Text style={styles.label}>{label}</Text>}
          <Input
            style={[styles.input, error && styles.inputError]}
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry={secureTextEntry}
            placeholderTextColor="#818181"
          />
          {error && <Text style={styles.errorText}>{error.message}</Text>}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Manrope-Medium',
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontFamily: 'Manrope-Medium',
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
    fontFamily: 'Manrope-Medium',
  },
});

export default TextInput;

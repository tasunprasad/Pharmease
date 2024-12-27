import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {useForm} from 'react-hook-form';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from '../components/Button';
import Icon from '../components/Icon';
import {appleLogo, facebookLogo, googleLogo} from '../components/Icon/Icons';
import TextInput from '../components/TextInput';
import {AuthStackParamList} from '../navigation/AuthNavigator';

type AuthStackNavigationProp = NativeStackNavigationProp<AuthStackParamList>;

interface LoginForm {
  email: string;
  password: string;
}

const LogIn = () => {
  const navigation = useNavigation<AuthStackNavigationProp>();
  const {control, handleSubmit} = useForm<LoginForm>();

  function onSubmit(formData: LoginForm) {
    console.log({formData});
  }

  return (
    <View style={styles.page}>
      <View style={styles.bannerContainer}>
        <ImageBackground
          source={require('../assets/images/login-header-bg.png')}
          style={styles.banner}
        />
      </View>
      <ScrollView>
        <View style={styles.formContainer}>
          <TextInput
            name="email"
            label="Email"
            placeholder="Enter your email"
            control={control}
          />
          <TextInput
            name="password"
            label="Password"
            placeholder="Enter your password"
            control={control}
          />
          <Button title={'Forgot password?'} onPress={() => {}} type="link" />
          <Button title={'Login'} onPress={() => handleSubmit(onSubmit)} />
          <View style={styles.divider}>
            <View style={styles.line} />
            <Text style={styles.text}>OR</Text>
            <View style={styles.line} />
          </View>
          <Button
            title={'Continue with Google'}
            onPress={() => {}}
            type="secondary"
            prefix={<Icon icon={googleLogo} />}
          />
          <Button
            title={'Continue with Facebook'}
            onPress={() => {}}
            type="secondary"
            prefix={<Icon icon={facebookLogo} />}
          />
          <Button
            title={'Continue with Apple'}
            onPress={() => {}}
            type="secondary"
            prefix={<Icon icon={appleLogo} />}
          />
          <View style={styles.linkTextContainer}>
            <Text style={styles.text}>Don’t have an account?</Text>
            <Button
              title={'Register'}
              onPress={() => navigation.navigate('Register')}
              type="link"
              textStyle={styles.linkText}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  bannerContainer: {
    height: '26%',
  },
  banner: {
    height: '100%',
  },
  formContainer: {
    flex: 1,
    gap: 15,
    margin: 20,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  text: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Manrope-Regular',
  },
  linkTextContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  linkText: {
    color: '#5626E1',
  },
});

export default LogIn;

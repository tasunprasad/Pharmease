import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {useForm} from 'react-hook-form';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../components/Button';
import CheckBoxInput from '../components/CheckBox';
import TextInput from '../components/TextInput';
import {AuthStackParamList} from '../navigation';

type AuthStackNavigationProp = NativeStackNavigationProp<AuthStackParamList>;

interface LoginForm {
  email: string;
  password: string;
}

const Register = () => {
  const navigation = useNavigation<AuthStackNavigationProp>();
  const {control, handleSubmit} = useForm<LoginForm>();

  function onSubmit(formData: LoginForm) {
    console.log({formData});
  }

  return (
    <View style={styles.page}>
      <View style={styles.bannerContainer}>
        <ImageBackground
          source={require('../assets/images/register-header-bg.png')}
          style={styles.banner}
        />
      </View>
      <ScrollView>
        <View style={styles.formContainer}>
          <TextInput
            name="firstName"
            label="First name"
            placeholder="Enter your first name"
            control={control}
          />
          <TextInput
            name="lastName"
            label="Last name"
            placeholder="Enter your last name"
            control={control}
          />
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
          <TextInput
            name="confirmpassword"
            label="Confirm password"
            placeholder="Re enter your password"
            control={control}
          />
          <CheckBoxInput
            control={control}
            name="agreeToTerms"
            label={
              <View style={styles.termsLinkTextContainer}>
                <Text style={styles.text}>
                  I have read and agree with PharmEase
                </Text>
                <TouchableOpacity>
                  <Text style={styles.linkText}>Terms and Conditions</Text>
                </TouchableOpacity>
              </View>
            }
          />
          <Button title={'Next'} onPress={() => handleSubmit(onSubmit)} />
          <View style={styles.linkTextContainer}>
            <Text style={styles.text}>Already have an account?</Text>
            <Button
              title={'Login'}
              onPress={() => navigation.navigate('LogIn')}
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
  termsLinkTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 5,
  },
  linkTextContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 5,
  },
  linkText: {
    fontSize: 14,
    color: '#5626E1',
    textAlign: 'center',
    fontFamily: 'Manrope-Bold',
  },
});

export default Register;

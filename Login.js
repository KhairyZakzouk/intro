import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  StatusBar,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Login = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const [pass, setPass] = useState('');

  return (
    <>
      <StatusBar
        backgroundColor={'#fff'}
        barStyle={'dark-content'}
        translucent={true}
      />
      <View style={styles.container}>
        <Text style={styles.text}>تسجيل الدخول</Text>
        <Text style={styles.text1}>مرحبا بعودتك</Text>

        {/* TextInput  */}

        <View>
          <Text style={[styles.text1, {color: '#000', marginBottom: 15}]}>
            رقم الهاتف
          </Text>
          <View style={styles.ViewInput}>
            <TextInput
              placeholder="0108764598"
              keyboardType="numeric"
              value={phone}
              onChangeText={value => {
                setPhone(phone);
              }}
              placeholderTextColor="#878787"
              style={{
                color: '#878787',
                fontSize: 18,
                textAlign: 'right',
              }}
            />
            <Icon
              name="phone"
              color="#878787"
              size={17}
              style={{
                transform: [
                  {
                    rotate: '90deg',
                  },
                ],
              }}
            />
          </View>
        </View>
        <View>
          <Text style={[styles.text1, {color: '#000', marginBottom: 15}]}>
            كلمة السر
          </Text>
          <View style={styles.ViewInput}>
            <TextInput
              placeholder="********"
              value={pass}
              onChangeText={value => {
                setPass(value);
              }}
              placeholderTextColor="#878787"
              style={{
                color: '#878787',
                fontSize: 18,
                textAlign: 'right',
              }}
            />
            <Icon name="eye-slash" color="#878787" size={17} />
          </View>
        </View>
        <Text
          style={[
            styles.text1,
            {color: '#878787', marginTop: 10, textAlign: 'right', fontSize: 15},
          ]}>
          نسيت كلمة السر
        </Text>

        {/* TextInput  */}

        <TouchableOpacity style={styles.btn} onPress={() => {}}>
          <Text style={styles.btnText}>تسجيل الدخول</Text>
        </TouchableOpacity>

        <Text
          style={[
            styles.text1,
            {
              color: '#878787',
              textAlign: 'center',
              fontSize: 12,
            },
          ]}>
          التسجيل بواسطة وصائل التواصل الاجتماعي
        </Text>

        <View style={styles.viewIcon}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../img/facebook.png')} />
            <Text style={[styles.text1, styles.textIcon]}>ليس لدي حساب</Text>
          </View>
          <View>
            <Image source={require('../img/google.png')} />
            <Text style={[styles.text1, styles.textIcon]}>انشاء حساب</Text>
          </View>
        </View>

        <TouchableOpacity
          style={[
            styles.btn,
            {
              backgroundColor: '#fff',
              borderColor: '#385898',
              borderWidth: 1,
              marginTop: 35,
            },
          ]}
          onPress={() => {}}>
          <Text style={[styles.btnText, {color: '#385898'}]}>تصفح كزائر</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingHorizontal: 15,
  },
  text: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 30,
    textAlign: 'center',
  },
  text1: {
    color: '#385898',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 30,
  },
  ViewInput: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    paddingHorizontal: 15,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    elevation: 6,
  },
  btn: {
    width: '100%',
    height: 50,
    backgroundColor: '#385898',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    alignSelf: 'center',
  },
  viewIcon: {
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 150,
    justifyContent: 'space-between',
    marginTop: 40,
  },
  textIcon: {
    color: '#385898',
    textAlign: 'center',
    fontSize: 12,
    marginTop: 15,
  },
});

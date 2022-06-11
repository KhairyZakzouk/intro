import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';

const Intro = ({navigation}) => {
  return (
    <>
      <StatusBar
        backgroundColor={'#fff'}
        barStyle={'dark-content'}
        translucent={true}
      />
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={styles.container}>
          <Image
            resizeMode="cover"
            source={require('../img/Frame.png')}
            style={{width: 300, height: 300}}
          />
          <Text style={styles.text}>ابحث عن خدمتك!</Text>
          <Text style={styles.text1}>باقل مجهود ووقت وبالسعر</Text>
          <Text style={styles.text1}>اللي يناسبك</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={styles.btnText}>استمرار</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={styles.skip}>تخطي</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
export default Intro;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 120,
  },
  text: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 30,
  },
  text1: {
    color: 'gray',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 10,
  },
  btn: {
    width: '90%',
    height: 50,
    backgroundColor: '#385898',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  btnText: {
    fontSize: 17,
    color: '#fff',
  },
  skip: {
    color: '#385898',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

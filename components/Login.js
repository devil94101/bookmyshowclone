import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Input} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class Login extends Component {

  async componentDidMount() {
    try {
      const name = await AsyncStorage.getItem('name');
      const email = await AsyncStorage.getItem('email');
      console.log(name)
     if(name!==null&&email!==null){
      this.props.navigation.replace('Home');

     }
    } catch (e) {
      console.log(e);
    }
  }




  render() {
    return (
      <View>
        <View style={styles.bookmyshow}>
          <Image
            style={styles.bookmyshowlogo}
            source={require('./images/bookmyshow.png')}
          />
        </View>

        <View style={styles.loginBoxView}>
          <View style={styles.loginBox}>
            <Text
              onPress={() => this.props.navigation.navigate('Login')}
              style={styles.loginBoxText}>
              Login with Email
            </Text>
          </View>
        </View>
        <View style={styles.signup}>
          <Text style={styles.sign}>OR don't have a account?</Text>
          <Text
            onPress={() => this.props.navigation.navigate('SignUp')}
            style={styles.signupText}>
            {' '}
            SignUp
          </Text>
          <Text style={styles.sign}></Text>
        </View>

        <Image
          style={styles.banner}
          source={{
            uri:
              'https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/lead-in-v3-collection-202102040828.png',
            width: '100%',
            height: 38,
          }}
        />

        <View style={styles.agree}>
          <Text style={styles.agreeText}>
            I agree to the Terms {'&'} conditions and Privacy Policy
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    elevation: 4,
  },
  bookmyshow: {
    marginTop: 100,
    marginBottom: 50,
  },
  bookmyshowlogo: {
    width: '100%',
    height: 80,
  },

  text: {
    fontWeight: 'bold',
  },

  loginBoxView: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },

  loginBox: {
    marginTop: 105,
    width: '90%',
    height: 45,
    marginTop: -15,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    flexDirection: 'row',
    alignItems: 'flex-end',
    // justifyContent:'center'
  },
  loginBoxText: {
    color: 'grey',
    marginBottom: 3,
    fontSize: 15,
    marginLeft: 4,
  },
  agree: {
    position: 'absolute',
    top: '102%',
    left: 30,
    color: 'grey',
  },
  agreeText: {
    color: 'grey',
  },
  banner: {
    marginTop: 200,
  },
  signup: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {
    color: 'blue',
  },
  sign: {
    color: 'grey',
  },
});

export default Login;

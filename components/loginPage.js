import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ActivityIndicator,
  Image,
} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';



export class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: false,
      loading: false,
    };
  }

  error = () => {
    console.log('ham ab yaha hai');
  };

  CheckLogin = () => {
    this.setState({
      loading: true,
    });
    console.log('here');
    console.log(this.state.email);
    console.log(this.state.password);

    axios
      .post('https://bookmyshow-clone.herokuapp.com/login', {
        email: this.state.email,
        password: this.state.password,
      })
      .then( async response => {
        console.log('login data response----->',response.data.data.name)
        console.log('logged in');
        try {
          await AsyncStorage.setItem('name', response.data.data.name)
          await AsyncStorage.setItem('email', this.state.email)
          console.log('data saved to local storage')
        } catch (e) {
          console.log('saving error');
        }
        this.setState({
          error: false,
          loading: false,
        });
      

        this.props.navigation.navigate('Home');
      })
      .catch(error => {
        console.log('error in logging in');
        this.setState({
          error: true,
          loading: false,
        });
       
      });
  };

  render() {
    return (
      <KeyboardAwareScrollView
        innerRef={ref => {
          this.scroll = ref;
        }}>
      <View>
        <View>
          <Text style={styles.headerText}>Login With Email</Text>
        </View>

        <Text style={styles.mobileNumber}>Email</Text>
        <View style={styles.Input}>
          <TextInput
            onChangeText={email =>
              this.setState({email: email}, () => console.log(this.state.email))
            }
            style={styles.inputBox}
          />
        </View>

        <View>
          <Text style={styles.mobileNumber}>Password</Text>
          <View style={styles.Input}>
            <TextInput
              onChangeText={password =>
                this.setState({password: password}, () =>
                  console.log(this.state.email),
                )
              }
              style={styles.password}
              secureTextEntry={true}
            />
          </View>
        </View>
        {this.state.error && (
          <Text style={styles.incorrect}>incorrect email or password</Text>
        )}

        {/* <View style={styles.continueBtnView}>
          <Button onPress={()=>this.props.navigation.navigate('SignUp')} color="red" style={styles.continueBtn} title="sadsd" />
        </View> */}
       

        <View style={styles.signup}>
          <Text style={styles.sign}>---- OR don't have a account?</Text>
          <Text
            onPress={() => this.props.navigation.navigate('SignUp')}
            style={styles.signupText}>
            {' '}
            SignUp
          </Text>
          <Text style={styles.sign}> ----</Text>
        </View>
        <View style={styles.bookmyshow}>
          <Image
            style={styles.bookmyshowlogo}
            source={require('./images/bookmyshow.png')}
          />
        </View>
        <View style={styles.continueBtnView}>
          {this.state.loading ? (
            <ActivityIndicator
              style={{padding: 16.5}}
              size="large"
              color="#ed5a6b"
            />
          ) : (
            <Button
              onPress={() => this.CheckLogin()}
              color="red"
              style={styles.continueBtn}
              title="Continue"
            />
          )}
        </View>
      </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    marginTop: 30,
    marginLeft: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
  mobileNumber: {
    marginTop: 40,
    marginLeft: 22,
    marginBottom: 5,
    color: 'grey',
  },

  Input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    width: '90%',
    height: 55,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
  },
  password: {
    width: '90%',
    height: 55,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
  },
  continueBtnView: {

    width: '90%',
    height: '45%',
    left: '5%',
    height: 70,
    marginTop:30
  },
  continueBtn: {
    height: '45%',
    backgroundColor: 'red',
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
  incorrect: {
    marginLeft: 20,
    color: 'red',
  },
  bookmyshow: {
    marginTop: 80,
    marginBottom: 10,
   
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bookmyshowlogo: {
    width: '80%',
    height: 70,
  },
});

export default LoginPage;

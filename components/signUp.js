import {forModalPresentationIOS} from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ActivityIndicator,
  Image
} from 'react-native';
import axios from 'axios';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      passwordMatchError: false,
      loading: false,
    };
  }

  createAccount = () => {
    this.setState({
      loading: true,
    });
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        passwordMatchError: true,
        loading: false,
      });
    } else {
      this.setState({
        passwordMatchError: false,
      });

      axios
        .post('https://bookmyshow-clone.herokuapp.com/signup', {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
        })
        .then(async response => {
          console.log('passed');
          // console.log(response);
          this.setState({
            loading: false,
          });
          try {
            await AsyncStorage.setItem('name', this.state.name)
            await AsyncStorage.setItem('email', this.state.email)
            console.log('data saved to local storage')
          } catch (e) {
            console.log('saving error');
          }
          this.props.navigation.navigate('Home');
        })
        .catch(error => {
          console.log(error);
          this.setState({
            loading: false,
          });
        });
    }
  };

  render() {
    return (
      <KeyboardAwareScrollView
        innerRef={ref => {
          this.scroll = ref;
        }}>
        <View>
          <View>
            <View style={styles.bookmyshow}>
              <Image
                style={styles.bookmyshowlogo}
                source={require('./images/bookmyshow.png')}
              />
            </View>
            <Text style={styles.mobileNumber}>Name</Text>
            <View style={styles.Input}>
              <TextInput
                onChangeText={name => this.setState({name: name})}
                style={styles.password}
              />
            </View>
          </View>

          <View>
            <Text style={styles.mobileNumber}>Email</Text>
            <View style={styles.Input}>
              <TextInput
                onChangeText={email => this.setState({email: email})}
                style={styles.password}
              />
            </View>
          </View>

          <View>
            <Text style={styles.mobileNumber}>Password</Text>
            <View style={styles.Input}>
              <TextInput
                onChangeText={password => this.setState({password: password})}
                style={styles.password}
                secureTextEntry={true}
              />
            </View>
            {this.state.passwordMatchError && (
              <Text style={styles.incorrect}>Password not matched</Text>
            )}
          </View>

          <View>
            <Text style={styles.mobileNumber}>Confirm Password</Text>
            <View style={styles.Input}>
              <TextInput
                onChangeText={confirmPassword =>
                  this.setState({confirmPassword: confirmPassword})
                }
                style={styles.password}
                secureTextEntry={true}
              />
            </View>
            {this.state.passwordMatchError && (
              <Text style={styles.incorrect}>Password not matched</Text>
            )}
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
                onPress={() => this.createAccount()}
                color="red"
                style={styles.continueBtn}
                title="Register"
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
    marginTop: 25,
    marginLeft: 22,
    marginBottom: 5,
    color: 'grey',
  },
  startNum: {
    fontSize: 20,
  },

  Input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
    marginTop: '20%',
  },
  continueBtn: {
    height: '45%',
    backgroundColor: 'red',
  },
  incorrect: {
    marginLeft: 20,
    color: 'red',
  },
  bookmyshow: {
    marginTop: 20,
   
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bookmyshowlogo: {
    width: '60%',
    height: 50,
  },
});

export default SignUp;

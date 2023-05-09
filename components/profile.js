import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import TabMain from './TabMain';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';




export class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: 'guest',
      useremail: '',
    };
  }

    logout = async () => {
    
            try {
              await AsyncStorage.removeItem('name');
              await AsyncStorage.removeItem('email');
            } catch(e) {
              console.log('error in removing data')
            }
          
            console.log('Done.')
            this.props.navigation.navigate('Login')
          

};


  async componentDidMount() {
    try {
      const name = await AsyncStorage.getItem('name');
      const email = await AsyncStorage.getItem('email');
      this.setState({
        user: name,
        useremail: email,
      });
      console.log('got the data', name, email);
      if (name !== null) {
        // value previously stored
        (name = 'guest'), (email = '');
      }
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <View style={{flex: 0.91}}>
        <View style={{height: '100%', flexDirection: 'row',justifyContent:'space-around'}}>
          <Icon
            style={{
              marginLeft: 10,
              marginTop: 10,
            }}
            name="user"
            size={80}
            color="black"
          />
          <View style={{ flexDirection: 'column'}}>
            <Text style={{marginTop: 20, fontSize: 30, fontWeight: 'bold'}}>
              {this.state.user}
            </Text>
            <Text style={{marginLeft: 2, color: 'grey'}}>
              {this.state.useremail}
            </Text>
          </View>
          <TouchableOpacity onPress={() => this.logout()}>
            <Icon
              style={{marginLeft: 10, marginTop: 25}}
              name="sign-out"
              size={50}
              color="blue"
            />
          </TouchableOpacity>
        </View>

        {/* do not touch  */}
        <View style={{flex: 0.09}}>
          <TabMain navigation={this.props.navigation} />
        </View>
      </View>
    );
  }
}

export default Profile;

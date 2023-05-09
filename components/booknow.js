import React, {Component} from 'react';
import {View, Text, TouchableOpacity,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class Booknow extends Component {
  constructor(props) {
    super(props);
    

    this.state = {
      showId: this.props.route.params.data1.idShow,
      price:this.props.route.params.data1.price,
      theaterData: [],
    };
  }

  async componentDidMount() {
    console.log(this.state.showId);
    const theaterData = axios
      .get(
        `https://bookmyshow-clone.herokuapp.com/allShowAllTheater?showId=${this.state.showId}`,
      )
      .then(response => {
        console.log('theater data', response.data.data[0].id_theater_theaters);
        this.setState({
          theaterData: response.data.data[0].id_theater_theaters,
        });
      });
      try {
        await AsyncStorage.setItem('price',this.state.price.toString())
        
        console.log('data saved to local storage')
      } catch (e) {
        console.log('saving error')
      }
  }

  render() {
    const city = this.props.route.params.data1.city
    console.log(this.props.route.params.data1);
    const theaters = this.state.theaterData.map(theater => {
      return (
        <View
          style={{
            marginTop: 30,
            backgroundColor: 'white',
            width: '92%',
            height: 150,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
            elevation: 8,
            borderRadius: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Icon
              style={{marginLeft: 10, marginTop: 25,marginRight:15,marginLeft:10}}
              name="heart"
              size={30}
              color="red"

            />
            <View style={{flexDirection:'column'}}>
            <Text
              style={{
                marginTop: 20,
                fontSize: 15,
                fontWeight: 'bold',
                letterSpacing: 0.5,
              }}>
              {theater.name},
            </Text>
            <Text
              style={{
              
                fontSize: 15,
                fontWeight: 'bold',
                letterSpacing: 0.5,
              }}>
              {city}
            </Text>
            </View>
           
          </View>
         
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        
            <TouchableOpacity
              onPress={() => this.props.navigation.push('Select Seats',{theaterName:theater.name})}>
              <View
                style={{
                  marginTop: 25,
                  backgroundColor: 'white',
                  width: 90,
                  height: 40,
                  borderWidth: 0.5,
                  borderColor: 'grey',
                  borderRadius: 2,
                  shadowColor: '#000',
                  shadowOpacity: 0.23,
                  shadowRadius: 2.62,
                  elevation: 5,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: '#f84464', fontWeight: 'bold'}}>
                  02.50 PM
                </Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                marginTop: 25,
                backgroundColor: 'white',
                width: 90,
                height: 40,
                borderWidth: 0.5,
                borderColor: 'grey',
                borderRadius: 2,
                shadowColor: '#000',
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
                elevation: 5,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#f84464', fontWeight: 'bold'}}>
                02.50 PM
              </Text>
            </View>
            <View
              style={{
                marginTop: 25,
                backgroundColor: 'white',
                width: 90,
                height: 40,
                borderWidth: 0.5,
                borderColor: 'grey',
                borderRadius: 2,
                shadowColor: '#000',
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
                elevation: 5,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#f84464', fontWeight: 'bold'}}>
                02.50 PM
              </Text>
            </View>
          </View>
        </View>
      );
    });

    return (
      <View style={{backgroundColor: '#f2f2f2;'}}>
        <ScrollView
        showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          {theaters}
        </View>
        </ScrollView>
      </View>
    );
  }
}

export default Booknow;

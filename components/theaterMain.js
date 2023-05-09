import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

import NumberSeats from './numberSeats';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class TheaterMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seats: true,
      seatsData: [],
      price: 0,
      seatArray: [],
      theaterName: this.props.route.params.theaterName,
    };
  }
  numberDisable = () => {
    this.setState({
      seats: false,
    });
  };

  async componentDidMount() {
    console.log(
      'this is name of the theater',
      this.state.theaterName.slice(0, 3),
    );
    const price = await AsyncStorage.getItem('price');
    console.log('ye hai price', parseInt(price));
    axios
      .get(
        `https://bookmyshow-clone.herokuapp.com/theaterTable?theaterName=${this.state.theaterName.slice(
          0,
          3,
        )}`,
      )
      .then(response => {
        this.setState({
          seatsData: response.data.data,
        });
        console.log('seat---->', response.data.data);
      });
  }

  async add(seat) {
    const price1 = await AsyncStorage.getItem('price');
    const price = parseInt(price1);
    this.setState(
      {
        price: this.state.price + price,
        seatArray: this.state.seatArray.concat(seat),
      },
      () => console.log(this.state.seatArray),
    );
  }

  sendSeats = () => {
    axios
      .post(
        `https://bookmyshow-clone.herokuapp.com/theaterTable?theaterName=${this.state.theaterName.slice(
          0,
          3,
        )}`,
        {
          seatName: this.state.seatArray,
        },
      )
      .then(response => console.log('success'))
      .catch(e => console.log('errorrrrrrrrrrr'));
  };

  render() {
    const left = this.state.seatsData.map(seats => {
      if (seats.seats.includes('L')) {
        if (seats.status == 'booked') {
          return (
            <View
              style={{
                backgroundColor: 'grey',
                width: 50,
                height: 50,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 12,
              }}>
              <Text>{seats.seats}</Text>
            </View>
          );
        } else
          return (
            <View
              onTouchEnd={() => this.add(seats.seats)}
              style={{
                backgroundColor: 'white',
                width: 50,
                height: 50,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 12,
              }}>
              {this.state.seatArray.includes(seats.seats) ? (
                <Text>Pen</Text>
              ) : (
                <Text>{seats.seats}</Text>
              )}
            </View>
          );
      }
    });

    const medium = this.state.seatsData.map(seats => {
      if (seats.seats.includes('M')) {
        if (seats.status == 'booked') {
          return (
            <View
              style={{
                backgroundColor: 'grey',
                width: 50,
                height: 50,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 12,
              }}>
              <Text>{seats.seats}</Text>
            </View>
          );
        } else
          return (
            <View
              onTouchEnd={() => this.add(seats.seats)}
              style={{
                backgroundColor: 'white',
                width: 50,
                height: 50,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 12,
              }}>
              {this.state.seatArray.includes(seats.seats) ? (
                <Text>Pen</Text>
              ) : (
                <Text>{seats.seats}</Text>
              )}
            </View>
          );
      }
    });

    const premium = this.state.seatsData.map(seats => {
      if (seats.seats.includes('P')) {
        if (seats.status == 'booked') {
          return (
            <View
              style={{
                backgroundColor: 'grey',
                width: 50,
                height: 50,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 12,
              }}>
              {this.state.seatArray.includes(seats.seats) ? (
                <Text>Pen</Text>
              ) : (
                <Text>{seats.seats}</Text>
              )}
            </View>
          );
        } else
          return (
            <View
              onTouchEnd={() => this.add(seats.seats)}
              style={{
                backgroundColor: 'white',
                width: 50,
                height: 50,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 12,
              }}>
              {this.state.seatArray.includes(seats.seats) ? (
                <Text>Pen</Text>
              ) : (
                <Text>{seats.seats}</Text>
              )}
            </View>
          );
      }
    });

    return (
      <View>
        {this.state.seats ? (
          <NumberSeats numberD={this.numberDisable} />
        ) : (
          // main
          <View style={{marginTop: 30, marginLeft: 20}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={{flexDirection: 'row'}}>
                {/* left section */}
                <ScrollView>
                  <View
                    style={{
                      backgroundColor: '#f84464',
                      width: 150,

                      flexDirection: 'row',
                      flexWrap: 'wrap',
                    }}>
                    {left}
                  </View>
                </ScrollView>
                <View style={{flexDirection: 'column'}}>
                  {/* middle section */}
                  <View
                    style={{
                      backgroundColor: '#f84464',
                      width: 600,
                      height: 250,
                      marginLeft: 20,
                      marginRight: 20,
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                    }}>
                    {medium}
                  </View>

                  {/* preimium section */}
                  <View
                    style={{
                      backgroundColor: '#f84464',
                      width: 600,
                      marginLeft: 20,
                      marginTop: 10,
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                    }}>
                    {premium}
                  </View>
                </View>
              </View>
            </ScrollView>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20,
              }}>
              <Text style={{fontSize: 20, fontWeight: '400', marginRight: 10}}>
                Fare:
              </Text>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: '400',
                  marginRight: 10,
                  color: 'red',
                }}>
                {'₹'}
                {this.state.price}
              </Text>
            </View>
            <TouchableOpacity>
              <View
                onTouchEnd={() => this.sendSeats()}
                style={{
                  width: '95%',
                  height: 50,
                  backgroundColor: 'red',
                  marginTop: 100,
                  borderRadius: 5,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
                  BOOK TICKETS
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

export default TheaterMain;

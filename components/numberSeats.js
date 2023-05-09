import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export class NumberSeats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Number: 1,
      price:0
    };
  }

    async componentDidMount(){
      const price = await AsyncStorage.getItem('price')
      this.setState({
        price:price
      })
    }
  render() {
    const uri = [
      'https://cdn.pixabay.com/photo/2020/04/30/12/54/cycle-5112753_1280.png',
      'https://assets.stickpng.com/images/580b585b2edbce24c47b2d1c.png',
      'https://i.pinimg.com/originals/9d/47/a1/9d47a18187371874d5ec4c142619cb18.png',
      'https://freepikpsd.com/wp-content/uploads/2019/10/cartoon-car-png-2-Transparent-Images.png',
      'https://i.pinimg.com/originals/c9/3e/91/c93e91287bd0df966a07531d71c6dc5e.png',
      'https://i.pinimg.com/originals/c9/3e/91/c93e91287bd0df966a07531d71c6dc5e.png',
      'https://static.vecteezy.com/system/resources/previews/001/193/896/non_2x/suv-car-png.png',
      'https://lh3.googleusercontent.com/proxy/UYQi3qPmE12vi-ELSSeUcU1fuCR5nbZ7SG5ZLvcEfO2xrNY660Pfrx23B5AttHLc2UvyDBZ6uC3GFi1cFzMgnfC5koG9dKs',
      'https://freepikpsd.com/wp-content/uploads/2019/10/cartoon-bus-png-Transparent-Images-Free.png',
      'https://freepikpsd.com/wp-content/uploads/2019/10/cartoon-bus-png-Transparent-Images-Free.png',
    ];

    const image = uri.map((image, index) => {
      return (
        <View>
          {this.state.Number == index + 1 && (
            <Image
              style={{width: 200, height: 110, marginLeft: 90, marginTop: 30}}
              source={{
                uri: image,
              }}
            />
          )}
        </View>
      );
    });
    const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const Numbers = digits.map(digit => {
      return this.state.Number == digit ? (
        <View
          style={{
            backgroundColor: '#f84464',
            width: 30,
            height: 30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
          }}>
          <Text style={{color: 'white', fontSize: 19}}>{digit}</Text>
        </View>
      ) : (
        <Text
          style={{width: 25, height: 25, textAlign: 'center', fontSize: 17}}
          onPress={() => this.setState({Number: digit})}>
          {digit}
        </Text>
      );
    });
    return (
      <View style={{backgroundColor: 'rgb(210, 210, 210)'}}>
        <View
          style={{
            width: '100%',
            height: '40%',
          }}></View>
        <View
          style={{
            backgroundColor: 'rgb(248,248,248)',
            width: '100%',
            height: '60%',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              marginTop: 20,
              marginLeft: 20,
            }}>
            How many seats?
          </Text>
          {image}
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-around',
              marginTop: 45,
              alignItems: 'center',
            }}>
            {/* <Text onPress={()=>this.setState({Number:'one'})}>1</Text> */}
            {Numbers}
          </View>
          <View
            style={{
              borderBottomWidth: 0.4,
              borderColor: 'grey',
              width: '100%',
              marginTop: 8,
            }}></View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: 2,
            }}>
            <Text style={{fontSize: 16}}>Classic</Text>
            <Text style={{fontSize: 19, fontWeight: 'bold'}}>{'₹'} {this.state.price}</Text>
            <Text style={{fontSize: 12, color: '#f84464'}}>AVAILABLE</Text>

            <TouchableOpacity
             onPress={()=>this.props.numberD()}
              style={{flexDirection: 'row', justifyContent: 'center'}}>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: 2,
                }}>
                <View
                
                  style={{
                    backgroundColor: '#f84464',
                    width: '90%',
                    height: 50,
                    borderRadius: 7,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                 
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: 18,
                      letterSpacing: 0.5,
                    }}>
                    Let's select seats
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default NumberSeats;

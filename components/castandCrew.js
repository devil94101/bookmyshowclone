import React, {Component} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

export default class Castandcrew extends Component {
  cast = [
    {
      imageLink:
        'https://in.bmscdn.com/iedb/artist/images/website/poster/large/ehan-bhat-1267789-18-06-2019-12-09-50.jpg',
      name: 'Ehan Bhat',
    },
    {
      imageLink:
        'https://in.bmscdn.com/iedb/artist/images/website/poster/large/edilsy-varghese-1267790-18-06-2019-12-13-10.jpg',
      name: 'Edilsy',
    },
    {
      imageLink:
        'https://in.bmscdn.com/iedb/artist/images/website/poster/large/aditya-seal-72-11-11-2016-05-05-33.jpg',
      name: 'Aditya Seal',
    },
    {
      imageLink:
        'https://in.bmscdn.com/iedb/artist/images/website/poster/large/lisa-ray-1289-24-03-2017-15-43-36.jpg',
      name: 'Lisa Ray',
    },
    {
      imageLink:
        'https://in.bmscdn.com/iedb/artist/images/website/poster/large/manisha-koirala-1358-22-09-2017-05-00-06.jpg',
      name: 'Mainsha',
    },
  ];

  crew = [
    {
      imageLink:
        'https://in.bmscdn.com/iedb/artist/images/website/poster/large/vishwesh-krishnamoorthy-1066902-07-07-2017-12-39-17.jpg',
      name: 'Vishwash',
    },
    {
      imageLink:
        'https://in.bmscdn.com/iedb/artist/images/website/poster/large/a_r_rahman_38.jpg',
      name: 'A.R Rahman',
    },
    {
      imageLink:
        'https://in.bmscdn.com/iedb/artist/images/website/poster/large/mukesh-chhabra-35780-28-08-2018-10-41-12.jpg',
      name: 'Mukesh',
    },
    {
      imageLink:
        'https://in.bmscdn.com/iedb/artist/images/website/poster/large/ranjit-barot-2975-24-03-2017-12-47-05.jpg',
      name: 'Ranjit',
    },
  ];

  render() {
    const castMap = this.cast.map(member => {
      return (
        <View
          style={{
            width: 120,
            overflow: 'hidden',
            flexDirection: 'column',
            alignItems: 'center',
            marginLeft: 10,
            marginTop: 10,
          }}>
          <Image
            style={{
              marginTop: 15,

              width: 120,
              height: 120,
              borderRadius: 60,
            }}
            source={{
              uri: member.imageLink,
            }}
          />
          <Text style={{color: 'grey', marginTop: 10}}>{member.name}</Text>
        </View>
      );
    });

    const crewMap = this.crew.map(member => {
      return (
        <View
          style={{
            width: 120,
            overflow: 'hidden',
            flexDirection: 'column',
            alignItems: 'center',
            marginLeft: 10,
            marginTop: 10,
          }}>
          <Image
            style={{
              marginTop: 15,

              width: 120,
              height: 120,
              borderRadius: 60,
            }}
            source={{
              uri: member.imageLink,
            }}
          />
          <Text style={{color: 'grey', marginTop: 10}}>{member.name}</Text>
        </View>
      );
    });

    return (
      <View>
        <View style={{width: '100%', backgroundColor: 'rgb(242, 242, 242)'}}>
          <Text
            style={{
              color: 'grey',
              fontWeight: 'bold',
              marginTop: 7,
              marginLeft: 17,
              fontSize: 18,
            }}>
            Cast
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {castMap}
          </ScrollView>
        </View>

        <View
          style={{
            borderBottomWidth: 0.5,
            borderColor: 'grey',
            width: '100%',
            marginTop: 20,
          }}></View>

        <View
          style={{
            width: '100%',
            marginTop: 2,
            marginBottom:30,
            backgroundColor: 'rgb(242, 242, 242)',
          }}>
          <Text
            style={{
              color: 'grey',
              fontWeight: 'bold',
              marginTop: 7,
              marginLeft: 17,
              fontSize: 18,
            }}>
            Crew
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {crewMap}
          </ScrollView>
        </View>
      </View>
    );
  }
}

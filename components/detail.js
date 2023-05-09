import React from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import Castandcrew from './castandCrew';
import YouMayAlsoLike from './youMayAlsoLike';

export default class Detail extends React.Component {
  render() {
    const {data} = this.props.route.params;
    console.log('data of show----->',data)
    const youtube = data.trailerLink.split('/');
    const youtubeLink = youtube[youtube.length - 1];
    console.log('youtube array--->', youtubeLink);

    // console.log(data)
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 0.9}}>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '95%',
                marginTop: 20,
                overflow: 'hidden',
                borderRadius: 7,
              }}>
              <YoutubePlayer
                height={209}
                loop
                mute={true}
                play={false}
                videoId={youtubeLink}
              />

              <View
                style={{
                  width: '100%',
                  height: 20,
                  backgroundColor: 'black',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                  }}>
                  In cinemas
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                marginTop: 7,
                marginLeft: 10,
                backgroundColor: 'rgb(242, 242, 242)',
              }}>
              <Text style={{color: 'grey', fontWeight: 'bold'}}>
                {data.name}
              </Text>
              <Text style={{color: 'grey'}}>{data.description}</Text>
            </View>

            <View
              style={{
                borderBottomWidth: 0.5,
                borderColor: 'grey',
                width: '100%',
                marginTop: 20,
              }}></View>
          </View>

          <Castandcrew />
          <Image
            style={{width: '100%', height: 35, marginTop: 10, marginBottom: 20}}
            source={{
              uri:
                'https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/watch-guide-web-collection-202112291244.png',
            }}
          />
          <YouMayAlsoLike navigation={this.props.navigation} />
        </ScrollView>

        {/*caution: do not touch here  */}

        {/* <View
          style={{
            flex: 0.1,
            width: '100%',
            height: 40,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#00000000',
          }}> */}
        <TouchableOpacity onPress={()=>this.props.navigation.push('Book Now',{data1:data})}
          style={{
            flex: 0.1,
            width: '100%',
            height: 40,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#00000000',
          }}>
          <View
            style={{
              width: '70%',
              height: '90%',
              backgroundColor: 'red',
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
              Book tickets
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      // </View>
    );
  }
}
const styles = StyleSheet.create({});

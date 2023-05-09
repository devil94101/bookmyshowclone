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

export default class ImageScrollAll extends React.Component {
  fun = () => {
    console.log('hello');
  };
  render() {
    return (
      <View
        style={{
          marginLeft: 15,
          marginRight: 10,
          marginBottom:25
        }}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.push('detail', {data: this.props.ele})
          }>
          <View
            style={{
              width: 170,
              height: 280,
              flexDirection: 'column',
              justifyContent: 'center',
              // objectFit: 'cover',
              // overflow: 'hidden'
            }}>
            <Image
              source={{uri: this.props.ele.imgLink}}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 5,
              }}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            width: 155,
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}>
          <Text
            style={{
              marginTop: 4,
              fontSize: 13,
              marginLeft: 5,
              // fontWeight: 'bold',
            }}>
            {this.props.ele.name.length < 45
              ? this.props.ele.name
              : this.props.ele.name.slice(0, 45) + '...'}
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({});

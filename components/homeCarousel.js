import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';

const images = [
  'https://in.bmscdn.com/showcaseimage/eventimage/belly-dance-beginner-class-13-04-2021-08-30-55-442.jpg',
  'https://in.bmscdn.com/showcaseimage/eventimage/war-31-03-2021-07-24-05-456.jpg',
  'https://in.bmscdn.com/showcaseimage/eventimage/the-dineout-steppinout-night-market-30-03-2021-10-42-22-920.jpg',
  'https://in.bmscdn.com/showcaseimage/eventimage/pehel--theatre-festival-of-stage-and-beyond-14-04-2021-11-49-11-428.jpg'
];

class Homecarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
    };
  }

  change(nativeEvent) {
    // console.log("nativeEvent:", nativeEvent)
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide !== this.state.active) {
        this.setState({
          active: slide,
        });
      }
    }
  }

  render() {
    const {active} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        {/* <View style={{ padding: 20, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white' }}>HomeScreen</Text>
        </View> */}
        <View style={styles.wrap}>
          <ScrollView
            onScroll={({nativeEvent}) => this.change(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.wrap}>
            {images.map((e, index) => (
              <Image
                key={e}
                resizeMode="stretch"
                style={styles.wrap}
                source={{uri: e}}
              />
            ))}
          </ScrollView>
          <View style={styles.wrapDot}>
            {images.map((e, index) => (
              <Text
                key={e}
                style={active === index ? styles.dotActive : styles.dot}>
                ●
              </Text>
            ))}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  wrap: {
    marginTop:5,
    
    // padding:1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.25, // 25% window
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dot: {
    margin: 3,
    color: '#888',
  },
  dotActive: {
    margin: 3,
    color: 'black',
  },
});

export default Homecarousel;

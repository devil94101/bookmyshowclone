import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  TextInput
} from 'react-native';
import ImageScroll from './imageScroll';
import axios from 'axios';

export default class HomeStack extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios
      .get('https://bookmyshow-clone.herokuapp.com/show/movie/recommended')
      .then(response => {
        console.log('recommanded----->', response.data.data);
        this.setState({
          data: response.data.data,
        });
      })
      .catch(error => console.log('error hai recomanded me'));
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 20,
              width: '95%',
              marginLeft: 10,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                letterSpacing: 0.5,
              }}>
              Recommended Movies
            </Text>
            <Text
              onPress={() => this.props.navigation.navigate('All Movies')}
              style={{
                color: 'red',
              }}>
              See All {'>'}
            </Text>
          </View>
          <ScrollView
            horizontal
            style={{
              marginTop: 10,
              marginBottom: 10,
            }}
            showsHorizontalScrollIndicator={false}>
            {this.state.data.map((ele, i) => {
              return (
                <ImageScroll
                  ele={ele}
                  key={i}
                  navigation={this.props.navigation}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(242, 242, 242)',
  },
});

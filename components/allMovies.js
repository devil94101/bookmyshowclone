import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  FlatList,
  TextInput,
  LogBox
  
} from 'react-native';
import ImageScrollAll from './imageScrollAll';
import TabMain from './TabMain';
import axios from 'axios';
import Homecarousel from './homeCarousel';
import uuid from 'react-native-uuid';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class AllMovie extends React.Component {
  state = {
    data: [],
    filter: [],
  };

  

  componentDidMount() {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    axios
      .get('https://bookmyshow-clone.herokuapp.com/show')
      .then(response => {
        console.log('recommanded----->', response.data.data);
        this.setState({
          data: response.data.data,
          filter: response.data.data,
        });
      })
      .catch(error => console.log('error hai recomanded me'));
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
         
          <View
            style={{
              width: '95%',
              height: 50,
              marginTop: 20,
              marginBottom: 10,
              borderWidth:0.5,
              borderColor:'grey',
              borderRadius:10,
              flexDirection:'row',
              alignItems:'center',

              
            }}>
           <Icon
            style={{
              marginLeft:12,
              marginRight: 5,

            }}
            name="search"
            size={17}
            color="grey"
          />
            <TextInput 
              placeholder="search"
              onChangeText={search =>
                this.setState({search: search}, () => {
                  const x = this.state.data.filter(data => {
                    return data.name
                      .toLowerCase()
                      .includes(search.toLowerCase());
                  });
                  this.setState({
                    filter: x,
                  });
                })
              }
              style={styles.inputBox}
            />
          </View>
          <ScrollView>
              
          <Homecarousel />
       
          <View style={{marginTop:20}}>
            <FlatList
              data={this.state.filter}
              numColumns={2}
              keyExtractor={item => uuid.v4()}
              renderItem={({item}) => {
                return (
                 
                  <ImageScrollAll ele={item} navigation={this.props.navigation} />
                );
              }}
            />
          </View>
          </ScrollView>
        </View>
       
        <View style={{position:'absolute',bottom:30,left:20,}}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')} >
         <Image  style={{width:60,height:60,borderRadius:30,zIndex:2}} source={{uri:'https://pbs.twimg.com/profile_images/1087298170722357248/aNGJWcLG_400x400.jpg'}} />
         </TouchableOpacity>
        </View>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'rgb(242, 242, 242)',
    flexDirection: 'column',
    // justifyContent:'center',
    alignItems: 'center',
  },
});

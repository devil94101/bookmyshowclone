import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TextInput} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';




export class SelectCity extends Component {
constructor(props) {
  super(props)

  this.state = {
     cities:[],
     filter:[]
  }
}

componentDidMount(){
  axios.get('https://bookmyshow-clone.herokuapp.com/city')
  .then(data=>{
    console.log('-->city data',data.data.data)
    this.setState({
      filter:data.data.data,
      cities:data.data.data
    },()=>console.log('state hai', this.state.cities))
  })
  .catch(error=>console.log('city me error hai'))

}



  render() {
    const cityBody = this.state.cities.map(city=>{
      return <View onTouchStart={()=>this.props.selectCity(city.name)} key={city.name} style={styles.cityView}>
            <Image 
              style={styles.cityImage}
              source={{uri:city.imgLink}}
              
            />
            <Text  style={styles.city}>{city.name}</Text>
            
       </View>
    })
    return (
      <View style={styles.SelectCity}>
         <View
            style={{
              width: '95%',
              height: 50,
              marginTop: 40,
              marginBottom: 10,
              borderWidth:0.5,
              borderColor:'grey',
              borderRadius:10,
              flexDirection:'row',
              alignItems:'center',
              marginLeft:7

              
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
            <TextInput  style={{width:"100%"}}
              placeholder="search"
              onChangeText={search =>
                this.setState({search: search}, () => {
                  const x = this.state.filter.filter(data => {
                    return data.name
                      .toLowerCase()
                      .includes(search.toLowerCase());
                  });
                  this.setState({
                    cities: x,
                  });
                })
              }
              style={styles.inputBox}
            />
          </View>
        <View style={styles.popularCitiesTextView}>
          <Text style={styles.popularCitiesText}>POPULAR CITIES</Text>
        </View>

        <View style={styles.mainCity}>
          
          {cityBody}
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  SelectCity: {
      backgroundColor:'rgb(242 ,242 ,242)',
      width:'100%',
      height:'100%'
  },

  mainCity: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    marginLeft:8,
    backgroundColor:'rgb(242 ,242 ,242)',


    // justifyContent:'center'
  },
  cityView: {
    margin: 2,
    width: 90,
    height: 90,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',

  },
  cityImage: {
    width: 50,
    height: 50,
  },
  popularCitiesTextView: {
    marginTop: 20,
    height: 50,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  popularCitiesText: {},
});
export default SelectCity;

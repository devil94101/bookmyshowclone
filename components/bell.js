import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export class Bell extends Component {
  render() {
    return (
      <View style={styles.bellMainView}>
        <Image style={styles.bellIcon} source={require('./images/bellNoti.png')} />
        <View style={styles.textView}>
            <Text style={styles.textNotification} >No notifications!</Text>
            <Text style={styles.textNotificationSub}>Go ahead and book a movie or event</Text>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bellMainView: {
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      width:'100%',
      height:'100%',
      backgroundColor:'rgb(242 ,245, 249);'
  },
  bellIcon:{
      width:150,
      height:150,
      marginTop:-150
      
      
  },
  textView:{
    marginTop:70,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  textNotification:{
      fontSize:22,
      fontWeight:'bold'
  },
  textNotificationSub:{
      marginTop:10,
      color:'grey'

  }
});

export default Bell;

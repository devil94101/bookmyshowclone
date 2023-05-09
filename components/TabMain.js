import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export class TabMain extends Component {
  render() {
    return (
      <View style={styles.Tab}>
        <TouchableOpacity>
          <Icon
            onPress={() => this.props.navigation.navigate('header')}
            name="home"
            size={30}
            color="red"
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon
            onPress={() => this.props.navigation.navigate('All Movies')}
            name="film"
            size={30}
            color="red"
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon
            onPress={() => this.props.navigation.navigate('Profile')}
            name="user"
            size={30}
            color="red"
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Tab: {
    backgroundColor:'white',
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default TabMain;

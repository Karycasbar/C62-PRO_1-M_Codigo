import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'
import SoundButton from '../components/SoundButton'


export default class BuzzerScreen extends React.Component {
  render(){
    return(
      <View>
        <AppHeader/>
        <SoundButton color={this.props.navigation.getParam('color')}/>
      </View>
    )
  }
}
----------------------------------------------------------------------------------------
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
-----------------------------------------------------------------------------------------
var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  BuzzerScreen : BuzzerScreen
})
const AppContainer = createAppContainer(AppNavigator);
---------------------------------------------------------------------------------------
    goToBuzzerScreen=(buzzercolor)=> {
      this.props.navigation.navigate('BuzzerScreen',{color:buzzercolor})
    }  
---------------------------------------------------------------------------------------
{
  "dependencies": {
    "expo-av": "~13.4.1",
    "@expo/vector-icons": "^13.0.0",
    "react-native-paper": "3.1.1",
    "react-navigation": "4.0.10",
    "@react-navigation/native": "^3.6.2"
  }
}
--------------------------------------------------------------------------------
<TouchableOpacity
        style={[styles.button,{backgroundColor:this.props.color}]}
        onPress={this.playSound}>
        <Text
          style={styles.buttonText}>
          Presióname
        </Text>
      </TouchableOpacity>

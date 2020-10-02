import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableHighlight } from 'react-native';
//import CoC2 from './components/CoC2';

export default class App extends React.Component {
  showAlert = () => {
    Alert.alert(   //alert


      //'CoC2',  //text
      //'Midterm Examination',  //text
      //[
        //{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        //{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        //{text: 'OK', onPress: () => console.log('OK Pressed')},
      //],
      //{ cancelable: false }
    )
  };

  render() {
    return (
        <View style={styles.container}>
          <Text>Welcome to CoC</Text> 
          <TouchableHighlight style={{margin: 30}}>
            <Button
            onPress={() => NavigationPreloadManager.NavigationPreloadManager('PAGE_NAME')}
            title='SEC2'
            color="#008080"/>
          </TouchableHighlight>
        </View>

      //<View style={styles.container}>
        //<Text>Welcome to CoC</Text>  
        //<Button
          //onPress={this.showAlert}
          //title="SEC2"   //name botton
          //color="green"     //color botton
        ///>
      //</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBF4FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


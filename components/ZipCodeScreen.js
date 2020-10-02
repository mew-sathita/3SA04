import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, TouchableHighlight, StyleSheet,ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const availableZipItems = [
    { place: 'Kathu, Phuket', code: '83120' },
    { place: 'Bangkok', code: '10100' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Chumphon', code: '86000' },
    { place: 'Phayao', code: '56000' },
    { place: 'Phatthalung', code: '93000' },
    { place: 'Satun', code: '91000' },
    { place: 'BuriRam', code: '31000' },
    { place: 'Ranong', code: '85000' }
]
                                
const ZipItem = ({ place, code, navigation }) => (
    //color touch
  <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code })} underlayColor="#ffcce6"> 
  <View style={styles.container}>
      <Text>{place}</Text>
      <Text>{code}</Text>
  </View>
</TouchableHighlight>
)

const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View>
          <ImageBackground source={require('../bg-home.jpg')} style={styles.container}>
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
            />
            <StatusBar style="auto" />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 25,
    },

    /*backdrop: {
      alignItems: 'center',
      backgroundColor: '#BDDAE6',
      borderBottomWidth: 20,
      width: '50%',
      height: '70%',
      fontSize: 50,
      color: '#000',
    },

    backdropZip: {
      flex: 1,
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },*/
});

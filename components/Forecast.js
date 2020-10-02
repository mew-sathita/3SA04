import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Forecast(props) {
    return (
        <View style={styles.center}>
        <Text style={styles.medium}>{props.main}</Text>
        <Text style={styles.small}>{props.description}</Text>
        <View>
            <Text style={styles.medium}>
                <Text style={{fontSize: 100}}>{props.temp}</Text>
                <Text>  °C</Text>
            </Text>
        </View>
    </View>              
    );
}

const styles = StyleSheet.create({
    center: {
        alignItems: 'center'
    },
    //wt-top+temp
    medium: {
        fontSize: 25,
        color: '#264d73',
        marginTop: 5,
    },
    //wt-under
    small: {
        fontSize: 30,
        color: '#264d73',
        marginTop: 5,
    }
});
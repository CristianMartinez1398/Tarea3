import { useState } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';

export default function Encabezado() {

    const [dinero, setDinero] = useState('')
    const [moneda, setMoneda] = useState('')

    const total = dinero * moneda;

    return(
        <>
            <View>
                <Text style={styles.txt1}>Ingrese el valor del dinero:</Text>
                <TextInput 
                style={styles.input1} 
                keyboardType="numeric"
                value={dinero}
                onChangeText={setDinero}
                />  
            </View>
            <View>
                <Text style={styles.txt2}>Ingrese el valor de la moneda:</Text>
                <TextInput 
                style={styles.input2} 
                keyboardType="numeric"
                value={moneda}
                onChangeText={setMoneda}
                />  
            </View>

            <View>
                <Text style={styles.txt3}>Precio: {total}</Text>
            </View>
        </>
    ); 
}

const styles = StyleSheet.create({
    txt1: {
        fontSize: 20,
        marginTop: 50,
        marginLeft: 15
    },

    input1: {
        borderWidth: 1,
        width: 350,
        height: 35,
        fontSize: 20,
        marginLeft: 15
    },

    txt2: {
        fontSize: 20,
        marginTop: 50,
        marginLeft: 15
    },

    input2:{
        borderWidth: 1,
        width: 350,
        height: 35,
        fontSize: 20,
        marginLeft: 15
    },

    txt3: {
        fontSize: 30,
        marginTop: 60,
        marginLeft: 20
    }
});
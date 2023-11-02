import { View, Text, Image } from 'react-native';
import { StyleSheet } from 'react-native';

export default function Encabezado() {
    return (
        <View style={styles.containers}>
            <Text style={styles.tx}>Convertidor de monedas</Text>
            <Image style={styles.img} source={{uri:'https://cryptologos.cc/logos/bitcoin-btc-logo.png',}} />
        </View>
    );
}

const styles = StyleSheet.create({

    containers: {
        backgroundColor: '#2B76B5',
        height: 200,
        borderRadius: 13
    },

    tx: {
        textAlign: 'center',
        marginTop: 60,
        fontSize: 30,
        color: '#FFFFFF'
    },

    img: {
        width: 60,
        height: 60,
        marginLeft: 150,
        marginTop: 20
    }

});
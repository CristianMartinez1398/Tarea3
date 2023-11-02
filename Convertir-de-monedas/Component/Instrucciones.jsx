import { View, Text, } from 'react-native';
import { StyleSheet } from 'react-native';

export default function Encabezado() {
    return (
        <View>
            <Text style={styles.txtInstrucciones}>
            Instrucciones: Debe de ingresar primero el dinero que quiere convertir 
            después tiene que ingresar el valor de la moneda internacional y en precio 
            le va salir ya convertido con la moneda internacional.
            </Text>
            
        </View>
    );
}

const styles = StyleSheet.create({
    txtInstrucciones: {
        fontSize: 18
    }
});
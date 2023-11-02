import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './styles/styles';
import Encabezado from './Component/Encabezado';
import Cuerpo from './Component/Cuerpo';
import Instrucciones from './Component/Instrucciones';

export default function App() {
  return (
    <View>
      <Encabezado></Encabezado>
      <View>
      <Instrucciones></Instrucciones>
      </View>
      
      <Cuerpo></Cuerpo>
      <StatusBar style="auto" />
    </View>
    
    
  );
}



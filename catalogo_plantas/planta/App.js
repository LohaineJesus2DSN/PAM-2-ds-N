import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView} from 'react-native';

export default function App() {
  return (
    <View style={styles.fundo}> 
    <ScrollView>  
      <View> 
          <Text>Catalogo de plantas</Text> 
      </View>
      <View>
        <Button title={'Babosa'}/> 
        <Button title={'Abacateiro'}/> 
        <Button title={'Rosa'}/>
        <Button title={'Lírio'}/> 
       </View> 
    </ScrollView> 
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03c53d',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Footer } from './components';

export default function App() {
  return (
    <View style={{flex: 1}}>

      <View>
        <Header></Header>
      </View>

      <View style={styles.container}>
        <Text>Here is where I build the game</Text>
        <StatusBar style="auto" />
      </View>

      <View>
        <Footer></Footer>
      </View>

    </View>

    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#f7b538'
  },
});



import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Footer, Grid } from './components';

export default function App() {
  return (
      <View style={{flex:1, backgroundColor:'#f7b538'}}>
        <View>
          <Header></Header>
        </View>

        {/* <View style={styles.container}>
          <Text>Here is where I build the game</Text>
          <StatusBar style="auto" />
        </View> */}
        <View style={{flex:1, justifyContent:'center'}}>
          <View style={{flex:1, flexWrap:'wrap', flexDirection:'row', justifyContent:'space-evenly'}}>
            <Grid></Grid>
          </View>
        </View>

        <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
          <Text>Timer</Text>
          <Text>Score</Text>
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
    // justifyContent: 'center',
    backgroundColor:'#f7b538'
  },
  // app: {
  //   marginHorizontal: "auto",
  //   width: 400,
  //   flexDirection: "row",
  //   flexWrap: "wrap"
  // }
});



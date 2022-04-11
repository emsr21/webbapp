import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Stock from './components/Stock';
// import icon from './assets/icon.jpg';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.base}>
        <Text style={{color: '#ffffff', fontSize: 42}}>Lager Appen</Text>
        {/* {<Image source={icon} style={{ width: 320, height: 240 }} />} */}
        <Stock />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  base: {
    flex: 1,
    backgroundColor: '#000e47',
    color: '#fff',
    // backgroundColor: '#fff',
    paddingLeft: 12,
    paddingRight: 12,
  }
});
import { StyleSheet, Text, View } from 'react-native';

import Header from '../../components/header'

export default function App() {
  return (
    <View style={styles.container}>
     <Header> </Header>
      <Text style={styles.titleText}>
        Av. Paulista 4281 - São Paulo (SP)
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleText: {
    
    color:'black',
    textAlign: 'center',
    marginTop: 20,

  }
});

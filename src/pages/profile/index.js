import { StyleSheet, Text, View } from 'react-native';

import Header from '../../components/header'

export default function App() {
  return (
    <View style={styles.container}>
     <Header> </Header>
      
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

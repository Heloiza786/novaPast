import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacityProps, SafeAreaView} from 'react-native';


type Props = {
  data: FlatlistButp ;
} & TouchableOpacityProps

export default function FlatlistButp({data, ...rest} : Props) {
  return (
    <View style={styles.container}>
      <Text>{data.name} Icon </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#F2F2F2', 
    borderRadius: 50,
    margin: 8,
    padding: 15,
    width: '30%', 
    alignItems: 'center',
    height: 60,
    
 
    
    
    
  },card:{
    flexDirection: 'row',
    fontSize: 16,
    color: '#333',
    alignItems: 'center',


  },
});

import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View} from 'react-native';
import{ SafeAreaView } from 'react-native-safe-area-context';
import bullets from '../../../services/bullets';
import Bullets from '../../bullets/Bullets';
import { ScrollView } from 'react-native-gesture-handler';
import { SearchBar } from 'react-native-screens';
 import { FontAwesome } from '@expo/vector-icons'; 


export default function Header(){
    return(
       
    <SafeAreaView style={styles.headerView}>
        <StatusBar style='auto'/>
        <SearchBar />
        <View style={styles.headerTopElemnets}>
        <FontAwesome name="user-circle-o" size={24} color="black" />
            <Text> Esse é um teste</Text>
            <Text> </Text>
            <FontAwesome name="bell-o" size={24} color="black" />
        </View>
        <View style={styles.searchBar}>
        

        </View>
        
      
    </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    headerView:{
    backgroundColor:'red',
    

    },
    headerTopElemnets:{
        //  flex:1,
        flexDirection: 'row',
        paddingVertical: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 15,
    },
    searchBar:{
        marginVertical:10,

    }
});
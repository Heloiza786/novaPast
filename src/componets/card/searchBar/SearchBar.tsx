import {  StyleSheet, Text, View, SafeAreaView} from 'react-native';
import { Entypo } from '@expo/vector-icons';


export default function SearchBar(){
    return(
        <View style= {styles.searchBarContainer}>
            <Text>  teste  </Text>
            <Entypo name="magnifying-glass" size={24} color="black" />
        </View>
    );
}

const styles = StyleSheet.create(
    {
        searchBarContainer:{
        flexDirection: 'row',
        backgroundColor: '#D3D3D3',
        height: 60,
        borderRadius: 50,
        padding:20,
        margin:50,
        elevation:5,
        }
    }
)
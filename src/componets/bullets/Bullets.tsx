import { FlatList,TouchableOpacity } from "react-native-gesture-handler";
import bullets from "../../services/bullets";
import { Text, View, StyleSheet } from 'react-native';




export default function Bullets(){
    return(
        <View style={styles.bulletView}>

            {bullets.map((item) => {
        return(
           
            <TouchableOpacity style={styles.touchableBtn}>
            <Text style={styles.touchText}>{item.name}</Text>
            </TouchableOpacity>
           
        )

            })}
        </View>
    );
}

const styles = StyleSheet.create({
    bulletView: {
        flexDirection: 'row',
    },
    touchableBtn: {
        backgroundColor: 'white',
        borderRadius: 45,
        padding: 10,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    touchText: {
        fontSize: 20,
    },
});


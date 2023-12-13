import { StatusBar } from 'expo-status-bar';
import {  ScrollView, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import { useNavigation, NavigationProp} from '@react-navigation/native';
import { getAllPokemon } from '../../controllers/pokemonController';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import Btn from '../../componets/card/btn/Btn';
import InputData from '../../componets/card/inputData/InputData';
import Card from '../../componets/card/Card';
import Header from '../../componets/card/header/Header';
import FlatlistButp from '../../componets/flatlistButp/FlatlistButp'
import Bullets from '../../componets/bullets/Bullets';
import Carrossel from '../../componets/carrossel/Carrossel';
import ImageFundo from '../../../assets/paisagem.jpg';
import SearchBar from '../../componets/card/searchBar/SearchBar';



export default function Home() {

    const { navigate } = useNavigation<NavigationProp<any>>();

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    
    useEffect(() =>{
      getAllPokemon().then(setPokemons).catch((err) => {console.log(err)});
    })
  
    
    return (
      <ScrollView>
      <View style={styles.container}>
        <Header />
        <ScrollView horizontal={true}>
          <View style={styles.scrollNoHeader}>
            <Bullets />
          </View>
        </ScrollView>
        <Text style={styles.textText}>HELOIZA CUSTODIO</Text>
     <Carrossel  data={pokemons}/>
        {/* <FlatList
          data={pokemons}
          keyExtractor={(pokemon) => pokemon.name}
          renderItem={({ item: pokemon }) => <Card data={pokemon} />}
        /> */}
         <TouchableOpacity onPress={() => navigate('Teste')}>
          <Text>Ir para a tela teste</Text>
        </TouchableOpacity>
        <Image source={ImageFundo}/>
      </View>
      </ScrollView>
    );
  }
        
            
        
        
       
 
  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'gray',
 
   
    },
    scroll:{
     flex:1,
     padddiingLeft:15,
     paddingRight: 15,
     paddingBootom: 50,
     },
      textText:{
     
  
  
    },
     Statusbar:{
     backgroundColor:'black',
     color: 'white',
     },
     safeAreaContainer:{
     padding:15,
    },scrollNoHeader:{
      padding:15,
      backgroundColor:'grey',
    }
    
  });
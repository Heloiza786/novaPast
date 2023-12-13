import React from 'react';
import { Text, View, StyleSheet, Touchable, TouchableOpacityProps, ImageBackground } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import ImageFundo from '../../../assets/paisagem.jpg';
// import bullets from '../../services/bullets';


type Props = {
  data: Pokemon[];
} & TouchableOpacityProps;

export default function Carrossel({ data, ...rest }: Props) {
  const poke = data.map((item) => item);

  return (
    <View>
      <Carousel
        containerCustomStyle={{ overflow: 'visible' }}
        data={poke}
        renderItem={({ item }) => {
          return (
            <View style={styles.itemView}>
              <ImageBackground source={ImageFundo} 
              style={styles.backImg} 
              blurRadius={80}
              >
            
              
              <Text style={styles.back} >{item.name}</Text>
              </ImageBackground>
            </View>
          );
        }}
        inactiveSlideOpacity={0.75}
        inactiveSlideScale={0.77}
        sliderWidth={400}
        itemWidth={200}
        slideStyle={{ display: 'flex', alignItems: 'center' }} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemView: {
    backgroundColor: 'white',
    width: 200,
    height: 300,
    borderRadius: 100,
    elevation:5,
  
  },
  backImg:{
    flex: 1,
    justifyContent: 'center',

    
  },
  back:{
    color: 'white',
    fontSize: 20,
    justifyContent: 'center',
    alignItems:'center',
    padding: 10
  }
});
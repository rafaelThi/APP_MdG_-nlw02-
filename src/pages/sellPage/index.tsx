
import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from './styles';

import * as Linking from 'expo-linking';

import fundoImg from '../../assets/fundo.png'
import backImg from '../../assets/backimg.png'
import { useNavigation } from '@react-navigation/native';


function PageSell () {


const {goBack} = useNavigation();

    const handlePress = () => {
        Linking.openURL('http://192.168.15.103:3001/')
    }

const back = () =>{ 
    goBack() 
}

    return(
<ImageBackground source={fundoImg} style={styles.imgBack}>   
            <View style={styles.header} >
                <TouchableOpacity onPress ={back} >
                    <Image source={backImg} style={styles.backImg} />
                </TouchableOpacity>
            </View>
         <View style={styles.container}>
        
            <Text style={styles.title}>
                Para vender, você tem que registrar o Game pelo nosso site:
            </Text>
            <TouchableOpacity onPress={handlePress} style={styles.footerSet}>
                <Text style={styles.TextFooter}>Cadastrar Game</Text>
            </TouchableOpacity>
        </View>      
    </ImageBackground>
    )


}

export default PageSell
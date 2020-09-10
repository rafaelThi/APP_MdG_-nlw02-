import React from 'react';
import {View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';

import { useNavigation } from '@react-navigation/native'

import * as Linking from 'expo-linking';

import logoImg from '../../assets/logo2.png'
import sellImg from '../../assets/cifrao.png'
import buyImg from '../../assets/carrinho.png'
import fundoImg from '../../assets/fundo.png'

import styles from './styles';

function LandingPage() {

const {navigate} = useNavigation();

function handleNavigateToSellPage() {
        navigate('Vender')
}

function handleNavigateToBuyPage() {
        navigate('Comprar')
}

const handlePress = () => {
    Linking.openURL('https://www.facebook.com/profile.php?=73322363')
}
    return(
<>     
<ImageBackground source={fundoImg} style={styles.imgBack}>   
      <View style={styles.container} > 
     
         <Text style={styles.title} >
                Seja bem-vindo ao seu{'\n'} app de Games! 
        {'\n'}
            </Text>
             <Image source={logoImg} style={styles.logo} />
             <Text style={styles.title} >
                O que deseja fazer? 
        {'\n'}
            </Text>
            <View style={styles.containerButtons}>
            <TouchableOpacity onPress={handleNavigateToBuyPage} style={styles.buttonBuy} >
            <Image source={buyImg} style={styles.imgBuy} />
                    <Text style={styles.buttonText}>Comprar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNavigateToSellPage} style={styles.buttonSell} >
                    <Image source={sellImg} style={styles.imgSell} />
                    <Text style={styles.buttonText}>Vender</Text>
                </TouchableOpacity>
               
            </View>

            <View style={styles.footer}>
                <Text style={styles.TextFooter} >
                    Não esqueça de visitar nossa Page!
                </Text> 
                <TouchableOpacity onPress={handlePress} style={styles.footerSet}>
                    <Text style={styles.TextFooter}>Facebook</Text>
                </TouchableOpacity>
            </View>
            </View>
            </ImageBackground>
            

</>
    )
}

export default LandingPage;
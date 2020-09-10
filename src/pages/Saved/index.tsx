import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image, ScrollView, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import fundoImg from '../../assets/fundo.png'
import backImg from '../../assets/backimg.png'
import homeImg from '../../assets/home.png'
import whatsappIcon from '../../assets/whatsapp.png'



import styles from './styles';
// import GameItem, { Game } from '../../Components/GameItem';
import GameItemFavorited, { GameFavorited } from '../../Components/GameItemFavorited';
import AsyncStorage from '@react-native-community/async-storage';

function Favorites () {

    const [favorited, setFavorited] = useState([])


    const {goBack} = useNavigation();
    const {navigate} = useNavigation();
            
    const back = () =>{ 
        goBack() 
    }
    const backHome = () =>{
        navigate('Home')
    }
        
    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response=>{
            if(response) {
                const favoritedGames = JSON.parse(response);
            
                setFavorited(favoritedGames);
            }
        })
    }


    useEffect(()=>{
        loadFavorites();
    },[])

    return(
        <ImageBackground source={fundoImg} style={styles.imgBack}>   

            <View style={styles.header} >

                    <TouchableOpacity onPress ={back} >
                        <Image source={backImg} style={styles.backImg} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress ={backHome} >
                    <Image source={homeImg} style={styles.homeImg} />
                    </TouchableOpacity>
            </View>
            <View style={styles.titlePageView}>
                <Text style={styles.titlePage}>Anúncios Salvos</Text>
            </View>
            <View style={styles.container}>
            
                <ScrollView
                
                >
                    
            
                    {favorited.map((game:GameFavorited) =>{

                                return(
                                    <GameItemFavorited 
                                        key={game.id}
                                        game={game}
                                        favorited={true}
                                    />

                                )
                                    })
                                }


                </ScrollView>
            </View>       
        </ImageBackground>
    )
        

}

export default Favorites;

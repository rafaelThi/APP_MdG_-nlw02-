import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, Linking } from 'react-native'

import AsyncStorage from '@react-native-community/async-storage';


import imgGame from '../../assets/daysGone2.png'
import whatsappIcon from '../../assets/whatsapp.png'
import FavoImg1 from '../../assets/favorite.png'
import FavoImg2 from '../../assets/favorited.png'

import styles from './styles'

export interface Game {
    id:number;
    nameGame: string;
    photo:string;
    platform:string;
    state:string;
    generous:string;
    cost:number;
    bio:string;
    city:string;
    nameSalesman: string;
    whatsapp:number;
}
interface GamesItemsProps {
    game: Game;
    favorited:boolean;
}


const GameItem: React.FC<GamesItemsProps> = ({ game, favorited }) =>{
    
    const [isFavorited, setIsFavorited] = useState(favorited)

    function handleContact() {
        return(
       
                Linking.openURL(`whatsapp://send?text=Olá ${game.nameSalesman}, tenho interesse no seu Game ${game.nameGame}! &phone=+55${ game.whatsapp }`)
        )
    }

    async function handleToFavorited() {

        const favorites = await AsyncStorage.getItem('favorites');
        let favoritesArray =[];

        if (favorites){
            favoritesArray = JSON.parse(favorites)
        }

        if (isFavorited){
            //remove dos favoritos
            const favoriteIndex = favoritesArray.findIndex((gameItem:Game) =>{
                    return gameItem.id === game.id;
            });
            favoritesArray.splice(favoriteIndex, 1)

            setIsFavorited(false)

        }else{
            //adiciona dos favoritos
            favoritesArray.push(game);

            setIsFavorited(true)
        }
        await AsyncStorage.setItem('favorites',JSON.stringify(favoritesArray))

    }

    return(
       <View style={styles.container}>

            <View style={styles.headerItem}>
                <Image source={{ uri: game.photo }} style={styles.ImgGame}/>
                <Text style={styles.titleItem}>{ game.nameGame }</Text>
                </View>
            <View style={styles.gameData}>
                    <View>
                        <Text style={styles.platform}>{ game.platform }</Text>
                        <Text style={styles.state}>{ game.state }</Text>
                        <Text style={styles.generous}>{ game.generous }</Text>
                        <Text style={styles.cost}>R$ { game.cost },00</Text>
                    </View>
                    <TouchableOpacity
                    onPress={handleToFavorited}
                        style={[
                            styles.favoriteButton, isFavorited ? styles.favorited : {},
                        ]}
                    >
                        { isFavorited 
                            ? <Image style={styles.favoriteImg} source={FavoImg2}/>
                            : <Image style={styles.favoriteImg2} source={FavoImg1}/>
                        }
                    </TouchableOpacity>
                </View>
            <View style={styles.ContainerBioGame}>
                <Text style={styles.bioGame}>{ game.bio }</Text>
            </View>
            <View style={styles.cityCont}>
            <Text style={styles.city}>Cidade: { game.city } </Text>
            </View>
            <View style={styles.sellerData}>
                    <Text style={styles.name}> { game.nameSalesman } </Text>
                   
                    <TouchableOpacity onPress={handleContact} style={styles.buttunContact}>
                        <Image style={styles.ImgContact} source={whatsappIcon} />
                        <Text style={styles.contact}>Contato</Text>
                    </TouchableOpacity>
            </View>

       </View>
    )
}

export default GameItem;
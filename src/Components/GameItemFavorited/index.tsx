import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, Linking } from 'react-native'


import whatsappIcon from '../../assets/whatsapp.png'


import styles from './styles'

export interface GameFavorited {
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
    game: GameFavorited;
    favorited:boolean;
}


const GameItemFavorited: React.FC<GamesItemsProps> = ({ game }) =>{
    

    function handleContact() {
        return(
       
                Linking.openURL(`whatsapp://send?text=Olá ${game.nameSalesman}, tenho interesse no seu Game ${game.nameGame}! &phone=+55${ game.whatsapp }`)
        )
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

export default GameItemFavorited;
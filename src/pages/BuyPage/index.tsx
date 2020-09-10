
import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import fundoImg from '../../assets/fundo.png'
import backImg from '../../assets/backimg.png'

import { Feather } from '@expo/vector-icons';

import { RectButton, BorderlessButton, ScrollView } from 'react-native-gesture-handler';
import GameItem, { Game } from '../../Components/GameItem';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

import api from '../../Server/api';



function PageBuy () {

    const [isFilterVisible, setIsFiltersVisible] = useState(false)

    //estado dos inputs
    const [platform, setPlatfotm] = useState('')
    const [state, setState] = useState('')
    const [generous, setGenerous] = useState('')

    //estado do filter
    const [games, setGames] = useState([])

    const [favorited, setFavorited] = useState<number[]>([])

    const {goBack} = useNavigation();
    const {navigate} = useNavigation();

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response=>{
            if(response) {
                const favoritedGames = JSON.parse(response);
                const favoritedGamesIds = favoritedGames.map((game: Game)=>{
                    return game.id
                })

                setFavorited(favoritedGamesIds);
            }
        })
    }

        
    const back = () =>{ 
        goBack() 
    }
    function handleNavigateToSaved() {
            navigate('Salvos')
    }
        

    function handleFiltersVisible(){
        setIsFiltersVisible(!isFilterVisible);
    }

    async function handleFiltersSubmit(){
        loadFavorites();
            const response = await api.get('games', {
                params:{
                    platform,
                    state,
                    generous,
                }
            }) ;
            setIsFiltersVisible(false);

            console.log(response.data)
            setGames(response.data);

        }
        return(

    <ImageBackground source={fundoImg} style={styles.imgBack}>   
        <View style={styles.header} >
                                    
            <TouchableOpacity onPress ={back} >
                <Image source={backImg} style={styles.backImg} />
            </TouchableOpacity>
    

                <BorderlessButton onPress={handleFiltersVisible} style={styles.filtersVisible} >
                    <Text style={styles.buttonTextSaved}>Filtros</Text><Feather name='filter' size={25} color='#000' />
                </BorderlessButton>
        </View>
                        

        <View style={styles.container} >
                    
            { isFilterVisible && 

                <View style={styles.searchForm}>
                            <Text style={styles.label} >Console</Text>
                            <TextInput
                                value = {platform}
                                onChangeText={text => setPlatfotm(text) }
                                placeholderTextColor='#7f80a1'
                                style={styles.input}
                                placeholder="Qual Console?"
                            />
                                            <View style={styles.inputGroup}>

                                                <View style={styles.inputBlock} >
                                                    <Text style={styles.label} >Estado</Text>
                                                        <TextInput
                                                        style ={styles.input}
                                                        value = {state}
                                                        onChangeText={text => setState(text) }
                                                        placeholderTextColor='#7f80a1'
                                                        placeholder="Novo ou Usado?"
                                                        />
                                                </View>

                                                <View style={styles.inputBlock} >
                                                    <Text style={styles.label} >Gênero</Text>
                                                        <TextInput
                                                        value = {generous}
                                                        onChangeText={text => setGenerous(text) }
                                                        placeholderTextColor='#7f80a1'
                                                        style={styles.input}
                                                        placeholder="Qual gênero?"
                                                        />
                                                </View>

                                            </View>
                                    <RectButton 
                                        onPress={handleFiltersSubmit}
                                        style={styles.submitButton}
                                    >
                                            <Text style={styles.TextSubmitButton}>Filtrar</Text>
                                    </RectButton>
                        </View>
            }

            <View style={styles.titlePageView}>
                <Text style={styles.titlePage}>Games Dísponiveis</Text>
            </View>
                    <ScrollView>

                        {games.map((game:Game) => {
                            return(
                        
                                <GameItem 
                                    key={game.id} 
                                    game={game} 
                                    favorited={favorited.includes(game.id)}
                                />
                        
                        )
                        })}

                    </ScrollView>
         </View>

                <View style={styles.footer} >
                    <TouchableOpacity style={styles.buttonSaved} onPress={handleNavigateToSaved} >
                        <Text style={styles.buttonTextSaved} >Anúncios Salvos</Text>
                    </TouchableOpacity>
            </View>

        </ImageBackground>
        )


}

export default PageBuy;

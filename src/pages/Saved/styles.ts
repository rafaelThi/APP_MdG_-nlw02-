import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    imgBack:{
        flex:1,
    },
   
    header:{
        paddingTop:35,
        paddingHorizontal:15,
        flexDirection:'row',
        justifyContent:'space-between'

    },
    backImg:{
        height:25,
        width:15,
    },
    
    homeImg:{
        height:25,
        width:25,
        borderRadius:8,
        marginTop:5
    
    },
    titlePage:{
        fontSize:20,
        paddingVertical:10,
        textAlign:"center",
        fontFamily: 'Roboto_400Regular', 
       marginBottom:2.5

        
        },
        titlePageView:{
        borderBottomWidth:1,
        marginHorizontal:10,
        marginBottom:8
        

        },
    
})

export default styles;

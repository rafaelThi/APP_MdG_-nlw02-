import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container:{
        // backgroundColor:'#b1f4fc',
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        paddingTop:35,

    },
    imgBack:{
        flex:1,
    },
    logo:{
        height:120,
        width:220,
        borderRadius:20,
        marginVertical:10,
    },
    title:{
        fontSize:20,
        paddingTop:30,
        paddingBottom:10,
        textAlign:"center",
        fontFamily: 'Roboto_400Regular',
    },
    containerButtons:{
        flexDirection:"row",
        margin:1,
        justifyContent:"space-evenly",
        marginVertical:8
        
    },
    buttonSell:{
        margin:10,
        backgroundColor:'#8edea1',
        height:55,
        width:120,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
        
    },
    buttonBuy:{
        margin:10,
        backgroundColor:'#85a9eb',
        height:55,
        width:120,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
        fontFamily:'Roboto_400Regular',

        

    },
    buttonText:{
        fontSize:15,
        marginBottom:-5,
        fontFamily:'Roboto_400Regular',

    },

    imgBuy:{
        height:28,
        width:28,
        borderRadius:20
    },
    imgSell:{
        height:28,
        width:28,
        borderRadius:20

    },

    footer:{
        justifyContent:'center',
        alignItems:'center',
        bottom:25,
        position:"absolute",
             

    },
    TextFooter:{
        fontFamily:'Roboto_400Regular',
        fontSize:16
     
    },
    footerSet:{
        margin:5,
        marginTop:20,
        backgroundColor:'#85a9eb',
        height:40,
        width:90,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,

    },
   
    
})

export default styles;
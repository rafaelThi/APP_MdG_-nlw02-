

import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container:{
        // backgroundColor:'#b1f4fc',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    imgBack:{
        flex:1,
    },
    title:{
        fontSize:18,
        paddingBottom:15,
        textAlign:"center",
        fontFamily: 'Roboto_400Regular',
        marginHorizontal:5
    },
    TextFooter:{
        fontFamily:'Roboto_400Regular',
    },
    footerSet:{
        backgroundColor:'#85a9eb',
        height:50,
        width:160,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,

    },
    header:{
        justifyContent:'center',
        alignContent:'center',
        paddingTop:30,
        paddingHorizontal:15,

    },
    backImg:{
        height:25,
        width:15,
    },
      
    searchForm:{
        // justifyContent:'flex-start',
        alignItems:'flex-start',
        paddingHorizontal:12,
        marginBottom:15,
    },

    label:{
       fontSize:20,
       fontFamily:'Roboto_400Regular',
       padding:5
       
    },

    inputConsole:{
    backgroundColor:'#fff',
    height:40,
    width:'98%',
    borderRadius:10,

    },
    input:{
        backgroundColor:'#fff',
        height:40,
        width:'95%',
        borderRadius:10,
        paddingLeft:10

    },

    inputGroup:{
        flexDirection:'row',
        justifyContent:'space-between',
        // alignSelf:'center'
    },
    inputBlock:{
        width:'50%',

    },

    submitButton:{
        marginTop:15,
        backgroundColor:'#85a9eb',
        height:40,
        width:145,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        borderRadius:8,
        fontFamily:'Roboto_400Regular',
    },
    TextSubmitButton:{
        fontSize:16,
        fontFamily:'Roboto_400Regular',
        padding:5
    }
    
    
    
})

export default styles;
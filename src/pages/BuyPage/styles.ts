import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container:{
        // backgroundColor:'#b1f4fc',
        flex:1,
        // justifyContent:'center',
        // alignItems:'center',
        // paddingTop:0,
        // paddingHorizontal:12

    },
    
    imgBack:{
        flex:1,

    },
    header:{
        flexDirection:"row",
        justifyContent:'space-between',
        alignContent:'center',
        paddingTop:35,
        paddingHorizontal:13,
        marginBottom:-10
        
    },
    filtersVisible:{
        padding:15,
        flexDirection:'row',
        marginTop:-6
        
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

    TextSubmitButton:{fontSize:16,
        marginBottom:-2,
        fontFamily:'Roboto_400Regular',
        },

    buttonTextSaved:{
        fontSize:16,
        marginBottom:-2,
        fontFamily:'Roboto_400Regular',
        
    },

   

    footer:{
        bottom:15,
        position:"absolute",
        alignSelf:'center'
      
    },

    buttonSaved:{
        margin:10,
        backgroundColor:'#85a9eb',
        height:40,
        width:145,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
        fontFamily:'Roboto_400Regular',

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

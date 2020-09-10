import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    //cada game
container:{
    backgroundColor:'#fff',
    padding:5,
    margin:8,
    borderRadius:10,
    
},
//heander
headerItem:{
    width:'100%',
    padding:5,
    borderRadius:5,
    backgroundColor:'#f2f2f2',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
   

},
ImgGame:{
    height:60,
    width:60,
    borderRadius:10,
    backgroundColor: '#d9d9d9'
},
titleItem:{
    fontSize:18,
    marginRight:'30%',
    fontFamily:'Roboto_400Regular',

},
//dados do game
gameData:{
    marginVertical:5,
    marginHorizontal:5,
    borderBottomWidth:1,
    alignItems:'center',
    paddingBottom:5,
    flexDirection:'row',
    justifyContent:'space-between'    
},
platform:{
    fontSize:14,
    fontFamily:'Roboto_400Regular',
    margin:2

},
generous:{
    fontSize:14,
    fontFamily:'Roboto_400Regular',
    margin:2

} ,
state:{
    fontSize:14,
    fontFamily:'Roboto_400Regular',
    margin:2

},
cost:{
    fontSize:18,
    paddingVertical:10,
    // color:'#375c32'
},
favoriteButton:{
    padding:0,
},
favorited:{
    padding:0,
},
favoriteImg2:{
    height:30,
    width:30,
    padding:10,
    margin:8,
},
favoriteImg:{
    height:30,
    width:32.5,
    padding:0,
    margin:8,
    

},

//dados do vender
sellerData:{
    flexDirection:'row',
    justifyContent:'space-between'
},
buttunContact:{
    backgroundColor:'#15ab4c',
    width:120,
    height:45,
    borderRadius:8, 
    flexDirection:'row',
    alignItems:"center",
    marginVertical:8,
    marginHorizontal:7
},
ContainerBioGame:{
    marginVertical:3,
    marginHorizontal:8,
    borderBottomWidth:1,
    paddingBottom:10
},
bioGame:{
    fontSize:14,
    lineHeight:18,
    textAlign:'justify',
},
name:{
    fontSize:18,
    textAlign:'center',
    marginHorizontal:10,
    marginVertical:8,
    fontFamily:'Roboto_400Regular',
    marginTop:20
    
},
cityCont:{
    marginVertical:8,
    marginHorizontal:8,
    borderBottomWidth:1,    
   

},
city:{
    fontSize:15,
    textAlign:'center',
    
    fontFamily:'Roboto_400Regular',
  
    textAlignVertical:"center",
    marginBottom:5,
    marginTop:-5


},
ImgContact:{
    height:35,
    width:35,
    margin:3,
    marginLeft:12,

},
contact:{
    fontSize:16,
    fontFamily:'Roboto_400Regular'
},


})

export default styles;
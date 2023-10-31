import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#eee',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'white',
      padding:20
    },
    input:{
      width:300,
      height:50,
      padding:10,
      backgroundColor:'#eee',
      marginBottom:20,
      marginTop:20,
      borderRadius:5
    },
    h:{
      fontSize:24,
      marginLeft :20,
      marginTop:20
    },
    button: {
      borderRadius:5,
      marginBottom: 30,
      marginTop: 30,
      width: 200,
      alignItems: 'center',
      backgroundColor: '#2196F3',
    },
    buttonText: {
      textAlign: 'center',
      padding: 20,
      color: 'white',
      fontSize:20
    },
    card: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.2,
        elevation:3,
        backgroundColor: 'white',
        borderRadius:20,
        // borderWidth:1,
        // borderColor:'grey',
        // marginLeft:20,
      }
    ,backGroundImage:{
      flex:1,
      resizeMode:'cover',
      overflow:'hidden',
      borderRadius:15,
      aspectRatio:1/0.5
    }
    
  });

  
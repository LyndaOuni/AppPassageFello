import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import {Content, Card, CardItem, Body, Left, Icon, Right} from 'native-base';
const data = require('./../../data/infotrajet.json');
const calenderImage = require('../icons/calendar_icon.imageset/calendar_icon.png');

export default class LoopScreen extends Component {
static navigationOptions = {
    tabBarIcon: ({focused,tintColor})=>(
       focused ? <Image
       source={require('../icons/trips_green_icon.imageset/trips_green_icon.png') }
         style={{width:30, height: 30}}
     />
     :
     <Image
       source={require('../icons/trips_icon.imageset/trips_icon.png')}
    style={{width:30, height: 30}}
     />
   ),
  };

  concatTime = (TimeString) => {
    let heure = TimeString.substr(11,2);
    let minute = TimeString.substr(14,2);
    return heure+'h'+minute;
  }
  getmoisString = (mois)=>{
    switch (mois) {
      case '01':return "janvier";
      break;
      case '02':return "février";
      break;
      case '03':return "mars";
      break;
      case '04':return "avril";
      break;
      case '05':return "mai";
      break;
      case '06':return "juin";
      break;
      case '07':return "juillet";
      break;
      case '08':return "aout";
      break;
      case '09':return "septembre";
      break;
      case '10':return "october";
      break;
      case '11':return "november";
      break;
      case '12':return "décembre";
      break;
  }
}
getDate= (date)=>{ 
  let day =  date.substr(6,2);

 return day;
}
getMonth=(date)=>{ 
  let month= this.getmoisString(date.substr(4,2));
  return month;
}
convertMonth = (createdAt)=> {
    let time =  createdAt.substr(11,8);
    let jour =  createdAt.substr(8,2);
    let annee = createdAt.substr(0,4);
    let mois= createdAt.substr(5,2);
    let moisNumber =  parseInt(mois);
    chaineFooter = "Ajouter le "+jour+" "+this.getmoisString(mois)+""+annee;
    return chaineFooter;
  }
  render() {
  
   let  trajets= data.map((trajetData, index)=> {
     return (
       <Card key={index} >
        
       </Card>

     );
   })    
   return (
      <View style={styles.container}>
      
         <Text style={styles.headerStyles}> 
           Mes trajets réservés
         </Text>
         <ScrollView>
           {trajets}
         </ScrollView>
      </View>
    );
  }
}
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignContent : 'center',
    justifyContent: 'center'
  },
  headerStyles:{ 
   height: 50 ,

   },
   calendarday:{
    marginLeft:20,
    top:45,
    zIndex:1,
   },
   calendarimage:{
    top:45,
    zIndex:1,
    fontWeight: 'bold',
   },
   sizeImage:{
       width:70, 
       height: 70,
    },
});
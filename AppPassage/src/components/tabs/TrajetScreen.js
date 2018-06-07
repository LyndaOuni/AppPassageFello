import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
const data = require('./../../data/infotrajet.json');
const calenderImage = require('./../../icons/calendar_icon.imageset/calendar_icon.png');
const nextStep = require('./../../icons/icon_next/arrow-right.png');
import { Fonts } from './../../utils/Fonts';
export default class LoopScreen extends Component {
static navigationOptions = {
    tabBarIcon: ({focused,tintColor})=>(
       focused ? <Image
       source={require('./../../icons/trips_green_icon.imageset/trips_green_icon.png') }
         style={{width:30, height: 30}}
     />
     :
     <Image
       source={require('./../../icons/trips_icon.imageset/trips_icon.png')}
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
    chaineFooter = "Ajouter le "+jour+" "+this.getmoisString(mois)+" "+annee;
    return chaineFooter;
  }
  render() {
  
   let  trajets= data.map((trajetData, index)=> {
     return (
        <TouchableOpacity key={index} style={styles.wrapper}>
          <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontFamily: Fonts.Avenir }}>{this.concatTime(trajetData.start_time)} </Text>
              <View style={{flex: 1 ,alignItems: 'flex-end'}}><Text style={{ fontFamily: Fonts.Avenir,fontSize: 15, fontWeight: 'bold', color:'#06e8ac',textAlign: 'center', flex: 1 ,alignItems: 'flex-end'}}>{trajetData.price} $</Text></View>      
         </View>
          <View style={{borderBottomColor: 'black',borderBottomWidth: 1}}/>
          
        <View style={styles.iconContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.calendarday}>{this.getDate(trajetData.date)}</Text> 
          <Text style={styles.calendarimage}>{this.getMonth(trajetData.date)}</Text>
            <Image
              source={calenderImage}
              style={styles.icon}
            />
        </View>
      
        <View style={styles.rightContainer}>
                  <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Text style={{ fontFamily: Fonts.Avenir }}>De: {trajetData.address_departure}</Text>
                    <Text style={{ fontFamily: Fonts.Avenir }}>{trajetData.city_departure}</Text>
                    <Text style={{ fontFamily: Fonts.Avenir }}>Vers: <Text style={{ fontFamily: Fonts.Avenir,fontWeight: 'bold'}}>{trajetData.address_destination}</Text></Text>
                    <Text style={{fontFamily: Fonts.Avenir, fontWeight: 'bold'}}>{trajetData.city_destination}</Text>
                  </View>
        </View>
        <View style={styles.iconNextContainer}><Image style={styles.iconNext} 
                   source={nextStep}/>
                   </View>
        </View>
        <View style={{   alignSelf: 'flex-end', top:12  }}><Text style={{fontFamily: Fonts.Avenir}}>{this.convertMonth(trajetData.created_at)}</Text></View>
        </TouchableOpacity>      
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
     alignContent : 'flex-start',
     
  },
  headerStyles:{ 
     height: 50 ,
     top:20,
     textAlign: 'center',
     fontWeight: 'bold',
     fontFamily: Fonts.Avenir,
     },
  wrapper: {
    marginLeft: 3,
    marginRight: 3,
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
  },
  icon: {
    flexDirection: 'column',
      width:70, 
      height: 70,
       bottom: 10,
  },
 calendarday:{
     top:45,
     zIndex:1,
     color: '#06e8ac',
     fontFamily: Fonts.Avenir,
    },
calendarimage:{
    top:45,
    zIndex:1,
    fontFamily: Fonts.Avenir,
   },
  iconContainer: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    flex: 1,
  },
  leftContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 18,
  },
  rightContainer: {
    justifyContent: 'center',
  },
  iconNextContainer: {
    justifyContent: 'center',
  },
  iconNext:{
    width:30, 
    height: 30,
  },
});
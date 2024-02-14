import React from 'react';
import { StyleSheet, Text, View,StatusBar,ScrollView,TouchableOpacity, Button,onPressLearnMore,Alert,Image,Pressable ,navigation, SafeAreaView} from 'react-native';
import{MaterialCommunityIcons} from '@expo/vector-icons';
//import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import colors from '../config/colors';
import FlipCard from 'react-native-flip-card'

function PractiseTest(props) {
    return (
      
      
          <View style={{ flex: 1 }} >
             <StatusBar hidden={true}/>
            <ScrollView>
              <FlipCard>

              <View style={{ flex: 3, backgroundColor: 'red' }}>
              <Image 
                    style={styles.pic}
                    source={require("../assets/RangpurDistrict.jpg")}/>
              </View>
              <View style={{ flex: 3, backgroundColor: 'red' }}>
                <Image 
                      style={styles.pic}
                      source={require("../assets/rangpur.jpg")}/>
                </View>
              </FlipCard>
              
          {/* <View style={{ flex: 3, backgroundColor: 'red' }}>
          <Image 
                style={styles.pic}
                source={require("../assets/RangpurDistrict.jpg")}/>
          </View> */}

          
          <View style={styles.elementRow}>
                <View style={styles.rowContent}> 
                <MaterialCommunityIcons name="human" size={60} color={"green"} />  
                  <Text > জনসংখ্যা   </Text>
                  <Text > ২৮  লক্ষ প্রায়    </Text>
                </View>
                <View style={styles.rowContent}>
                <MaterialCommunityIcons name="sine-wave" size={60} color={"green"} />  
                  <Text> ইউনিয়ন   </Text>
                  <Text> ৮৩ টি    </Text>
                </View>
                <View style={styles.rowContent}>
                <MaterialCommunityIcons name="size-m" size={60} color={"green"} />  
                  <Text> মৌজা   </Text>
                  <Text> ১১৯৭ টি    </Text>
                </View>

          </View>

         
          <View style={styles.elementRow}>
                <View style={styles.rowContent}> 
                <MaterialCommunityIcons name="ship-wheel" size={60} color={"green"} />  
                  <Text > গ্রাম   </Text>
                  <Text > ১৪৯২  টি    </Text>
                </View>
                <View style={styles.rowContent}>
                <MaterialCommunityIcons name="school" size={60} color={"green"} />  
                  <Text> শিক্ষা প্রতিষ্ঠান   </Text>
                  <Text> ২২১৪  টি     </Text>
                </View>
                <View style={styles.rowContent}>
                <MaterialCommunityIcons name="shoe-print" size={60} color={"green"} />  
                  <Text> আয়তন   </Text>
                  <Text>  ২৪০০.৫৬ {'\n'} বর্গ কি.মি    </Text>
                </View>

          </View>
          
          
         
            <Text style={styles.textDecor}>  ইতিহাস ও ঐতিহ্যের রংপুর  জেলা </Text>
            <Text style={{lineHeight: 25, paddingLeft: 5, paddingRight: 5,backgroundColor:"oldlace"}}> নামকরণের ক্ষেত্রে লোকমুখে প্রচলিত আছে যে পূর্বের ‘রঙ্গপুর’ থেকেই কালক্রমে এই নামটি এসেছে। ইতিহাস থেকে জানা যায় যে উপমহাদেশে ইংরেজরা নীলের চাষ শুরু করে। এই অঞ্চলে মাটি উর্বর হবার কারণে এখানে প্রচুর নীলের চাষ হত। সেই নীলকে স্থানীয় লোকজন রঙ্গ নামেই জানত। কালের বিবর্তনে সেই রঙ্গ থেকে রঙ্গপুর এবং তা থেকেই আজকের রংপুর। অপর একটি প্রচলিত ধারণা থেকে জানা যায় যে রংপুর জেলার পূর্বনাম রঙ্গপুর। প্রাগ জ্যোতিস্বর নরের পুত্র ভগদত্তের রঙ্গমহল এর নামকরণ থেকে এই রঙ্গপুর নামটি আসে। রংপুর জেলার অপর নাম জঙ্গপুর । ম্যালেরিয়া রোগের প্রাদুর্ভাব থাকায় কেউ কেউ এই জেলাকে যমপুর বলেও ডাকত। তবে রংপুর জেলা সুদূর অতীত থেকে আন্দোলন প্রতিরোধের মূল ঘাঁটি ছিল। তাই জঙ্গপুর নামকেই রংপুরের আদি নাম হিসেবে ধরা হয়। জঙ্গ অর্থ যুদ্ধ, পুর অর্থ নগর বা শহর। গ্রাম থেকে আগত মানুষ প্রায়ই ইংরেজদের অত্যাচারে নিহত হত বা ম্যালেরিয়ায় মারা যেত। তাই সাধারণ মানুষ শহরে আসতে ভয় পেত। সুদূর অতীতে রংপুর জেলা যে রণভূমি ছিল তা সন্দেহাতীত ভাবেই বলা যায়। ত্রিশের দশকের শেষ ভাগে এ জেলায় কৃষক আন্দোলন যে ভাবে বিকাশ লাভ করে ছিল তার কারণে রংপুরকে লাল রংপুর হিসেবে আখ্যায়িত করা হয়েছিল। {'\n'}{'\n'}{'\n'}{'\n'}</Text>
          </ScrollView>
        
    </View>
   
    
    );
}

const styles = StyleSheet.create({
          elementRow:{
            flex: 1,
           //backgroundColor: "#FF6C01",
            flexDirection:"row",
            alignContent: "center"
        },
        rowContent:{
            flex:1,
            backgroundColor: "oldlace",
            borderRadius: 35,
            justifyContent:"center",
            alignItems:'center',
            margin: 5
        },
        pic:{
            width: '100%',
            height: 500,
            resizeMode: 'cover'
        },
        textDecor:{
          fontWeight:'bold',
          paddingLeft: 10,
          backgroundColor: colors.secondary,
          paddingTop:10,
          paddingBottom:10,
          textAlign:'center'
        },
        
})


export default PractiseTest;
import { icons } from "@/constant/icon";
import { image } from "@/constant/image";
import { blurEffect } from "@/constant/style";
import { LinearGradient } from "expo-linear-gradient";
import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';


const homepage = () => {

  // const leadStyle = "font-home-bold text-center text-white italic text-[3.5rem] leading-[3.5rem] font-bold mb-9"

  // const subStyle="font-home-regular not-italic font-normal text-white text-[3rem]"

  return (
    <View className="flex-1 bg-primary">
      
      {/* gradient effect */}
      <Image 
      source={blurEffect.ellipse}
      className="absolute left-0 bottom-80 "
      />

      {/* background image */}
      <Image 
      source={image.background}
      className='absolute h-full w-full scale-[1.09] -right-8 top-20'
      resizeMode='cover'
      />

      <View className="flex w-full h-full items-center justify-end">
      {/* dark gradient */}
        <View className="h-[400px] w-full">
          <LinearGradient
            // Colors array: top is transparent, bottom is dark
            colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']}
            locations={[0, 1]}
            className="absolute left-0 right-0 top-0 bottom-0"
          />

          <View className="flex justify-end items-center px-6">
            {/* logo */}
            <Image source={icons.logo} className="my-6"/>

            <Text className="font-home-bold text-center text-white italic text-[3.5rem] leading-[3.5rem] font-bold mb-9">Embrace Your Glow,{"\n"}

              <Text className="font-home-regular not-italic font-normal text-white text-[3rem]" >One day at a time.</Text>
            </Text>

            <Text className="text-white text-center text-2xl font-home-regular">Auréa helps you stay on track with routines</Text>
            <Text className="text-white text-center text-2xl font-home-regular mb-9">that nurture your skin and confidence.</Text>

            {/* Get Started Button */}
            <TouchableOpacity 
              className="w-[100%] mx-6 h-16 bg-white rounded-full flex justify-center items-center"
              // onPress={"/signup"}
              >
              <Text className="text-center font-home-semibold font-semibold text-2xl text-gray-500">Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
    </View>
  )
}

export default homepage

// import { Text, View } from 'react-native';

// export default function Page() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
//       <Text style={{ color: 'white', fontSize: 24 }}>Safe Mode Active</Text>
//       <Image source={ icons.logo } />
//     </View>
//   );
// }
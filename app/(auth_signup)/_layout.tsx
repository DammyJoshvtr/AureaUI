import { Slot } from 'expo-router'
import React from 'react'
import { View } from "react-native"

const SignupLayout = () => {

  return (
    <View className='flex-1 flex-col'>

      {/* Top Header */}
      <View className='h-[30%] flex align-center justify-center'>
        Register
      </View>

      {/* Dynamic Body */}
      <View className='h-[70%] size-4'>
        <Slot />
      </View>
    </View>
  )
}

export default SignupLayout
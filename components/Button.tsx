import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Button = ({ lable, theme ,onPress }: { lable: string; theme?: 'primary'; onPress: () => void }) => {

const handlePress = () => {
  onPress();
}


if (theme === 'primary') {
  return (
    <TouchableOpacity className=" bg-primary
     rounded-full
      px-4
       py-2"
       onPress={handlePress}
       >
      <Text className="text-hairline Text text-base font-medium px-4 py-2 rounded-full">
        <FontAwesome name='picture-o' size={20} color='#dde0e2' className='mr-2' />
        
        {lable}
      </Text>
    </TouchableOpacity>
  )
}
  return (
    <TouchableOpacity className="bg-mute
     rounded-full
      px-4
       py-2"
       onPress={handlePress}
       >
      <Text className="text-hairline  Text text-base font-medium px-4 py-2 rounded-full">
        <FontAwesome name='file-picture-o' size={20} color='#dde0e2' className='mr-2' />
        {lable}
      </Text>
    </TouchableOpacity>
  )
}

export default Button
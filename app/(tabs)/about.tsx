import { View, Text } from 'react-native'
import React from 'react'
import {AboutStyles} from '../../styles/globalStyles'
const about = () => {
  return (
    <View style={AboutStyles.container}>
      <Text style={AboutStyles.heading}>About Us</Text>
      <Text style={AboutStyles.subheading}>We are a team of passionate developers creating amazing apps.</Text>
      <Text style={AboutStyles.paragraph}>We believe in creating innovative solutions that make a difference.</Text>
    </View>
  )
}

export default about
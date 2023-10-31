import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import{styles} from './Styles'

const Button = ({onChangeAction, buttonText, style}) => {
  return (
    <TouchableOpacity onPress={onChangeAction}>
          <View style={[styles.button,style]}>
            <Text style={styles.buttonText}>{buttonText}</Text>
          </View>
        </TouchableOpacity>
  )
}

export default Button;
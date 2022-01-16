import React from 'react'
import { Text, TouchableOpacity } from 'react-native';
import { style } from './styles'

const Botao = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={style.container} >
            <Text style={style.text}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default Botao;
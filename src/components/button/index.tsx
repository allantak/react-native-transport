import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { TouchableOpacityProps } from 'react-native';
import { ButtonLarg, TextButton } from './styles'

interface ButtonData extends TouchableOpacityProps{
    Text: string,
    Navigation: string
}

export default function Button( {Text , Navigation}: ButtonData ) {
    const navigation = useNavigation();

    const goTo = (screenName:any) => {
        navigation.navigate(screenName);
    }

    return (
        <ButtonLarg onPress={() => goTo(Navigation)}>
            <TextButton>{Text}</TextButton>
        </ButtonLarg>
    )
}
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { ButtonLarg, TextButton } from './styles'

export default function Button({ Text, Navigation }) {
    const navigation = useNavigation();

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <ButtonLarg onPress={() => goTo(Navigation)}>
            <TextButton>{Text}</TextButton>
        </ButtonLarg>
    )
}
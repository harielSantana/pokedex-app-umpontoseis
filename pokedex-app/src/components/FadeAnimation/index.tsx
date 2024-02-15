import { useEffect } from 'react';
import { ViewProps, useWindowDimensions } from 'react-native';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import * as S from './styles';

interface FadeAnimationProps extends ViewProps {
    children: React.ReactNode;
}

export function FadeAnimation({children, ...rest}: FadeAnimationProps) {
    const { width: displayWidth} = useWindowDimensions()

    const cardOpacity = useSharedValue(0);
    const cardOffset = useSharedValue(0.25 * displayWidth);

    const animetedStyle = useAnimatedStyle(() => {
        'worklet'
        return {
            opacity: cardOpacity.value,
            transform: [{ translateX: cardOffset.value }]
        }
    })

    useEffect(() => {
        cardOpacity.value = withTiming(1, { duration:400});
        cardOffset.value = withTiming(0, { duration:200});
    })

    return (
        <S.AnimationContainer {...rest} style={animetedStyle}>
            {children}
        </S.AnimationContainer>
    )
}

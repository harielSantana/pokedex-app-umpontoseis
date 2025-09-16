import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, ViewStyle, TextStyle } from 'react-native';
import { cn } from '@/utils/cn';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  textClassName?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  className = '',
  textClassName = '',
  style,
  textStyle,
}) => {
  const baseClasses = 'flex-row items-center justify-center rounded-lg';
  
  const variantClasses = {
    primary: 'bg-pokemon-black',
    secondary: 'bg-pokemon-gray',
    outline: 'border-2 border-pokemon-black bg-transparent',
    ghost: 'bg-pokemon-button',
  };

  const sizeClasses = {
    sm: 'px-3 py-2',
    md: 'px-4 py-3',
    lg: 'px-6 py-4',
  };

  const textVariantClasses = {
    primary: 'text-white font-sf-medium',
    secondary: 'text-white font-sf-medium',
    outline: 'text-pokemon-black font-sf-medium',
    ghost: 'text-pokemon-black font-sf-medium',
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        isDisabled && 'opacity-50',
        className
      )}
      style={style}
      activeOpacity={0.7}
    >
      {loading && (
        <ActivityIndicator 
          size="small" 
          color={variant === 'outline' || variant === 'ghost' ? '#17171B' : '#FFFFFF'} 
          style={{ marginRight: 8 }}
        />
      )}
      <Text
        className={cn(
          textVariantClasses[variant],
          textSizeClasses[size],
          textClassName
        )}
        style={textStyle}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
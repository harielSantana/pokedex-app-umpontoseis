import React, { useState } from 'react';
import { 
  TextInput, 
  View, 
  Text, 
  TouchableOpacity,
  ViewStyle,
  TextStyle 
} from 'react-native';
import { cn } from '@/utils/cn';

interface InputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onSubmitEditing?: () => void;
  icon?: 'search' | 'filter';
  disabled?: boolean;
  className?: string;
  inputClassName?: string;
  style?: ViewStyle;
  inputStyle?: TextStyle;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  placeholder = '',
  value = '',
  onChangeText,
  onSubmitEditing,
  icon,
  disabled = false,
  className = '',
  inputClassName = '',
  style,
  inputStyle,
  error,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const getIconComponent = () => {
    if (icon === 'search') {
      return (
        <Text className="text-pokemon-gray text-lg">🔍</Text>
      );
    }
    if (icon === 'filter') {
      return (
        <Text className="text-pokemon-gray text-lg">⚙️</Text>
      );
    }
    return null;
  };

  return (
    <View className={cn('w-full', className)} style={style}>
      <View
        className={cn(
          'flex-row items-center px-4 py-3 rounded-lg border-2',
          isFocused 
            ? 'border-pokemon-black bg-white' 
            : 'border-transparent bg-pokemon-light-gray',
          disabled && 'opacity-50',
          error && 'border-red-500'
        )}
      >
        {icon && (
          <View className="mr-3">
            {getIconComponent()}
          </View>
        )}
        
        <TextInput
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          placeholderTextColor="#747476"
          editable={!disabled}
          className={cn(
            'flex-1 text-base font-sf-regular text-pokemon-black',
            inputClassName
          )}
          style={inputStyle}
          returnKeyType="search"
          autoCorrect={false}
          autoCapitalize="none"
        />
      </View>
      
      {error && (
        <Text className="text-red-500 text-sm font-sf-regular mt-1 ml-1">
          {error}
        </Text>
      )}
    </View>
  );
};

export default Input;
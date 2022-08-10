import React, {useRef, useState} from 'react';
import {
  View,
  TextInput,
  KeyboardType,
  StyleSheet,
  Animated,
  Easing,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  Text,
} from 'react-native';
import {
  inputContainerStyleHelper,
  inputStyleHelper,
} from '../Helpers/InputStyleHelpers';

type Props = {
  placeholder: string;
  keyboardType?: KeyboardType;
  autoFocus?: boolean;
  required?: boolean;
  hasError?: boolean;
  corner?: 'cornered' | 'curved' | 'rounded' | 'circle';
  onTextChanged: Function;
  style?: StyleProp<ViewStyle>;
  testID?: string;
  clearTextOnFocus?: boolean;
  selectTextOnFocus?: boolean;
  name?: string;
  onClearText?: () => void;
};

const Input: React.FC<Props> = ({
  placeholder,
  keyboardType = 'default',
  autoFocus = false,
  hasError = false,
  required = false,
  corner = 'curved',
  onTextChanged,
  testID,
  clearTextOnFocus,
  selectTextOnFocus,
  name,
  onClearText,
}) => {
  const [inputError, setInputError] = useState(false);
  const placeholderRef = useRef(new Animated.Value(0)).current;
  const inputRef = useRef<TextInput | null>(null);

  const handleInputValue = (text: string | number) => {
    if (!text) {
      setInputError(true);
      Animated.timing(placeholderRef, {
        useNativeDriver: true,
        easing: Easing.bounce,
        duration: 200,
        toValue: 0,
      }).start();
    } else {
      setInputError(false);
    }
    onTextChanged(text, name);
  };
  return (
    <View
      style={[
        styles.inputContainer,
        inputContainerStyleHelper(
          'input',
          corner,
          inputError,
          hasError,
          required,
        ),
      ]}
      onTouchEnd={inputRef.current?.focus}
      testID="inputContainer">
      <Animated.Text
        style={[
          styles.placeholder,
          {transform: [{translateY: placeholderRef}]},
        ]}>
        {placeholder}
      </Animated.Text>
      <TextInput
        ref={inputRef}
        style={[styles.input, inputStyleHelper('input')]}
        keyboardType={keyboardType}
        clearTextOnFocus={clearTextOnFocus}
        selectTextOnFocus={selectTextOnFocus}
        onEndEditing={e => {
          handleInputValue(e.nativeEvent.text);
        }}
        onBlur={e => {
          if (e.nativeEvent.text) handleInputValue(e.nativeEvent.text);
        }}
        onFocus={() => {
          Animated.timing(placeholderRef, {
            useNativeDriver: true,
            easing: Easing.ease,
            duration: 200,
            toValue: -30,
          }).start();
        }}
        autoFocus={autoFocus}
      />
      {onClearText && (
        <TouchableOpacity style={styles.clear} onPress={onClearText}>
          <Text>X</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    borderStyle: 'solid',
    borderWidth: 1,
    width: '95%',
    justifyContent: 'center',
    marginTop: 20,
  },
  input: {
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
  placeholder: {
    color: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    marginLeft: 10,
    fontSize: 12,
  },
  clear: {
    position: 'absolute',
    right: 10,
  },
});
export default Input;

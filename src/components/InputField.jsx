import InputFieldStyles from '../styles/InputFieldStyles';
import React, { useState } from 'react';
import { TextInput, Text, View } from 'react-native';
import TextStyles from '../styles/TextStyles';

/**
 * It renders the input fields in the Contacts App.
 * @component
 */
const InputField = ({ title, keyboardType, value, onChange }) => {
	const [flag, setFlag] = useState(false);
	return (
		<View>
			<Text style={TextStyles.regular}>{title}</Text>
			<TextInput
				style={flag ? InputFieldStyles.textInputOnFocus : InputFieldStyles.textInputOnBlur}
				autoCapitalize='none'
				autoCorrect={false}
				keyboardType={keyboardType}
				onFocus={() => setFlag(true)}
				onBlur={() => setFlag(false)}
				value={value}
				onChangeText={onChange}
			/>
		</View>
	);
};

export default InputField;

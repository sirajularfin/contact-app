import { LIGHT, SECONDARY } from '../constants/Colors';
import { StyleSheet } from 'react-native';
import { FONT_SIZE } from '../constants/Fonts';

const baseInput = {
	borderRadius: 5,
	fontSize: FONT_SIZE,
	height: 50,
	marginBottom: 20,
	marginTop: 10,
	paddingLeft: 10,
};

const InputFieldStyles = StyleSheet.create({
	textInputOnBlur: {
		...baseInput,
		backgroundColor: SECONDARY,
	},
	textInputOnFocus: {
		...baseInput,
		backgroundColor: LIGHT,
		borderColor: SECONDARY,
		borderWidth: 1,
	},
});

export default InputFieldStyles;

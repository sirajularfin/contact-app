import { BLACK, DANGER, LIGHT, PRIMARY, SECONDARY } from '../constants/Colors';
import { StyleSheet } from 'react-native';
import { FONT_SIZE } from '../constants/Fonts';

const baseButton = {
	alignItems: 'center',
	borderRadius: 5,
	fontSize: FONT_SIZE,
	fontWeight: 'bold',
	marginVertical: 5,
	padding: 10,
	textAlign: 'center',
	textTransform: 'uppercase',
};

const ButtonStyles = StyleSheet.create({
	danger: {
		...baseButton,
		backgroundColor: DANGER,
		color: LIGHT,
	},
	primary: {
		...baseButton,
		backgroundColor: PRIMARY,
		color: LIGHT,
	},
	secondary: {
		...baseButton,
		backgroundColor: SECONDARY,
		color: BLACK,
	},
});

export default ButtonStyles;

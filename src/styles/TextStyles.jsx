import { StyleSheet } from 'react-native';
import { FONT_SIZE } from '../constants/Fonts';
import { BLACK, PRIMARY, SECONDARY } from '../constants/Colors';

const TextStyles = StyleSheet.create({
	regular: {
		color: BLACK,
		fontSize: FONT_SIZE,
	},
	heading: {
		color: BLACK,
		fontSize: FONT_SIZE + 4,
		fontWeight: 'bold',
		marginBottom: 15,
	},
});

export default TextStyles;

import { StyleSheet } from 'react-native';
import { WINDOW_WIDTH } from '../constants/Dimensions';

const ContainerStyles = StyleSheet.create({
	section: {
		alignSelf: 'center',
		marginVertical: 15,
		width: WINDOW_WIDTH - 40,
	},
});

export default ContainerStyles;

import { StyleSheet } from 'react-native';
import { BLACK, DANGER, SECONDARY } from '../constants/Colors';
import { FONT_SIZE } from '../constants/Fonts';

const ListStyles = StyleSheet.create({
	Container: {
		borderBottomColor: SECONDARY,
		borderBottomWidth: 1,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 10,
		paddingVertical: 15,
	},
	Name: {
		fontSize: FONT_SIZE + 4,
		fontWeight: 'medium',
	},
	Phone: {
		fontSize: FONT_SIZE,
		fontStyle: 'italic',
	},
	Favourite: {
		color: DANGER,
		fontSize: FONT_SIZE - 6,
		fontStyle: 'italic',
		textTransform: 'uppercase',
		textAlign: 'right',
	},
});

export default ListStyles;

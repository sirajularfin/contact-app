import ButtonStyles from '../styles/ButtonStyles';
import ContainerStyles from '../styles/ContainerStyles';
import InputField from '../components/InputField';
import React, { useEffect, useState } from 'react';
import TypographyStyles from '../styles/TextStyles';
import { Text, TouchableOpacity, View, ToastAndroid } from 'react-native';
import { deleteItemById, getItemById, updateDate } from '../utils/Database';

/**
 * It renders the screen to update the contacts.
 * @component
 */
const UpdateContacts = ({ route, navigation }) => {
	const { contactId } = route.params;
	const [name, setName] = useState('');
	const [mobileNumber, setMobileNumber] = useState('');
	const [landlineNumber, setLandlineNumber] = useState('');
	const [favourite, setFavourite] = useState(0);
	useEffect(() => {
		getItemById(contactId).then((item) => {
			console.log(item);
			setName(item.Name);
			setMobileNumber(item.MobileNumber);
			setLandlineNumber(item.LandlineNumber);
			setFavourite(item.Favourite);
		});
	}, []);

	const handleFormSubmit = () => {
		updateDate(contactId, name, mobileNumber, landlineNumber, favourite);
		ToastAndroid.show('Contact updated successfully!', ToastAndroid.SHORT);
		navigation.navigate('Contact List');
	};

	const handleDeletion = () => {
		deleteItemById(contactId);
		ToastAndroid.show('Contact deleted successfully!', ToastAndroid.SHORT);
		navigation.navigate('Contact List');
	};

	return (
		<View style={ContainerStyles.section}>
			<Text style={TypographyStyles.heading}>Please enter the below fields: </Text>
			<InputField
				title='Name of person'
				keyboardType='default'
				value={name}
				onChange={(value) => setName(value)}
			/>
			<InputField
				title='Mobile Number'
				keyboardType='phone-pad'
				value={mobileNumber}
				onChange={(value) => setMobileNumber(value)}
			/>
			<InputField
				title='Landline Number'
				keyboardType='phone-pad'
				value={landlineNumber}
				onChange={(value) => setLandlineNumber(value)}
			/>
			<View>
				<TouchableOpacity onPress={handleFormSubmit}>
					<Text style={ButtonStyles.primary}>Update</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => (favourite ? setFavourite(0) : setFavourite(1))}>
					<Text style={favourite ? ButtonStyles.danger : ButtonStyles.secondary}>
						{favourite ? 'Cancel' : 'Set'} Favourite
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={handleDeletion}>
					<Text style={ButtonStyles.danger}>Delete</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default UpdateContacts;

import ButtonStyles from '../styles/ButtonStyles';
import ContainerStyles from '../styles/ContainerStyles';
import InputField from '../components/InputField';
import React, { useState } from 'react';
import TypographyStyles from '../styles/TextStyles';
import { Text, TouchableOpacity, View, ToastAndroid } from 'react-native';
import { insertData } from '../utils/Database';

/**
 * It renders the add contacts screen.
 * @screen
 */

const AddContacts = ({ navigation }) => {
	const [name, setName] = useState('');
	const [mobileNumber, setMobileNumber] = useState('');
	const [landlineNumber, setLandlineNumber] = useState('');
	const [favourite, setFavourite] = useState(0);

	const handleFormSubmit = () => {
		insertData(name, mobileNumber, landlineNumber, favourite);
		ToastAndroid.show('Contact added successfully!', ToastAndroid.SHORT);
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
					<Text style={ButtonStyles.primary}>Save</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => (favourite ? setFavourite(0) : setFavourite(1))}>
					<Text style={favourite ? ButtonStyles.danger : ButtonStyles.secondary}>
						{favourite ? 'Cancel' : 'Set'} Favourite
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default AddContacts;

import ButtonStyles from '../styles/ButtonStyles';
import ContainerStyles from '../styles/ContainerStyles';
import ListStyles from '../styles/ListStyles';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { getAllItems } from '../utils/Database';
import { useIsFocused } from '@react-navigation/native';

/**
 * It renders all the contacts.
 * @screen
 */
const ContactList = ({ navigation }) => {
	const [contacts, setContacts] = useState([]);
	const isFocused = useIsFocused();
	useEffect(() => {
		if (isFocused) {
			getAllItems().then((items) => {
				console.log('All Contacts:', items);
				setContacts(items);
			});
		}
	}, [isFocused]);

	return (
		<View>
			<View style={ContainerStyles.section}>
				<TouchableOpacity onPress={() => navigation.navigate('Add New Contact')}>
					<Text style={ButtonStyles.primary}>Add +</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Favourite Contact')}>
					<Text style={ButtonStyles.danger}>Favourite</Text>
				</TouchableOpacity>
			</View>
			<FlatList
				data={contacts}
				renderItem={({ item }) => (
					<TouchableOpacity onPress={() => navigation.navigate('Update Contact', { contactId: item.Id })}>
						<View style={ListStyles.Container}>
							<Text style={ListStyles.Name}>{item.Name}</Text>
							<View>
								<Text style={ListStyles.Phone}>{item.MobileNumber}</Text>
								<Text style={ListStyles.Favourite}>{item.Favourite ? 'Favourite' : null}</Text>
							</View>
						</View>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
};

export default ContactList;

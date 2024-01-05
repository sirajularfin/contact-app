import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { getAllItems } from '../utils/Database';
import ListStyles from '../styles/ListStyles';
import TextStyles from '../styles/TextStyles';
import ContainerStyles from '../styles/ContainerStyles';

const Favourite = ({ navigation }) => {
	const [contacts, setContacts] = useState([]);
	useEffect(() => {
		getAllItems().then((items) => {
			console.log('All Contacts:', items);
			setContacts(items);
		});
	}, []);

	if (contacts.filter((item) => item.Favourite === 1).length === 0) {
		return (
			<View style={ContainerStyles.section}>
				<Text style={TextStyles.heading}>No Favourite Contacts!</Text>
			</View>
		);
	}
	return (
		<View>
			<FlatList
				data={contacts.filter((item) => item.Favourite === 1)}
				renderItem={({ item }) => (
					<TouchableOpacity onPress={() => navigation.navigate('Update Contact', { contactId: item.Id })}>
						<View style={ListStyles.Container}>
							<Text style={ListStyles.Name}>{item.Name}</Text>
							<View>
								<Text style={ListStyles.Phone}>{item.MobileNumber}</Text>
							</View>
						</View>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
};

export default Favourite;

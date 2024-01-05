import AddContacts from './src/screens/AddContacts';
import ContactList from './src/screens/ContactList';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { initDatabase } from './src/utils/Database';
import UpdateContacts from './src/screens/UpdateContacts';
import Favourite from './src/screens/Favourite';

const Stack = createNativeStackNavigator();

const App = () => {
	useEffect(() => {
		initDatabase();
	}, []);
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Contact List'>
				<Stack.Screen
					name='Contact List'
					component={ContactList}
				/>
				<Stack.Screen
					name='Add New Contact'
					component={AddContacts}
				/>
				<Stack.Screen
					name='Update Contact'
					component={UpdateContacts}
				/>
				<Stack.Screen
					name='Favourite Contact'
					component={Favourite}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;

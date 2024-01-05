import SQLite from 'react-native-sqlite-storage';

const TABLE_NAME = 'Contacts';

// Open a database
const db = SQLite.openDatabase({ name: 'ContactsDB', location: 'default' });

// Create a table
export const initDatabase = () => {
	db.transaction((tx) => {
		tx.executeSql(
			`CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (Id INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, MobileNumber TEXT, LandlineNumber TEXT, Favourite INTEGER)`,
			[],
			(tx, results) => {
				console.log('Table created successfully');
			},
			(error) => {
				console.error('Error creating table:', error);
			}
		);
	});
};

// Insert data into the table
export const insertData = (name, mobileNumber, landlineNumber, favourite) => {
	db.transaction((tx) => {
		tx.executeSql(
			`INSERT INTO ${TABLE_NAME} (Name, MobileNumber, LandlineNumber, Favourite) VALUES (?, ?, ?, ?)`,
			[name, mobileNumber, landlineNumber, favourite],
			(tx, results) => {
				console.log('Data inserted successfully');
			},
			(error) => {
				console.error('Error inserting data:', error);
			}
		);
	});
};

// Insert data into the table
export const updateDate = (id, name, mobileNumber, landlineNumber, favourite) => {
	db.transaction((tx) => {
		tx.executeSql(
			`UPDATE ${TABLE_NAME} SET Name = ?, MobileNumber = ?, LandlineNumber = ?, Favourite = ? WHERE Id = ${id}`,
			[name, mobileNumber, landlineNumber, favourite],
			(tx, results) => {
				console.log('Data updated successfully');
			},
			(error) => {
				console.error('Error inserting data:', error);
			}
		);
	});
};

// Query data from the table
export const getAllItems = () => {
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				`SELECT * FROM ${TABLE_NAME} ORDER BY Name`,
				[],
				(tx, results) => {
					const rows = results.rows;
					const items = [];
					for (let i = 0; i < rows.length; i++) {
						items.push(rows.item(i));
					}
					resolve(items);
				},
				(error) => {
					console.error('Error querying data:', error);
					reject(error);
				}
			);
		});
	});
};

// Find a data using Id in the table
export const getItemById = (id) => {
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				`SELECT * FROM ${TABLE_NAME} WHERE Id = ${id} ORDER BY Name`,
				[],
				(tx, results) => {
					resolve(results.rows.item(0));
				},
				(error) => {
					console.error('Error querying data:', error);
					reject(error);
				}
			);
		});
	});
};

// Delete the item using specific Id in the table
export const deleteItemById = (id) => {
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				`DELETE FROM ${TABLE_NAME} WHERE Id = ${id}`,
				[],
				(tx, results) => {
					console.log('Contact deleted successfully');
					resolve();
				},
				(error) => {
					console.error('Error deleting:', error);
					reject(error);
				}
			);
		});
	});
};

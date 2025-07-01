import {
	Document,
	Page,
	Text,
	View,
} from "@react-pdf/renderer";

// import React from 'react';

// Create styles

// Create Document Component
// const MyDocument = () => {
// 	return (
// 		<Document>
// 			<Page size="A4" style={styles.page}>
// 				<View>
// 					<Text>Section #1</Text>
// 				</View>
// 				<View>
// 					<Text>Section #2</Text>
// 				</View>
// 			</Page>
// 		</Document>
// 	);
// };

export const pdf = {
	pdf() {
		return "foo";
		// return renderToString(MyDocument);
	},
};

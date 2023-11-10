import {useEffect} from 'react';
import React from 'react';
import {Box, Image, Text} from '@chakra-ui/react';

const response_mock = {
	under_infection: 0,
	under_attack: 1,
	attack_type: 'Cambio de Lugar',
	has_defense: 'img.71',
	attacker_name: 'pepe',
};

const Defense = () => {
	const attacker_name = response_mock.attacker_name;
	let imgSrc;
	const expr = response_mock.attack_type;
	switch (expr) {
		case 'Cambio de Lugar':
			console.log('defending with Cambio de Lugar');

			//play (de lo que corresponda)
			imgSrc = 'img71.jpg';
			break;
		case 'Mangoes':
		case 'Papayas':
			console.log('Mangoes and papayas are $2.79 a pound.');
			// Expected output: "Mangoes and papayas are $2.79 a pound."
			break;
		default:
			console.log(`Sorry, the attack ${expr} doesnt exists.`);
	}

	/* return (
		<img
			src={`http://localhost:5173/src/assets/cards/${imgSrc}`}
			alt={`Defense for ${expr}`}
		/>
	); */
	return (
		<Box textAlign='center'>
			<Text color='whatsapp.700' fontSize='md' fontWeight='bold' mb={5}>
				{`El jugador ${attacker_name} jugó la carta ${expr} contra ti`}
			</Text>
			<Image
				src={`http://localhost:5173/src/assets/cards/${imgSrc}`}
				alt={`Defense for ${expr}`}
				boxSize='400px' // Adjust the size as needed
				objectFit='contain' // You can use other values like 'contain' or 'fill' based on your preference
			/>
		</Box>
	);
};

export default Defense;

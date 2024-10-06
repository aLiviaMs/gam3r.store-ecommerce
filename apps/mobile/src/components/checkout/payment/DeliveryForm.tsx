import { IAddressOrder as OrderDelivery } from '@gstore/core'
import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

export interface DeliveryFormProps {
	delivery: Partial<OrderDelivery>
	onDeliveryChange: (delivery: Partial<OrderDelivery>) => void
	className?: string
}

export default function DeliveryForm(props: DeliveryFormProps) {
	const { delivery, onDeliveryChange } = props

	function updateAttribute(attribute: string) {
		return (value: any) => {
			onDeliveryChange({ ...delivery, [attribute]: value })
		}
	}

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				placeholder="Full Name"
				value={delivery.name}
				onChangeText={updateAttribute('name')}
				placeholderTextColor="#999"
			/>
			<TextInput
				style={styles.input}
				placeholder="Email"
				value={delivery.email}
				onChangeText={updateAttribute('email')}
				placeholderTextColor="#999"
			/>
			<TextInput
				style={styles.input}
				placeholder="Document"
				value={delivery.document}
				onChangeText={updateAttribute('document')}
				keyboardType="numeric"
				placeholderTextColor="#999"
			/>
			<TextInput
				style={styles.input}
				placeholder="Street Address"
				value={delivery.street}
				onChangeText={updateAttribute('street')}
				placeholderTextColor="#999"
			/>
			<TextInput
				style={styles.input}
				placeholder="Additional Info"
				value={delivery.complement}
				onChangeText={updateAttribute('complement')}
				placeholderTextColor="#999"
			/>
			<TextInput
				style={styles.input}
				placeholder="City"
				value={delivery.city}
				onChangeText={updateAttribute('city')}
				placeholderTextColor="#999"
			/>
			<TextInput
				style={styles.input}
				placeholder="State"
				value={delivery.state}
				onChangeText={updateAttribute('state')}
				placeholderTextColor="#999"
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	label: {
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 5,
		color: '#fff',
	},
	input: {
		height: 40,
		width: 300,
		color: '#fff',
		borderRadius: 5,
		marginBottom: 10,
		paddingHorizontal: 10,
		backgroundColor: '#241440',
	},
})
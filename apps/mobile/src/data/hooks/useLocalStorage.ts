import AsyncStorage from '@react-native-async-storage/async-storage'
import { useCallback } from 'react'

export default function useLocalStorage() {
	const getItem = useCallback(async <T>(key: string): Promise<T | null> => {
		try {
			const localValue = await AsyncStorage.getItem(key)
			return localValue ? JSON.parse(localValue) : null
		} catch (error) {
			console.error('Error getting item from AsyncStorage:', error)
			return null
		}
	}, [])

	const saveItem = useCallback(async <T>(key: string, value: T): Promise<void> => {
		try {
			await AsyncStorage.setItem(key, JSON.stringify(value))
		} catch (error) {
			console.error('Error saving item to AsyncStorage:', error)
		}
	}, [])

	const removeItem = useCallback(async (key: string): Promise<void> => {
		try {
			await AsyncStorage.removeItem(key)
		} catch (error) {
			console.error('Error removing item from AsyncStorage:', error)
		}
	}, [])

	return { getItem, saveItem, removeItem }
}
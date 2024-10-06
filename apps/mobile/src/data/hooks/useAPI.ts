import { TObject } from '@gstore/core'
import { useCallback } from 'react'

const baseUrl = process.env.NEXT_PUBLIC_API_URL

export default function useAPI() {
	const httpGet = useCallback(async function (path: string) {
		const uri = path.startsWith('/') ? path : `/${path}`
		const fullUrl = `${baseUrl}${uri}`

		const response = await fetch(fullUrl)
		return extractData(response)
	}, [])

	const httpPost = useCallback(async function (path: string, body: TObject) {
		const uri = path.startsWith('/') ? path : `/${path}`
		const fullUrl = `${baseUrl}${uri}`

		const response = await fetch(fullUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		})
		return extractData(response)
	}, [])

	async function extractData(response: Response) {
		let content = ''
		try {
			content = await response.text()
			return JSON.parse(content)
		} catch (e) {
			console.error(e)
			return content
		}
	}

	return { httpGet, httpPost }
}
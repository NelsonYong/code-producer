import type React from 'react'
import { createContext } from 'react'

export type SelectType = {
	label: string
	value: string
	language: string
}

const PageContext = createContext<{
	currentCode?: string
	setCurrentCode?: React.Dispatch<React.SetStateAction<string | undefined>>
	select?: SelectType
	setSelect?: React.Dispatch<React.SetStateAction<SelectType>>
	targetSelect?: SelectType
	setTargetSelect?: React.Dispatch<React.SetStateAction<SelectType>>
}>({})

export default PageContext

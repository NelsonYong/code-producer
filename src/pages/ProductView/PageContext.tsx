import type React from 'react'
import { createContext } from 'react'

const PageContext = createContext<{
	currentCode?: string
	setCurrentCode?: React.Dispatch<React.SetStateAction<string | undefined>>
}>({})

export default PageContext

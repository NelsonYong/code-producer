import { useState } from 'react'
import JsonView from './JsonView'
import PageContext from './PageContext'
import TypeView from './TypeView'

const ProductView = () => {
	const [currentCode, setCurrentCode] = useState<string>()
	return (
		<PageContext.Provider
			value={{
				currentCode,
				setCurrentCode,
			}}
		>
			<div className="w-full h-full flex  p-2">
				<div className="w-1/2 flex-1 mr-1">
					<div
						className="w-full h-full pt-2 rounded-xl overflow-hidden "
						style={{
							backgroundColor: '#3c3c3c',
						}}
					>
						<h3 className="text-white pl-2">Json</h3>
						<JsonView />
					</div>
				</div>
				<div className="w-1/2 flex-1 ml-1">
					<div
						className="w-full h-full pt-2 rounded-xl overflow-hidden"
						style={{
							backgroundColor: '#3c3c3c',
						}}
					>
						<h3 className="text-white pl-2">Type</h3>
						<TypeView />
					</div>
				</div>
			</div>
		</PageContext.Provider>
	)
}

export default ProductView

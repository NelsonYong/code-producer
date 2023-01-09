import { Select } from 'antd'
import { useEffect, useMemo, useState } from 'react'
import JsonView from './JsonView'
import PageContext, { SelectType } from './PageContext'
import ProTableView from './ProTableView'

const ProductView = () => {
	const [currentCode, setCurrentCode] = useState<string>()
	const [select, setSelect] = useState<SelectType & { language: string }>({
		label: 'Json',
		value: 'json',
		language: 'json',
	})
	const [targetSelect, setTargetSelect] = useState<SelectType>({
		label: 'ProTable',
		value: 'protable',
		language: 'typescript',
	})

	return (
		<PageContext.Provider
			value={{
				currentCode,
				setCurrentCode,
				select,
				setSelect,
				targetSelect,
				setTargetSelect,
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
						<div className="pl-2 pb-2">
							<Select
								value={select}
								style={{ width: 150 }}
								onChange={(value) => {
									setSelect(value)
								}}
								labelInValue
								options={[
									{
										label: 'Tool Input',
										options: [
											{ label: 'Json', value: 'json', language: 'json' },
										],
									},
								]}
							/>
						</div>

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
						<div className="pl-2 pb-2">
							<Select
								value={targetSelect}
								style={{ width: 120 }}
								onChange={(value) => {
									setTargetSelect(value)
								}}
								labelInValue
								options={[
									{
										label: 'Business',
										options: [
											{
												label: 'ProTable',
												value: 'protable',
												language: 'typescript',
											},
										],
									},
								]}
							/>
						</div>
						<ProTableView />
					</div>
				</div>
			</div>
		</PageContext.Provider>
	)
}

export default ProductView

import { Col, Row, Select } from 'antd'
import { useState } from 'react'
import JsonView from './JsonView'
import PageContext, { SelectType } from './PageContext'
import TypeView from './TypeView'
import styles from './index.less'

const Json2Ts = () => {
	const [currentCode, setCurrentCode] = useState<string>()
	const [select, setSelect] = useState<SelectType & { language: string }>({
		label: 'Json',
		value: 'json',
		language: 'json',
	})
	const [targetSelect, setTargetSelect] = useState<SelectType>({
		label: 'Typescript',
		value: 'typescript',
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
			<Row>
				<Col span={12}>
					<div className={styles.card}>
						<div className={styles.head}>
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
						<div className={styles.body}>
							<JsonView />
						</div>
					</div>
				</Col>
				<Col span={12}>
					<div className={styles.card}>
						<div className={styles.head}>
							<Select
								value={targetSelect}
								style={{ width: 120 }}
								onChange={(value) => {
									setTargetSelect(value)
								}}
								labelInValue
								options={[
									{
										label: 'Tool Target',
										options: [
											{
												label: 'Typescript',
												value: 'typescript',
												language: 'typescript',
											},
										],
									},
								]}
							/>
						</div>
						<div className={styles.body}>
							<TypeView />
						</div>
					</div>
				</Col>
			</Row>
		</PageContext.Provider>
	)
}

export default Json2Ts

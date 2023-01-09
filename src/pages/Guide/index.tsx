import LayoutRoot from '@/components/LayoutRoot'
import { Card, Col, Row } from 'antd'
import Meta from 'antd/es/card/Meta'
import styles from './index.less'

const Guide = () => {
	return (
		<LayoutRoot>
			<Row gutter={[12, 12]}>
				<Col span={6}>
					<Card
						hoverable
						onClick={() => {
							window.location.href =
								'https://nelsonyong.github.io/code-producer/site/Json2Ts.html'
						}}
						cover={
							<div className={styles.cover}>
								<img
									style={{
										width: 200,
										height: 200,
									}}
									alt="example"
									src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
								/>
							</div>
						}
					>
						<Meta
							title="Json to Typescript"
							description="Json transform Typescript interface"
						/>
					</Card>
				</Col>
				<Col span={6}>
					<Card
						hoverable
						onClick={() => {
							window.location.href =
								'https://nelsonyong.github.io/code-producer/site/Json2ProTable.html'
						}}
						cover={
							<div className={styles.cover}>
								<img
									style={{
										width: 200,
										height: 200,
									}}
									alt="example"
									src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
								/>
							</div>
						}
					>
						<Meta
							title="Json to Antd ProTable"
							description="Json transform Antd ProTable Config"
						/>
					</Card>
				</Col>
			</Row>
		</LayoutRoot>
	)
}

export default Guide

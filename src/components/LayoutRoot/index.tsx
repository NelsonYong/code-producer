import { Outlet } from 'umi'
import { Col, Layout, Row } from 'antd'
import { GithubOutlined } from '@ant-design/icons'
import styles from './index.less'

const { Header, Footer, Content } = Layout

export default function LayoutRoot({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<Layout>
			<Header>
				<Row>
					<Col flex={'100px'}>
						<span className={styles.title}>Code Producer</span>
					</Col>
					<Col flex={'1'}></Col>
					<Col flex={'100px'} className={styles.icons}>
						<GithubOutlined
							onClick={() => {
								window.open(
									'https://github.com/NelsonYong/code-producer',
									'_code-producer'
								)
							}}
						/>
					</Col>
				</Row>
			</Header>
			<Content
				style={{
					padding: 24,
					margin: 0,
					minHeight: 1080,
				}}
			>
				{children}
			</Content>
			<Footer>
				<div className={styles.footer}>@YongGit</div>
			</Footer>
		</Layout>
	)
}

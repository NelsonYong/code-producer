import { Outlet } from 'umi'
import { Col, Layout, Row } from 'antd'
import { GithubOutlined } from '@ant-design/icons'

const { Header, Footer, Sider, Content } = Layout

export default function LayoutRoot() {
	return (
		<Layout>
			<Header>
				<div className="w-full h-ful">
					<Row>
						<Col flex={'100px'}>
							<span className="h-full  flex flex-row items-center  text-white font-thin	">
								Code Producer
							</span>
						</Col>
						<Col flex={'1'}></Col>
						<Col
							flex={'100px'}
							className="text-white flex flex-row items-center text-xl"
						>
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
				</div>
			</Header>
			<Content
				style={{
					padding: 24,
					margin: 0,
					minHeight: 1080,
				}}
			>
				<Outlet />
			</Content>
			<Footer>
				<div className="text-center opacity-50">@YongGit</div>
			</Footer>
		</Layout>
	)
}

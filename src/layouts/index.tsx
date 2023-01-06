import useScale from '@/hooks/useScale'
import { Outlet } from 'umi'

export default function Layout() {
	// useScale({
	// 	useWidthHeightMini: true,
	// })
	return (
		<div className="h-screen w-screen">
			<div className="w-full  bg-blue-500 ">
				<span className="h-12 flex flex-row items-center w-1/6 p-2 text-white font-thin	">
					Code Producer
				</span>
			</div>
			<div className="h-full">
				<Outlet />
			</div>
		</div>
	)
}

import { authConfig } from '@/config/auth'
import { Navbar, UserNav } from '../molecules'

export const PrivateMenu = () => {
	return (
		<div className="container flex gap-4 items-center justify-between p-0">
			<Navbar items={authConfig.mainNav} />

			<div className="">
				<UserNav />
			</div>
		</div>
	)
}

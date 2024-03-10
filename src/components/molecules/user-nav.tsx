'use client'
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/components/ui'
import { useAuthContext } from '@/context/auth-context'
import useUserStore from '@/store/user.store'
import { getInitialsName } from '@/utils/get-initials-name'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export function UserNav() {
	const { logout } = useAuthContext()
	const { user, setUser } = useUserStore()
	const router = useRouter()
	const [isLoad, setIsLoad] = useState(false)

	const initialName = () => {
		if (user?.firstname && user?.lastname) {
			return getInitialsName(user?.firstname + ' ' + user?.lastname)
		}
		return getInitialsName('Anonymous')
	}

	const handleLogout = () => {
		router.push('/login')
		logout()
		setUser(null)
	}

	const userNav = [
		{
			link: '/profile',
			label: 'Profile'
		}
	]

	useEffect(() => {
		setIsLoad(true)
	}, [])

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				{/* {isLoad && user?.id ? ( */}
				<Button variant="ghost" className="relative h-8 w-8 rounded-full">
					<Avatar className="h-8 w-8">
						<AvatarImage src={user?.avatar} alt={user?.firstname} />
						<AvatarFallback>{initialName()}</AvatarFallback>
					</Avatar>
				</Button>
				{/* ) : (
					<Button variant="ghost" className="relative h-8 w-8 rounded-full" />
				)} */}
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56" align="end" forceMount>
				<DropdownMenuLabel className="font-normal">
					<div className="flex flex-col space-y-1">
						<p className="text-xs leading-none text-muted-foreground">{user?.email}</p>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					{userNav.map(item => (
						<DropdownMenuItem className="cursor-pointer" key={item.label} asChild>
							<Link href={item.link}>{item.label}</Link>
						</DropdownMenuItem>
					))}
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
					Log out
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

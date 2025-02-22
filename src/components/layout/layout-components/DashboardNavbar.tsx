import {
	ActionIcon,
	Navbar,
	NavLink,
	ScrollArea,
	Space,
	Text,
} from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import {
	IconBuildingSkyscraper,
	IconDashboard,
	IconX,
} from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface Props {
	opened: boolean;
	onOpened: (state: boolean) => void;
}
const DashboardNavbar: React.FC<Props> = ({ opened, onOpened }) => {
	const { asPath } = useRouter();

	// theme mode
	const [mode = 'light'] = useLocalStorage<any>({
		key: 'mode',
	});

	return (
		<Navbar
			hiddenBreakpoint='sm'
			bg={mode === 'light' ? '#f1f0ff' : '#1E293B'}
			hidden={!opened}
			width={{ sm: 200, lg: 250 }}
			style={{ zIndex: 100000000 }}
		>
			<Navbar.Section>
				<Space h={10} />
				<div className='flex items-center justify-center mt-5'>
					<Image
						src={'/assets/Logo/logo.png'}
						alt='logo'
						width={250}
						height={80}
						className='!w-[250px] !object-cover'
					/>
				</div>
			</Navbar.Section>
			<Space h={30} />
			{opened && (
				<div className='!flex justify-between w-full items-center p-3 ml-auto'>
					<Text size={'xl'} fw={800}>
						Navbar
					</Text>
					<ActionIcon size='xl' color='red' onClick={() => onOpened(false)}>
						<IconX size={50} />
					</ActionIcon>
				</div>
			)}
			<Navbar.Section grow component={ScrollArea}>
				{menus.map((item) => (
					<NavLink
						style={{
							fontFamily: 'Nunito sans, sans-serif',
							borderLeft:
								asPath.includes(item.href!) && asPath === item.href
									? '4px solid #5d34d8'
									: 0,
						}}
						fz={20}
						key={item.label}
						icon={item.icon}
						label={
							<Text size='md' weight={500} ff={'Nunito sans, sans-serif'}>
								{item.label}
							</Text>
						}
						component={Link}
						href={item.href!}
						disabled={
							item?.href === '/rating_&&_reviews' ||
							item?.href === '/reception_management/task_review'
						}
						active={asPath === item.href}
						defaultOpened={asPath.includes(item.href)}
						py={10}
						my={5}
						styles={() => ({
							// theme.colors.brand[9]
							root: {
								fontWeight: asPath.includes(item.href!) ? 600 : 400,
								fontFamily: 'Nunito sans, sans-serif',
								fontSize: 20,
							},
						})}
					></NavLink>
				))}
			</Navbar.Section>
			<Space h={20} />
		</Navbar>
	);
};

export default DashboardNavbar;

export const menus = [
	{
		label: 'Dashboard',
		icon: <IconDashboard size={25} />,
		href: '/',
	},
	{
		label: 'All Properties',
		icon: <IconBuildingSkyscraper size={25} />,
		href: '/all-properties',
	},
];

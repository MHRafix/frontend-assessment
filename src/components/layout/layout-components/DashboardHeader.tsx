import { Avatar, Box, Burger, Group } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { IconSun, IconSunFilled } from '@tabler/icons-react';
import React from 'react';

interface Props {
	opened: boolean;
	setOpened: (state: boolean) => void;
}

const DashboardHeader: React.FC<Props> = ({ opened, setOpened }) => {
	// theme mode
	const [mode, setMode] = useLocalStorage<any>({
		key: 'mode',
	});

	return (
		<Box
			className={`${mode === 'light' ? 'bg-[#f1f0ff]' : 'bg-slate-800'} lg:block flex justify-between items-center fixed w-full top-0 z-[99999] px-3 py-5 border-[0px] border-b-[1px] ${mode === 'light' ? 'border-b-300' : 'border-b-slate-600'}   border-solid`}
		>
			<Burger
				className='block lg:!hidden'
				opened={opened}
				onClick={() => setOpened(!opened)}
				size={40}
				// @ts-ignore
				color={opened && 'red'}
			/>

			<div className='flex justify-end items-center'>
				<Group>
					{mode === 'dark' ? (
						<IconSunFilled
							className='cursor-pointer'
							onClick={() => setMode('light')}
							size={30}
						/>
					) : (
						<IconSun
							className='cursor-pointer'
							onClick={() => setMode('dark')}
							size={30}
						/>
					)}

					<Avatar
						variant='filled'
						className='cursor-pointer'
						color={'violet'}
						size={'lg'}
						radius={100}
					>
						M
					</Avatar>
				</Group>
			</div>
		</Box>
	);
};

export default DashboardHeader;

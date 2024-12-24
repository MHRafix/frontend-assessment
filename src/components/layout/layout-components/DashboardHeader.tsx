import { Avatar, Box, Burger, Group } from '@mantine/core';
import { IconSun, IconSunFilled } from '@tabler/icons-react';
import React, { useState } from 'react';

interface Props {
	opened: boolean;
	setOpened: (state: boolean) => void;
}

const DashboardHeader: React.FC<Props> = ({ opened, setOpened }) => {
	const [isDarkModeOn, setIsDarkModeOn] = useState<boolean>();

	return (
		<Box className='bg-[#F1F0FF] lg:block flex justify-between items-center fixed w-full top-0 z-[99999] px-3 py-5 border-[0px] border-b-[1px] border-b-slate-300 border-solid'>
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
					{isDarkModeOn ? (
						<IconSunFilled
							className='cursor-pointer'
							onClick={() => setIsDarkModeOn(false)}
							size={30}
						/>
					) : (
						<IconSun
							className='cursor-pointer'
							onClick={() => setIsDarkModeOn(true)}
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

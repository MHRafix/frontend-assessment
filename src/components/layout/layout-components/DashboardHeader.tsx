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
		<Box className='px-3 py-5 border-[0px] border-b-[1px] border-b-slate-300 border-solid'>
			<Burger
				className='sm:!block md:!hidden'
				opened={opened}
				onClick={() => setOpened(!opened)}
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
						variant='outline'
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

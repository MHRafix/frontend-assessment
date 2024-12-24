import { IAnalyticsSummaryType } from '@/app/data-types/data.types';
import { Space, Text, ThemeIcon } from '@mantine/core';
import React from 'react';
import { CountUp } from 'use-count-up';

interface ITargetCardProps {
	targetData: IAnalyticsSummaryType;
}

const TargetSummaryCard: React.FC<ITargetCardProps> = ({ targetData }) => {
	return (
		<div className='flex justify-between items-center bg-[#F1F0FF] px-4 py-5 rounded-lg cursor-pointer gap-5 shadow-2xl'>
			<div>
				<Text fw={800} fz={30}>
					<CountUp
						isCounting
						end={targetData?.amount}
						duration={3}
						thousandsSeparator=','
					/>
				</Text>
				<Space h={0} />
				<Text fz={20} fw={700}>
					{targetData?.name}
				</Text>
				<Text fz={16} fw={400} color='#55587b'>
					{targetData?.brief}
				</Text>
			</div>{' '}
			<ThemeIcon color='violet' size={70} variant='filled' radius={100}>
				{targetData?.icon}
			</ThemeIcon>
		</div>
	);
};

export default TargetSummaryCard;
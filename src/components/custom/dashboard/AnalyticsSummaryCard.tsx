import { IAnalyticsSummaryType } from '@/app/data-types/data.types';
import { Space, Text, ThemeIcon } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import React from 'react';
import { CountUp } from 'use-count-up';

interface IAnalyticsCardProps {
	analyticsData: IAnalyticsSummaryType;
}

const AnalyticsSummaryCard: React.FC<IAnalyticsCardProps> = ({
	analyticsData,
}) => {
	// theme mode
	const [mode = 'light'] = useLocalStorage<any>({
		key: 'mode',
	});

	return (
		<div
			className={`flex items-center ${mode === 'light' ? 'bg-[#f1f0ff]' : 'bg-slate-800'} px-5 py-7 rounded-md cursor-pointer gap-5 shadow-xl`}
		>
			<ThemeIcon color='violet' size={60} variant='filled' radius={100}>
				{analyticsData?.icon}
			</ThemeIcon>
			<div>
				<Text fw={700} fz={25} color={mode === 'dark' ? 'white' : 'black'}>
					<CountUp
						isCounting
						end={analyticsData?.amount}
						duration={3}
						thousandsSeparator=','
					/>
				</Text>

				<Space h={0} />
				<Text fz={15} fw={400} color={mode === 'dark' ? '#ccc' : '#55587b'}>
					{analyticsData?.name}
				</Text>
			</div>
		</div>
	);
};

export default AnalyticsSummaryCard;

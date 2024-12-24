import { IAnalyticsSummaryType } from '@/app/data-types/data.types';
import { DashboardData } from '@/app/data/dashboard.data';
import PageTitleArea from '@/components/common/PageTitle';
import AnalyticsSummaryCard from '@/components/custom/dashboard/AnalyticsSummaryCard';
import TargetSummaryCard from '@/components/custom/dashboard/TargetSummaryCard';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Space } from '@mantine/core';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const HomePage: NextPage = () => {
	const router = useRouter();

	return (
		<DashboardLayout title='Dashboard Analytics'>
			<PageTitleArea
				title='Dashboard'
				tagline='Business growth overview'
				currentPathName='Dashboard'
				othersPath={[
					{
						pathName: 'Home',
						href: '/',
					},
				]}
			/>

			<Space h={'xl'} />

			{/* dashboard analytics summary card */}
			<div className='grid sm:grid-cols-2 xl:grid-cols-4 gap-5'>
				{DashboardData?.analyticsSummaryData?.map(
					(analyticData: IAnalyticsSummaryType, idx: number) => (
						<AnalyticsSummaryCard key={idx} analyticsData={analyticData} />
					)
				)}
			</div>

			<Space h={50} />

			{/* dashboard income chart and target fill-up card */}
			<div className='grid lg:grid-cols-2 w-full'>
				<div className='grid sm:grid-cols-2 gap-5'>aaaaaaaa</div>
				<div className='grid sm:grid-cols-2 gap-5'>
					{' '}
					{DashboardData?.targetSummaryData?.map(
						(targetData: IAnalyticsSummaryType, idx: number) => (
							<TargetSummaryCard targetData={targetData} key={idx} />
						)
					)}
				</div>
			</div>
		</DashboardLayout>
	);
};

export default HomePage;

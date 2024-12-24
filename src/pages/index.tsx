import { IAnalyticsSummaryType, IProperty } from '@/app/data-types/data.types';
import { dashboardData } from '@/app/data/dashboard.data';
import PageTitleArea from '@/components/common/PageTitle';
import DataTable from '@/components/common/Table/DataTable';
import AnalyticsSummaryCard from '@/components/custom/dashboard/AnalyticsSummaryCard';
import TargetSummaryCard from '@/components/custom/dashboard/TargetSummaryCard';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Space, Title } from '@mantine/core';
import { MRT_ColumnDef } from 'mantine-react-table';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useMemo, useState } from 'react';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const HomePage: NextPage = () => {
	// loading state
	const [loading, setLoading] = useState<boolean>(false);

	// all properties
	const allProperties: IProperty[] = dashboardData?.properties;

	// table rows and columns
	const columns = useMemo<MRT_ColumnDef<any>[]>(
		() => [
			{
				accessorKey: 'name',
				header: 'Name',
			},
			{
				accessorKey: 'location',
				header: 'Location',
			},
			{
				accessorKey: 'price',
				header: 'Price',
			},
			{
				accessorKey: 'salePrice',
				header: 'Sale Price',
			},
			{
				accessorKey: 'discount',
				header: 'Discount(%)',
			},
			{
				accessorKey: 'size',
				header: 'Size',
			},
			{
				accessorKey: 'owner',
				header: 'Owner',
			},
		],
		[]
	);

	// onRefetch
	const onRefetch = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	};

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
			<div className='grid md:grid-cols-2 xl:grid-cols-4 gap-5'>
				{dashboardData?.analyticsSummaryData?.map(
					(analyticData: IAnalyticsSummaryType, idx: number) => (
						<AnalyticsSummaryCard key={idx} analyticsData={analyticData} />
					)
				)}
			</div>

			<Space h={50} />

			{/* dashboard income chart and target fill-up card */}
			<div className='grid xl:grid-cols-2 gap-5 w-full'>
				<div className='grid overflow-x-auto z-50 bg-[#f1f0ff] shadow-lg rounded-md p-2'>
					<Title order={3}>Monthly Revenue</Title>
					<Chart
						type='bar'
						// @ts-ignore
						options={state?.options!}
						series={state?.series}
						height={350}
					/>
				</div>
				<div className='grid md:grid-cols-2 gap-5'>
					{' '}
					{dashboardData?.targetSummaryData?.map(
						(targetData: IAnalyticsSummaryType, idx: number) => (
							<TargetSummaryCard targetData={targetData} key={idx} />
						)
					)}
				</div>
			</div>
			<Space h={50} />
			<div className='overflow-x-auto'>
				{' '}
				<DataTable
					tableTitle='New Properties'
					columns={columns}
					data={allProperties?.slice(0, 10) ?? []}
					totalCount={allProperties?.slice(0, 10)?.length!}
					refetch={onRefetch}
					loading={loading}
				/>
			</div>
		</DashboardLayout>
	);
};

export default HomePage;

const state = {
	series: [
		{
			name: 'Net Profit',
			data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
		},
		{
			name: 'Revenue',
			data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
		},
		{
			name: 'Free Cash Flow',
			data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
		},
	],
	options: {
		chart: {
			type: 'bar',
			height: 350,
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '55%',
				borderRadius: 5,
				borderRadiusApplication: 'end',
			},
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			show: true,
			width: 2,
			colors: ['transparent'],
		},
		xaxis: {
			categories: [
				'Feb',
				'Mar',
				'Apr',
				'May',
				'Jun',
				'Jul',
				'Aug',
				'Sep',
				'Oct',
			],
		},
		yaxis: {
			title: {},
		},
		fill: {
			opacity: 1,
		},
	},
};

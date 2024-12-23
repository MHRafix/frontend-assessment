import PageTitleArea from '@/components/common/PageTitle';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Space, Text, ThemeIcon } from '@mantine/core';
import {
	IconCircleCheck,
	IconCurrencyTaka,
	IconSortDescending,
	IconTimeline,
	IconTransform,
} from '@tabler/icons-react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { CountUp } from 'use-count-up';

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

			<div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5'>
				<div className='flex items-center bg-[#F1F0FF] px-4 py-5 rounded-md cursor-pointer gap-5 shadow-2xl'>
					<ThemeIcon color='violet' size={50} variant='outline' radius={8}>
						<IconCurrencyTaka size={30} />
					</ThemeIcon>
					<div>
						<Text fw={700} fz={25}>
							<CountUp
								isCounting
								end={1232}
								duration={3}
								thousandsSeparator=','
							/>
						</Text>

						<Space h={0} />
						<Text fz={15} fw={400} color='#55587b'>
							Grand Revenue
						</Text>
					</div>
				</div>
				<div className='flex items-center bg-[#F1F0FF] px-4 py-5 rounded-md cursor-pointer gap-5 shadow-2xl'>
					<ThemeIcon color='violet' size={50} variant='light' radius={8}>
						<IconTimeline size={30} />
					</ThemeIcon>
					<div>
						<Text fw={700} fz={25}>
							<CountUp
								isCounting
								end={2434}
								duration={3}
								thousandsSeparator=','
							/>
						</Text>
						<Space h={0} />
						<Text fz={15} fw={400} color='#55587b'>
							Total Revenue
						</Text>
					</div>
				</div>
				<div className='flex items-center bg-[#F1F0FF] px-4 py-5 rounded-md cursor-pointer gap-5 shadow-2xl'>
					<ThemeIcon color='violet' size={50} variant='light' radius={8}>
						<IconCircleCheck size={30} />
					</ThemeIcon>
					<div>
						<Text fw={700} fz={25}>
							<CountUp
								isCounting
								end={4545}
								duration={3}
								thousandsSeparator=','
							/>
						</Text>
						<Space h={0} />
						<Text fz={15} fw={400} color='#55587b'>
							Total Paid Revenue
						</Text>
					</div>
				</div>
				<div className='flex items-center bg-[#F1F0FF] px-4 py-5 rounded-md cursor-pointer gap-5 shadow-2xl'>
					<ThemeIcon color='violet' size={50} variant='light' radius={8}>
						<IconSortDescending size={30} />
					</ThemeIcon>
					<div>
						<Text fw={700} fz={25}>
							<CountUp
								isCounting
								end={8322}
								duration={3}
								thousandsSeparator=','
							/>
						</Text>
						<Space h={0} />
						<Text fz={15} fw={400} color='#55587b'>
							Total Due Revenue
						</Text>
					</div>
				</div>
				<div className='flex items-center bg-[#F1F0FF] px-4 py-5 rounded-md cursor-pointer gap-5 shadow-2xl'>
					<ThemeIcon color='violet' size={50} variant='light' radius={8}>
						<IconTransform size={30} />
					</ThemeIcon>
					<div>
						<Text fw={700} fz={25}>
							<CountUp
								isCounting
								end={5678}
								duration={3}
								thousandsSeparator=','
							/>
						</Text>
						<Space h={0} />
						<Text fz={15} fw={400} color='#55587b'>
							Total Expense
						</Text>
					</div>
				</div>
			</div>

			<Space h={50} />

			<div className='flex w-full'>
				{' '}
				<div className='lg:w-6/12 grid grid-cols-2 gap-5'>aaaaaaaa</div>
				<div className='lg:w-6/12 grid grid-cols-2 gap-5'>
					{' '}
					<div className='flex justify-between items-center bg-[#F1F0FF] px-4 py-5 rounded-lg cursor-pointer gap-5 shadow-2xl'>
						<div>
							<Text fw={800} fz={30}>
								<CountUp
									isCounting
									end={5678}
									duration={3}
									thousandsSeparator=','
								/>
							</Text>
							<Space h={0} />
							<Text fz={20} fw={700}>
								Properties for Sale
							</Text>
							<Text fz={16} fw={400} color='#55587b'>
								Target 3k/month
							</Text>
						</div>{' '}
						<ThemeIcon color='violet' size={70} variant='filled' radius={100}>
							<IconTransform size={30} />
						</ThemeIcon>
					</div>
					<div className='flex justify-between items-center bg-[#F1F0FF] px-4 py-5 rounded-lg cursor-pointer gap-5 shadow-2xl'>
						<div>
							<Text fw={800} fz={30}>
								<CountUp
									isCounting
									end={5678}
									duration={3}
									thousandsSeparator=','
								/>
							</Text>
							<Space h={0} />
							<Text fz={20} fw={700}>
								Properties for Rent
							</Text>
							<Text fz={16} fw={400} color='#55587b'>
								Target 3k/month
							</Text>
						</div>{' '}
						<ThemeIcon color='teal' size={70} variant='filled' radius={100}>
							<IconTransform size={30} />
						</ThemeIcon>
					</div>
					<div className='flex justify-between items-center bg-[#F1F0FF] px-4 py-5 rounded-lg cursor-pointer gap-5 shadow-2xl'>
						<div>
							<Text fw={800} fz={30}>
								<CountUp
									isCounting
									end={5678}
									duration={3}
									thousandsSeparator=','
								/>
							</Text>
							<Space h={0} />
							<Text fz={20} fw={700}>
								Properties for Sale
							</Text>
							<Text fz={16} fw={400} color='#55587b'>
								Target 3k/month
							</Text>
						</div>{' '}
						<ThemeIcon color='violet' size={70} variant='filled' radius={100}>
							<IconTransform size={30} />
						</ThemeIcon>
					</div>
					<div className='flex justify-between items-center bg-[#F1F0FF] px-4 py-5 rounded-lg cursor-pointer gap-5 shadow-2xl'>
						<div>
							<Text fw={800} fz={30}>
								<CountUp
									isCounting
									end={5678}
									duration={3}
									thousandsSeparator=','
								/>
							</Text>
							<Space h={0} />
							<Text fz={20} fw={700}>
								Properties for Rent
							</Text>
							<Text fz={16} fw={400} color='#55587b'>
								Target 3k/month
							</Text>
						</div>{' '}
						<ThemeIcon color='teal' size={70} variant='filled' radius={100}>
							<IconTransform size={30} />
						</ThemeIcon>
					</div>
				</div>
			</div>
		</DashboardLayout>
	);
};

export default HomePage;

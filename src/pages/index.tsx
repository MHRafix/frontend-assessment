import DashboardLayout from '@/components/layout/DashboardLayout';
import { Loader } from '@mantine/core';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
	return (
		<DashboardLayout title='UrbanAbode - Manage Your Properties'>
			<Loader color='violet' size={'xl'} />
		</DashboardLayout>
	);
};

export default HomePage;

import PageTitleArea from '@/components/common/PageTitle';
import PropertiesTable from '@/components/custom/all-properties/PropertiesTable';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Space } from '@mantine/core';
import { NextPage } from 'next';

const AllProperties: NextPage = () => {
	return (
		<DashboardLayout>
			<PageTitleArea
				title='All Properties'
				tagline='Properties list'
				currentPathName='All Properties'
				othersPath={[
					{
						pathName: 'Home',
						href: '/',
					},
				]}
			/>

			<Space h={'xl'} />

			<PropertiesTable />
		</DashboardLayout>
	);
};

export default AllProperties;

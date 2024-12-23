import PageTitleArea from '@/components/common/PageTitle';
import DashboardLayout from '@/components/layout/DashboardLayout';
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
		</DashboardLayout>
	);
};

export default AllProperties;

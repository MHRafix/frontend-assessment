import { AppShell } from '@mantine/core';
import Head from 'next/head';
import { PropsWithChildren, useState } from 'react';
import DashboardHeader from './layout-components/DashboardHeader';
import DashboardNavbar from './layout-components/DashboardNavbar';

interface Props {
	title?: string;
}

const DashboardLayout: React.FC<PropsWithChildren<Props>> = ({
	children,
	title,
}) => {
	const [opened, setOpened] = useState(false);
	return (
		<div className='overflow-hidden'>
			<Head>
				<title>{`UrbanAbode - ${title ? title : 'Dashboard'}`}</title>
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width'
				/>
			</Head>
			<AppShell
				header={<DashboardHeader opened={opened} setOpened={setOpened} />}
				navbarOffsetBreakpoint='sm'
				asideOffsetBreakpoint='sm'
				navbar={<DashboardNavbar opened={opened} onOpened={setOpened} />}
				// footer={
				// 	<Box className='flex justify-center items-center bg-black text-white'>
				// 		lorem400
				// 	</Box>
				// }
			>
				<div className='mt-[110px]'>{children}</div>
			</AppShell>
		</div>
	);
};

export default DashboardLayout;

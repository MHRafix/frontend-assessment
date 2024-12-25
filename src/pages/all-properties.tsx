import { IProperty } from '@/app/data-types/data.types';
import DrawerWrapper from '@/components/common/Drawer/DrawerWrapper';
import PageTitleArea from '@/components/common/PageTitle';
import DataTable from '@/components/common/Table/DataTable';
import PropertyForm from '@/components/custom/all-properties/PropertyForm';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Badge, Button, Space } from '@mantine/core';
import { useDisclosure, useLocalStorage } from '@mantine/hooks';
import { IconPlus } from '@tabler/icons-react';
import { MRT_ColumnDef } from 'mantine-react-table';
import { NextPage } from 'next';
import { useMemo, useState } from 'react';

const AllProperties: NextPage = () => {
	const [allProperties, setProperties] = useLocalStorage<IProperty[]>({
		key: 'allProperties',
	});

	// loading state
	const [loading, setLoading] = useState<boolean>(false);

	// drawer handler
	const [opened, drawerHandler] = useDisclosure();

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
				accessorKey: 'status',
				header: 'Status',
				accessorFn: (row: IProperty) => (
					<Badge size='lg' color={row?.status === 'AVAILABLE' ? 'teal' : 'red'}>
						{row?.status}
					</Badge>
				),
			},
			{ accessorKey: 'category', header: 'Category' },
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

			<DataTable
				tableTitle='Manage Properties'
				columns={columns}
				data={allProperties ?? []}
				totalCount={allProperties?.length!}
				refetch={onRefetch}
				isEnablePagination={true}
				ActionArea={
					<>
						<Button
							color='violet'
							variant='light'
							leftIcon={<IconPlus size={16} />}
							size='md'
							onClick={drawerHandler.open}
						>
							Add new
						</Button>
					</>
				}
				loading={loading}
			/>

			{/* add new property */}
			<DrawerWrapper
				close={drawerHandler.close}
				opened={opened}
				title='Add Property'
				size='lg'
			>
				<PropertyForm
					onAddProperties={(newProperty: IProperty) => {
						onRefetch();
						drawerHandler.close();
						setTimeout(() => {
							setProperties((prevProperties: IProperty[]) => [
								newProperty,
								...prevProperties,
							]);
						}, 3000);
					}}
				/>
			</DrawerWrapper>
		</DashboardLayout>
	);
};

export default AllProperties;

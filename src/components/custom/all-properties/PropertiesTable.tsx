import { IProperty } from '@/app/data-types/data.types';
import { dashboardData } from '@/app/data/dashboard.data';
import DataTable from '@/components/common/Table/DataTable';
import { Button } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { MRT_ColumnDef } from 'mantine-react-table';
import React, { useMemo, useState } from 'react';

interface IPropertiesTableProps {}

const PropertiesTable: React.FC<IPropertiesTableProps> = ({}) => {
	const properties: IProperty[] = dashboardData?.properties;

	const [loading, setLoading] = useState<boolean>(false);

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
		<div>
			<DataTable
				tableTitle='Manage Properties'
				columns={columns}
				data={properties ?? []}
				totalCount={properties?.length!}
				refetch={onRefetch}
				ActionArea={
					<>
						<Button
							color='violet'
							variant='light'
							leftIcon={<IconPlus size={16} />}
							size='md'
						>
							Add new
						</Button>
					</>
				}
				loading={loading}
			/>
		</div>
	);
};

export default PropertiesTable;

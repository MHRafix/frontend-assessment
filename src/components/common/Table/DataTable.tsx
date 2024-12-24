import { ActionIcon, Flex, Loader, Title } from '@mantine/core';
import { IconRefresh } from '@tabler/icons-react';
import cls from 'classnames';
// import { mkConfig } from 'export-to-csv';
import {
	MRT_ColumnDef,
	MantineReactTable,
	useMantineReactTable,
} from 'mantine-react-table';
import React from 'react';

interface Prop {
	columns: MRT_ColumnDef<any>[];
	data: any[];
	refetch?: () => void;
	totalCount: number;
	loading: boolean;
	isExportPDF?: boolean;
	ActionArea?: React.ReactNode;
	tableTitle: string;
	RowActionMenu?: (row: any) => React.ReactNode;
}

// const csvConfig = mkConfig({
// 	fieldSeparator: ',',
// 	decimalSeparator: '.',
// 	useKeysAsHeaders: true,
// });

const DataTable: React.FC<Prop> = ({
	columns,
	loading,
	data,
	refetch,
	ActionArea,
	RowActionMenu,
	totalCount,
	tableTitle,
}) => {
	const table = useMantineReactTable({
		columns,
		data,
		state: {
			showProgressBars: loading,
			showAlertBanner: true,
		},

		enableRowActions: RowActionMenu ? true : false,
		positionActionsColumn: 'last',
		renderRowActionMenuItems: (_row: any) =>
			RowActionMenu?.(_row?.row?.original),
		renderTopToolbar: () => {
			return (
				<div className='bg-[#F1F0FF] flex justify-between items-center px-2 py-4'>
					<Title order={3} fw={700}>
						{tableTitle}
					</Title>
					<Flex gap={'md'} justify={'space-between'} align={'center'}>
						{loading ? (
							<Loader size={'lg'} color='violet' />
						) : (
							<ActionIcon
								onClick={() => refetch?.()}
								variant='outline'
								radius={100}
								size={45}
							>
								<IconRefresh
									size={35}
									className={cls({ 'animate-reverse-spin': loading })}
								/>
							</ActionIcon>
						)}

						{ActionArea}
					</Flex>
				</div>
			);
		},
	});

	return <MantineReactTable table={table} />;
};

export default DataTable;

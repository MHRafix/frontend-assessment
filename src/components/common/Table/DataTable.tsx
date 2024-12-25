import { ActionIcon, Flex, Loader, Title } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { IconRefresh } from '@tabler/icons-react';
import cls from 'classnames';
// import { mkConfig } from 'export-to-csv';
import {
	MRT_ColumnDef,
	MRT_ToggleFiltersButton,
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
	isEnablePagination?: boolean;
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
	tableTitle,
	isEnablePagination = false,
}) => {
	// theme mode
	const [mode] = useLocalStorage<any>({
		key: 'mode',
	});

	const table = useMantineReactTable({
		columns,
		data,
		state: {
			showProgressBars: loading,
			showAlertBanner: true,
		},
		enableTableFooter: false,
		enablePagination: isEnablePagination,

		mantineTableHeadCellProps: {
			bg: mode === 'light' ? '#f1f0ff' : '#1E293B',
		},
		mantineTableBodyCellProps: {
			bg: mode === 'light' ? '#f1f0ff' : '#1E293B',
		},
		mantineTableHeadRowProps: {
			bg: mode === 'light' ? '#f1f0ff' : '#1E293B',
		},
		enableRowActions: RowActionMenu ? true : false,
		positionActionsColumn: 'last',
		mantineTableFooterCellProps: {
			bg: mode === 'light' ? '#f1f0ff' : 'red',
		},
		renderRowActionMenuItems: (_row: any) =>
			RowActionMenu?.(_row?.row?.original),
		renderTopToolbar: () => {
			return (
				<>
					<div
						className={`${mode === 'light' ? 'bg-[#f1f0ff]' : 'bg-slate-800'}  flex justify-between items-center px-2 py-4`}
					>
						<Title order={4} fw={700}>
							{tableTitle}
						</Title>
						{ActionArea && (
							<Flex gap={'md'} justify={'space-between'} align={'center'}>
								<MRT_ToggleFiltersButton color='violet' table={table} />
								{loading ? (
									<Loader size={'lg'} color='violet' />
								) : (
									<ActionIcon
										onClick={() => refetch?.()}
										variant='outline'
										radius={100}
										size={45}
										c={'violet'}
									>
										<IconRefresh
											size={35}
											className={cls({ 'animate-reverse-spin': loading })}
										/>
									</ActionIcon>
								)}

								{ActionArea}
							</Flex>
						)}
					</div>
				</>
			);
		},
	});

	return (
		<div>
			<MantineReactTable table={table} />
		</div>
	);
};

export default DataTable;

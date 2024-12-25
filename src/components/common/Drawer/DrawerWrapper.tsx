import { Drawer, Title } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import React, { PropsWithChildren } from 'react';

const DrawerWrapper: React.FC<
	PropsWithChildren<{
		opened: boolean;
		title: string;
		size: string;
		close: () => void;
	}>
> = ({ children, opened, title, close, size }) => {
	// theme mode
	const [mode] = useLocalStorage<any>({
		key: 'mode',
	});
	return (
		<>
			<Drawer
				position='right'
				size={size}
				zIndex={999999}
				opened={opened}
				onClose={close}
				bg={mode === 'light' ? '#f1f0ff' : '#1E293B'}
				title={
					<Title order={4} ff={'Nunito Sans,sans-serif'}>
						{title}
					</Title>
				}
				className='mt-[60px]  overflow-y-auto'
			>
				{children}
			</Drawer>
		</>
	);
};

export default DrawerWrapper;

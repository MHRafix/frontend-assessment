import { urbanAbodeEmotionCache } from '@/utils/emotionCache';

import { IProperty } from '@/app/data-types/data.types';
import { dashboardData } from '@/app/data/dashboard.data';
import { MantineProvider } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import '../styles/global.css';
import '../styles/tailwindcss.css';

export default function App({ Component, pageProps }: AppProps) {
	// all properties
	const [allProperties, setProperties] = useLocalStorage<IProperty[]>({
		key: 'allProperties',
	});

	// theme mode
	const [mode, setMode] = useLocalStorage<any>({
		key: 'mode',
	});

	// save properties in local storage
	useEffect(() => {
		if (!allProperties?.length) {
			setProperties(dashboardData?.properties);
		}

		if (!mode) {
			setMode('light');
		}
	}, []);

	return (
		<MantineProvider
			emotionCache={urbanAbodeEmotionCache}
			withCSSVariables
			withGlobalStyles
			withNormalizeCSS
			theme={{
				fontFamily: 'Nunito sans, sans-serif',
				colorScheme: mode || 'light',
				primaryColor: 'violet',
				breakpoints: {
					xs: '500',
					sm: '800',
					md: '1000',
					lg: '1200',
					xl: '1400',
				},
			}}
		>
			<Notifications position='top-right' zIndex={99999} />
			<ModalsProvider>
				<Component {...pageProps} />
			</ModalsProvider>
		</MantineProvider>
	);
}

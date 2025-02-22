import {
	IconBookmarks,
	IconBookmarksFilled,
	IconCircleCheck,
	IconCurrencyTaka,
	IconDiscount,
	IconSortDescending,
	IconSquareRoundedCheck,
	IconTransform,
} from '@tabler/icons-react';
import { IFakeDataType } from '../data-types/data.types';

export const dashboardData: IFakeDataType = {
	analyticsSummaryData: [
		{
			name: 'Grand Revenue',
			amount: 120300,
			icon: <IconCurrencyTaka size={35} />,
		},
		// {
		// 	name: 'Total Revenue',
		// 	amount: 350300,
		// 	icon: <IconTimeline />,
		// },
		{
			name: 'Total Paid Revenue',
			amount: 350300 - 50000,
			icon: <IconCircleCheck size={35} />,
		},
		{
			name: 'Total Due Revenue',
			amount: 50000,
			icon: <IconSortDescending size={35} />,
		},
		{
			name: 'Total Expense',
			amount: 350300 - 120300,
			icon: <IconTransform size={35} />,
		},
	],
	targetSummaryData: [
		{
			name: 'Properties for Sale',
			brief: 'Target 3k/month',
			amount: 3940,
			icon: <IconDiscount size={35} />,
		},
		{
			name: 'Properties for Rent',
			brief: 'Target 3k/month',
			amount: 5644,
			icon: <IconBookmarks size={35} />,
		},
		{
			name: 'Properties Sold',
			amount: 3038,
			brief: 'Target 2.5k/month',
			icon: <IconSquareRoundedCheck size={35} />,
		},
		{
			name: 'Properties Booked',
			amount: 4550,
			brief: 'Target 3.5k/month',
			icon: <IconBookmarksFilled size={35} />,
		},
	],

	properties: [
		{
			name: 'Luxury Apartment in Bashundhara R/A',
			location: 'Bashundhara Residential Area, Dhaka',
			price: '৳13,500,000',
			salePrice: '৳12,150,000',
			discount: 10,
			size: '3 bedrooms, 1 kitchen',
			owner: 'Dhaka Home',
			category: 'Commercial',
			status: 'AVAILABLE',
		},
		{
			name: 'Affordable Flat in Rampura',
			location: 'Rampura, Dhaka',
			price: '৳4,500,000',
			salePrice: '৳4,050,000',
			discount: 10,
			size: '2 bedrooms, 1 kitchen',
			owner: 'Dhaka Home',
			category: 'Commercial',
			status: 'AVAILABLE',
		},
		{
			name: 'Spacious Apartment in Uttara Sector-13',
			location: 'Uttara, Dhaka',
			price: '৳13,000,000',
			salePrice: '৳11,700,000',
			discount: 10,
			size: '3 bedrooms, 1 kitchen',
			owner: 'Dhaka Home',
			category: 'House',
			status: 'AVAILABLE',
		},
		{
			name: 'Modern Flat in Gulshan-2',
			location: 'Gulshan-2, Dhaka',
			price: '৳60,000,000',
			salePrice: '৳54,000,000',
			discount: 10,
			size: '4 bedrooms, 1 kitchen',
			owner: 'Dhaka Home',
			category: 'House',
			status: 'AVAILABLE',
		},
		{
			name: 'Ready Flat in Mirpur',
			location: 'Mirpur, Dhaka',
			price: '৳6,500,000',
			salePrice: '৳5,850,000',
			discount: 10,
			size: '3 bedrooms, 1 kitchen',
			owner: 'Dhaka Home',
			category: 'House',
			status: 'AVAILABLE',
		},
		{
			name: 'House in Malibagh Chowdhury Para',
			location: 'Malibagh, Dhaka',
			price: '৳105,000,000',
			salePrice: '৳94,500,000',
			discount: 10,
			size: '3 bedrooms, 1 kitchen',
			owner: 'Dhaka Home',
			category: 'House',
			status: 'AVAILABLE',
		},
		{
			name: 'Flat in Bashundhara Block-D',
			location: 'Bashundhara R/A, Dhaka',
			price: '৳12,500,000',
			salePrice: '৳11,250,000',
			discount: 10,
			size: '3 bedrooms, 1 kitchen',
			owner: 'Dhaka Home',
			category: 'House',
			status: 'RENTED',
		},
		{
			name: 'Flat in Bashundhara Block-F',
			location: 'Bashundhara R/A, Dhaka',
			price: '৳13,500,000',
			salePrice: '৳12,150,000',
			discount: 10,
			size: '3 bedrooms, 1 kitchen',
			owner: 'Dhaka Home',
			category: 'Commercial',
			status: 'AVAILABLE',
		},
		{
			name: 'Flat in Bashundhara',
			location: 'Bashundhara R/A, Dhaka',
			price: '৳12,500,000',
			salePrice: '৳11,250,000',
			discount: 10,
			size: '3 bedrooms, 1 kitchen',
			owner: 'Dhaka Home',
			category: 'House',
			status: 'AVAILABLE',
		},
		{
			name: 'Flat in Bashundhara',
			location: 'Bashundhara R/A, Dhaka',
			price: '৳37,500,000',
			salePrice: '৳33,750,000',
			discount: 10,
			size: '4 bedrooms, 1 kitchen',
			owner: 'Dhaka Home',
			category: 'Commercial',
			status: 'RENTED',
		},
		{
			name: 'Flat in Uttara Sector-13',
			location: 'Uttara, Dhaka',
			price: '৳13,000,000',
			salePrice: '৳13,000,000',
			discount: 0,
			size: '3 bedrooms, 1 kitchen',
			owner: 'Dhaka Home',
			category: 'House',
			status: 'AVAILABLE',
		},
		{
			name: 'Flat in Gulshan-2',
			location: 'Gulshan-2, Dhaka',
			price: '৳60,000,000',
			salePrice: '৳60,000,000',
			discount: 0,
			size: '4 bedrooms, 1 kitchen',
			owner: 'Dhaka Home',
			category: 'House',
			status: 'AVAILABLE',
		},
		{
			name: 'Flat in Bashundhara R/A (Block-D)',
			location: 'Bashundhara Residential Area, Dhaka',
			price: '৳12,500,000',
			salePrice: '৳12,500,000',
			discount: 0,
			size: '3 bedrooms, 1 kitchen',
			owner: 'Dhaka Home',
			category: 'Commercial',
			status: 'RENTED',
		},
		{
			name: 'Flat in Bashundhara R/A (Block-F)',
			location: 'Bashundhara Residential Area, Dhaka',
			price: '৳13,500,000',
			salePrice: '৳13,500,000',
			discount: 0,
			size: '3 bedrooms, 1 kitchen',
			owner: 'Dhaka Home',
			category: 'House',
			status: 'AVAILABLE',
		},
		{
			name: 'Flat in Rampura',
			location: 'Rampura, Dhaka',
			price: '৳4,500,000',
			salePrice: '৳4,500,000',
			discount: 0,
			size: '2 bedrooms, 1 kitchen',
			owner: 'Dhaka Home',
			category: 'House',
			status: 'AVAILABLE',
		},
		{
			name: 'Flat in Mirpur',
			location: 'Mirpur, Dhaka',
			price: '৳6,500,000',
			salePrice: '৳6,500,000',
			discount: 0,
			size: '3 bedrooms, 1 kitchen',
			owner: 'Dhaka Home',
			category: 'House',
			status: 'AVAILABLE',
		},
		{
			name: 'House in Malibagh Chowdhury Para',
			location: 'Malibagh, Dhaka',
			price: '৳105,000,000',
			salePrice: '৳105,000,000',
			discount: 0,
			size: '3 bedrooms, 1 kitchen',
			owner: 'Dhaka Home',
			category: 'House',
			status: 'AVAILABLE',
		},
		{
			name: 'Flat in Bashundhara',
			location: 'Bashundhara Residential Area, Dhaka',
			price: '৳12,500,000',
			salePrice: '৳12,500,000',
			discount: 0,
			size: '3 bedrooms, 1 kitchen',
			owner: 'Dhaka Home',
			category: 'House',
			status: 'AVAILABLE',
		},
		{
			name: 'Flat in Bashundhara',
			location: 'Bashundhara Residential Area, Dhaka',
			price: '৳37,500,000',
			salePrice: '৳37,500,000',
			discount: 0,
			size: '4 bedrooms, 1 kitchen',
			owner: 'Dhaka Home',
			category: 'House',
			status: 'AVAILABLE',
		},
		{
			name: 'Flat in Uttara',
			location: 'Uttara, Dhaka',
			price: '৳13,000,000',
			salePrice: '৳13,000,000',
			discount: 0,
			size: '3 bedrooms, 1 kitchen',
			owner: 'Dhaka Home',
			category: 'House',
			status: 'AVAILABLE',
		},
		{
			name: 'Modern Apartment in Dhanmondi',
			location: 'Dhanmondi, Dhaka',
			price: '৳15,000,000',
			salePrice: '৳13,500,000',
			discount: 10,
			size: '3 bedrooms, 1 kitchen',
			owner: 'Dhaka Home',
			category: 'Apartment',
			status: 'RENTED',
		},
		{
			name: 'Cozy Flat in Banani',
			location: 'Banani, Dhaka',
			price: '৳18,000,000',
			salePrice: '৳16,200,000',
			discount: 10,
			size: '3 bedrooms, 1 kitchen',
			owner: 'Dhaka Home',
			category: 'Apartment',
			status: 'RENTED',
		},
		{
			name: 'Spacious Apartment in Baridhara',
			location: 'Baridhara, Dhaka',
			price: '৳25,000,000',
			salePrice: '৳22,500,000',
			discount: 10,
			size: '4 bedrooms, 1 kitchen',
			owner: 'Dhaka Home',
			category: 'Apartment',
			status: 'RENTED',
		},
		{
			name: 'Elegant Flat in Mohammadpur',
			location: 'Mohammadpur, Dhaka',
			price: '৳9,000,000',
			salePrice: '৳8,100,000',
			discount: 10,
			size: '3 bedrooms, 1 kitchen',
			owner: 'Dhaka Home',
			category: 'House',
			status: 'RENTED',
		},
		{
			name: 'Affordable Apartment in Mirpur',
			location: 'Mirpur, Dhaka',
			price: '৳6,000,000',
			salePrice: '৳5,400,000',
			discount: 10,
			size: '2 bedrooms, 1 kitchen',
			owner: 'Dhaka Home',
			category: 'Apartment',
			status: 'RENTED',
		},
		{
			name: 'Luxury Condo in Gulshan',
			location: 'Gulshan, Dhaka',
			price: '৳30,000,000',
			salePrice: '৳27,000,000',
			discount: 10,
			size: '4 bedrooms, 1 kitchen',
			owner: 'Dhaka Home',
			category: 'Commercial',
			status: 'RENTED',
		},
		{
			name: 'Duplex in Uttara',
			location: 'Uttara, Dhaka',
			price: '৳20,000,000',
			salePrice: '৳18,000,000',
			discount: 10,
			size: '4 bedrooms, 1 kitchen',
			owner: 'Dhaka Home',
			category: 'Apartment',
			status: 'RENTED',
		},
		{
			name: 'Penthouse in Bashundhara R/A',
			location: 'Bashundhara Residential Area, Dhaka',
			price: '৳35,000,000',
			salePrice: '৳31,500,000',
			discount: 10,
			size: '5 bedrooms, 1 kitchen',
			owner: 'Dhaka Home',
			category: 'Commercial',
			status: 'RENTED',
		},
		{
			name: 'Studio Apartment in Tejgaon',
			location: 'Tejgaon, Dhaka',
			price: '৳4,000,000',
			salePrice: '৳3,600,000',
			discount: 10,
			size: '1 bedroom, 1 kitchen',
			owner: 'Dhaka Home',
			category: 'Apartment',
			status: 'RENTED',
		},
		{
			name: 'Family Flat in Shantinagar',
			location: 'Shantinagar, Dhaka',
			price: '৳8,500,000',
			salePrice: '৳7,650,000',
			discount: 10,
			size: '3 bedrooms, 1 kitchen',
			owner: 'Dhaka Home',
			category: 'Commercial',
			status: 'RENTED',
		},
	],
};

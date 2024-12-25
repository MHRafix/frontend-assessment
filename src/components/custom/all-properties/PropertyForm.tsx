import { IProperty } from '@/app/data-types/data.types';
import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Input, NumberInput, Select, Space } from '@mantine/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

interface IPropertyFormProps {
	onAddProperties: (properties: IProperty) => void;
}

const PropertyForm: React.FC<IPropertyFormProps> = ({ onAddProperties }) => {
	// form initializes
	const {
		register,
		setValue,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm<IPropertyFormStateType>({
		resolver: yupResolver(Form_ValidationSchema),
	});

	// handle submit form submission
	const onSubmit = (payload: IPropertyFormStateType) => {
		onAddProperties(payload);
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input.Wrapper
					label='Name'
					error={<ErrorMessage name='name' errors={errors} />}
					size='md'
				>
					<Input
						{...register('name')}
						size='md'
						placeholder='Enter property name'
					/>
				</Input.Wrapper>

				<Space h={'sm'} />

				<Input.Wrapper
					label='Location'
					error={<ErrorMessage name='location' errors={errors} />}
					size='md'
				>
					<Input
						{...register('location')}
						size='md'
						placeholder='Enter property location'
					/>
				</Input.Wrapper>

				<Space h={'sm'} />

				<Input.Wrapper
					label='Price'
					error={<ErrorMessage name='price' errors={errors} />}
					size='md'
				>
					<NumberInput
						size='md'
						placeholder='Enter property price'
						onChange={(e) => setValue('price', parseInt(e as string))}
						value={watch('price')!}
					/>
				</Input.Wrapper>

				<Space h={'sm'} />

				<Input.Wrapper
					label='Sale Price'
					error={<ErrorMessage name='salePrice' errors={errors} />}
					size='md'
				>
					<NumberInput
						size='md'
						placeholder='Enter property sale price'
						onChange={(e) => setValue('salePrice', parseInt(e as string))}
						value={watch('salePrice')!}
					/>
				</Input.Wrapper>

				<Space h={'sm'} />

				<Input.Wrapper
					label='Discount'
					error={<ErrorMessage name='discount' errors={errors} />}
					size='md'
				>
					<NumberInput
						size='md'
						placeholder='Enter property discount'
						onChange={(e) => setValue('discount', parseInt(e as string))}
						value={watch('discount')!}
					/>
				</Input.Wrapper>

				<Space h={'sm'} />

				<Input.Wrapper
					label='Size'
					error={<ErrorMessage name='size' errors={errors} />}
					size='md'
				>
					<Input
						{...register('size')}
						size='md'
						placeholder='Enter property size'
					/>
				</Input.Wrapper>

				<Space h={'sm'} />

				<Input.Wrapper
					label='Owner'
					error={<ErrorMessage name='owner' errors={errors} />}
					size='md'
				>
					<Input
						{...register('owner')}
						size='md'
						placeholder='Enter property owner'
					/>
				</Input.Wrapper>

				<Space h={'sm'} />
				<Input.Wrapper
					label='Category'
					error={<ErrorMessage name='category' errors={errors} />}
					size='md'
				>
					<Select
						data={['Apartment', 'Commercial', 'House']}
						onChange={(e) => setValue('category', e!)}
						size='md'
						placeholder='Pick property category'
					/>
				</Input.Wrapper>

				<Space h={'sm'} />

				<Input.Wrapper
					label='Status'
					error={<ErrorMessage name='status' errors={errors} />}
					size='md'
				>
					<Select
						data={['AVAILABLE', 'RENTED']}
						onChange={(e) => setValue('status', e!)}
						size='md'
						placeholder='Pick status'
					/>
				</Input.Wrapper>

				<Space h={'sm'} />

				<Button type='submit' color='violet' fullWidth size='md'>
					Add to table
				</Button>
			</form>
		</div>
	);
};

export default PropertyForm;

const Form_ValidationSchema = Yup.object().shape({
	name: Yup.string().required().label('Name'),
	location: Yup.string().required().label('Location'),
	price: Yup.number().required().label('Price'),
	salePrice: Yup.number().required().label('Sale price'),
	discount: Yup.number().required().label('Discount'),
	size: Yup.string().required().label('Size'),
	owner: Yup.string().required().label('Owner'),
	category: Yup.string().required().label('Category'),
	status: Yup.string().required().label('Status'),
});

export type IPropertyFormStateType = Yup.InferType<
	typeof Form_ValidationSchema
>;

import { yupResolver } from '@hookform/resolvers/yup';
import { ButtonUI } from '@shared/ui';
import { useForm } from 'react-hook-form';
import { trialFormSchema } from '../model/trialFormSchema';

export const TrialForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(trialFormSchema),
	});

	const onSubmitHandler = data => {
		console.log({ data });
		reset();
	};

	return (
		<form onSubmit={handleSubmit(onSubmitHandler)}>
			<label htmlFor=''>
				<input
					{...register('email')}
					placeholder='Your business email...'
					type='email'
					required
				/>
				<ButtonUI variant='primary' type='submit' className=''>
					Free trial
				</ButtonUI>
			</label>
			<p>{errors.email?.message}</p>
		</form>
	);
};

import { object, string } from 'yup';

export const trialFormSchema = object({
	email: string().email().required(),
});

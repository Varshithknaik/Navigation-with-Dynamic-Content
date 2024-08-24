import { useState } from 'react';

interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => string | undefined;
}

interface FieldConfig {
  name: string;
  type: string;
  label: string;
  validation?: ValidationRule;
}

interface FormState {
  [key: string]: string;
}

interface ErrorState {
  [key: string]: string | undefined;
}

const useForm = (fields: FieldConfig[]) => {
  const initialState = fields.reduce((acc, field) => {
    acc[field.name] = '';
    return acc;
  }, {} as FormState);

  const [formState, setFormState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<ErrorState>({});

  const validateField = (name: string, value: string, validation?: ValidationRule): string | undefined => {
    if (!validation) return undefined;
    if (validation.required && !value) return `${name} is required`;
    if (validation.minLength && value.length < validation.minLength) return `${name} must be at least ${validation.minLength} characters`;
    if (validation.maxLength && value.length > validation.maxLength) return `${name} must be less than ${validation.maxLength} characters`;
    if (validation.pattern && !validation.pattern.test(value)) return `${name} is invalid`;
    if (validation.custom) return validation.custom(value);
    return undefined;
  };

  const validate = () => {
    const newErrors: ErrorState = {};
    fields.forEach(({ name, validation }) => {
      const error = validateField(name, formState[name], validation);
      if (error) newErrors[name] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: validateField(name, value, fields.find(field => field.name === name)?.validation) });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Submitted', formState);
      setFormState(initialState);
    }
  };

  return { formState, errors, handleChange, handleSubmit };
};

export default useForm;

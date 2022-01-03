import * as React from 'react';
import { Routes as ReactRouterRoutes, Route } from 'react-router-dom';
import SignupForm from '../components/auth/signup-form/signup-form.component';

export interface ISignupPageProps {}

export default function SignupPage(props: ISignupPageProps) {
	return <SignupForm />;
}

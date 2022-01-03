import * as React from 'react';
import { Routes as ReactRouterRoutes, Route } from 'react-router-dom';
import LoginForm from '../components/auth/login-form/login-form.component';

export interface ILoginPageProps {}

export default function LoginPage(props: ILoginPageProps) {
	return <LoginForm />;
}

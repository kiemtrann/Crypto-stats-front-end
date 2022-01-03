import * as React from 'react';
import { TextField, Button, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useLoginMutation } from '../../../apis/auth.api';
import { useAppDispatch } from '../../../app/hooks';
import { setAuthState } from '../../../slices/auth.slice';
import { User } from '../../../models/User';

export interface ILoginFormProps {}

export default function LoginForm(props: ILoginFormProps) {
	const [email, setEmail] = React.useState('');
	const [emailErrored, setEmailErrored] = React.useState(false);
	const [password, setPassword] = React.useState('');
	const [passwordErrored, setPasswordErrored] = React.useState(false);
	const [login] = useLoginMutation();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const handleLogin = async () => {
		if (!email) setEmailErrored(true);
		else setEmailErrored(false);
		if (!password) setPasswordErrored(true);
		else setPasswordErrored(false);
		try {
			const response = (await login({ email, password })) as { data: User };
			dispatch(setAuthState({ user: response.data }));
			navigate('/');
		} catch (err) {
			console.error(err);
		}
	};
	return (
		<div className="flex justify-center items-center flex-col h-screen gap-8">
			<h1 className="text-6xl">Crypto Stats</h1>
			<div className="flex flex-col gap-2">
				<TextField
					label="Email"
					className="w-80"
					type="email"
					required
					helperText={emailErrored && 'Please enter a valid email !'}
					value={email}
					onChange={(event) => setEmail(event.target.value)}
					error={emailErrored}
				/>
				<TextField
					label="Password"
					className="w-80"
					type="password"
					required
					helperText={passwordErrored && 'Password may not be empty !'}
					value={password}
					onChange={(event) => setPassword(event.target.value)}
					error={passwordErrored}
				/>
				<Link to="/signup" className="justify-self-start">
					<MuiLink>Sign Up</MuiLink>
				</Link>
			</div>
			<Button variant="contained" className="w-80" onClick={handleLogin}>
				<span className="p-1">Login</span>
			</Button>
		</div>
	);
}

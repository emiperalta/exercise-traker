import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
	const [username, setUsername] = useState('');

	const usernameHandler = e => setUsername(e.target.value);

	const submitHandler = e => {
		e.preventDefault();

		const user = { username };

		axios.post('http://localhost:5000/users/add', user)
			.then(res => console.log(res.data));		

		setUsername('');
	}
	
	return (
		<div>
			<h3>Create new User</h3>
			<form onSubmit={submitHandler}>
				<div className="form-group">
					<label>Username: </label>
					<input 
						type="text"
						value={username}
						onChange={usernameHandler}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<input 
						type="submit"
						value="Create User"
						className="btn btn-primary"
					/>
				</div>
			</form>
		</div>
	);
};

export default CreateUser;
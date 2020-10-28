/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './CreateExercise.css';

const CreateExercise = () => {
	// useEffect(() => {
	// 	setUsername('test user');
	// 	setUsers(['test user'])
	// }, []);

	const [username, setUsername] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState(0);
	const [date, setDate] = useState(new Date());
	const [users, setUsers] = useState([]);

	const usernameHandler = e => setUsername(e.target.value);
	const descriptionHandler = e => setDescription(e.target.value);
	const durationHandler = e => setDuration(e.target.value);
	const dateHandler = date => setDate(date);

	const submitHandler = e => {
		e.preventDefault();

		const exercise = { username, description, duration, date };
		console.log(exercise);

		window.location = "/";
	}

	return (
		<div>
			<h3>Create new Exercise Log</h3>
			<form onSubmit={submitHandler}>
				<div className="form-group">
					<label>Username: </label>
					<select
						required
						className="form-control" 
						value={username}
						onChange={usernameHandler}
					>
						{users.map(user => {
							return <option key={user} value={user}>{user}</option>
						})}
					</select>
				</div>
				<div className="form-group">
					<label>Description: </label>
					<input 
						type="text" 
						value={description} 
						onChange={descriptionHandler}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>Duration (in minutes): </label>
					<input 
						type="text"
						value={duration}
						onChange={durationHandler}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>Date: </label>
					<DatePicker 
						selected={date}
						onChange={dateHandler}
						className="form-dp-control"
					/>
				</div>
				<div className="form-group">
					<input 
						type="submit" 
						value="Create Exercise"
						className="btn btn-primary"
					/>
				</div>
			</form>
		</div>
	);
};

export default CreateExercise;
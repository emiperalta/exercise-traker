import React, { useState, useEffect } from 'react';
import Exercise from './Exercise';
import axios from 'axios';
import '../App.css';

const ExerciseList = () => {
	useEffect(() => {
		axios.get('http://localhost:5000/exercises')
			.then(res => setExercises(res.data))
			.catch(err => console.log(err));
	}, []);

	const [exercises, setExercises] = useState([]);

	const deleteHandler = id => {
		axios.delete(`http://localhost:5000/exercises/${id}`)
			.then(res => console.log(res.data));

		setExercises(exercises.filter(ex => ex._id !== id));
	};

	return (
		<div>
			<h3>Logged Exercises</h3>
			<table className="table">
				<thead>
					<tr>
						<th>Username</th>
						<th>Description</th>
						<th>Duration</th>
						<th>Date</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{exercises.map(exercise => {
						return <Exercise exercise={exercise} deleteHandler={deleteHandler} key={exercise._id} />
					})}
				</tbody>
			</table>
		</div>
	);
};

export default ExerciseList;
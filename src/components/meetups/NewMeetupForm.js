import {useRef} from 'react';
import classes from './NewMeetupForm.module.css';

import Card from '../ui/Card';

function NewMeetupForm(props) {
	const titleInputRef = useRef();
	const imageInputRef = useRef();
	const addressInputRef = useRef();
	const descriptionInputRef = useRef();

	function handleSubmit(e) {
		e.preventDefault();
		console.log('I clicked the SUBMIT button');

		const enteredTitle = titleInputRef.current.value;
		const enteredImage = imageInputRef.current.value;
		const enteredAddress = addressInputRef.current.value;
		const enteredDescription = descriptionInputRef.current.value;

		const meetupData = {
			title: enteredTitle,
			image: enteredImage,
			address: enteredAddress,
			description: enteredDescription,
		};

		console.log(meetupData);
		props.onAddMeetup(meetupData);
	}

	return (
		<Card>
			<form
				className={classes.form}
				onSubmit={handleSubmit}
			>
				<div className={classes.control}>
					<label htmlFor='title'>Meetup Title</label>
					<input
						type='text'
						required
						id='title'
						ref={titleInputRef}
					/>
					<label htmlFor='image'>Image URL</label>
					<input
						type='url'
						required
						id='image'
						ref={imageInputRef}
						defaultValue='	http://google.com'
					/>
					<label htmlFor='address'>Address</label>
					<input
						type='text'
						required
						id='address'
						ref={addressInputRef}
					/>
					<label htmlFor='description'>Description</label>
					<textarea
						required
						rows='5'
						id='description'
						ref={descriptionInputRef}
					/>
				</div>
				<div className={classes.actions}>
					<button>Add Meetup</button>
				</div>
			</form>
		</Card>
	);
}

export default NewMeetupForm;

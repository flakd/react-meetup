import classes from './NewMeetupForm.module.css'

import Card from '../ui/Card'

function NewMeetupForm() {
	function handleSubmit(e) {
		e.preventDefault()
		console.log('I clicked the SUBMIT button')
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
					/>
					<label htmlFor='image'>Image URL</label>
					<input
						type='url'
						required
						id='image'
					/>
					<label htmlFor='address'>Address</label>
					<input
						type='text'
						required
						id='address'
					/>{' '}
					<label htmlFor='description'>Description</label>
					<textarea
						required
						rows='5'
						id='description'
					/>
				</div>
				<div className={classes.actions}>
					<button>Add Meetup</button>
				</div>
			</form>
		</Card>
	)
}

export default NewMeetupForm

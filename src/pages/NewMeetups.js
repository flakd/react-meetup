import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetingsPage() {
	function handleAddMeetup(meetupData) {
		fetch(
			'https://react-meetup-fd19a-default-rtdb.firebaseio.com/meetups.json',
			{
				method: 'POST',
				body: JSON.stringify(meetupData),
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
	}

	return (
		<section>
			<h1>Add New Meetup</h1>
			<NewMeetupForm onAddMeetup={handleAddMeetup} />
		</section>
	);
}
export default NewMeetingsPage;

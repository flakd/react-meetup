import {useNavigate} from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetingsPage() {
	const navigate = useNavigate();
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
		).then(() => {
			navigate('/', {replace: true});
		});
	}

	return (
		<section>
			<h1>Add New Meetup</h1>
			<NewMeetupForm onAddMeetup={handleAddMeetup} />
		</section>
	);
}
export default NewMeetingsPage;

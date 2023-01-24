import classes from './MeetupList.module.css'

import MeetupItem from './MeetupItem'

function MeetupList(props) {
	return (
		<ul>
			{props.meetups.map((meetup) => {
				return (
					<MeetupItem
						key={meetup.id}
						title={meetup.title}
						image={meetup.image}
						description={meetup.description}
					/>
				)
			})}
		</ul>
	)
}
export default MeetupList

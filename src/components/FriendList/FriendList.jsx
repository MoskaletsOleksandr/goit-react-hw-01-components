import PropTypes from 'prop-types'
import {List, FriendItem, FriendStatus, FriendImg, FriendName} from './FriendList.styled'

export const FriendsList = ({friends}) => {
    return (
        <List>
            {friends.map((friend) => {
                return (
                    <FriendItem key={friend.id}>
                        <FriendStatus isOnline={friend.isOnline} />
                        <FriendImg src={friend.avatar} />
                        <FriendName>{friend.name}</FriendName>
                    </FriendItem>
                )
            })}
        </List>
    )
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    }))
}
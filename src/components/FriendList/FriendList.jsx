import PropTypes from 'prop-types'
import { List } from './FriendList.styled'
import { FriendListItem } from './FriendListItem/FriendListItem'

export const FriendsList = ({friends}) => {
    return (
        <List>
            {friends.map((friend) => {
                return (
                    <FriendListItem key={friend.id} friend={friend} />
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
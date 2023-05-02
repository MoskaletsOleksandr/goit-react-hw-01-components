import PropTypes from 'prop-types'
import { FriendItem, FriendStatus, FriendImg, FriendName} from './FriendListItem.styled'

export const FriendListItem = ({friend}) => {
    return (
        <FriendItem>
            <FriendStatus isOnline={friend.isOnline} />
            <FriendImg src={friend.avatar} />
            <FriendName>{friend.name}</FriendName>
        </FriendItem>
    )
}

FriendListItem.propType = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    })
}
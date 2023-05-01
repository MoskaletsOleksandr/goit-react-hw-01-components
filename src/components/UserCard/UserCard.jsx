import PropTypes from 'prop-types'
import { Card, Description, UserImg, UserName, UserTag, UserLocation, UserStatsList, UserStatsItem, UserStatsIndicator, UserStatsValue } from './UserCard.styled'

export const UserCard = ({ username, tag, location, avatar, stats }) => {
    const arrayOfStats = Object.entries(stats)

    return (
        <Card>
            <Description>
                <UserImg src={avatar} />
                <UserName>{username}</UserName>
                <UserTag>{tag}</UserTag>
                <UserLocation>{location}</UserLocation>
            </Description>
            <UserStatsList>
                    {arrayOfStats.map((item) => {
                        return (<UserStatsItem key={item[0]}>
                            <UserStatsIndicator>{item[0]}</UserStatsIndicator>
                            <UserStatsValue>{item[1]}</UserStatsValue>
                        </UserStatsItem>)
                    })}               
            </UserStatsList>
        </Card>
    )
}

UserCard.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number)
}
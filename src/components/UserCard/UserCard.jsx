// import PropTypes from 'prop-types'
import { Card, Description, UserImg, UserName, UserTag, UserLocation, UserStats, UserStatsItem, UserStatsIndicator, UserStatsValue } from './UserCard.styled'

export const UserCard = ({ username, tag, location, avatar, stats }) => {
    const xxx = Object.entries(stats)

    return (
        <Card>
            <Description>
                <UserImg src={avatar} />
                <UserName>{username}</UserName>
                <UserTag>{tag}</UserTag>
                <UserLocation>{location}</UserLocation>
            </Description>
            <UserStats>
                    {xxx.map((item) => {
                        return (<UserStatsItem key={item[0]}>
                            <UserStatsIndicator>{item[0]}</UserStatsIndicator>
                            <UserStatsValue>{item[1]}</UserStatsValue>
                        </UserStatsItem>)
                    })}               
            </UserStats>
        </Card>
    )
}
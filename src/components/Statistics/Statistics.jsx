import PropTypes from 'prop-types'
import {StatisticsSection, Title, StatsList, StatsItem, StatsItemWrap, StatsLabel, StatsValue} from './Statistics.styled'

export const Statistics = ({ title, stats }) => {
    return (
        <StatisticsSection>
            <Title>{title}</Title>
            <StatsList>
                {stats.map((item) => {
                    return (
                        <StatsItem key={item.id}>
                            <StatsItemWrap>
                                <StatsLabel>{item.label}</StatsLabel>
                                <StatsValue>{item.percentage}</StatsValue>
                            </StatsItemWrap>
                        </StatsItem>
                    )
                })}
            </StatsList>
        </StatisticsSection>
)
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}
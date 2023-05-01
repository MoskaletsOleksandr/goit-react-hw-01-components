import styled from "@emotion/styled";

export const StatisticsSection = styled.section`
width: 300px;
margin: 10px auto;
background-color: aquamarine;
text-align: center;
`

export const Title = styled.h2`
`

export const StatsList = styled.ul`
display: flex;
justify-content: center;
gap: 5px;

margin: 0;
padding: 0;
list-style: none;
`

export const StatsItem = styled.li`
display: flex;
flex-direction: column;
width: 60px;

background-color: ${() => {  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`}}`

export const StatsLabel = styled.span``

export const StatsValue = styled.span``

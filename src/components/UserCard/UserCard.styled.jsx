import styled from "@emotion/styled";

export const Card = styled.div`
  margin: 0 auto 20px auto;
  padding: 8px;
  
  width: 300px;
  
  border-radius: 6px;
  
  text-align: center;
  background-color: aquamarine;
`

export const Description = styled.div`
  padding-top: 10px;
  padding-bottom: 24px;


  font-size: 14px;
  line-height: 1.19;
  letter-spacing: 0.03em;
`

export const UserImg = styled.img`
  height: 100px;
  border-radius: 50%;
`

export const UserName = styled.p`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 16px;
`

export const UserTag = styled.p`
  margin-bottom: 8px;
`

export const UserLocation = styled.p`
  margin-bottom: 8px;
`

export const UserStatsList = styled.ul`
display: flex;
justify-content: center;
gap: 15px;

margin: 0;
padding: 0;
list-style: none;
`

export const UserStatsItem = styled.li`
display: flex;
flex-direction: column;
`

export const UserStatsIndicator = styled.span`
margin-bottom: 5px;
font-weight: 500;
`

export const UserStatsValue = styled.span`
`


import styled from "@emotion/styled";

export const Card = styled.div`
  border: 2px dashed black;
  padding: 8px;
  border-radius: 4px;
  width: 50%;
    text-align: center;


  background-color: #809000;
`

export const Description = styled.div`
  background-color: white;
  height: 100px;

      padding-top: 30px;
    padding-bottom: 24px;
`

export const UserImg = styled.img`
height: 100%;
border-radius: 50%;
`

export const UserName = styled.p`
    margin-bottom: 10px;

    font-weight: 500;
    font-size: 16px;
    line-height: 1.19;
    text-align: center;
    letter-spacing: 0.03em;
`

export const UserTag = styled.p`
    margin-bottom: 16px;

    font-size: 16px;
    line-height: 1.19;
    text-align: center;
    letter-spacing: 0.03em;
`

export const UserLocation = styled.p`
    margin-bottom: 16px;

    font-size: 16px;
    line-height: 1.19;
    text-align: center;
    letter-spacing: 0.03em;
`

export const UserStats = styled.ul`
display: flex;
gap: 5px;
`

export const UserStatsItem = styled.li`
list-style: none;

`
export const UserStatsIndicator = styled.span`
display: block
`
export const UserStatsValue = styled.span`
display: block

`


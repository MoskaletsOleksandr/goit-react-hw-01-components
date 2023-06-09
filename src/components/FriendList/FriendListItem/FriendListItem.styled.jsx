import styled from "@emotion/styled";

export const FriendItem = styled.li`
display: flex;
gap: 15px;
justify-content: center;
align-items: center;

margin-bottom: 10px;

background-color: aquamarine;

list-style: none;
`
export const FriendStatus = styled.span`
display: block;
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${({isOnline}) => {
   return isOnline ? 'green' : 'red'
}};
`

export const FriendImg = styled.img`
height: 100%;
border-radius: 50%;
height: 50px;
`

export const FriendName = styled.p`
    margin-bottom: 10px;

    font-weight: 500;
    font-size: 16px;
    line-height: 1.19;
    text-align: center;
    letter-spacing: 0.03em;
`
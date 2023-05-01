import { Container } from "./App.styled";
import { UserCard } from "components/UserCard/UserCard";
import { Statistics } from "components/Statistics/Statistics";
import { FriendsList } from "components/FriendList/FriendList"

import user from '../../data/user'
import data from '../../data/data'
import friends from '../../data/friends'

export const App = () => {
  return (
    <Container>
      <UserCard
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title='Upload stats'
        stats={data}
      />
      <FriendsList friends={friends} />
    </Container>
  );
};

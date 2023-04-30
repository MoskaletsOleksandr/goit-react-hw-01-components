import { Container } from "./App.styled";
import { UserCard } from "components/UserCard/UserCard";

import user from '../../data/user'

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
    </Container>
  );
};

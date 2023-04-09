import { ApiUser, User } from '../../../models/user.model';

const HomeAdapter = (user: ApiUser): User => {
  return {
    id: user.id,
    name: user.name,
    status: user.status,
    species: user.species,
  };
};

export default HomeAdapter;

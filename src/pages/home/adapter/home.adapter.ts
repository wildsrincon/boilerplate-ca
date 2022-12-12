import { ApiUser, User } from "@/models";

export const HomeAdapter = (user: ApiUser): User => {
  return {
    id: user.id,
    name: user.name,
    status: user.status,
    species: user.species
  }
}
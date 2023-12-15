"server-only";

import { db } from "@/db";
import { User, users } from "@/db/schema";

export type UserDto = {
  id: string;
  name: string;
  email: string;
  emailVerified: Date;
  image: string;
  role: string;
};

function toDtoMapper(user: User) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    emailVerified: user.emailVerified,
    image: user.image,
    role: user.role,
  };
}

export async function getUsers(): Promise<UserDto[]> {
  const users = await db.query.users.findMany();

  return users.map(toDtoMapper);
}

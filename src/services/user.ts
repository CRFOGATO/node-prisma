import { skip } from "node:test";
import { Prisma } from "../generated/prisma";
import { prisma } from "../libs/prisma";

export const createUser = async (data: Prisma.UserCreateInput) => {
  try {
    const user = await prisma.user.create({
      data,
    });
    return user;
  } catch (error) {
    return false;
  }
};

export const createUsers = async (users: Prisma.UserCreateInput[]) => {
  try {
    return await prisma.user.createMany({
      data: users,
      skipDuplicates: true,
    });
  } catch (error) {
    return false;
  }
};

export const updateUser = async () => {
  const updateUser = await prisma.user.update({
    where: {
      email: "",
    },
    data: {},
  });
  return updateUser;
};

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

export const getAllUsers = async () => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      status: true,
    },
  });
  return users;
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

export const deleteUser = async () => {
  const deleteUser = await prisma.user.delete({
    where: {
      email: "",
    },
  });
};

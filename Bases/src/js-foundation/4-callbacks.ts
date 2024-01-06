interface User {
  id: number;
  name: string;
}

export const users: User[] = [
  {
    id: 1,
    name: "Julian Arteaga",
  },
  {
    id: 2,
    name: "Richar Cifuentes",
  },
];

export function getUserById(
  id: number,
  callback: (error?: string, user?:User) => void){
  const user = users.find(function (user) {
    return user.id === id;
  });
  if (!user) {
    return callback(`User not found with id ${id}`);
  }
  return callback(undefined, user);
}


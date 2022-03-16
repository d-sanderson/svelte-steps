import faker from "@faker-js/faker";

const generateUsers = () =>
  [...Array(50)].map(() => {
    const lastName = faker.name.lastName();
    const bird = faker.animal.bird()
    return {
      avatar: `https://avatars.dicebear.com/api/human/${lastName}.svg`,
      lastName,
      bird
    };
  });

export async function get() {
  return {
    body: generateUsers(),
  };
}
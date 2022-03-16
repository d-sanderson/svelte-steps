
const generateUsers = () =>
  [...Array(50)].map(() => {
    const lastName = 'Murray'
    const bird = 'Blue Jay'
    return {
      avatar: `https://avatars.dicebear.com/api/human/${lastName}.svg`,
      lastName,
      bird
    };
  });

export async function get() {
  return {
    body: {
        users: generateUsers()
    },
  };
}
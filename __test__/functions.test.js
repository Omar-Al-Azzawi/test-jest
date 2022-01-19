const { getUsers, getUser, getPosts } = require("../functions");

describe("getUsers", () => {
  it("should return an array of users", async () => {
    const users = await getUsers();
    expect(users).toBeInstanceOf(Array);
    expect(users).toMatchSnapshot();
    expect(users.map((user) => user.id)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
    expect(users.map((user) => user.name)).toEqual([
      "Leanne Graham",
      "Ervin Howell",
      "Clementine Bauch",
      "Patricia Lebsack",
      "Chelsey Dietrich",
      "Mrs. Dennis Schulist",
      "Kurtis Weissnat",
      "Nicholas Runolfsdottir V",
      "Glenna Reichert",
      "Clementina DuBuque",
    ]);
    expect(users.map((user) => user.username)).toEqual([
      "Bret",
      "Antonette",
      "Samantha",
      "Karianne",
      "Kamren",
      "Leopoldo_Corkery",
      "Elwyn.Skiles",
      "Maxime_Nienow",
      "Delphine",
      "Moriah.Stanton",
    ]);
    expect(users[0]).toHaveProperty("name");
    expect(users[0]).toHaveProperty("username");
    expect(users[0]).toHaveProperty("email");
  });

  for (let i = 1; i <= 10; i++) {
    it(`should return user ${i}`, async () => {
      const user = await getUser(i);
      expect(user).toMatchSnapshot();
      expect(user).toHaveProperty("id");
      expect(user).toHaveProperty("name");
      expect(user).toHaveProperty("username");
      expect(user).toHaveProperty("email");
    });
  }

  it("should not to be NULL", async () => {
    const users = await getUsers();
    expect(users).not.toBeNull();
  });

  // todo is a property of test to let you add todo to your test case
  test.todo("should return an array of users");

  it("should return an array of users with a length of 10", async () => {
    const users = await getUsers();
    expect(users).toHaveLength(10);
  });

  it("should return first user name", async () => {
    const users = await getUsers();
    expect(users[0].name).toBe("Leanne Graham");
  });

  it("should return first user username", async () => {
    const users = await getUsers();
    expect(users[0].username).toBe("Bret");
  });

  it("should return first user email", async () => {
    const users = await getUsers();
    expect(users[0].email).toBe("Sincere@april.biz");
  });

  it("should return last user name", async () => {
    const users = await getUsers();
    expect(users[9].name).toBe("Clementina DuBuque");
  });
});

describe("getUser", () => {
  it("should return a user", async () => {
    const user = await getUser(1);
    expect(user).toBeInstanceOf(Object);
    expect(user).toHaveProperty("name");
    expect(user).toHaveProperty("username");
    expect(user).toHaveProperty("email");
  });
  it("should return a user with id 1", async () => {
    const user = await getUser(1);
    expect(user.id).toBe(1);
  });
  it("should return a user with name Leanne Graham", async () => {
    const user = await getUser(1);
    expect(user.name).toBe("Leanne Graham");
  });
  it("should return a user with username Bret", async () => {
    const user = await getUser(1);
    expect(user.username).toBe("Bret");
  });
  it("should return a user not to be NULL", async () => {
    const user = await getUser(1);
    expect(user).not.toBeNull();
  });
});

describe("getPosts", () => {
  it("should return an array of posts", async () => {
    const posts = await getPosts();
    expect(posts).toBeInstanceOf(Array);
    expect(posts[0]).toHaveProperty("id");
    expect(posts[0]).toHaveProperty("title");
    expect(posts[0]).toHaveProperty("body");
  });
  it("should return an array of posts with a length of 100", async () => {
    const posts = await getPosts();
    expect(posts).toHaveLength(100);
  });
  it("should return first post id", async () => {
    const posts = await getPosts();
    expect(posts[0].id).toBe(1);
  });
  it("should return first post title", async () => {
    const posts = await getPosts();
    expect(posts[0].title).toBe(
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
    );
  });
  it("should return first post body", async () => {
    const posts = await getPosts();
    expect(posts[0].body).toBe(
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    );
  });
});

test("mock functions", () => {
  const mock = jest.fn(() => "mock");
  expect(mock()).toBe("mock");
  console.log(mock);
  mock.mockReturnValueOnce(10);
  mock.mockReturnValueOnce("ten");
  mock.mockReturnValue(true);

  expect(mock()).toBe(10);
});

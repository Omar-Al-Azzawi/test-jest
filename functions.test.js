const { getUsers, getUser, getPosts } = require("./functions");

describe("getUsers", () => {
  it("should return an array of users", async () => {
    const users = await getUsers();
    expect(users).toBeInstanceOf(Array);
    expect(users[0]).toHaveProperty("name");
    expect(users[0]).toHaveProperty("username");
    expect(users[0]).toHaveProperty("email");
  });

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
});

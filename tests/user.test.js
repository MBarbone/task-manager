const request = require("supertest");
const app = require("../src/app");

test("Sign up new user", async () => {
  await request(app)
    .post("/users")
    .send({
      name: "John Smith",
      email: "Jsmith@example.com",
      password: "qwerty123"
    })
    .expect(201);
});

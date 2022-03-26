import supertest from "supertest";

import { testApp, testServer, testPort } from "./testApp";

describe("/items (e2e)", () => {
  beforeEach(() => {
    if (!testServer.listenerCount) testServer.listen(testPort);
  });

  afterEach(() => {
    testServer.close();
  });
  it("GET /items returns all items", async () => {
    await supertest(testApp)
      .get("/items")
      .expect(200)
      .then((response) => {
        expect(Array.isArray(response.body)).toBeTruthy();
      });
  });
});

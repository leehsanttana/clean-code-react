import { RemoteAuthentication } from "./remote-authentication";
import { HttpPostClientSpy } from "../../test/mock-http-client";

describe("RemoteAuthentication", () => {
  test("Should Call HttpPostClient with correct URL", async () => {
    const url = "any_url";
    const httpPostoClientSpy = new HttpPostClientSpy();
    const sut = new RemoteAuthentication(url, httpPostoClientSpy);
    await sut.auth();
    expect(httpPostoClientSpy.url).toBe(url);
  });
});

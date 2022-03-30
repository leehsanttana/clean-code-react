import { HttpPostClient } from "../../protocols/http/http-post-client";
import { RemoteAuthentication } from "./remote-authentication";

describe("RemoteAuthentication", () => {
  test("Should Call HttpPostClient with correct URL", async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string;
      async post(url: string): Promise<void> {
        this.url = url;
        return Promise.resolve();
      }
    }
    const url = "any_url";
    const httpPostoClientSpy = new HttpPostClientSpy();
    const sut = new RemoteAuthentication(url, httpPostoClientSpy);
    await sut.auth();
    expect(httpPostoClientSpy.url).toBe(url);
  });
});

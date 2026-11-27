import { describe, expect, it } from "vitest";
import { accessRequestHref, siteConfig } from "./site-config";

describe("Phantom access requests", () => {
  it("routes requests to the supplied contact email", () => {
    expect(accessRequestHref().split("?")[0]).toBe("mailto:phantom@herculessuite.io");
  });
  it("requires authorised use", () => {
    expect(siteConfig.access.authorisedUseOnly).toBe(true);
  });
  it("requires approval before access", () => {
    expect(siteConfig.access.approvalRequired).toBe(true);
  });
});
import { describe, expect, it } from "vitest";
import { formatDate } from "./format-date";

describe("formatDate", () => {
  it("formats a date as YYYY-MM-DD", () => {
    expect(formatDate(new Date("2026-01-02T12:30:00Z"))).toBe("2026-01-02");
  });

  it("uses the UTC date across timezone boundaries", () => {
    expect(formatDate(new Date("2026-01-02T00:30:00+08:00"))).toBe("2026-01-01");
  });
});

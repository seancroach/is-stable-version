import test from "ava";
import { isStableVersion } from "../source";

test("isStableVersion()", (t) => {
  // Basic functionality
  t.true(isStableVersion("1.0.0"));
  t.false(isStableVersion("1.0.0-alpha"));

  // "Loose" functionality
  t.true(isStableVersion("1.0.0", { loose: true }));
  t.false(isStableVersion("1.0.0alpha", { loose: true }));

  // Throws errors accordingly
  t.throws(() => {
    isStableVersion("invalid");
  });
  t.throws(() => {
    isStableVersion("1.0.0alpha");
  });
});

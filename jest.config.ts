import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  clearMocks: true,
  collectCoverage: true,

  coverageDirectory: "coverage",
  coverageProvider: "v8",

  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@components/(.*)$": "<rootDir>/components/$1",
  },
};

export default createJestConfig(config);

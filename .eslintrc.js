module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "@typescript-eslint/recommended", "prettier/@typescript-eslint", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: [
  "@typescript-eslint",
  "react",
  "jsx-a11y",
  "import",
  "eslint-plugin-prettier",
  "eslint-plugin-react"
  ],  
  ignorePatterns: ["node_modules", "fridgeForager.js"],
  rules: {
    "@typescript-eslint/no-empty-function": 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "jsx-a11y/label-has-associated-control": ["error", {
      "required": {
        "some": ["nesting", "id"]
      }
    }],
    "jsx-a11y/label-has-for": ["error", {
      "required": {
        "some": ["nesting", "id"]
      }
    }],
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "none",
        "singleQuote": true,
        "jsxSingleQuote": false,
        "printWidth": 100,
        "semi": true,
        "jsxBracketSameLine": true
      }
    ]
  },
  settings: {
    react: {
      "version": "detect"
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true
      }
    }
  }
};

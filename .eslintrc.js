module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: [
  "react",
  "jsx-a11y",
  "import",
  "eslint-plugin-prettier",
  "eslint-plugin-react"
  ],  
  ignorePatterns: ["node_modules", "fridgeForager.js"],
  rules: {
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
};

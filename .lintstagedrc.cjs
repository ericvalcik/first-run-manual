module.exports = {
  "**/*.(ts|js)?(x)": [
    "prettier --write",
    "eslint --fix --format table"
  ]
}
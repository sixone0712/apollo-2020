module.exports = {
  extends: [
    'react-app',
    'plugin:prettier/recommended',
  ],
  rules: {
    // 추후 .prettierrc.js 파일에서 설정해줄 예정
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

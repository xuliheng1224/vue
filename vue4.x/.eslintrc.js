module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    "quotes": [0, "single"],//引号类型
    "eol-last": 0,//文件以单一的换行符结束
    "semi": [0],//语句强制分号结尾
    "no-irregular-whitespace": "off",//这禁止掉 空格报错检查
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}

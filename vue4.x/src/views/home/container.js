const sexs = [{ aaa: '男', bbb: 'M' }, { aaa: '女', bbb: 'F' }]
const sexProps = { label: 'aaa', value: 'bbb' }

export const searchForm = [
  { type:'Input', label:'姓名', prop:'name', width:'180px', placeholder:'请输入姓名'},
  { type:'Input', label:'年龄', prop:'age', width:'180px', placeholder:'请输入年龄'},
  { type:'Date', label:'日期', prop:'date', width:'180px', placeholder:'请选择日期'},
  { type:'Select', label:'性别', prop:'sex', width:'120px', options: sexs, props: sexProps, change: row=> '', placeholder: '请选择性别'},
]
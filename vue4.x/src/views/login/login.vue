<template>
  <div class="loginbg">
    <el-form :model="form" status-icon :rules="rules" ref="form" label-width="100px">
      <el-form-item label="用户名" prop="name">
        <el-input type="text" prefix-icon="el-icon-user" v-model="form.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password"  prefix-icon="el-icon-lock" v-model="form.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" prefix-icon="el-icon-lock" v-model="form.checkPass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'login',
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.form.checkPass || this.form.checkPass === 0) {
          this.$refs.form.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.form.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      form: {
        // name: '',
        // password: '',
        // checkPass: ''
      },
      rules: {
        name: [
          { required: true, message: '年龄不能为空' }
        ],
        password: [
          { required: true, message: '密码不能为空' },
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { required: true, validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      this.$refs.form.validate((valid) => {
        if (!valid) {
          return
        }
        this.userData(this.form)
        this.$router.push('/home')
      })
    },
    resetForm () {
      this.$refs.form.resetFields()
    },
    ...mapActions(['userData'])
  }
}
</script>

<style lang="less" scoped>
.loginbg{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('../../assets/qi.jpg');
  background-size:cover;
  background-repeat:no-repeat;
  .el-form{
    width: 400px;
  }
}
</style>
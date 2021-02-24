<template>
  <div class="columns py-6">
    <div class="column is-half is-offset-one-quarter">
      <el-card shadow="never">
        <div slot="header" class="has-text-centered has-text-weight-bold">
          注册新员工
        </div>
        <div>
          <el-form
            ref="ruleForm"
            v-loading="loading"
            :model="ruleForm"
            status-icon
            :rules="rules"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="账号" prop="name">
              <el-input v-model="ruleForm.name" />
            </el-form-item>

             <el-form-item label="昵称" prop="nickName">
              <el-input v-model="ruleForm.nickName" autocomplete="off" />
            </el-form-item>

            <el-form-item label="密码" prop="pass">
              <el-input
                v-model="ruleForm.pass"
                type="password"
                autocomplete="off"
              />
            </el-form-item>

            <el-form-item label="确认密码" prop="checkPass">
              <el-input
                v-model="ruleForm.checkPass"
                type="password"
                autocomplete="off"
              />
            </el-form-item>

            <el-form-item>
              <el-button
                type="primary"
                @click="submitForm('ruleForm')"
              >立即注册</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { userRegister } from '@/api/auth/auth'
export default {
  name: 'Register',
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      loading: false,
      ruleForm: {
        name: '',
        nickName: '',
        pass: '',
        checkPass: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          {
            min: 2,
            max: 10,
            message: '长度在 2 到 10 个字符',
            trigger: 'blur'
          }
        ],
        pass: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 6,
            max: 20,
            message: '长度在 6 到 20 个字符',
            trigger: 'blur'
          }
        ],
        checkPass: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' }
        ],
        nickName: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
          {
            min: 2,
            max: 10,
            message: '长度在 2 到 10 个字符',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true
          // console.log(this.ruleForm);
          userRegister(this.ruleForm)
            .then((value) => {
              const { code, message } = value
              if (code === 200) {
                this.$message({
                  message: '账号注册成功',
                  type: 'success'
                })
                setTimeout(() => {
                  this.loading = false
                  this.$router.push({ path: this.redirect || '/login' })
                }, 0.1 * 1000)
              } else {
                this.$message.error('注册失败，' + message)
              }
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
</style>
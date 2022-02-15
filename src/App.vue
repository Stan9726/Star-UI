<template>
  <div id="app">
    <div>
      <st-button>按钮</st-button>
      <st-button type="primary">登录</st-button>
      <st-button type="danger">删除</st-button>
      <st-button type="info">取消</st-button>
      <st-button type="success">确定</st-button>
      <st-button type="warning">提示</st-button>
    </div>

    <div>
      <st-button plain>按钮</st-button>
      <st-button plain type="primary">登录</st-button>
      <st-button plain type="danger">删除</st-button>
      <st-button plain type="info">取消</st-button>
      <st-button plain type="success">确定</st-button>
      <st-button plain type="warning">提示</st-button>
    </div>

    <div>
      <st-button round>按钮</st-button>
      <st-button round type="primary">登录</st-button>
      <st-button round type="danger">删除</st-button>
      <st-button round type="info">取消</st-button>
      <st-button round type="success">确定</st-button>
      <st-button round type="warning">提示</st-button>
    </div>

    <div>
      <st-button circle>按钮</st-button>
      <st-button circle type="primary">登录</st-button>
      <st-button circle type="danger">删除</st-button>
      <st-button circle type="info">取消</st-button>
      <st-button circle type="success">确定</st-button>
      <st-button circle type="warning">提示</st-button>
    </div>

    <div>
      <st-button icon="appreciate"></st-button>
      <st-button icon="wang" type="primary">登录</st-button>
      <st-button icon="delete" type="danger">删除</st-button>
      <st-button icon="close" type="info">取消</st-button>
      <st-button icon="check" type="success">确定</st-button>
      <st-button icon="info" type="warning">提示</st-button>
    </div>

    <div>
      <st-button @click="visible = true">按钮</st-button>

      <st-button disabled>按钮</st-button>
    </div>

    <st-dialog title="提示" width="30%" top="80px" :visible.sync="visible">
      <st-form :model="model" labelWidth="60px">
        <st-form-item label="用户名">
          <st-input
            placeholder="请输入用户名"
            v-model="model.username"
          ></st-input>
        </st-form-item>
        <st-form-item label="性别">
          <st-radio-group v-model="model.gender">
            <st-radio label="男">男</st-radio>
            <st-radio label="女">女</st-radio>
          </st-radio-group>
        </st-form-item>
        <st-form-item label="爱好">
          <st-checkbox-group v-model="model.hobbies">
            <st-checkbox label="football">足球</st-checkbox>
            <st-checkbox label="guitar">吉他</st-checkbox>
            <st-checkbox label="swim">游泳</st-checkbox>
          </st-checkbox-group>
        </st-form-item>
        <st-form-item label="已阅读">
          <st-switch
            v-model="model.hasRead"
            active-color="#13ce66"
            inactive-color="#ff4949"
          ></st-switch>
        </st-form-item>
      </st-form>
      <template v-slot:footer>
        <st-button @click="visible = false">取消</st-button>
        <st-button class="button-confirm" type="primary" @click="confirmFn"
          >确定</st-button
        >
      </template>
    </st-dialog>

    <div>
      <st-input
        placeholder="请输入用户名"
        name="username"
        type="text"
        v-model="username"
        :clearable="true"
      ></st-input>
    </div>

    <div>
      <st-switch
        v-model="active"
        active-color="#13ce66"
        inactive-color="#ff4949"
      ></st-switch>
    </div>

    <div>
      <st-radio v-model="gender" label="0">女</st-radio>
      <st-radio v-model="gender" label="1">男</st-radio>

      <st-radio-group v-model="hobby">
        <st-radio label="football">足球</st-radio>
        <st-radio label="tennis">网球</st-radio>
        <st-radio label="basketball">篮球</st-radio>
      </st-radio-group>
    </div>

    <div>
      <st-checkbox-group v-model="hobbies">
        <st-checkbox label="football">足球</st-checkbox>
        <st-checkbox label="tennis">网球</st-checkbox>
        <st-checkbox label="basketball">篮球</st-checkbox>
      </st-checkbox-group>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        visible: false,
        disabled: true,
        username: '',
        active: false,
        gender: '0',
        hobby: '',
        hobbies: [],
        model: {
          username: '',
          gender: '',
          hobbies: [],
          hasRead: false
        }
      }
    },
    methods: {
      confirmFn() {
        console.log('confirmed')
      }
    }
  }
</script>

<style scoped lang="scss">
  div {
    margin-bottom: 20px;
  }

  #app {
    .st-button {
      margin-right: 30px;
    }
  }
</style>

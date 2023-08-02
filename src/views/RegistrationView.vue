<template>
  <section class="banner-section">
    <div class="bg"></div>
    <div class="container">
      <h1 class="section-title">
        <div class="f65-36">Registration</div>
        <div class="f30-25">加入會員</div>
        <div class="star"></div>
      </h1>
    </div>
  </section>
  <section class="form-section">
    <div class="container">
      <div class="form-wrap">
        <form @submit.prevent="registration">
          <div class="form-group req">
            <label for="name">姓名</label>
            <div class="input-wrap">
              <input id="name" type="text" placeholder="請輸入姓名" v-model="user.name" />
              <small>*必填</small>
            </div>
          </div>
          <div class="form-group req">
            <label for="account">帳號</label>
            <div class="input-wrap">
              <input id="account" type="text" placeholder="請輸入Email" v-model="user.username" />
              <small>*請輸入正確格式EMAIL</small>
            </div>
          </div>
          <div class="form-group req">
            <label for="password">密碼</label>
            <div class="input-wrap">
              <input
                id="password"
                type="password"
                placeholder="請輸入密碼"
                v-model="user.password"
              />
              <small>*至少6字元以上</small>
            </div>
          </div>
          <div class="form-group req">
            <label for="passwordconfirm">密碼確認</label>
            <div class="input-wrap">
              <input
                id="passwordconfirm"
                type="passwordconfirm"
                placeholder="請輸入密碼"
                v-model="user.passwordconfirm"
              />
              <small>*與密碼不符</small>
            </div>
          </div>
          <div class="form-group req">
            <label for="birth">生日</label>
            <div class="input-wrap">
              <input
                id="birth"
                type="birth"
                placeholder="請輸入生日"
                v-model="user.birth"
              />
              <small>*必填</small>
            </div>
          </div>
          <div class="form-group req">
            <label for="phone">手機</label>
            <div class="input-wrap">
              <input
                id="phone"
                type="phone"
                placeholder="請輸入手機"
                v-model="user.phone"
              />
              <small>*必填</small>
            </div>
          </div>
          <div class="terms">
              <input type="checkbox" id="terms">
              <label class="form-label" for="terms">
                  我同意<a href="#terms" target="_blank">HomeSpa相關條款</a>
              </label>
              <small>*請詳閱相關條款</small>
          </div>
          <div class="button-wrap">
            <button class="submit-btn" type="submit">註冊</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '../assets/scss/registration.scss';
</style>

<script>
export default {
  data() {
    return {
      user: {
        name:'',
        username: '',
        password: '',
        passwordconfirm:'',
        birth:'',
        phone:'',
      },
    };
  },
  methods: {
  },
  mounted() {},
};
</script>

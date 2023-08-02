<template>
  <section class="banner-section">
    <div class="bg"></div>
    <div class="container">
      <h1 class="section-title">
        <div class="f65-36">Login</div>
        <div class="f30-25">會員登入</div>
        <div class="star"></div>
      </h1>
    </div>
  </section>
  <section class="form-section">
    <div class="container">
      <div class="form-wrap">
        <form @submit.prevent="login">
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
          <div class="button-wrap">
            <button class="submit-btn" type="submit">登入</button>
          </div>
        </form>
        <div class="other-page f18">
          <a href="/#registration">加入會員</a>
          <a href="">忘記密碼</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '../assets/scss/login.scss';
</style>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      this.$http
        .post(`${process.env.VUE_APP_API}/admin/signin`, this.user)
        .then((res) => {
          const { expired, token } = res.data;
          document.cookie = `hextoken=${token}; expires=${new Date(expired)}`;
          this.$router.push('/');
        })
        .catch(() => {
          // eslint-disable-next-line no-alert
          alert('帳號或密碼錯誤');
        });
    },
  },
  mounted() {},
};
</script>

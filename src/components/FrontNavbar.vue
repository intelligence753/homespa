<template>
  <header>
    <div class="container-logo">
      <router-link to="/">
        <img src="../assets/images/logo.png" alt="logo" />
      </router-link>
    </div>
    <nav class="container-menu">
      <ul class="menu">
        <li class="main">
          <router-link class="main-title" to="/#about">
            <div class="f18">關於我們</div>
            <div class="f16">ABOUT</div>
          </router-link>
        </li>
        <li class="main">
          <router-link class="main-title" to="/reservation">
            <div class="f18">預約體驗</div>
            <div class="f16">RESERVATION</div>
          </router-link>
        </li>
        <li class="main">
          <router-link class="main-title" to="/#service">
            <div class="f18">服務項目</div>
            <div class="f16">SERVICE</div>
          </router-link>
        </li>
        <li class="main">
          <router-link class="main-title" to="/product">
            <div class="f18">產品項目</div>
            <div class="f16">PRODUCTS</div>
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="container-icon">
      <!-- 已登入會員 $('.member').addClass('active') -->
      <div class="member">
        <a href="javascript:;">
          <img class="default" src="../assets/images/member_icon.png" alt="尚未登入會員" />
          <img class="hover" src="../assets/images/member_icon_active.png" alt="會員icon hover" />
          <img class="active" src="../assets/images/member_icon_active.png" alt="已登入會員" />
        </a>
        <div class="submenu">
          <ul>
            <li>
              <a href="member-profile.php"> 會員專區 </a>
            </li>
            <li>
              <a href="javascript:;"> 登出 </a>
            </li>
          </ul>
        </div>
        <div class="submenu">
          <ul>
            <li>
             <router-link to="/registration"> 立即註冊</router-link>
            </li>
            <li>
              <router-link to="/login"> 登入 </router-link>
            </li>
          </ul>
        </div>
      </div>
      <!-- 購物車友商品 $('.cart').addClass('active') -->
      <div class="cart active">
        <a href="cart.php">
          <img class="default" src="../assets/images/bag.png" alt="cart" />
          <img class="hover" src="../assets/images/bag_active.png" alt="cart hover" />
          <img class="active" src="../assets/images/bag_active.png" alt="cart active" />
          <div class="amount">1</div>
        </a>
      </div>
    </div>
    <div class="container-burger">
      <div class="burger">
        <span></span>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@import '../assets/scss/layout/_header.scss';
</style>

<script>
export default {
  data() {},
  methods: {
    // 這裡面可以寫JS語法，但functionName()要由其他地方去觸發
    menumo() {
      $('.container-burger').on('click', () => {
        $('header').toggleClass('open');
        if ($('header').hasClass('open')) {
          $('body,html').css('overflow-y', 'hidden');
        } else {
          $('body,html').css('overflow-y', 'auto');
        }
      });
      $(window).on('resize', () => {
        $('header').removeClass('open');
      });
    },
    menupc() {
      if ($(window).width() < 992) {
        // eslint-disable-next-line func-names
        $('.container-icon .member').on('click', function () {
          $(this).toggleClass('open');
        });
      } else {
        $('.container-icon .member').hover(
          // eslint-disable-next-line func-names
          function () {
            $(this).addClass('open');
          },
          // eslint-disable-next-line func-names
          function () {
            $(this).removeClass('open');
          },
        );
      }
    },
    submenu() {
      $('.member .submenu').hover(
        // eslint-disable-next-line func-names
        function () {
          $(this).parent().addClass('open');
        },
        // eslint-disable-next-line func-names
        function () {
          $(this).parent().removeClass('open');
        },
      );

      // eslint-disable-next-line func-names
      $(window).on('scroll', function () {
        if ($(this).scrollTop() > 10) {
          $('header').addClass('scroll');
        } else {
          $('header').removeClass('scroll');
        }
      });
    },
  },
  mounted() {
    // 這裡面可以寫JS語法，頁面資料載入完成後，會直接運行functionName()
    this.menumo();
    this.menupc();
    this.submenu();
  },
};
</script>

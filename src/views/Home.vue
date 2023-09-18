<template>
  <main>
    <section class="kv-section">
      <div class="bg-color"></div>
      <swiper
        :spaceBetween="30"
        :effect="'fade'"
        :modules="modules"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        class="mySwiper"
      >
        <swiper-slide><div class="image"></div></swiper-slide>
        <swiper-slide><div class="image"></div></swiper-slide>
      </swiper>
      <div class="slogan">
        <div class="f129">
          Experience a
          <br />
          new day
        </div>
        <div class="f20">體驗煥然一新的一天</div>
        <div class="number-dots"></div>
      </div>
      <div class="note f18-14">首次新客體驗價享8折優惠</div>
    </section>
    <section class="about-section" id="about">
      <div class="container">
        <h2 class="section-title">
          <div class="f65-36">About</div>
          <div class="f30-25">關於我們</div>
          <div class="star"></div>
        </h2>
        <p class="txt">
          想到「家」想到了什麼
          <br />
          看似簡單的問題卻讓人琢磨許久
          <br />
          對每個人來說一定都非常不同
          <br />
          有些人覺得是避風港，有些人覺得是歸屬感
          <br />
          有些人覺得是壓力，有些人覺得是愛
          <br />
          這些情感可能複雜，但對大多數人來說
          <br />
          情緒都是很滿的吧！
          <br />
          <br />
          Home
          Spa希望能用我們的詮釋帶出我們心中對家的感覺，讓大家來這可以感受屬於自己的溫暖，一個自己的隱形避難所，就在2020年全球環境遭受巨大改變之時，「家」Home
          Spa誕生了，讓身心疲乏，無助徬徨的妳享受最安心、最放心的環境，有妳才有「家」。
        </p>
        <!-- <div class="btnwrap">
          <a class="btn" href="about.php"> MORE </a>
        </div> -->
        <ul>
          <li>
            <div class="wrap">
              <div class="icon">
                <img src="~@/assets/images/index/icon01.png" alt="" />
              </div>
              <div class="line"></div>
              <div class="f26-22">誠信</div>
            </div>
          </li>
          <li>
            <div class="wrap">
              <div class="icon">
                <img src="~@/assets/images/index/icon02.png" alt="" />
              </div>
              <div class="line"></div>
              <div class="f26-22">專業</div>
            </div>
          </li>
          <li>
            <div class="wrap">
              <div class="icon">
                <img src="~@/assets/images/index/icon03.png" alt="" />
              </div>
              <div class="line"></div>
              <div class="f26-22">安心</div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="service-section" id="service">
      <div class="container">
        <h2 class="section-title">
          <div class="f65-36">Service</div>
          <div class="f30-25">服務項目</div>
          <div class="star"></div>
        </h2>
      </div>
      <ul>
        <li>
          <router-link to="/service?id=0">
            <div class="imgwrap"></div>
            <div class="mask"></div>
            <div class="content">
              <div class="f26-20">臉部保養</div>
              <div class="f18">MORE</div>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/service?id=1">
            <div class="imgwrap"></div>
            <div class="mask"></div>
            <div class="content">
              <div class="f26-20">身體保養</div>
              <div class="f18">MORE</div>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/service?id=2">
            <div class="imgwrap"></div>
            <div class="mask"></div>
            <div class="content">
              <div class="f26-20">脫毛處理</div>
              <div class="f18">MORE</div>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/service?id=3">
            <div class="imgwrap"></div>
            <div class="mask"></div>
            <div class="content">
              <div class="f26-20">美睫</div>
              <div class="f18">MORE</div>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/service?id=4">
            <div class="imgwrap"></div>
            <div class="mask"></div>
            <div class="content">
              <div class="f26-20">手足保養（美甲）</div>
              <div class="f18">MORE</div>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/service?id=5">
            <div class="imgwrap"></div>
            <div class="mask"></div>
            <div class="content">
              <div class="f26-20">紋繡</div>
              <div class="f18">MORE</div>
            </div>
          </router-link>
        </li>
      </ul>
    </section>
    <section class="evaluation-section">
      <div class="container">
        <h2 class="section-title">
          <div class="f65-36">Evaluation</div>
          <div class="f30-25">客戶評價</div>
          <div class="star"></div>
        </h2>
        <ul>
          <li>
            <a href="https://goo.gl/maps/uTN4UkHn3qgNSniz8" target="_blank">
              <div class="avatar">
                <div
                  class="img"
                  style="background-image: url(~@/assets/images/index/avatar01.jpg)"
                ></div>
              </div>
              <div class="num f65-36">01</div>
              <div class="stars">
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
              </div>
              <div class="content f18-16">
                很喜歡這邊的環境～～體驗過臉部療程、身體按摩跟指甲光療都很喜歡！不會強迫推銷，讓人可以很安心的問各種皮膚問題
                👍👍
              </div>
            </a>
          </li>
          <li>
            <a href="https://goo.gl/maps/vTECGsbDB5HuNUyp6" target="_blank">
              <div class="avatar">
                <div
                  class="img"
                  style="background-image: url(~@/assets/images/index/avatar02.jpg)"
                ></div>
              </div>
              <div class="num f65-36">02</div>
              <div class="stars">
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
              </div>
              <div class="content f18-16">
                真心很愛這邊的環境，也很喜歡親切溫柔的昱琇，也不會一直推銷療程跟商品，這裡真的是放鬆身心靈好地方～～～按摩完看看窗外就覺得一切都這麼美好啊～～～
              </div>
            </a>
          </li>
          <li>
            <a href="https://goo.gl/maps/sEhsQxaCTXWiBGEv7" target="_blank">
              <div class="avatar">
                <div
                  class="img"
                  style="background-image: url(~@/assets/images/index/avatar03.jpg)"
                ></div>
              </div>
              <div class="num f65-36">03</div>
              <div class="stars">
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
              </div>
              <div class="content f18-16">
                環境溫暖舒適，昱秀細心的服務和優秀的技術令人安心，每個月都要來紓解一下壓力，這一次做完馬上就會想約下一次了。
              </div>
            </a>
          </li>
          <li>
            <a href="https://goo.gl/maps/KpyvDiuip9jRh5DZ8" target="_blank">
              <div class="avatar">
                <div
                  class="img"
                  style="background-image: url(~@/assets/images/index/avatar04.jpg)"
                ></div>
              </div>
              <div class="num f65-36">04</div>
              <div class="stars">
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
              </div>
              <div class="content f18-16">
                環境像家一樣溫暖，美容師像朋友一樣好聊天完全無壓力，手法溫柔專業，放鬆舒適值得推薦！
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
    <section class="reservation-section">
      <div class="container">
        <div class="flex">
          <div class="title-wrap">
            <h2 class="section-title">
              <div class="f65-36">Reservation</div>
              <div class="f30-25">預約服務</div>
              <div class="star"></div>
            </h2>
            <h3 class="f24-20">邀您一同踏上舒壓的旅程</h3>
          </div>
          <div class="arrow">
            <a href="https://liff.line.me/1661148667-2dKY7gPB?cname=hgLZx5Zmb7gj2DZE6US4hD&origin=other" target="_blank"> </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
@import '../assets/scss/index.scss';
</style>

<script class="module">
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';
import { EffectFade, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
// import './style.css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectFade, Autoplay],
    };
  },
};
// import Slick from 'vue-slick';

// export default {
//   data() {},
//   methods: {
//     // slickkv() {
//     //   $('#kv').slick({
//     //     waitForAnimate: false,
//     //     pauseOnFocus: false,
//     //     pauseOnHover: false,
//     //     swipe: false,
//     //     dots: true,
//     //     infinite: true,
//     //     speed: 500,
//     //     fade: true,
//     //     cssEase: 'linear',
//     //     autoplay: true,
//     //     autoplaySpeed: 4000,
//     //     dotsClass: 'number-dots',
//     //     customPaging() {
//     //       return `<div class="slick-page">
//     //     <div class="dot"></div>
//     //     </div>`;
//     //     },
//     //   });
//     // },
//   },
//   mounted() {},
// };
</script>

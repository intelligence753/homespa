<template>
  <section class="banner-section">
    <div class="bg"></div>
    <div class="container">
      <h1 class="section-title">
        <div class="f65-36">Service</div>
        <div class="f30-25">課程服務</div>
        <div class="star"></div>
      </h1>
      <div class="page-bg" :style="{ backgroundImage: 'url(' + products.bannerUrl + ')' }"></div>
    </div>
  </section>
  <section class="sercive-section">
    <div class="container">
      <div class="wrap">
        <h2 class="f30-25">{{ products.name }}</h2>
        <div class="diamond-line">
          <div class="diamond"></div>
        </div>
        <div class="list-wrap" v-for="course in products.courses" :key="course.name">
          <div class="list-title f18" v-if="course.courseCategory">
            <span>{{ course.courseCategory }} </span>
          </div>
          <ul class="f18-16">
            <li v-for="list in course.CategoryLists" :key="list.id">
              <router-link :to="`/course/${list.id}`">
                <div class="course__name">{{ list.courseName }}</div>
                <div class="course__duration">{{ list.duration }}分鐘</div>
                <div class="course__price">${{ list.price }}</div>
                <div class="course__link f16" href="service-detail">
                  <span v-if="list.introduction">詳細介紹</span>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
        <!-- <div class="list-wrap">
          <div class="list-title f18">
            <span> 淨化保濕 </span>
          </div>
          <ul class="f18-16">
            <li>
              <a href="service-detail">
                <div class="course__name">深層平衡潔淨毛孔護理</div>
                <div class="course__duration">90分鐘</div>
                <div class="course__price">$1,500</div>
                <div class="course__link f16" href="service-detail">
                  <span>詳細介紹</span>
                </div>
              </a>
            </li>
            <li>
              <a href="service-detail">
                <div class="course__name">嫩膚安撫泡沫熱護理</div>
                <div class="course__duration">100分鐘</div>
                <div class="course__price">$2,200</div>
                <div class="course__link f16">
                  <span>詳細介紹</span>
                </div>
              </a>
            </li>
            <li>
              <a href="service-detail">
                <div class="course__name">嫩膚安撫泡沫熱護理</div>
                <div class="course__duration">100分鐘</div>
                <div class="course__price">$2,200</div>
                <div class="course__link f16">
                  <span>詳細介紹</span>
                </div>
              </a>
            </li>
          </ul>
        </div> -->
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '../assets/scss/service.scss';
</style>

<script>
import serviceList from '../assets/json/db.json';

export default {
  data() {
    return {
      id: this.$route.query.id,
      products: {
        courses: [
          {
            CategoryLists: [],
          },
        ],
      },
    };
  },
  methods: {
    getServiceList() {
      this.products = { ...serviceList[this.id] };
    },
  },
  mounted() {
    this.getServiceList();
  },
};
</script>

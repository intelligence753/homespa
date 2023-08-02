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
  <section class="course-section">
    <div class="container">
      <div class="wrap">
        <h2 class="f30-25">{{ products.name }}</h2>
        <div class="diamond-line">
          <div class="diamond"></div>
        </div>
        <div class="list-wrap">
          <div class="list-title f18">
            <span> 淨化保濕 </span>
          </div>
        </div>
        <div class="course__name f24-20">
          {{ course.courseName }}
        </div>
        <div class="course__info">
          <!-- 課程功效 -->
          <div class="effect">
            <div class="content">
              <div class="tag f24-20">課程功效</div>
              <div class="imgwrap mo">
                 <img :src= course.courseImageUrl />
            </div>
              <ul>
              <li>
                <div class="list-title f18">
                  改善肌膚油亮，化妝不易持久
                </div>
                <div class="list-content f18">
                  皮脂的過度分泌，肌膚油亮，毛孔粗大，易形成粉刺。
                </div>
              </li>
               <li>
                <div class="list-title f18">
                  改善肌膚油亮，化妝不易持久
                </div>
                <div class="list-content f18">
                  皮脂的過度分泌，肌膚油亮，毛孔粗大，易形成粉刺。 皮脂的過度分泌，肌膚油亮，毛孔粗大，易形成粉刺。
                </div>
              </li>
              </ul>
            </div>
            <div class="imgwrap pc">
              <img :src= course.courseImageUrl />
            </div>
          </div>
           <div class="tag f24-20">課程簡介</div>
           <div class="intro f18">
            {{ course.introduction}}
           </div>
            <div class="tag f24-20">課程內容</div>
            <ul class="class-content">
              <li class="f18" v-for="item in course.content" :key="item">
                {{item}}
              </li>
            </ul>
            <div class="divider"></div>
            <div class="class-duration">
              <div class="tag f24-20">課程內容</div>
              <div class="f24-20">{{ course.duration}}分鐘</div>
            </div>
             <div class="divider"></div>
             <div class="class-price">
               <div class="tag f24-20">療程價格</div>
              <ul>
                <li>
                  <div class="list-title">單堂</div>
                  <div class="list-content">${{ course.price}}</div>
                </li>
                <li>
                  <div class="list-title">5堂</div>
                  <div class="list-content">${{ course.price_five}}</div>
                </li>
                <li>
                  <div class="list-title">10單堂</div>
                  <div class="list-content">${{ course.price_ten}}</div>
                </li>
              </ul>
             </div>
             <div class="tag f24-20">居家建議</div>
             <div class="class-advice">
              <ul>
                <li v-for="product in course.products" :key="product.link">
                <a href="">{{product.productName}}</a>
              </li>
              </ul>
              <div class="imgwrap">
                 <img :src= course.productsImageUrl />
              </div>
        </div>
      </div>
      <a class="backbtn" href="javascript:history.back();">
        <div class="circle"></div>
        <div class="arrow"></div>
        <div class="txt">BACK</div>
      </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '../assets/scss/course.scss';
</style>

<script>
import serviceList from '../assets/json/db.json';

export default {
  data() {
    return {
      id: this.$route.params.id,
      products: {},
      course: {},
    };
  },
  methods: {
    getCourse() {
      this.products = { ...serviceList[0] };
      console.log(this.course)
      this.products.courses.forEach((element) => {
        element.CategoryLists.forEach((course) => {
          if (course.id === this.id) {
            this.course = course;
          }
        });
      });
    },
  },
  mounted() {
    this.getCourse();
  },
};
</script>

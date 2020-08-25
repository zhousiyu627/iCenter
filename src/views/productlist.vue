<template>
  <div class="prodlist">
    <div class="templateContainer">
      <div class="pageTitle">
        <h1 class="pageTitle-heading">产品陈列</h1>
        <p class="pageTitle-intro">信息中心产品介绍</p>
      </div>
      <section class="as-columns as-columns--1up as-banner--top">
        <div class="row">
          <div class="column large-12 medium-12 small-12">
            <div class="as-imagegrid">
              <div class="as-imagegrid--4up">
                <div clas="row">
                  <div class="as-imagegrid-item column large-3 medium-3 small-6">
                    <a class="pad" href="javascript:;" @click="goProduct()">
                      <div class="as-imagegrid-img-cont">
                        <img
                          src="../assets/image/hlzh.png"
                          width="80"
                          alt
                          class="as-imagegrid-img"
                          height="80"
                        />
                      </div>
                      <span class="as-imagegrid-item-title">航旅纵横</span>
                    </a>
                  </div>
                  <div class="as-imagegrid-item column large-3 medium-3 small-6">
                    <a>
                      <div class="as-imagegrid-img-cont">
                        <img
                          src="../assets/image/zggh.png"
                          width="80"
                          alt
                          class="as-imagegrid-img"
                          height="80"
                        />
                      </div>
                      <span class="as-imagegrid-item-title">中国国航</span>
                    </a>
                  </div>
                  <div class="as-imagegrid-item column large-3 medium-3 small-6">
                    <a>
                      <div class="as-imagegrid-img-cont">
                        <img
                          src="../assets/image/yzz.png"
                          width="80"
                          alt
                          class="as-imagegrid-img"
                          height="80"
                        />
                      </div>
                      <span class="as-imagegrid-item-title">云执照</span>
                    </a>
                  </div>
                  <div class="as-imagegrid-item column large-3 medium-3 small-6">
                    <a>
                      <div class="as-imagegrid-img-cont">
                        <img
                          src="../assets/image/zgmh.png"
                          width="80"
                          alt
                          class="as-imagegrid-img"
                          height="80"
                        />
                      </div>
                      <span class="as-imagegrid-item-title">中国民航</span>
                    </a>
                  </div>
                  <div class="as-imagegrid-item column large-3 medium-3 small-6">
                    <a>
                      <div class="as-imagegrid-img-cont">
                        <img
                          src="../assets/image/mhs.png"
                          width="80"
                          alt
                          class="as-imagegrid-img"
                          height="80"
                        />
                      </div>
                      <span class="as-imagegrid-item-title">民航事</span>
                    </a>
                  </div>
                  <div class="as-imagegrid-item column large-3 medium-3 small-6">
                    <a>
                      <div class="as-imagegrid-img-cont">
                        <img
                          src="../assets/image/mhzf.png"
                          width="80"
                          alt
                          class="as-imagegrid-img"
                          height="80"
                        />
                      </div>
                      <span class="as-imagegrid-item-title">民航招飞</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer></footer>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goProduct() {
                let routeData= this.$router.resolve({path:'/icenter/product'});
                window.open(routeData.href, '_blank');
            }
  }
};
</script>
<style scoped>
.templateContainer {
  margin: 0 auto;
  max-width: 960px;
}
div {
  display: block;
}
.pageTitle {
  position: relative;
  box-sizing: border-box;
  margin: 0 auto;
  width: 980px;
  width: 817px;
  margin-top: 48px;
  word-wrap: break-word;
  text-align: center;
}
:lang(zh-CN) {
  font-family: "SF Pro SC", "SF Pro Text", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
}
.pageTitle-heading:lang(zh-CN) {
  font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
}
.pageTitle-heading:lang(zh) {
  line-height: 1.1461533333;
}
.pageTitle-heading {
  font-size: 48px;
  line-height: 1.0416666667;
  font-weight: 500;
  letter-spacing: 0.006em;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  margin-bottom: 0;
}
h1 {
  margin: 0;
  padding: 0;
}
.pageTitle-intro:lang(zh-CN) {
  font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
}
.pageTitle-intro {
  margin: 0 auto;
  margin-top: 16px;
  font-size: 22px;
  line-height: 1.4545454545;
  font-weight: 300;
  letter-spacing: 0.016em;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  max-width: 692px;
  max-width: 43.25rem;
}
.as-columns {
  position: relative;
  box-sizing: border-box;
  margin: 0 auto;
  width: 980px;
}
.as-columns .row {
  display: flex;
  flex-wrap: wrap;
}
.large-12 {
  width: 100%;
}
.column {
  position: relative;
  z-index: 1;
  margin: 0;
  padding: 0;
  float: left;
  min-height: 2px;
}
.as-imagegrid {
  position: relative;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding-top: 40px;
}
.as-columns .as-imagegrid .row {
  display: block;
}
.as-columns .row {
  flex-wrap: wrap;
}
.row {
  position: relative;
  z-index: 1;
}
.as-imagegrid--4up .as-imagegrid-item:nth-child(4n + 1) {
  clear: left;
}
.as-columns .column.large-3 {
  width: 24.9%;
}
.as-imagegrid-item{
  text-align: center;
  padding: 0 12px;
  margin-bottom: 48px;
}
.column {
  position: relative;
  z-index: 1;
  margin: 0;
  float: left;
  min-height: 2px;
}
.as-imagegrid a {
  color: #333;
  display: inline-block;
  outline-offset: -3px;
}
a:link,
a:visited {
  text-decoration: none;
}
.as-imagegrid .as-imagegrid-img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
  padding-bottom: 16px;
}
a > .as-imagegrid-item-title:lang(zh-CN) {
  font-family: "SF Pro SC", "SF Pro Text", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
}
a > .as-imagegrid-item-title:lang(zh) {
  letter-spacing: 0;
}
a > .as-imagegrid-item-title {
  font-size: 17px;
  line-height: 1.5294717647;
}
.pad{
    margin-bottom:4rem;
}
footer{
    height:70px;
}
</style>

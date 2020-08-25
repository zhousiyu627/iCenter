<template>
  <div class="body">
    <Header></Header>
    <!-- <Body></Body> -->
    <div class="content_index">
      <keep-alive>
        <router-view v-if="isRouterAlive" :key="key"></router-view>
      </keep-alive>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/index/header.vue";
import Footer from "../components/index/footer.vue";
// import Body from "../components/index/body.vue";

export default {
        name: "index",
        provide() { // 注册一个方法
            return {
                reload: this.reload
            }
        },
        data() {
            return {
                isRouterAlive: true
            };
        },
        computed: {
            key() {
                return this.$route.name !== undefined ? this.$route.name + new Date() : this.$route + new Date();
            }
        },
        components: {
            Header, Footer
        },
        created() {

            // console.log($('#app'));

        },
        methods: {
            reload() {
                this.isRouterAlive = false;
                this.$nextTick(function() {
                    this.isRouterAlive = true;
                    console.log('reload');
                })
            }

        },
    };
</script>

<style scoped>
    .content_index{
        width: 100%;
    }
</style>

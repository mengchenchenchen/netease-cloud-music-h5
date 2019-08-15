
<template>
  <div style="position: relative;">
    <home-header></home-header>
    <!-- <div>{{banners}}</div> -->
    <home-banners :banners="banners"></home-banners>
    <div class="fix-btn" @click="goto_example">exp</div>
  </div>
</template>

<script>
import homeHeader from "@pcomp/home/header";
import homeBanners from "@comp/banner";
import api from "@src/api";
export default {
  components: { homeHeader, homeBanners },
  props: {},
  data() {
    return {};
  },
  created() {
    api.get("/banner", { type: 1 }).then(res => {
      console.log(res);
      if (res.data.code === 200) {
        this.$store.commit("header_find/get_banners", res.data.banners);
      }
    });
  },
  methods: {
    goto_example() {
      this.$router.push("exp");
    }
  },
  computed: {
    banners() {
      return this.$store.state.header_find.banners;
    }
  }
};
</script>
<style  scoped>
.fix-btn {
  position: fixed;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-align: center;
  line-height: 50px;
  bottom: 5%;
  right: 2%;
  background-color: blueviolet;
}
</style>
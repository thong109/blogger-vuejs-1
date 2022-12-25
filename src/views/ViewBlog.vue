<template>
  <div class="post-view" v-if="currentBlog">
    <div class="container quillWrapper">
      <h2>{{ this.currentBlog[0].blogTitle }}</h2>
      <div class="infor-Author">
        <h4> <a href="https://www.facebook.com/thangneymar44" style="color: inherit;">Đăng Bởi: Trần Hữu Thắng, </a>
        </h4>
        <h4>Ngày: {{ new Date(this.currentBlog[0].blogDate).toLocaleString("en-us", { dateStyle: "long" }) }},</h4>
        <h4>Số lượt xem: {{ this.currentBlog[0].blogViews }} </h4>
      </div>
      <img :src="this.currentBlog[0].blogCoverPhoto" alt="" />
      <div class="post-content ql-editor" v-html="this.currentBlog[0].blogHTML"></div>
      <div class="tags-post">Chủ đề:
        <el-tag v-for="item in this.currentBlog[0].blogTags" :key="item">
          <router-link class="tag-group__title tag-item" :to="{ name: 'ViewBlogByTag', params: { tagName: item } }">
            {{ item }}</router-link>
        </el-tag>
      </div>
    </div>

  </div>
</template>

<script>
import "firebase/storage";
import db from "../firebase/firebaseInit";
export default {
  name: "ViewBlog",
  data() {
    return {
      currentBlog: null,
    };
  },
  async mounted() {
    this.currentBlog = await this.$store.state.blogPosts.filter((post) => {

      if (post.blogID === this.$route.params.blogid) {
        const dataBase = db.collection("blogPosts").doc(this.$route.params.blogid);

        dataBase.update({
          blogViews: post.blogViews + 1,
        });
        this.$store.dispatch("getPost");


        return post.blogID === this.$route.params.blogid
      }
    });
  },
};
</script>

<style lang="scss">
.post-view {
  h4 {
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 24px;
    margin-right: 5px;
  }

  .infor-Author {
    display: flex;
  }

  .tags-post {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .el-tag {
    margin-left: 5px;
  }

  a {
    text-decoration: none;
  }
}
</style>

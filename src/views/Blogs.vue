<template>
  <div class="blog-card-wrap">
    <el-input placeholder="Tìm bài viết..." v-model="keyWord"></el-input>

    <div class="blog-cards container">

      <div v-if="profileAdmin" class="toggle-edit">
        <span>Toggle Editing Post</span>
        <input type="checkbox" v-model="editPost" />
      </div>
      <BlogCard :post="post" v-for="(post, index) in blogPosts" :key="index" />
    </div>
  </div>
</template>

<script>
import BlogCard from "../components/BlogCard";
export default {
  name: "blogs",
  components: { BlogCard },
  data() {
    return {
      keyWord: ''
    }
  },
  computed: {
    blogPosts() {
      if (!this.keyWord) {
        return this.$store.state.blogPosts;

      }
      return this.$store.state.blogPosts.filter(post => {
        return post.blogTitle.toLowerCase().includes(this.keyWord.toLowerCase())
      })
    },
    editPost: {
      get() {
        return this.$store.state.editPost;
      },
      set(payload) {
        this.$store.commit("toggleEditPost", payload);
      },
    },
    profileAdmin() {
      return this.$store.state.profileAdmin;
    },
  },
  beforeDestroy() {
    this.$store.commit("toggleEditPost", false);
  },
};
</script>

<style lang="scss" scoped>
.el-input {
  margin: 0 auto;
  display: flex;
  padding-bottom: 10px;
}

.el-input__inner {
  border: 1px solid !important;
}

.blog-cards {
  position: relative;

  .toggle-edit {
    display: flex;
    align-items: center;
    position: absolute;
    top: -45px;
    right: 0;

    span {
      margin-right: 16px;
    }

    input[type="checkbox"] {
      position: relative;
      border: none;
      -webkit-appearance: none;
      background: #fff;
      outline: none;
      width: 80px;
      height: 30px;
      border-radius: 20px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    input[type="checkbox"]:before {
      content: "";
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 20px;
      top: 0;
      left: 0;
      background: #303030;
      transform: scale(1.1);
      transition: 750ms ease all;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    input:checked[type="checkbox"]:before {
      background: #fff;
      left: 52px;
    }
  }
}
</style>

<template>
  <div class="blog-cards container">
    <el-input
      placeholder="Enter để tìm bài viết..."
      v-model="keyWord"
    ></el-input>

    <div
      class="row2 tag-layout"
      style="transform: none; height: auto !important"
    >
      <div class="content-column col-xl-9 col-lg-8">
        <div
          class="post-column col-xl-4 col-md-6"
          :post="post"
          v-for="(post, index) in blogPosts"
          :key="index"
        >
          <div class="post tag-logseq u-shadow">
            <div class="post-wrapper">
              <div class="post-media">
                <div class="u-placeholder same-height rectangle">
                  <a class="post-image-link" href="">
                    <img
                      class="post-image u-placeholder .u-object-fit"
                      :src="post.blogCoverPhoto"
                      data-sizes="auto"
                      :alt="post.blogCoverPhotoName"
                      sizes="280px"
                    />
                  </a>
                </div>
              </div>
              <div class="post-right">
                <header class="post-header">
                  <a class="post-tag" href="/tag/logseq/">{{
                    new Date(post.blogDate).toLocaleString("en-us", {
                      dateStyle: "long",
                    })
                  }}</a>
                  <i class="el-icon-view post-view">{{ post.blogViews }}</i>

                  <router-link
                    class="link"
                    :to="{ name: 'ViewBlog', params: { blogid: post.blogID } }"
                  >
                    <h2 class="post-title">
                      <a class="post-title-link" href="#">{{
                        post.blogTitle
                      }}</a>
                    </h2>
                  </router-link>
                </header>
                <div class="post-excerpt">
                  {{ post.blogTitle }}
                </div>

                <div class="tag-list">
                  <span class="tag-group__title"> Tags: </span>

                  <el-tag
                    v-for="item in post.blogTags"
                    :key="item"
                    type="success"
                    effect="dark"
                  >
                    <router-link
                      class="tag-group__title tag-item"
                      :to="{ name: 'ViewBlogByTag', params: { tagName: item } }"
                    >
                      {{ item }}</router-link
                    >
                  </el-tag>
                </div>
                <router-link
                  class="link"
                  :to="{ name: 'ViewBlog', params: { blogid: post.blogID } }"
                >
                  Xem Chi Tiết
                  <Arrow class="arrow" />
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="sidebar-column col-xl-3 col-lg-4 hidden-xs hidden-sm hidden-md"
      >
        <div class="theiaStickySidebar">
          <aside class="widget-area" style="height: auto !important">
            <CardTag />
            <RecentPost />
          </aside>
        </div>
      </div>
    </div>
    <Pagination
      :page-size="this.pageSize"
      :blogPosts="this.dataBlogPost.length"
      @clicked-page-show-pagination="showDataPaginantion"
    />
  </div>
</template>

<script>
import Arrow from "../../assets/Icons/arrow-right-light.svg";
import RecentPost from "../RecentPost.vue";
import CardTag from "./cardTag.vue";
import Pagination from "../../components/Pagination.vue";

export default {
  name: "tags",
  data() {
    return {
      keyWord: "",
      currentPage: 1,
      pageSize: 5,
      totalPage: 1,
    };
  },
  components: {
    Arrow,
    RecentPost,
    CardTag,
    Pagination,
  },
  methods: {
    showDataPaginantion(currentPage) {
      this.currentPage = currentPage;
    },
    toNonAccentVietnamese: function(str) {
      str = str.replace(/A|Á|À|Ã|Ạ|Â|Ấ|Ầ|Ẫ|Ậ|Ă|Ắ|Ằ|Ẵ|Ặ/g, "A");
      str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
      str = str.replace(/E|É|È|Ẽ|Ẹ|Ê|Ế|Ề|Ễ|Ệ/, "E");
      str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
      str = str.replace(/I|Í|Ì|Ĩ|Ị/g, "I");
      str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
      str = str.replace(/O|Ó|Ò|Õ|Ọ|Ô|Ố|Ồ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ỡ|Ợ/g, "O");
      str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
      str = str.replace(/U|Ú|Ù|Ũ|Ụ|Ư|Ứ|Ừ|Ữ|Ự/g, "U");
      str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
      str = str.replace(/Y|Ý|Ỳ|Ỹ|Ỵ/g, "Y");
      str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
      str = str.replace(/Đ/g, "D");
      str = str.replace(/đ/g, "d");
      str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "");
      str = str.replace(/\u02C6|\u0306|\u031B/g, "");
      return str;
    },
  },
  computed: {
    postIndexStart() {
      return (this.currentPage - 1) * this.pageSize;
    },
    postIndexEnd() {
      return this.postIndexStart + this.pageSize;
    },

    dataBlogPost() {
      const dataBlogByTag = [];
      const tagName = this.$route.params.tagName;
      this.$store.state.blogPosts.filter((post) => {
        if (post.blogTags.find((tn) => tn === tagName)) {
          dataBlogByTag.push(post);
        }
      });
      return dataBlogByTag;
    },

    blogPosts() {
      if (!this.keyWord) {
        return this.dataBlogPost.slice(this.postIndexStart, this.postIndexEnd);
      }
      return this.dataBlogPost.filter((post) => {
        return this.toNonAccentVietnamese(
          post.blogTitle.toLowerCase()
        ).includes(this.toNonAccentVietnamese(this.keyWord.toLowerCase()));
      });
    },
    tagPostsCount() {
      return this.$store.state.tagsCount;
    },
    tags() {
      return [...new Set(this.$store.state.tags.flat())];
    },
  },
};
</script>

<style lang="scss" scoped>
.el-input {
  margin: 0 auto;
  display: flex;
  padding-bottom: 10px;
  padding-top: 10px;
}

.tag-layout {
  display: flex;
  justify-content: center;
  align-content: center;
}

.post-right {
  overflow: hidden;
  padding-left: 10px;
}

.tag-item {
  color: #222f3e;
}

.widget-recent {
  margin-bottom: 20px;
}

.post-header {
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
}

.post {
  background: #fff;
  flex-direction: column;
  height: 100%;
}

.post-column {
  margin-bottom: 20px;
}

.tag-list {
  max-width: 400px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.el-tag {
  border-radius: 5%;
}

.post-header {
  margin-bottom: 10px;
}

.sidebar-column {
  position: relative;
  overflow: visible;
  box-sizing: border-box;
  min-height: 1px;
  height: auto !important;
  width: 30%;
}

.content-column {
  margin-top: 20px;
}

.post-tag,
.post-view {
  display: inline-block;
  margin-bottom: 8px;
  padding: 4px 8px;
  color: white;
  font-size: 12px;
  line-height: 1;
  font-weight: 700;
  background-color: #2ec4b6;
  border-radius: 15px;
}

.post-view {
  background-color: #00b894 !important;
  margin-left: 5px !important;
}

.el-icon-view:before {
  padding-right: 2px;
}

.post-title {
  margin-bottom: 0;
  font-size: 22px;
}

a,
h1,
h2,
h3,
h4,
h5,
h6 {
  color: black;
}

.post-header {
  text-overflow: ellipsis;
  max-width: 400px;
}

.post-ti {
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.post-date,
.post-excerpt {
  max-width: 400px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  color: #aaa;
}

.post-card-tags {
  display: block;
  margin-top: 6px;
  color: #738a94;
  font-size: 0.8rem;
  line-height: 1.15em;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.post-media {
  width: 280px;
  float: left;
}

.post-image {
  max-width: 100%;
}

.post-wrapper {
  overflow: hidden;
  align-items: center;
}

.u-placeholder {
  position: relative;
  z-index: 10;
}

.u-object-fit,
.u-permalink {
  position: absolute;
  top: 0;
  left: 0;
}

.el-tag--dark.el-tag--success {
  background-color: #fdcb6e;
  border-color: #fdcb6e;
  color: #fff;
}

.u-shadow {
  overflow: hidden;
  border-radius: 3px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.02);
  transition: box-shadow 0.3s ease-in-out;
}

.tag-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

a {
  text-decoration: none;
}

.widget-tags .tag-name {
  font-size: 16px;
}

.widget-recent .recent,
.widget-tags .tag-count {
  display: flex;
  align-items: center;
}

.widget-tags .tag-count {
  justify-content: center;
  min-width: 24px;
  height: 24px;
  color: #fff;
  font-size: 12px;
  background-color: #2ec4b6;
  border-radius: 50%;
  font-weight: 700;
}

.widget-recent .recent,
.widget-tags .tag-count {
  display: flex;
  align-items: center;
}

.widget-recent .post-header {
  overflow: hidden;
  margin-bottom: 0;
}

.post-header {
  margin-bottom: 10px;
}

.widget-recent .post-title {
  overflow: hidden;
  font-size: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.post-title {
  margin-bottom: 0;
  font-size: 22px;
}

.widget-recent .post-date {
  margin-top: 3px;
}

.post-date,
.post-excerpt {
  color: #aaa;
}

.widget + .widget {
  margin-top: 30px;
}

.theiaStickySidebar {
  margin-top: 20px;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.el-tag {
  height: auto;
  line-height: inherit;
  padding: 5px;
  border-radius: 6px;
}

@media (min-width: 320px) and (max-width: 575.98px) {
  .tag-layout {
    flex-direction: column-reverse;
    padding: 10px;
  }

  .post-header {
    max-width: 100%;
  }

  .sidebar-column {
    width: 100%;
  }

  .widget-recent .post-title {
    white-space: break-spaces;
  }

  .post-wrapper {
    display: flex;
    flex-direction: column;
  }

  .post-right {
    padding-left: 0;
    padding: 10px;
  }

  .post-header {
    flex-direction: column;
  }
}

@media (min-width: 576px) and (max-width: 767.98px) {
  header nav {
    flex-direction: column;
  }

  .tag-layout {
    flex-direction: column-reverse;
    padding: 10px;
  }

  .post-header {
    max-width: 100%;
  }

  .sidebar-column {
    width: 100%;
  }

  .widget-recent .post-title {
    white-space: break-spaces;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .tag-layout {
    flex-direction: column-reverse;
    padding: 10px;
  }

  .post-header {
    max-width: 100%;
  }

  .sidebar-column {
    width: 100%;
  }

  header nav {
    flex-direction: column !important;
  }

  header nav .branding .header {
    font-size: 15px;
  }
}

@media (min-width: 992px) and (max-width: 1199.98px) {
  .tag-layout {
    flex-direction: column-reverse;
    padding: 15px;
  }

  .post-header {
    max-width: 100%;
  }

  .sidebar-column {
    width: 100%;
  }
}

@media (min-width: 1200px) {
}
</style>

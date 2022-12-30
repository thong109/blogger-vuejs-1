<template>
    <div class="widget widget-recent u-shadow">
        <h4 class="widget-title">Bài Viết Gần Đây</h4>
        <div class="recent-posts">
            <article class="recent" :post="post" v-for="(post, index) in blogPosts" :key="index">
                <header class="post-header">


                    <div class="menu-left">
                        <img :src="post.blogCoverPhoto" alt="" width="25%" />
                        <div class="box-info-post">
                            <h5 class="post-title">
                                <router-link class="link" :to="{ name: 'ViewBlog', params: { blogid: post.blogID } }">
                                    <span class="post-title-link">{{ post.blogTitle }}</span>
                                </router-link>
                            </h5>
                            <time class="post-date">
                                {{ new Date(post.blogDate).toLocaleString("en-us", { dateStyle: "long" }) }}
                            </time>
                        </div>
                    </div>



                </header>
            </article>

        </div>
    </div>
</template>

<script>

export default {
    name: "Home",
    data() {
        return {

        };
    },
    computed: {
        blogPosts() {
            return this.$store.state.blogPosts.slice(0, 5);
        },


    },

};
</script>

<style lang="scss" scoped>
a,
h1,
h2,
h3,
h4,
h5,
h6 {
    color: black;
}
.box-info-post{
    overflow: hidden;
    margin-left: 20px;
}
.menu-left{
  display: flex;
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

a {
    text-decoration: none;
}


.widget-recent .post-title {
    overflow: hidden;
    font-size: 16px;
    text-overflow: ellipsis;
    // white-space: nowrap;
}

.post-header {
    display: flex;
}

.post-title {
    margin-bottom: 0;
    font-size: 22px;
}

.post-header {
    margin-top: 10px;
}

.widget-recent .post-date {
    margin-top: 3px;
}

.post-date,
.post-excerpt {
    color: #aaa;
}

.widget+.widget {
    margin-top: 30px;
}

@media (min-width: 320px) and (max-width: 575.98px) {
  .tag-layout{
    flex-direction: column-reverse;
    padding: 10px;
  }
  .post-header{
    max-width: 100%;
  }
  .sidebar-column{
    width: 100%;
  }
  .widget-recent .post-title{
    white-space: break-spaces;
  }
  .post-wrapper{
    display: flex;
    flex-direction: column;
  }
  .post-right{
    padding-left: 0;
    padding: 10px;
  }
  .post-header{
    flex-direction: column;
  }
}

@media (min-width: 576px) and (max-width: 767.98px) {
 }

@media (min-width: 768px) and (max-width: 991.98px) {
 }

@media (min-width: 992px) and (max-width: 1199.98px) {
 }

@media (min-width: 1200px) { }
</style>

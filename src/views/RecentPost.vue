<template>
    <div class="widget widget-recent u-shadow">
        <h4 class="widget-title">Bài Viết Gần Đây</h4>
        <div class="recent-posts">
            <article class="recent" :post="post" v-for="(post, index) in blogPosts" :key="index">
                <header class="post-header">


                    <div style="display: flex;">
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
    margin-left: 20px;
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
    white-space: nowrap;
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
</style>
  
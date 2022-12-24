<template>
    <div class="widget widget-tags u-shadow" style="height: auto !important">
        <h4 class="widget-title">Tags</h4>
        <div class="tag-feed">
            <div class="tag" v-for="item in tags" :key="item">
                <router-link class="tag-link" :to="{ name: 'ViewBlogByTag', params: { tagName: item } }">

                    <span class="tag-name">{{ item }}</span>
                    <span class="tag-count">{{ tagPostsCount[item] }}</span>
                </router-link>

            </div>

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
.tag-layout {
    display: flex;
    justify-content: center;
    align-content: center;
}



.widget-recent {
    margin-bottom: 20px;
}

.tag-list {
    max-width: 400px;
    margin-top: 10px;
    margin-bottom: 10px;
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









.u-object-fit,
.u-permalink {
    position: absolute;
    top: 0;
    left: 0;
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
  
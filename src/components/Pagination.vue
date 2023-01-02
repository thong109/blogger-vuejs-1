<template>
  <div class="block">
    <el-pagination
      @current-change="handleCurrentChange"
      layout="prev, pager, next"
      :total="blogPosts"
      :page-size="pageSize"
      background
    >
    </el-pagination>
  </div>
</template>

<script>
import "firebase/auth";

export default {
  name: "pagination",
  props: ["blogPosts", "pageSize"],

  methods: {
    handleCurrentChange(index) {
        window.scrollTo({
  top: 100,
  left: 100,
  behavior: 'smooth'
});      this.$emit("clicked-page-show-pagination", index);
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.el-pagination {
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
}
</style>

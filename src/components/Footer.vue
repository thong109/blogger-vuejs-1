<template>
  <footer>
    <div class="container">
      <div class="left">

        <div class="col-2">
          <ul>
            <li>
              <a href="https://www.facebook.com/groups/1011713702919105" target="_blank">👉Nhóm: Đổi mới dạy học bằng
                UDCNTT</a>
            </li>
            <li>
              <a href="https://facebook.com/thangneymar44" target="_blank">👉FB Ad:  Trần Hữu Thắng</a>
            </li>
            <li>
              <a href="https://www.facebook.com/ungdungcnttvaodayhocvaquanly" target="_blank">👉FANPAGE: ỨNG DỤNG CNTT</a>
            </li>
            <li>
              <a href="#" target="_blank">👉zalo ☎: 037 296 4842</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="right">
        <p>Copyright 2022 | Trần Hữu Thắng </p>
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  name: "footer-vue",
  components: {

  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    admin() {
      return this.$store.state.profileAdmin;
    },
  },
};
</script>

<style lang="scss" scoped>
footer {
  margin-top: auto;
  padding: 100px 25px;
  background-color: #303030;

  a {
    color: white;
    text-decoration: none;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media (min-width: 800px) {
      flex-direction: row;
      gap: 0px;
    }

    >div {
      display: flex;
      flex: 1;
    }

    .left {
      gap: 32px;
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;

      @media (min-width: 800px) {
        flex-direction: row;
        align-items: initial;
        gap: 0;
      }

      .header {
        text-align: center;
        font-size: 24px;
        color: #fff;
        margin-bottom: 16px;
        text-decoration: none;
        font-weight: 600;

        @media (min-width: 800px) {
          text-align: initial;
        }
      }

      ul {
        gap: 16px;
        list-style: none;
        display: flex;
      }

      .col-1,
      .col-2 {
        gap: 32px;
        display: flex;
        flex: 1;

        @media (min-width: 800px) {
          gap: 0;
        }
      }

      .col-1 {
        flex-direction: column;

        h2 {
          text-align: center;

          @media (min-width: 800px) {
            text-align: initial;
          }
        }

        ul {
          margin-top: auto;

          li {
            display: flex;
            align-items: center;

            .svg-icon {
              width: 24px;
              height: auto;
              color: #fff;
            }
          }
        }
      }

      .col-2 {
        ul {
          height: 100%;
          justify-content: center;
          flex-direction: row;
          flex-wrap: wrap;

          @media (min-width: 800px) {
            flex-direction: column;
          }

          .link {
            font-size: 16px;
            font-weight: 500;
            color: #fff;
            text-decoration: none;
          }
        }
      }
    }

    .right {
      gap: 32px;
      color: #fff;
      align-items: center;
      flex-direction: column;

      @media (min-width: 800px) {
        align-items: flex-end;
        gap: 0;
      }
    }

    p {
      margin-top: auto;
    }
  }
}
</style>

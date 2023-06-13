<template>
  <div class="footer">
    <div class="container footer_container flex-center">
      <div class="logo">
        <img src="../assets/images/footer-logo.png" alt="" />
      </div>
      <div class="txt">
        <p>中国科学院计算机网络信息中心 版权所有 京ICP备09112257号-83</p>
        <p>电话：010-58812560 Email：nali@cnic.cn</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.footer {
  padding-top: 18px;
  padding-bottom: 18px;
  background: #1d242f;

  .footer_container {
    .logo {
      width: 61px;
      height: 45px;

      img {
        width: 100%;
      }
    }

    .txt {
      margin-left: 36px;
      font-size: 16px;
      color: #ffffff;

      p {
        line-height: 26px;
      }
    }
  }
}
</style>
<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Manufacturing Multi-Organs (MM)</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="routePush('/organs')">Organs</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="routePush('/models')">Models</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Materials</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://gulab.info/about/">About</a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-light" onmouseover="this.style.backgroundColor='black';" onmouseout="this.style.backgroundColor='';"
                      type="submit" style="color:white">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
    <div style="position: relative">
      <div class="card mb-3" style="margin-top:8%;margin-left: 3%; width: 46%; float:left">
        <a @click="routePush('/print')"><img src="../assets/images/models.png" style='width:89.8%' class="card-img-top" alt="..."></a>
        <div class="card-body">
          <h3 class="card-title">Optimised printing parameters prediction model</h3>
          <p class="card-text">We can provide optimised parameter for specific printed organs.</p>
          <p class="card-text"><small class="text-muted">Algorithm: GBDT (Gradient Boosting Decision Tree)</small></p>
        </div>
      </div>
      <div class="card mb-3" style="margin-top:8%; margin-right:3%; width:46%;float: right">
        <a @click="routePush('/predict')"><img src="../assets/images/xgboost.png" class="card-img-top" alt="..."></a>
        <div class="card-body">
          <h3 class="card-title">Liver functional indexes analysis and prediction Model</h3>
          <p class="card-text">The secretion of albumin and urea of in vitro liver can be analysed and predicted as you wish.</p>
          <p class="card-text"><small class="text-muted">Algorithm: XGBoost（eXtreme Gradient Boosting）</small></p>
        </div>
      </div>
      <div style="width:100%;">
        <footer class="py-4 bg-light mt-auto" style="text-align: center; padding-left:3%; width:100%; position: fixed; bottom: 0">
          <div class="container-fluid px-4">
            <div class="d-flex align-items-center justify-content-between small">
              <div class="text-muted">Copyright &copy; Group of Bioinspired Engineering 2023</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'models',
  methods:{
    routePush(path){
      this.$router.push({ path:path })
    }
  }
}
</script>

<style lang="less" scoped>
@import "../assets/css/carousel.css";
@import "../assets/css/bootstrap.min.css";

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
.bd-placeholder-a{
  color: initial;
  text-decoration: none;
}
.bd-placeholder-a:hover{
  color: initial;
  text-decoration:underline
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.intro{
  font-size: 24px;
  font-weight: bold;
  color: #1a1a1a;
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  max-width: 800px;
  margin: 20px auto;
}
.img-human{
  display: block;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  object-fit: contain;
  object-position: center;
}

.alert-custom {
  background-color:#e8f9fa;
  color: #0c63e4;
  font-size: 22px;
  font-weight: bold; /* 浅蓝色背景颜色 */
}

</style>

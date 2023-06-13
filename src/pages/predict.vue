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
                <a class="nav-link" @click="routePush('/materials')">Materials</a>
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

    <div class="container-fluid" style="margin-top: 5%; margin-left:2%; width: 30%; height: 30%; float:left">
      <p style="text-align: center"><img src="../assets/images/cell.svg" alt='cell' style="width:50%;"></p>

      <div class="mb-3">
        <label for="basic-url" class="form-label">Cell Parameters</label>
        <div class="input-group">
          <span class="input-group-text" >Cell</span>
          <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
        </div>
        <div class="form-text">The type of the cells.</div>
      </div>

      <div class="input-group mb-3">
        <div class="input-group">
          <span class="input-group-text">Cell Seeding</span>
          <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
          <span class="input-group-text">(10^6)</span>
        </div>
        <div class="form-text">The number of seeded cells.</div>
      </div>

    </div>

    <div class="container-fluid" style="margin-top: 5%; margin-left:3%; width: 30%; height: 30%; float:left">
      <p style="text-align: center "><img src="../assets/images/material.svg" alt='cell' style="width:50%"></p>

      <div class="mb-3">
        <label for="basic-url" class="form-label">Material Parameters</label>
        <div class="input-group">
          <span class="input-group-text" >Scaffold</span>
          <input type="text" class="form-control" aria-describedby="basic-addon3">
        </div>
        <div class="form-text">The material of the scaffold.</div>
      </div>

      <div class="input-group mb-3">
        <div class="input-group">
          <span class="input-group-text">Scaffold Concentration</span>
          <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
          <span class="input-group-text">(wt%)</span>
        </div>
        <div class="form-text">The concentration of the material.</div>
      </div>

      <div class="input-group mb-3">
        <div class="input-group">
          <span class="input-group-text">Pore size</span>
          <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
          <span class="input-group-text">(μm)</span>
        </div>
        <div class="form-text">The pore size of the scaffold.</div>
      </div>

      <div class="input-group mb-3">
        <div class="input-group">
          <span class="input-group-text">Thick</span>
          <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
          <span class="input-group-text">(mm)</span>
        </div>
        <div class="form-text">The thick of the scaffold.</div>
      </div>

      <div class="input-group mb-3">
        <div class="input-group">
          <span class="input-group-text">Diameter</span>
          <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
          <span class="input-group-text">(mm)</span>
        </div>
        <div class="form-text">The diameter of the scaffold.</div>
      </div>

      <div class="input-group mb-3">
        <div class="input-group">
          <span class="input-group-text">Porosity</span>
          <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
          <span class="input-group-text">(%)</span>
        </div>
        <div class="form-text">The porosity of the scaffold.</div>
      </div>

    </div>

    <div class="container-fluid" style="margin-top: 5%; margin-left:3%; width: 30%; height: 30%; float:left">
      <p style="text-align: center;"><img src="../assets/images/chip.svg" alt='cell' style="width:50%"></p>

      <div class="mb-3">
        <label for="basic-url" class="form-label">Culture Platform Parameters</label>
        <div class="input-group">
          <span class="input-group-text" >Design</span>
          <input type="text" class="form-control"  aria-describedby="basic-addon3">
        </div>
        <div class="form-text">The approach of fabricating the scaffold.</div>
      </div>

      <div class="mb-3">
        <div class="input-group">
          <span class="input-group-text" >Desi-para1</span>
          <input type="text" class="form-control"  aria-describedby="basic-addon3">
        </div>
        <div class="form-text">The first parameter of a specific approach.</div>
      </div>

      <div class="mb-3">
        <div class="input-group">
          <span class="input-group-text" >Desi-para2</span>
          <input type="text" class="form-control"  aria-describedby="basic-addon3">
        </div>
        <div class="form-text">The second parameter of a specific approach.</div>
      </div>

      <div class="mb-3">
        <div class="input-group">
          <span class="input-group-text" >Desi-para3</span>
          <input type="text" class="form-control"  aria-describedby="basic-addon3">
        </div>
        <div class="form-text">The third parameter of a specific approach.</div>
      </div>

    </div>



    <!-- 多个相同class的div使用float:left选项  可以实现无缝连接 !-->
    <div class="container-fluid" style="float:left">
      <p style="text-align: center; margin-top:2%"><button type="button" class="btn btn-primary">Submit</button></p>
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
</template>

<script>
export default {
  name: 'predict',
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

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>

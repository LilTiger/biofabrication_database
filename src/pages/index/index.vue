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

<body>
<main>

<!--carousel-->
  <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
          <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><image width="100%"  xlink:href='../../assets/images/organ.gif' /></svg>

        <div class="container">
          <div class="carousel-caption text-start">
            <h1>Statistics and analysis of organ fabrication research.</h1>
            <p>We aim to establish a mutual-supported platform for biofabrication researchers across the world.</p>
            <p><a class="btn btn-lg btn-primary" @click="routePush('/organs')">Learn more</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><image xlink:href='../../assets/images/model.gif' width="100%"/></svg>

        <div class="container">
          <div class="carousel-caption">
            <h1>Helpful if you want to construct organs/tissues.</h1>
            <p>We can predict secretion capability by in silico experiments (Liver only).</p>
            <p><a class="btn btn-lg btn-primary" href="/predict">Try it</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><image xlink:href='../../assets/images/material.gif' width="100%"/></svg>

        <div class="container">
          <div class="carousel-caption text-end">
            <h1>Details about biomaterilas and the interaction with fabricated organs/tissues.</h1>
            <p>There are amounts of biomaterials-dominated data and the application areas.</p>
            <p><a class="btn btn-lg btn-primary" href="/materials">See details</a></p>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>


<!--container-->
  <div class="container">

    <div class="row">
     <div class="intro" style="width:100%;border-radius:10px">
       The Manufacturing Multi-organs (MM) database aims to deliver vital biofabrication knowledge.<br>
       <span style="font-size: 20px; font-weight: normal">It demonstrates detailed statistics and analysis based on extensive relevant studies. Furthermore, it also includes user-friendly
       machine learning tools to optimise parameters and predict biological indexes during in vitro organs construction.</span>
     </div>

      <div class="alert alert-custom d-inline-flex align-items-center" style="border-radius:10px" role="alert">
    <i class="bi bi-info-circle-fill me-2"></i>
    <div class="col text-center" >
      Click on the organ in the human body for more information:
    </div>
  </div>

    </div>
    <!-- Three columns of text below the carousel -->
    <div class="card" style="box-shadow: 5px 5px 15px rgba(0,0,0,0.1); border-radius: 10px;">
 <h4 class="card-header" style="font-weight: bold;">
   <i class="fa-solid fa-person" style="margin-right:1%"></i>Human body diagram
  </h4>
    <div class="row">

        <div class="img-human" style="text-align: center;">
            <img class="card-img-top" src="../../assets/images/human.png" style="height:80%; width:80%;" alt="1" usemap="#example-map">

            <map name="example-map">
              <area shape="circle" coords="180,100,80" href="javascript:void(0);" @click="enterPage('Pharynx And Larynx')" alt="Clickable Area">
              <area shape="circle" coords="820,480,70" href="javascript:void(0);" @click="enterPage('Heart')" alt="Clickable Area">
              <area shape="circle" coords="240,240,70" href="javascript:void(0);" @click="enterPage('lung')" alt="Clickable Area">
              <area shape="circle" coords="120,350,90" href="javascript:void(0);" @click="enterPage('Liver')" alt="Clickable Area">
              <area shape="circle" coords="210,510,80" href="javascript:void(0);" @click="enterPage('KIDNEY')" alt="Clickable Area">
              <area shape="circle" coords="110,670,80" href="javascript:void(0);" @click="enterPage('PANCREAS')" alt="Clickable Area">
              <area shape="circle" coords="225,830,85" href="javascript:void(0);" @click="enterPage('Uninany Bladder')" alt="Clickable Area">
              <area shape="circle" coords="845,90,85"  href="javascript:void(0);" @click="enterPage('BRAIN')" alt="Clickable Area">
              <area shape="circle" coords="800,250,70" href="javascript:void(0);" @click="enterPage('THYROID GLAND')" alt="Clickable Area">
              <area shape="circle" coords="915,360,70" href="javascript:void(0);" @click="enterPage('THYMUS GLAND')" alt="Clickable Area">
              <area shape="circle" coords="930,590,80" href="javascript:void(0);" @click="enterPage('STOMACH')" alt="Clickable Area">
              <area shape="circle" coords="877,757,82" href="javascript:void(0);" @click="enterPage('INTESTINES')" alt="Clickable Area">
              <area shape="circle" coords="622,838,65" href="javascript:void(0);" @click="enterPage('REPRODUCTIVE SYSTEM')" alt="Clickable Area">
            </map>

        </div>
       </div>
      </div>
    <!-- START THE FEATURETTES -->

    <hr class="featurette-divider">
<!--statistics-->
  <div class="card" style="box-shadow: 5px 5px 15px rgba(0,0,0,0.1); border-radius: 10px;">
  <h4 class="card-header" style="font-weight: bold;">
    <i class="fa-solid fa-chart-simple" style="margin-right:1%"></i>Statistics
  </h4>
  <div class="card-body" style="padding: 36px;">
    <div class="row justify-content-center">
      <div class="col-auto text-center">
          <div style="width: 160px; margin: auto;"><i class="fa-solid fa-lungs fa-7x" style="margin:20px;color:darkred"></i></div>
        <p class="h5 ms-3 mb-0" style="font-size: 26px; font-family: Arial, sans-serif;"><strong>37 </strong>Human Organs</p>
      </div>

      <div class="col-auto text-center">
          <div style="width: 130px; margin: auto;"><i class="fa-solid fa-microchip fa-7x" style="margin:20px"></i></div>
        <p class="h5 ms-3 mb-0" style="font-size: 26px; font-family: Arial, sans-serif;"><strong>4 </strong>Strategies</p>
      </div>

      <div class="col-auto text-center">
          <div style="width: 160px; margin: auto;"><i class="fa-solid fa-flask-vial fa-7x" style="margin:20px;color:green"></i></div>
        <p class="h5 ms-3 mb-0" style="font-size: 26px; font-family: Arial, sans-serif;"><strong>64 </strong>Biomaterials</p>
      </div>

      <div class="col-auto text-center">
          <div style="width: 130px; margin: auto;"><i class="fa-solid fa-vial-virus fa-7x" style="margin:20px;color:lightseagreen"></i></div>
        <p class="h5 ms-3 mb-0" style="font-size: 26px; font-family: Arial, sans-serif;"><strong>124 </strong>Cells</p>
      </div>

<!--      若添加元素 复制下列注释部分即可-->
<!--      <div class="col-auto text-center">-->
<!--          <div style="width: 80px; margin: auto;"><i class="fas fa-chart-area fa-4x"></i></div>-->
<!--          <p class="h5 ms-3 mb-0" style="font-size: 22px; font-family: Arial, sans-serif;">Tendency</p>-->
<!--      </div>-->

    </div>
  </div>
</div>

<!--    feature-->
<div class="row">

  <div class="col-4 d-flex">
  <a class="text-decoration-none text-dark" style="cursor: pointer;" @click="routePush('/organs')"><div class="card flex-fill zoom-card" style="margin-top:8%;box-shadow: 5px 5px 15px rgba(0,0,0,0.1); border-radius: 10px;">
    <img class="card-img-top" src="../../assets/images/feature-1.png" alt="Card image cap">
    <div class="card-body">
      <h4 class="card-title" style="font-weight: bold">Organs</h4>
      <p class="card-text" style="font-size:17px">We offer statistical data on bioelements and knowledge analysis for various human organs from published papers.</p>
    </div>
  </div></a>
    </div>

  <div class="col-4 d-flex">
  <a class="text-decoration-none text-dark" style="cursor: pointer;" @click="routePush('/models')"><div class="card flex-fill zoom-card" style="margin-top:8%;box-shadow: 5px 5px 15px rgba(0,0,0,0.1); border-radius: 10px;">
    <img class="card-img-top" src="../../assets/images/feature-2.png" alt="Card image cap">
    <div class="card-body">
      <h4 class="card-title" style="font-weight: bold">Models</h4>
      <p class="card-text" style="font-size:17px">You can achieve optimized printing parameters and predict functional indices during the process of organ construction.</p>
    </div>
  </div></a>
  </div>

  <div class="col-4 d-flex">
  <a class="text-decoration-none text-dark" style="cursor: pointer;" @click="routePush('/materials')"><div class="card flex-fill zoom-card" style="margin-top:8%;box-shadow: 5px 5px 15px rgba(0,0,0,0.1); border-radius: 10px;">
    <img class="card-img-top" src="../../assets/images/feature-3.png" alt="Card image cap">
    <div class="card-body">
      <h4 class="card-title" style="font-weight: bold">Materials</h4>
      <p class="card-text" style="font-size:17px">Comprehensive knowledge mapping of properties and functionalities for biomaterials utilized in biofabrication.</p>
    </div>
  </div></a>
  </div>

</div>

<!--knowledge analysis-->
<div class="card" style="margin-top:2.5%;box-shadow: 5px 5px 15px rgba(0,0,0,0.1); border-radius: 10px;">
  <h4 class="card-header" style="font-weight: bold;">
    <i class="fa-solid fa-magnifying-glass-chart" style="margin-right:1%"></i>Knowledge service
  </h4>
  <div class="card-body" style="padding: 36px;">
    <div class="row row-cols-2 g-4">
      <div class="col">
        <a style="cursor: pointer;" @click="routePush('/trend')" class="d-flex align-items-center text-decoration-none text-dark">
          <div style="width: 80px;"><i class="fas fa-chart-area fa-4x"></i></div>
          <p class="h5 ms-3 mb-0" style="font-size: 22px; font-family: Arial, sans-serif;">Tendency in the development of Biofabrication</p>
        </a>
      </div>
       <div class="col">
        <a  style="cursor: pointer;" @click="routePush('/cooperation')" class="d-flex align-items-center text-decoration-none text-dark">
          <div style="width: 80px;"><i class="fas fa-users fa-4x"></i></div>
          <p class="h5 ms-3 mb-0" style="font-size: 22px; font-family: Arial, sans-serif;">International cooperation among countries, institutions and topics</p>
        </a>
      </div>
      <div class="col">
        <a style="cursor: pointer;" @click="routePush('/hostpost')" class="d-flex align-items-center text-decoration-none text-dark">
          <div style="width: 80px;"><i class="fa fa-book fa-fw fa-4x"></i></div>
          <p class="h5 ms-3 mb-0" style="font-size: 22px; font-family: Arial, sans-serif;">Research topics and distribution in Biofabrication</p>
        </a>
      </div>
      <div class="col">
        <a style="cursor: pointer;" @click="routePush('/organFunction')" class="d-flex align-items-center text-decoration-none text-dark">
          <div style="width: 80px;"><i class="fas fa-chart-bar fa-4x"></i></div>
          <p class="h5 ms-3 mb-0" style="font-size: 22px; font-family: Arial, sans-serif;">Knowledge mapping of liver function</p>
        </a>
      </div>
    </div>
  </div>
</div>

<div class="row d-flex" style="align-items: stretch;">
  <!--    Resources-->
  <div class="col">
    <div class="card h-100" style="margin-top:3%; box-shadow: 5px 5px 15px rgba(0,0,0,0.1); border-radius: 10px;">
        <h4 class="card-header" style="font-weight: bold;">
            <i class="fa-solid fa-person-chalkboard" style="margin-right:1%"></i>Resources
        </h4>
        <div class="card-body" style="padding: 36px;">
            <div class="row align-items-center mb-4">
                <div class="col-md-5">
                    <div style="font-size: 20px; font-weight: bold; text-align: justify; color: #2C3E50;">
                        <i class="fas fa-vial" style="margin-right:1%"></i> Can 3D printing construct organs?
                    </div>
                </div>
                <div class="col-md-7 text-center position-relative">
                    <a href="https://www.bilibili.com/video/BV1pB4y1R78U/?spm_id_from=333.999.0.0&vd_source=04b0d3c4eb6fde1450654826d8335e08" target="_blank">
                        <video width="98%" loop autoplay muted style="border-radius: 10px; box-shadow: 0px 3px 6px rgba(0,0,0,0.3);">
                            <source src="../../assets/images/bioprinting.mp4" type="video/mp4">
                        </video>
                      <!-- add a bilibili icon-->
                        <img src="../../assets/images/bilibili.png" alt="Bilibili" style="position: absolute; top: 2%; left: 7%; width: 30px;">
                    </a>
                </div>
            </div>
            <div class="row align-items-center">
                <div class="col-md-5">
                    <div style="font-size: 20px; font-weight: bold; text-align: justify; color: #2C3E50;">
                        <i class="fas fa-laugh" style="margin-right:1%"></i> Funny 3D printing
                    </div>
                </div>
                <div class="col-md-7 text-center position-relative">
                    <a href="https://www.bilibili.com/video/BV12U4y11717/?spm_id_from=333.999.0.0&vd_source=04b0d3c4eb6fde1450654826d8335e08" target="_blank">
                        <video width="98%" loop autoplay muted style="border-radius: 10px; box-shadow: 0px 3px 6px rgba(0,0,0,0.3);">
                            <source src="../../assets/images/fun-printing.mp4" type="video/mp4">
                        </video>
                       <!-- add a bilibili icon-->
                        <img src="../../assets/images/bilibili.png" alt="Bilibili" style="position: absolute; top: 2%; left: 7%; width: 30px;">
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<!--  links-->
   <div class="col">
      <div class="card h-100" style="margin-top:3%; box-shadow: 5px 5px 15px rgba(0,0,0,0.1); border-radius: 10px;">
        <h4 class="card-header" style="font-weight: bold;">
          <i class="fa-solid fa-link" style="margin-right:1%"></i>Links
        </h4>
        <div class="card-body" style="padding: 36px;">
          <div class="row row-cols-2 g-4">
            <div class="col d-flex align-items-center justify-content-center">
              <a href="https://pubchem.ncbi.nlm.nih.gov/" target="_blank"><img src="../../assets/images/PubChem.png" alt="image description" style="width: 100%; height: auto;"/></a>
            </div>
             <div class="col d-flex align-items-center justify-content-center">
              <a href="https://biomatdb.eu/" target="_blank"><img src="../../assets/images/BIOMATDB.png" alt="image description" style="width: 100%; height: auto;"/></a>
            </div>
            <div class="col d-flex align-items-center justify-content-center">
              <a href="https://data.humancellatlas.org/" target="_blank"><img src="../../assets/images/HCA.png" alt="image description" style="width: 100%; height: auto;"/></a>
            </div>
            <div class="col d-flex align-items-center justify-content-center">
              <a href="https://hpscreg.eu/" target="_blank"><img src="../../assets/images/hPSC.png" alt="image description" style="width: 100%; height: auto;"/></a>
            </div>
            <div class="col d-flex align-items-center justify-content-center">
              <a href="https://www.allevi3d.com/" target="_blank"><img src="../../assets/images/Allevi.png" alt="image description" style="width: 100%; height: auto;"/></a>
            </div>
             <div class="col d-flex align-items-center justify-content-center">
              <a href="https://www.cellink.com/" target="_blank"><img src="../../assets/images/celllink.png" alt="image description" style="width: 100%; height: auto;"/></a>
            </div>
             <div class="col d-flex align-items-center justify-content-center">
              <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank"><img src="../../assets/images/PubMed.png" alt="image description" style="width: 100%; height: auto;"/></a>
            </div>
            <div class="col d-flex align-items-center justify-content-center">
              <a href="https://www.ncbi.nlm.nih.gov/" target="_blank"><img src="../../assets/images/NCBI.png" alt="image description" style="width: 100%; height: auto;"/></a>
            </div>
          </div>
        </div>
      </div>
  </div>
</div>

    <hr class="featurette-divider" style="margin-top:3%">

    <!-- /END THE FEATURETTES -->

  <!-- FOOTER -->
  <footer class="container">
<!--    <p class="float-end"><a href="#">Back to top</a></p>-->
      <div style="display: flex">

        <div style="margin-left: 1%">
          <img src="../../assets/images/CAS.png" style="width:150px">
        </div>
        <div style="margin-left: 1%">
          <img src="../../assets/images/stemcell.png" style="width:150px">
        </div>
         <div style="margin-left: 2%">
          <img src="../../assets/images/ioz.png" style="width:150px">
        </div>
         <div style="margin-left: 2%; margin-top:1.5%">
          <img src="../../assets/images/dake.png" style="width:150px">
        </div>


      <div style="margin-left: 3%">
        <h3><strong>Contact</strong></h3>
        <p><strong>Address:</strong> #3 Datun Road, Chaoyang District, Beijing 100101, P.R.China</p>
      <p><strong>Phone:</strong> +86-10-64807315</p>
      <p><strong>Email:</strong> qgu@ioz.ac.cn</p>
      </div>
      <div style="margin-left: 2%">
        <h3><strong>Follow us</strong></h3>
          <img style="width:auto; height:132px; " src="../../assets/images/follow.png">
      </div>
        <div class="text-muted" style=" position:absolute; bottom: 0.5%">Copyright &copy; Group of Bioinspired Engineering 2023</div>
      </div>
  </footer>
  </div>
</main>
</body>
</div>

</template>

<script>
import '../../assets/js/jquery-3.6.0.min.js'
import '../../assets/js/bootstrap.min.js'
import '../../assets/js/bootstrap.bundle.min.js'
import "../../assets/js/font-awesome_6.4.0_js_all.min.js"

export default {
  name: 'index',
  methods:{
    enterPage(organ){
      this.$router.push({path:'/organs', query:{s:organ} })
    },
    routePush(path){
      this.$router.push({ path:path })
    }
  }
}
</script>

<style lang="less" scoped>

      body{
      position: relative;
      }
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

      .intro{
        font-size: 24px;
        font-weight: bold;
        color: #1a1a1a;
        background-color: #f2f2f2;
        padding: 20px;
        border-radius: 5px;
        text-align: center;
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

      .zoom-card{
        transition: transform .2s; /* Animation */
      }

      .zoom-card:hover {
        transform: scale(1.1); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
      }

@import "../../assets/css/carousel.css";
@import "../../assets/css/bootstrap.min.css";


</style>

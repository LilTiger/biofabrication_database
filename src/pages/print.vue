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

    <div style="display: flex;margin-top:6%">
      <img src="../assets/images/organs.jpg" style="margin-left:7%;width: 40%;">
      <img src="../assets/images/palm.png" style="margin-left:5%;width: 40%;">
    </div>

    <div class="container-fluid" style="margin-top: 2.5%; width: 500px; height: 500px;">
      <p style="font-size: x-large">What do you want to print?</p>
      <select class="form-select form-select-lg mb-3" aria-label="Default select example">
        <option selected>Please select</option>
        <option value="1">Bone</option>
        <option value="2">Joint</option>
        <option value="3">Muscle</option>
        <option value="4">Biliary Tract</option>
        <option value="5">Esophagus</option>
        <option value="6">Intestines</option>
        <option value="7">Liver</option>
        <option value="8">Pancreas</option>
        <option value="9">Mouth</option>
        <option value="10">Stomach</option>
        <option value="11">Lung</option>
        <option value="12">Nose</option>
        <option value="13">pharynx and larynx</option>
        <option value="14">Trachea</option>
        <option value="15">Kidney</option>
        <option value="16">Urinary Bladder</option>
        <option value="17">Ureter</option>
        <option value="18">Urethra</option>
        <option value="19">Uterus</option>
        <option value="20">Vagina</option>
        <option value="21">Ovary</option>
        <option value="22">Prostate</option>
        <option value="23">Penis</option>
        <option value="24">Testis</option>
        <option value="25">Gonads</option>
        <option value="26">Adrenal Glands</option>
        <option value="27">Thyroid Gland</option>
        <option value="28">Pineal Gland</option>
        <option value="29">Parathyroid Glands</option>
        <option value="30">Islets of Langerhans</option>
        <option value="31">Pituitary Gland</option>
        <option value="32">Bone Marrow</option>
        <option value="33">Lymphoid Tissue</option>
        <option value="34">Brain</option>
        <option value="35">Spinal Cord</option>
        <option value="36">Heart</option>
        <option value="37">Blood Vessels</option>

      </select>

      <p>What cells do you want to use?</p>
      <select class="form-select" aria-label=".form-select-sm example" style="margin-bottom: 15px">
        <option selected>Please select</option>
        <option value="1">ESCs</option>
        <option value="2">iPSCs</option>
        <option value="3">ASCs</option>
        <option value="4">NSCs</option>
        <option value="5">MSCs</option>
        <option value="6">SMSCs</option>
        <option value="7">LSCs</option>
        <option value="8">Fibroblasts</option>
        <option value="9">Myoblasts</option>
        <option value="10">HUVECs</option>
        <option value="11">EPCs</option>
        <option value="12">HaCaT</option>
        <option value="13">SaOS2</option>
      </select>

      <p>What materials do you want to use?</p>
      <select class="form-select" aria-label=".form-select-sm example" style="margin-bottom: 15px">
        <option selected>Please select</option>
        <option value="1">Gelatin</option>
        <option value="2">GelMA</option>
        <option value="3">Collagen</option>
        <option value="4">Fibrin</option>
        <option value="5">Silk-fibroin</option>
        <option value="6">Polypeptide</option>
        <option value="7">Alginate</option>
        <option value="8">HAMA</option>
        <option value="9">NorHA</option>
        <option value="10">Chitosan</option>
        <option value="11">Agarose</option>
        <option value="12">Gellan gum</option>
        <option value="13">Dextran</option>
        <option value="14">Matrigel</option>
        <option value="15">PVA</option>
        <option value="16">PEG</option>
        <option value="17">Pluronic</option>
        <option value="18">Bioactive glass</option>
        <option value="19">graphene oxide</option>
        <option value="20">BMP</option>
        <option value="21">VEGF</option>
        <option value="22">TGF</option>
        <option value="23">Stromal cell–derived factor</option>
        <option value="24">PrP</option>
        <option value="25">Peptide motifs</option>
        <option value="26">PLA</option>
        <option value="27">PCL</option>
        <option value="28">PLGA</option>
        <option value="29">ABS</option>
        <option value="30">PLLA</option>
        <option value="31">PEEK</option>
        <option value="32">PDMS</option>
        <option value="33">PVP</option>
        <option value="34">Novogel</option>
        <option value="35">AuNPs</option>
        <option value="36">AgNPs</option>
        <option value="37">PG-HA</option>
        <option value="38">Pluronic</option>
        <option value="39">Hydroxy-apatite</option>
        <option value="40">Hyaluronic acid</option>
        <option value="41">Silk</option>
        <option value="42">Dextran</option>
      </select>

      <p>What fabrication method do you want to use?</p>
      <select class="form-select" aria-label=".form-select-sm example" style="margin-bottom: 15px">
        <option selected>Please select</option>
        <option value="1">Extrusion</option>
        <option value="2">Inkjet</option>
        <option value="3">Laser-Assisted</option>
        <option value="4">Stereolithography</option>
      </select>


      <div id="liveAlertPlaceholder"></div>
      <p style="text-align: center"><button type="button" class="btn btn-primary" id="liveAlertBtn">See parameters</button></p>
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
  name: 'print',
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

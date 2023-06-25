<template>
  <div style="display: flex; flex-direction: column; min-height: 100vh;">
    <div style="flex: 1;">
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
    <div style="padding-bottom:80px;">
     <div class="d-flex flex-column align-items-center mt-5">
       <transition name="fade">
      <h1 class="text-center mb-3" style="margin-top:2%;font-weight: bold">{{ guidanceText }}</h1>
       </transition>
      <div class="d-flex flex-wrap justify-content-center gap-3">
        <span
          @click="toggleContent('scaffold')"
          :class="{'badge rounded-pill text-bg-success': clickedBadge == 'scaffold', 'badge rounded-pill': clickedBadge != 'scaffold'}"
          style="cursor:pointer;font-size: 30px; transition: background-color 0.3s ease">Scaffold-based liver model</span>
        <span
          @click="toggleContent('spheroid')"
          :class="{'badge rounded-pill text-bg-danger': clickedBadge == 'spheroid', 'badge rounded-pill': clickedBadge != 'spheroid'}"
          style="cursor:pointer;font-size: 30px; transition: background-color 0.3s ease" >Spheroid-based liver model</span>
        <span
          @click="toggleContent('chip')"
          :class="{'badge rounded-pill text-bg-warning': clickedBadge == 'chip', 'badge rounded-pill': clickedBadge != 'chip'}"
          style="cursor:pointer;font-size: 30px; transition: background-color 0.3s ease">Liver-on-a-chip liver model</span>
        <span
          @click="toggleContent('2D')"
          :class="{'badge rounded-pill text-bg-info': clickedBadge == '2D', 'badge rounded-pill': clickedBadge != '2D'}"
          style="cursor:pointer;font-size: 30px; transition: background-color 0.3s ease">2D liver model</span>
      </div>
    </div>
     <!-- start of the model content ！-->

      <transition name="fade">
    <div v-if="showContent && selectedBadge === 'scaffold'">

    <!-- start of one of the four liver models !-->

    <!-- 多个相同class的div使用float:left选项  可以实现无缝连接 !-->

    <div class="container-fluid" style="margin-top: 5%; margin-left:2%; width: 30%; height: 30%; float:left">
      <p style="text-align: center"><img src="../assets/images/cell.svg" alt='cell' style="width:50%;"></p>

      <div class="mb-3">
        <label for="basic-url" class="form-label"><strong>Cell Parameters</strong></label>
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

      <div class="input-group mb-3">
      <div class="input-group">
        <span class="input-group-text">Co-cultured Cell (optional)</span>
        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
      </div>
      <div class="form-text">The type of the co-cultured cells (if applicable).</div>
    </div>

     <div class="input-group mb-3">
      <div class="input-group">
        <span class="input-group-text">Co-cultured Cell Seeding (optional)</span>
        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
        <span class="input-group-text">(10^6)</span>
      </div>
      <div class="form-text">The number of seeded cu-cultured cells (if applicable).</div>
    </div>

    </div>

    <div class="container-fluid" style="margin-top: 5%; margin-left:3%; width: 30%; height: 30%; float:left">
      <p style="text-align: center "><img src="../assets/images/material.svg" alt='cell' style="width:50%"></p>

      <div class="mb-3">
        <label for="basic-url" class="form-label"><strong>Material Parameters</strong></label>
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
        <label for="basic-url" class="form-label"><strong>Culture Platform Parameters</strong></label>
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

    <div class="container-fluid" style="float:left">
      <p style="text-align: center; margin-top:2%"><button type="button" class="btn btn-primary">Submit</button></p>
    </div>

    <!-- end of one of the four liver models !-->
    </div>
      </transition>

      <transition name="fade">
    <div v-if="showContent && selectedBadge === 'spheroid'">

  <!-- start of one of the four liver models !-->

  <!-- 多个相同class的div使用float:left选项  可以实现无缝连接 !-->

  <div class="container-fluid" style="margin-top: 5%; margin-left:12%; width: 30%; height: 30%; float:left">
    <p style="text-align: center"><img src="../assets/images/cell.svg" alt='cell' style="width:50%;"></p>

    <div class="mb-3">
      <label for="basic-url" class="form-label"><strong>Cell Parameters</strong></label>
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

     <div class="input-group mb-3">
      <div class="input-group">
        <span class="input-group-text">Co-cultured Cell (optional)</span>
        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
      </div>
      <div class="form-text">The type of the co-cultured cells (if applicable).</div>
    </div>

     <div class="input-group mb-3">
      <div class="input-group">
        <span class="input-group-text">Co-cultured Cell Seeding (optional)</span>
        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
        <span class="input-group-text">(10^6)</span>
      </div>
      <div class="form-text">The number of seeded cu-cultured cells (if applicable).</div>
    </div>


  </div>


  <div class="container-fluid" style="margin-top: 5%; margin-left:12%; width: 30%; height: 30%; float:left">
    <p style="text-align: center;"><img src="../assets/images/chip.svg" alt='cell' style="width:50%"></p>

    <div class="mb-3">
      <label for="basic-url" class="form-label"><strong>Culture Platform Parameters</strong></label>
      <div class="input-group">
        <span class="input-group-text" >Diameter</span>
        <input type="text" class="form-control"  aria-describedby="basic-addon3">
         <span class="input-group-text">(μm)</span>
      </div>
      <div class="form-text">The diameter of the spheroids.</div>
    </div>

      <div class="mb-3">
        <div class="input-group">
          <span class="input-group-text" >Tethered</span>
          <input type="text" class="form-control"  aria-describedby="basic-addon3">
        </div>
        <div class="form-text">Whether the spheroids are tethered onto a film.</div>
      </div>

     <div class="mb-3">
        <div class="input-group">
          <span class="input-group-text" >Tethered Film</span>
          <input type="text" class="form-control"  aria-describedby="basic-addon3">
        </div>
        <div class="form-text">The type of the tethered film (if applicable).</div>
      </div>

    <div class="mb-3">
        <div class="input-group">
          <span class="input-group-text" >Modification</span>
          <input type="text" class="form-control"  aria-describedby="basic-addon3">
        </div>
        <div class="form-text">The modification type of the medium.</div>
      </div>

   <div class="input-group mb-3">
      <div class="input-group">
        <span class="input-group-text">Flow Rate</span>
        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
        <span class="input-group-text">(μL/min)</span>
      </div>
      <div class="form-text">The flow rate of the culture system (set to 0 if a static culture is available).</div>
    </div>

  </div>

  <div class="container-fluid" style="float:left">
    <p style="text-align: center; margin-top:2%"><button type="button" class="btn btn-primary">Submit</button></p>
  </div>

  <!-- end of one of the four liver models !-->
  </div>
      </transition>

      <transition name="fade">
    <div v-if="showContent && selectedBadge === 'chip'">

  <!-- start of one of the four liver models !-->

  <!-- 多个相同class的div使用float:left选项  可以实现无缝连接 !-->

  <div class="container-fluid" style="margin-top: 5%; margin-left:2%; width: 30%; height: 30%; float:left">
    <p style="text-align: center"><img src="../assets/images/cell.svg" alt='cell' style="width:50%;"></p>

    <div class="mb-3">
      <label for="basic-url" class="form-label"><strong>Cell Parameters</strong></label>
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

    <div class="input-group mb-3">
    <div class="input-group">
      <span class="input-group-text">Co-cultured Cell (optional)</span>
      <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
    </div>
    <div class="form-text">The type of the co-cultured cells (if applicable).</div>
    </div>

     <div class="input-group mb-3">
      <div class="input-group">
        <span class="input-group-text">Co-cultured Cell Seeding (optional)</span>
        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
        <span class="input-group-text">(10^6)</span>
      </div>
      <div class="form-text">The number of seeded cu-cultured cells (if applicable).</div>
    </div>

  </div>

  <div class="container-fluid" style="margin-top: 5%; margin-left:3%; width: 30%; height: 30%; float:left">
    <p style="text-align: center "><img src="../assets/images/material.svg" alt='cell' style="width:50%"></p>

    <div class="mb-3">
      <label for="basic-url" class="form-label"><strong>Material Parameters</strong></label>
      <div class="input-group">
        <span class="input-group-text" >Material</span>
        <input type="text" class="form-control" aria-describedby="basic-addon3">
      </div>
      <div class="form-text">The material usd to culture cells.</div>
    </div>

    <div class="input-group mb-3">
      <div class="input-group">
        <span class="input-group-text">Material Concentration</span>
        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
        <span class="input-group-text">(wt%)</span>
      </div>
      <div class="form-text">The concentration of the material.</div>
    </div>

    <div class="input-group mb-3">
      <div class="input-group">
        <span class="input-group-text">Modification</span>
        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
      </div>
      <div class="form-text">The concentration of the material.</div>
    </div>

    <div class="input-group mb-3">
      <div class="input-group">
        <span class="input-group-text">Modification Concentration</span>
        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
        <span class="input-group-text">(wt%)</span>
      </div>
      <div class="form-text">The concentration of the modification.</div>
    </div>

     <div class="input-group mb-3">
      <div class="input-group">
        <span class="input-group-text">Medium-out</span>
        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
      </div>
      <div class="form-text">The type of the medium in outer channel.</div>
    </div>

      <div class="input-group mb-3">
      <div class="input-group">
        <span class="input-group-text">Medium-in</span>
        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
      </div>
      <div class="form-text">The type of the medium in inner channel (available only under multi-organs culture).</div>
    </div>

      <div class="input-group mb-3">
      <div class="input-group">
        <span class="input-group-text">Serum-out</span>
        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
      </div>
      <div class="form-text">The type of the serum in outer channel.</div>
    </div>

    <div class="input-group mb-3">
      <div class="input-group">
        <span class="input-group-text">Serum-in</span>
        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
      </div>
      <div class="form-text">The type of the serum in inner channel (available only under multi-organs culture).</div>
    </div>

  </div>

  <div class="container-fluid" style="margin-top: 5%; margin-left:3%; width: 30%; height: 30%; float:left">
    <p style="text-align: center;"><img src="../assets/images/chip.svg" alt='cell' style="width:50%"></p>

    <div class="mb-3">
      <label for="basic-url" class="form-label"><strong>Culture Platform Parameters</strong></label>
      <div class="input-group">
        <span class="input-group-text" >Self-circulated</span>
        <input type="text" class="form-control"  aria-describedby="basic-addon3">
      </div>
      <div class="form-text">Whether the chip system is self-circulated.</div>
    </div>

    <div class="input-group mb-3">
      <div class="input-group">
        <span class="input-group-text">Multi-organs Culture</span>
        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
      </div>
      <div class="form-text">Whether multiple organs are cultured in the chip system.</div>
    </div>

    <div class="input-group mb-3">
      <div class="input-group">
        <span class="input-group-text">Homogeneous Medium</span>
        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
      </div>
      <div class="form-text">Whether the medium is homogeneous.</div>
    </div>

    <div class="input-group mb-3">
      <div class="input-group">
        <span class="input-group-text">Flow Rate</span>
        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
        <span class="input-group-text">(μL/min)</span>
      </div>
      <div class="form-text">The flow rate of the chip system (set to 0 if a static culture is available).</div>
    </div>

    <div class="input-group mb-3">
      <div class="input-group">
        <span class="input-group-text">Shear Stress</span>
        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
        <span class="input-group-text">(dyn/cm^2)</span>
      </div>
      <div class="form-text">The shear stress of the fluid on the cells.</div>
    </div>

    <div class="input-group mb-3">
      <div class="input-group">
        <span class="input-group-text">Channel Width</span>
        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
      </div>
      <div class="form-text">The width of the channel.</div>
    </div>

    <div class="input-group mb-3">
      <div class="input-group">
        <span class="input-group-text">Physical Stimulation</span>
        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
      </div>
      <div class="form-text">The physical stimulation type of the chip system.</div>
    </div>


  </div>

  <div class="container-fluid" style="float:left">
    <p style="text-align: center; margin-top:2%"><button type="button" class="btn btn-primary">Submit</button></p>
  </div>

  <!-- end of one of the four liver models !-->
  </div>
      </transition>

      <transition name="fade">
    <div v-if="showContent && selectedBadge === '2D'">

  <!-- start of one of the four liver models !-->

  <!-- 多个相同class的div使用float:left选项  可以实现无缝连接 !-->

  <div class="container-fluid" style="margin-top: 5%; margin-left:12%; width: 30%; height: 30%; float:left">
    <p style="text-align: center"><img src="../assets/images/cell.svg" alt='cell' style="width:50%;"></p>

    <div class="mb-3">
      <label for="basic-url" class="form-label"><strong>Cell Parameters</strong></label>
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

      <div class="input-group mb-3">
      <div class="input-group">
        <span class="input-group-text">Co-cultured Cell (optional)</span>
        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
      </div>
      <div class="form-text">The type of the co-cultured cells (if applicable).</div>
    </div>

     <div class="input-group mb-3">
      <div class="input-group">
        <span class="input-group-text">Co-cultured Cell Seeding (optional)</span>
        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
        <span class="input-group-text">(10^6)</span>
      </div>
      <div class="form-text">The number of seeded cu-cultured cells (if applicable).</div>
    </div>

  </div>


  <div class="container-fluid" style="margin-top: 5%; margin-left:12%; width: 30%; height: 30%; float:left">
    <p style="text-align: center;"><img src="../assets/images/chip.svg" alt='cell' style="width:50%"></p>

    <div class="mb-3">
      <label for="basic-url" class="form-label"><strong>Culture Platform Parameters</strong></label>
      <div class="input-group">
        <span class="input-group-text" >Coat</span>
        <input type="text" class="form-control"  aria-describedby="basic-addon3">
      </div>
      <div class="form-text">The type of the coated layer.</div>
    </div>

  </div>

  <div class="container-fluid" style="float:left">
    <p style="text-align: center; margin-top:2%"><button type="button" class="btn btn-primary">Submit</button></p>
  </div>

  <!-- end of one of the four liver models !-->
  </div>
      </transition>

    <!-- end of the model content ！-->
  </div>

</div>
 <div style="width:100%;">
      <footer class="py-4 bg-light mt-auto" style="text-align: center; padding-left:3%; width:100%;">
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
  data() {
    return {
      showContent: false,
      guidanceText: 'Please select the liver model:',
      selectedBadge: null,
      clickedBadge: null,  // 新添加的属性
    };
  },
  methods: {
    routePush(path){
      this.$router.push({ path:path })
    },
    toggleContent(badge) {
      if (this.clickedBadge === badge) {
        this.clickedBadge = null; // 如果点击的是同一个 badge，就将 clickedBadge 设置为 null
      } else {
        this.clickedBadge = badge; // 否则更新 clickedBadge
      }

      this.showContent = this.clickedBadge !== null;
      this.selectedBadge = badge;
      this.guidanceText = this.showContent ?
        'Input the parameters and click the submit button to see the secretion line chart.' :
        'Please select the liver model:';
    }
  }
};
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

.badge {
  background-color: grey;
}

.badge:active {
  background-color: inherit; /* 这会使元素回到其默认的颜色 */
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>



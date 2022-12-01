<template>
  <div class="p-regs">
    <article class="d-none d-lg-block"></article>
    <div class="register">
      <div class="title2">
        <h1 class="mjTitle">
          <font style="vertical-align: inherit"></font>
            <font style="vertical-align: inherit">Physician registration
            </font>
          </font>
          <div class="note-group">
            <p class="note">
              <font style="vertical-align: inherit">
                <font style="vertical-align: inherit"></font>
                <font style="vertical-align: inherit">Children's vaccines are open for appointments and children
                  are encouraged to be vaccinated. Please click on the type of
                  vaccine you want to administer and register at the Pediatric
                  Vaccination Clinic.</font>
              </font>
            </p>
          </div>
        </h1>
        <small>
          <font style="vertical-align: inherit">
            <font style="vertical-align: inherit">※ Physicians are sorted by strokes of surnames</font>
          </font>
        </small>
      </div>
      <section id="tabs" class="doctor-list">
        <ul class="owl-carousel owl-theme tabs-nav tabs owl-loaded owl-drag">
          <div class="owl-stage-outer">
            <div class="owl-stage" style="
                transform: translate3d(0px, 0px, 0px);
                transition: all 0s ease 0s;
                width: 1961px;
              ">

              <!-- <li v-for="value in fulldata">{{ value.deptSys }}</li> -->

              <div class="owl-item active" v-for="(value, index) in fulldata"
                :style="{ 'background-color': value.color }">
                <li class="">

                  <span @click="scroll(index)"> {{ value.deptSys }} </span>
                </li>
              </div>


            </div>
          </div>
          <div class="owl-nav">
            <button type="button" role="presentation" class="owl-prev disabled">
              <span aria-label="Previous">
                <font style="vertical-align: inherit">
                  <font style="vertical-align: inherit"><i class="fas fa-caret-left"></i></font>
                </font>
              </span></button><button type="button" role="presentation" class="owl-next">
              <span aria-label="Next">
                <font style="vertical-align: inherit">
                  <font style="vertical-align: inherit"><i class="fas fa-caret-right"></i></font>
                </font>
              </span>
            </button>
          </div>
          <div class="owl-dots disabled"></div>
        </ul>
        <div class="content-body tab-content">


          <article class="list-box tab-pane active" id="tabs-12">
            <h3 class="class-name"
              onclick="var $ofweidht=innerWidth;if($ofweidht<=991){$(this).toggleClass('open').next().slideToggle();}">

              ><i class="fas fa-chevron-circle-down btn-i"></i>
            </h3>
            <div v-bind:id="index" style=" flex-wrap: wrap" class="content" v-for="(value, index) in fulldata">
              <div class="list" v-for="(abcdata, index) in fulldata[index].deptList">
                <h3>
                  <a :href="`${url}#/subservice`" title="COVID-19 Vaccination: BNT">
                    <font style="vertical-align: inherit">
                      <div style="vertical-align: inherit; flex-direction: col">
                        <span>{{ abcdata.deptName }}</span>

                      </div>
                    </font>
                  </a>
                </h3>
                <ul>
                  <li v-for="(efgdata, index) in abcdata.docList ">
                    <!-- <a :href="`${url}#/subservice`"
                                class="dot_title" title="COVID-19 Vaccination: BNT"><font style="vertical-align: inherit"
                        ><font style="vertical-align: inherit"
                          >{{efgdata.docName}}</font></font></a> -->


                    <span @click="handleRedirect(index)">{{ efgdata.docName }}</span>

                  </li>

                </ul>
              </div>
            </div>


          </article>
        </div>
      </section>
    </div>
    <article class="d-block d-lg-none"></article>
  </div>
</template>

<script>
import { _services } from "./../../../Services/Api/index";
import { isProxy, toRaw } from 'vue';
export default {
  name: "HomePage",
  components: {},
  data() {
    return {
      arrayData0: null,
      arrayData1: null,
      fulldata: null,
      url: null,
    };
  },
  methods: {
    getData() {
      var currentUrlorigin = window.location.origin; //http://localhost:8080
      var currentUrl = window.location.pathname; ///wordpresswithvue/sample-page/
      const data = {

        pass: "Kumar",
        type: "doc",
        userId: "webapp",
      };
      _services
        .outGetWebList(data)
        .then((res) => {
          this.arrayData0 = res.data.data[0];
          this.arrayData1 = res.data.data[1];
          this.arrayData = res.data.data;

          this.url = currentUrlorigin + currentUrl;
          console.log(res.data.data);

          this.fulldata = res.data.data;
          console.log(this.fulldata)

        })
        .catch((err) => {
          console.log(err);
        });


    },
    handleRedirect(index) {
      console.log(index)
      const data2send = {
        // "deptName" : toRaw(this.arrayData.[index].deptName),
        // "deptCode" : toRaw(this.arrayData0?.[index].deptCode),
        // "opdDate" : toRaw(this.arrayData0?.[index].opdDate),
        // "shiftNo" : toRaw(this.arrayData0?.[index].shiftNo),
        // "docName": toRaw(this.arrayData0?.[index].docName),
        // "webRoomDesc": toRaw(this.arrayData0?.[index].webRoomDesc),
        // "roomDesc": toRaw(this.arrayData0?.[index].roomDesc),
        // "nextNum" : toRaw(this.arrayData0?.[index].nextNum),
        // "deptRoom" : toRaw(this.arrayData0?.[index].deptRoom),
        // "docCode" : toRaw(this.arrayData0?.[index].docCode),
        // "regIp" : toRaw(this.arrayData0?.[index].regIp),
        // "regWay" : toRaw(this.arrayData0?.[index].regWay),
      }
      console.log(data2send)
      this.$router.push({
        name: "",
        params: data2send
      })
    },

    scroll(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth"
      });
    }
  },
  handleRedirect(index) {
    const data2send = {

    }

    this.$router.push({
      name: 'Booking',
      params: data2send
    })

  },
  beforeMount() {
    this.getData();
  },
};
</script>

<style scoped src="../pages/styles/Phsyician_registration.page.css">

</style>

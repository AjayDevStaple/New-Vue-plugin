<template>
  <div class="b-page">
    <span class="main-head"
      >Registration information
      <span class="main-head-red"
        >(registration has not been completed, please fill in the
        information)</span
      ></span
    >

    <Row class="row">
     <div class="col-md-12 maindiv">
        <Row class="row maindiv-inner">
            <Col class="col-md-6 firstDiv">
                <div class="row">
                  <div class="col-md-6 firstDivCont">
                    <div class="divFlex">
                    <span class="tags">Consultation Date</span>
                    <span>{{this.$route.params.opdDate}}</span>
                    </div>
                  </div>
                  <div class="col-md-6 firstDivCont">
                    <div class="divFlex">
                        <span class="tags">Department</span>
                    <span>{{this.$route.params.deptName}}</span>
                    </div>
                  </div>
                </div>
        
                <div class="row">
                  <div class="col-md-6 firstDivCont">
                   <div class="divFlex">
                    <span class="tags">doctor</span>
                    <span>{{this.$route.params.docName}}</span>
                   </div>
                  </div>
                  <div class="col-md-6 firstDivCont">
                    <div class="divFlex">
                        <span class="tags">Consultation Time</span>
                        <span
                          >{{this.$route.params.shiftNo}}</span
                        >
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 firstDivCont">
                   <div class="divFlex">
                    <span class="tags"> Consultation location</span>
                    <span> {{this.$route.params.webRoomDesc}}</span>
                   </div>
                  </div>
                  <div class="col-md-6 firstDivCont"> 
                    <div class="divFlex">
                        <span class="tags"> appoinment number</span>
                        <span>{{this.$route.params.roomDesc}}</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col class="col-md-6 secondDiv">
                <div class="radio-box">
                    <div class="radio-btns">
                        <input
                          type="radio"
                          id="loginID_1"
                          name="idType"
                          value="99"
                          onclick="show_birth(3)"
                          v-model="idType"
                          checked
                        />
                        <label for="loginID_1">
                          <font style="vertical-align: inherit">
                            <font style="vertical-align: inherit">ID number</font>
                          </font>
                        </label>
                      </div>
              
                      <div class="radio-btns">
                        <input
                          type="radio"
                          id="loginID_2"
                          name="idType"
                          value="2"
                          onclick="show_birth(3)"
                          v-model="idType"
                        />
                        <label for="loginID_2">
                          <font style="vertical-align: inherit">
                            <font style="vertical-align: inherit">Medical record number</font>
                          </font>
                        </label>
                      </div>
              
                      <div class="radio-btns">
                        <input
                          type="radio"
                          id="loginID_3"
                          name="idType"
                          value="3"
                          onclick="show_birth(3)"
                          v-model="idType"
                        />
                        <label for="loginID_3">
                          <font style="vertical-align: inherit">
                            <font style="vertical-align: inherit">Passport number</font>
                          </font>
                        </label>
                      </div>
              
                      <div class="radio-btns">
                        <input
                          type="radio"
                          id="loginID_4"
                          name="idType"
                          value="4"
                          onclick="show_birth(3)"
                          v-model="idType"
                        />
                        <label for="loginID_4">
                          <font style="vertical-align: inherit">
                            <font style="vertical-align: inherit">Residance card number</font>
                          </font>
                        </label>
                      </div>
                </div>
        
                <div class="form-group">
                  <label for="label"><i class="far fa-id-card"></i></label>
                  <input
                    type="text"
                    name="patData"
                    id="patData"
                    class="form-control"
                    placeholder="Example: A12345678"
                    onchange="chk_password(1)"
                    onkeyup="input_strtoupper(this,event)"
                    v-model="patData"
                  />
                  <small id="patData_txt" class="red warning_txt"></small>
                </div>



        
                <div class="form-group">
                  <label for="label"><i class="fas fa-birthday-cake"></i></label>
                  <input
                    type="text"
                    name="birthdate"
                    id="patData"
                    class="form-control"
                    placeholder="Please enter your birthday(the date of the Republic of China)"
                    onchange="chk_password(1)"
                    onkeyup="input_strtoupper(this,event)"
                    v-model="birthDate"
                  />
                  <small id="patData_txt" class="red warning_txt"></small>
                </div>

        
                <span class="mid-text"
                  >  Example:The date of birth date is January 1, 1982, please enter 0820101</span
                >
        
                <div class="form-group">
                  <label for="label"><i class="fas fa-mobile-alt"></i></label>
                  <input
                    type="text"
                    name="mobile"
                    id="patData"
                    class="form-control"
                    placeholder="Please enter the mobile number"
                  
             
                  />
                  <small id="patData_txt" class="red warning_txt"></small>
                </div>
        
                <hr />
        
                
        <div class="btn-div">

            <span class="btn green-bg" @click="handleSubmit">Confirm</span>
                <span class="btn btn1">Cancel</span>

        </div>
       
       
                
              </Col>
        </Row>
     </div>

     <div class="custom-modal" v-if="showModal">
       <div class="inner-modal-wrap">
         <button class="close-modal" @click="(showModal = false)">X</button>
        <div class="modal-content">
            {{ message }}
        </div>
       </div>
     </div>


  
    </Row>
  </div>


</template>

<script lang="ts">
import { _services } from "./../../../Services/Api/index";
import { isProxy, toRaw } from 'vue';
export default {
  name: "BookingPage",
  components: {},
  props: ['data'],
  methods: {
    handleSubmit() {
      const data = {
          birthDate: this.birthDate, //input
          deptCode: this.$route.params.deptCode,
          deptRoom: this.$route.params.deptRoom,
          docCode: this.$route.params.docCode,
          idType: this.idType, //input
          opdDate: this.$route.params.opdDate,
          pass: "Kumar",
          password: this.password,
          patData: this.patData, //input
          regIp: this.$route.params.regIp,
          regWay: this.$route.params.regWay,
          shiftNo: this.$route.params.shiftNo,
          userId: this.userId ,
      }
      _services.outCheckFvRv(data)
        .then((res) => {

          const data4fstPage = {
            "deptCode": this.$route.params.deptCode ,
            "docCode": this.$route.params.docCode,
            "opdDate" : this.$route.params.opdDate,
            "shiftNo" :  this.$route.params.shiftNo,
            "deptRoom" :  this.$route.params.deptRoom,
         
      

          }
       
          console.log(res.data.data.fvRv)

          if ( res.data.data.fvRv === 'FV') {
            this.$router.push({name: 'FirstVisit',
          params: data4fstPage
          })
          }




          const data2send = {
              "opdDate" : this.$route.params.opdDate,
              "shiftNo" :  this.$route.params.shiftNo,
              "seqNo" :  "",
              "docName" :  "",
              "deptName" : "" ,
              "rsvOpdTime": "" ,
             
            }


        

          if(res.data.code == 200 && res.data.data.fvRv != 'FV') {
            this.$router.push({name: 'Booking-Success',
          params: data2send
          })
          } else {
          
            this.showModal = true;
            this.message = res.data.msg;
     
          }   
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getData() {
      console.log('=====> boolking >>',  this.$route.params.deptName)
    }
    },
 
  data() {
    return {
  birthDate: "",
  deptCode: "",
  deptRoom: "",
  docCode: "",
  idType: "99",
  opdDate: "2022-11-29T04:43:47.780Z",
  pass: "Kumar",
  password: "",
  patData: "",
  regIp: "string",
  regWay: "string",
  shiftNo: "string",
  userId: "webapp",
  showMore: true,
  showModal: false,
message: null,
    };
  },
  beforeMount() {
    this.getData();
  },
};
</script>


<style scoped src="../../../frontend/components/pages/styles/Booking.page.css">

</style>
<style>
.custom-modal {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0,0,0,.8);
  }
  .inner-modal-wrap {
    max-width: 600px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
    padding: 30px;
    border-radius: 10px;
    min-height: 100px;
}
.custom-modal button.close-modal {
    position: absolute;
    top: -19px;
    right: 0;
    padding: 0;
    border: 0;
    color: #fff;
    width: 40px;
    height: 40px;
    background: #f39118;
    border-radius: 50%;
    z-index: 9;
    opacity:1 !important;
}
.custom-modal .modal-content {
    border: 0;
    font-size: 16px;
    text-align: center;
}
</style>



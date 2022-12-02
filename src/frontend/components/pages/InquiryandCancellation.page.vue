<template>


  <div class="inquiry">
    <div class="i-cancel" id="contentToPrint">
      <div class="title2">
        <h1 class="mjTitle">
          <font style="vertical-align: inherit">
            <font style="vertical-align: inherit" class="">Inquiry and Cancellation</font>
          </font>
        </h1>

      </div>
      <div class="login" v-if="showMore == false">
        <form id="form1" name="form1" method="post" action="inquiry_search_detail.php#sidebar_4">
          <div class="item">
            <ul class="mb-2">
              <li class="custom-control custom-radio">
                <input type="radio" id="loginID_1" name="idType" value="0" class="custom-control-input"
                  onclick="show_birth(1)" checked v-model="idType" />
                <label class="custom-control-label" for="loginID_1">
                  <font style="vertical-align: inherit">
                    <font style="vertical-align: inherit">ID number</font>
                  </font>
                </label>
              </li>
              <li class="custom-control custom-radio">
                <input type="radio" id="loginID_2" name="idType" value="1" class="custom-control-input"
                  onclick="show_birth(2)" v-model="idType" />
                <label class="custom-control-label" for="loginID_2">
                  <font style="vertical-align: inherit">
                    <font style="vertical-align: inherit">Medical record number</font>
                  </font>
                </label>
              </li>
              <li class="custom-control custom-radio">
                <input type="radio" id="loginID_3" name="idType" value="2" class="custom-control-input"
                  onclick="show_birth(3)" v-model="idType" />
                <label class="custom-control-label" for="loginID_3">
                  <font style="vertical-align: inherit">
                    <font style="vertical-align: inherit">passport number</font>
                  </font>
                </label>
              </li>
              <li class="custom-control custom-radio">
                <input type="radio" id="loginID_4" name="idType" value="3" class="custom-control-input"
                  onclick="show_birth(4)" v-model="idType" />
                <label class="custom-control-label" for="loginID_4">
                  <font style="vertical-align: inherit">
                    <font style="vertical-align: inherit">Residence card number</font>
                  </font>
                </label>
              </li>
            </ul>
            <div class="form-group">
              <label for="label"><i class="far fa-id-card"></i></label>
              <input type="text" name="patData" id="patData" class="form-control" placeholder="Example: A123456789"
                onchange="chk_password(1)" onkeyup="input_strtoupper(this,event)" v-model="pass" />
              <small id="patData_txt" class="red warning_txt"></small>
            </div>
          </div>
          <div class="item">
            <div class="form-group">
              <label for="label"><i class="fas fa-birthday-cake"></i></label>
              <input type="text" id="birthDate" name="birthDate" class="form-control input-datepicker"
                placeholder="Please enter your birthday (year, month, day of the Republic of China)"
                v-model="birthDate" />
              <small id="birthDate_txt" class="red warning_txt"></small>
            </div>
            <p id="birthTxt">
              <font style="vertical-align: inherit">
                <font style="vertical-align: inherit">Example: If the date of birth is January 01, 1982, please enter
                  0820101</font>
              </font>
            </p>
          </div>
          <div class="item" id="vip_password" style="display: none">
            <div class="form-group">
              <label for="label"><i class="fas fa-lock"></i></label>
              <input type="password" id="strPW" name="strPW" class="form-control input-datepicker"
                placeholder="please enter password" onkeydown="if(event.keyCode==13){sbForm();}" />
              <small id="strPW_txt" class="red warning_txt"></small>
            </div>
          </div>
          <div class="btn-wrap">
            <button type="button" v-on:click="postInquiry" id="confirm" class="btn-style">
              <font style="vertical-align: inherit">
                <font style="vertical-align: inherit">Inquire</font>
              </font>
            </button>
            <input name="Send" type="hidden" id="Send" />
            <input type="hidden" name="csrf" value="bde99d1c575f517b0db290430c6399c704274e1f" />
            <input name="chkPass" type="hidden" id="chkPass" />
            <input name="isPass" type="hidden" id="isPass" />
          </div>
        </form>


      </div>

      <div v-if="showMore == true">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Consulation Date</th>
              <th scope="col">Department</th>
              <th scope="col">Doctor</th>
              <th scope="col">Consulation Time</th>
              <th>Clinic</th>
              <th>Place</th>
              <th>Appointment Number</th>
              <th>Whether To Cancel</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="value in responseData">
              <td scope="row">
                <p class="m-0">{{ value.opdDate }}</p> 
                <span>({{ createConversation(value.opdDate) }})</span>
              </td>
              <td>{{ value.deptName }}</td>
              <td>{{ value.docName }}</td>
              <td>{{ value.shiftNo }}</td>
              <td>{{ value.deptRoom }}</td>
              <td>{{ value.roomDesc }}</td>
              <td>{{ value.seqNo }}</td>
              <td><Button v-on:click="cancelRegis(value.encounterNo)">Cancel inquiryation</Button></td>
            </tr>
          </tbody>
        </table>
        <div class="btn-wrap table-ftr-btn">
          <span class="btn-style badge-success">News/Video</span>
          <span class="btn-style badge-success mx-3">I want to inquiry</span>
          <span class="btn-style badge-primary m-0" onclick='printDiv();'> <i class="fas fa-print mr-2"></i>print</span>
        </div>
      </div>
      <!-- onclick="window.print()" -->
    </div>
  </div>
</template>

<script lang="ts">
import { _services } from "../../../Services/Api/index"

export default {
  name: "InquiryandCancellation",
  components: {},
  data() {
    return {
      responseData: undefined,
      showMore: false,
      idType: "string",
      birthDate: "2022-11-28T05:11:23.931Z",
      "pass": "Kumar",
      password: "string",
      patData: "string",
      "userId": "webapp"
    }
  },
  methods: {
    postInquiry() {
      const data =
      {
        birthDate: this.birthDate,
        idType: this.idType,
        pass: this.pass,
        password: this.password,
        patData: this.patData,
        userId: this.userId
      }
      console.log(this.showMore)
      _services
        .outGetRegRegbasic(data)
        .then((res) => {
          console.log(res.data.code)
          console.log(res.data.data)
          if (res.data.code === 200) {
            this.showMore = true
            this.responseData = res.data.data

          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    cancelRegis(index) {
      const data =
      {
        encounterNo: index,
        pass: this.pass,
        regIp: "",
        userId: this.userId
      }
      console.log('cancel clicked', index)
      _services
        .outCnclRegRegbasic(data)
        .then((res) => {
          console.log(res)
        })
    },
    createConversation: function (id) {
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var d = new Date(id);
        var dayName = days[d.getDay()];
        return dayName;
        /* console.log(dayName) */
    },
  }
}
}
</script>

<style scoped src="../pages/styles/inquiryandcancel.page.css"></style>

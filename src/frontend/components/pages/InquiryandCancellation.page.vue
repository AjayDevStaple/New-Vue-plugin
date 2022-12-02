<template>


  <div class="register">
    <div class="i-cancel">
      <div class="title2">
        <h1 class="mjTitle">
          <font style="vertical-align: inherit">
            <font style="vertical-align: inherit" class="">Inquiry and Cancellation</font>
          </font>
        </h1>

      </div>
      <div class="login" v-if="showMore == false">
        <form id="form1" name="form1" method="post" action="register_search_detail.php#sidebar_4">
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
                <span>(Thursday)</span>
              </td>
              <td>{{ value.deptName }}</td>
              <td>{{ value.docName }}</td>
              <td>{{ value.shiftNo }}</td>
              <td>{{ value.deptRoom }}</td>
              <td>{{ value.roomDesc }}</td>
              <td>{{ value.seqNo }}</td>
              <td><Button v-on:click="cancelRegis">Cancel Registeration</Button></td>
            </tr>
            <tr v-for="value in responseData">
              <td scope="row">
                <p class="m-0">{{ value.opdDate }}</p> 
                <span>(Thursday)</span>  
              </td>
              <td>{{ value.deptName }}</td>
              <td>{{ value.docName }}</td>
              <td>{{ value.shiftNo }}</td>
              <td>{{ value.deptRoom }}</td>
              <td>{{ value.roomDesc }}</td>
              <td>{{ value.seqNo }}</td>
              <td><Button v-on:click="cancelRegis">Cancel Registeration</Button></td>
            </tr>

          </tbody>
        </table>


        <div class="btn-wrap table-ftr-btn">
          <span class="btn-style badge-success">News/Video</span>
          <span class="btn-style badge-success mx-3">I want to register</span>
          <span class="btn-style badge-primary m-0"> <i class="fas fa-print mr-2"></i>print</span>
        </div>




      </div>


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

    cancelRegis() {

      console.log('cancel clicked')

    }


  }
}
}






</script>

<style>
.badage-style {

  min-height: 36px;
  min-width: 100px;
}


@charset "utf-8";

/* CSS Document */
body:before {
  display: none;
  content: "";
  pointer-events: none;
  z-index: 9999;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 6px;
  background: -moz-linear-gradient(left,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0) 100%);
  background: -webkit-linear-gradient(left,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0) 100%);
  background: linear-gradient(to right,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#4d000000', endColorstr='#00000000', GradientType=1);
}

body {
  position: relative;
  padding-top: 123px;
}

body.on:after {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.5);
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
}

body,
h3,
.form-control {
  font-size: 18px;
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover,
a:active,
a:focus {
  color: initial;
  text-decoration: none;
}

a,
button {
  cursor: pointer;
}

a,
button,
.gradient-03s,
.ix-title :before,
.ix-title :after {
  -o-transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  transition: all 0.3s linear;
}

.disabled {
  pointer-events: none;
  opacity: 0.5;
}

/*:focus,:active,button:focus{outline:none}*/
.col,
.col-1,
.col-10,
.col-11,
.col-12,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-auto,
.col-lg,
.col-lg-1,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-auto,
.col-md,
.col-md-1,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-auto,
.col-sm,
.col-sm-1,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-auto,
.col-xl,
.col-xl-1,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-auto {
  padding-left: 1rem;
  padding-right: 1rem;
}

.row {
  margin-left: -1rem;
  margin-right: -1rem;
}

/*---------------------- 基礎設定 ----------------------*/
.loading_area {
  display: none;
}

/*視窗卷軸*/
.scrollbar-style::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: transparent;
}

.scrollbar-style::-webkit-scrollbar {
  width: 10px;
  background-color: transparent;
}

.scrollbar-style::-webkit-scrollbar-thumb {
  background-color: #447a6a;
}

/* 反白設定 */
::selection {
  background: #f39118;
  color: #fff;
}

::-moz-selection {
  background: #f39118;
  color: #fff;
}

/*樣式 & 效果*/
.table-border-radius {
  padding: 2rem;
  border-radius: 1rem;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.1);
}

.table-border-radius.no-overflow {
  overflow: inherit;
}

.table-border-radius+.table-border-radius {
  margin-top: 1rem;
}

.radius-shadow-small {
  border-radius: 1rem;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
}

.radius-shadow-small-up {
  border-radius: 0.5rem;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
}

/*按鈕*/
.btn-wrap {
  margin: 2rem 0 0;
}

.btn-style {
  display: inline-block;
  border: none;
  border-radius: 50px;
  background: #447a6a;
  color: #fff;
  min-width: 100px;
  min-height: 36px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  outline: none;
}

.btn-style:hover,
a:hover .btn-style {
  background: #f39118;
  color: #fff;
}

.btn-style+.btn-style {
  margin-left: 10px;
}

.btn-style.bg-blue {
  background: #326c9e;
}

.btn-style.bg-blue:hover {
  background: #1a5283;
  color: #fff;
}

.btn-style.bg-orange {
  background: #f39118;
}

.btn-style.bg-orange:hover {
  background: #326c9e;
  color: #fff;
}

.btn-style.bg-white {
  color: #333;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.btn-style.bg-white:hover {
  background: #ddd !important;
}

.btn-style.line {
  border: solid 1px #447a6a;
  color: #447a6a;
  background: transparent;
}

.btn-style.line.bg-blue {
  border-color: #326c9e;
  color: #326c9e;
}

.btn-style.line:hover {
  color: #fff;
  background: #245647;
}

.btn-style.line.bg-blue:hover,
a:hover .btn-style.line.bg-blue {
  background: #326c9e;
  color: #fff;
}

.btn-style2 {
  display: table;
  border: 0;
  background: transparent;
  margin-left: auto;
  position: relative;
}

.btn-style2 span {
  display: block;
  background: #fff;
  padding: 0 5px;
  font-size: 0.9em;
  position: relative;
  z-index: 6;
}

.btn-style2:after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  border: solid thin;
  position: absolute;
  left: -10px;
  top: 5px;
  z-index: 1;
  -o-transition: all 0.3s linear;
  -webkit-transition: all 0.1s linear;
  -moz-transition: all 0.1s linear;
  transition: all 0.1s linear;
}

.btn-style2:hover span {
  color: #326c9e;
  font-weight: 700;
}

.box-shadow {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.por_area {
  position: relative;
}

.por_area .por_a {
  position: absolute;
  top: -120px;
}

.btn-small {
  padding: 0 0.5rem;
  background: #326c9e;
  color: #fff;
  border-radius: 3px;
}

.btn-small[href]:hover {
  background: #f39118;
  color: #fff;
}

.btn-small+.txt-hide {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -999;
  opacity: 0;
  pointer-events: none;
  width: 10px;
  overflow: hidden;
}

.btn-style-orange {
  padding: 2px 0.25rem 0;
  font-size: 1rem;
  color: #f39118;
  border: solid 1px #f39118;
  border-radius: 3px;
}

.btn-style-orange.on,
.btn-style-orange:hover {
  background: #f39118;
  color: #fff;
}

/*.btn-style-orange+.btn-style-orange{margin-left:0}*/
/*顏色*/
.red {
  color: #dc3545;
}

.orange {
  color: #f39118;
}

.green {
  color: #447a6a;
}

.bg-green {
  background: #dfefea;
}

.bg-green-dray {
  background: #447a6a;
}

.bg-gray {
  background: #f1f1f1;
}

.bg-mask {
  background: linear-gradient(135deg, #eef5f3 0%, rgba(238, 245, 243, 0.6) 100%),
    url(../../assets/sidebar-bg.png) left top/cover;
}

.box-inset-shadow {
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.2);
}

/*社群分享*/
.share {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  line-height: normal;
}

.share ul {
  padding: 0;
  margin-bottom: 0;
  list-style: none;
  text-align: right;
  font-size: 1.5rem;
}

.share ul li {
  display: inline-block;
  vertical-align: middle;
  letter-spacing: 0;
  margin-top: 0.5rem;
}

.share ul li span {
  vertical-align: middle !important;
}

/* 標題 */
[class$="title-list"] a h2,
[class$="title-list2"] .content h2,
[class$="photo-list"]:not(.dl-photo-list) a h2,
[class$="photo-list2"] a .content h2,
.video-list h3 {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
  height: 50px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.index-news .item .info h3,
.edu ul li .content h3 {
  height: 50px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.edu ul li .content h3 {
  height: 60px;
}

/*回頂端 */
.modal-dialog {
  z-index: 1050 !important;
}

/*主選單*/
.dropdown-item:active {
  color: inherit;
  background-color: inherit;
}

header {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
}

header .navbar {
  width: 100%;
  padding: 0;
  margin: 0 auto;
}

header.fixed .h-wrap {
  display: none;
}

header.fixed {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

header.fixed .logo {
  width: 200px;
}

header .h-wrap {
  width: 100%;
  margin: 0 auto;
  padding: 6px 0;
  background-image: linear-gradient(to right, #fff 10%, #ededed 100%);
}

header .tools ul {
  padding-left: 0;
  list-style: none;
  display: flex;
  max-width: 1140px;
  justify-content: flex-end;
  margin: 0 auto;
}

header .tools li {
  display: inline-block;
  vertical-align: middle;
}

header .tools li+li {
  margin-left: 0.5em;
}

header .tools li a {
  text-decoration: none;
}

header .tools li .fb_iframe_widget span {
  vertical-align: middle !important;
}

header .tools i {
  font-size: 1.6em;
  line-height: normal;
  color: #447a6a;
}

header .navbar-collapse .tools ul {
  display: block;
  padding: 0.5rem;
}

header .tools .lang {
  display: flex;
  background: #fff;
  border-radius: 50px;
  overflow: hidden;
  border: solid 1px #fff;
}

header .tools .lang a {
  display: inline-block;
  width: 50px;
  line-height: 30px;
  text-align: center;
  font-size: 0.9em;
}

header .tools .lang a.active {
  background: #447a6a;
  color: #fff;
}

header .tools .lang a:hover:not(.active) {
  color: #447a6a;
}

header .search {
  width: 30px;
  height: 30px;
  position: relative;
  transition: all 0.3s linear;
}

header .search i {
  font-size: 1rem;
  cursor: pointer;
  color: #447a6a;
}

.search #___gcse_0 {
  opacity: 0;
  pointer-events: none;
}

.search.on #___gcse_0 {
  opacity: 1;
  pointer-events: auto;
}

.gsc-control-cse {
  height: 30px;
  padding: 0 1rem !important;
  border-radius: 30px;
  border: none !important;
  background-color: #fff !important;
}

.gsc-search-button-v2 {
  display: none;
}

form.gsc-search-box {
  margin-bottom: 0 !important;
}

header .logo {
  width: 240px;
  padding-bottom: 0.1rem;
  transition: all 0.2s cubic-bezier(0.38, 0.04, 0.48, 0.97);
}

header .logo .navbar-brand {
  display: block;
}

header .logo img {
  max-width: 100%;
  width: auto;
  max-height: 100%;
}

header .navbar-collapse {
  width: calc(100% - 240px);
}

header .nav-item:last-child a {
  padding-right: 0;
}

header .nav-item {
  position: static;
}

header .navbar-expand-lg .navbar-nav .nav-item.d-lg-none .nav-link {
  margin: 6px 6px 0;
  background: rgba(255, 255, 255, 0.2);
  text-align: center;
  border-bottom: none;
}

header .navbar-expand-lg .navbar-nav {
  width: 100%;
  justify-content: flex-end;
}

header .navbar-expand-lg .navbar-nav .nav-link {
  position: relative;
  z-index: 1;
  padding: 0.75rem 1rem;
  font-size: 1em;
  color: #444;
  letter-spacing: 0.05rem;
}

header .navbar-expand-lg .navbar-nav .nav-link.on:after {
  content: "";
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  height: 11px;
  width: 70%;
  margin-left: 0;
  display: block;
  border: none;
  background: rgba(243, 145, 24, 0.2);
  -ms-transform: translate(-50%, 0);
  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
}

header .navbar-expand-lg .navbar-nav .show .nav-link {
  color: #447a6a;
  position: relative;
}

header .navbar-expand-lg .navbar-nav .nav-link.dropdown-toggle:not(.on)::after {
  display: none;
}

header.fixed .navbar-expand-lg .navbar-nav .nav-link {
  padding-top: 1.1rem;
  padding-bottom: 1.1rem;
}

header .dropdown-menu {
  padding: 0;
  margin: 0;
  border: 0;
  border-top: solid 4px #447a6a;
  border-radius: 0;
  box-shadow: 0 7px 20px -10px rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 400px;
  background: #fcfcf8;
}

.dropdown-menu.show:before {
  transform: scale(1);
}

header .sub-title {
  padding: 0.25rem 0.5rem;
  margin-bottom: 0;
  color: #447a6a;
  font-weight: 700;
}

header .item-wrap {
  position: relative;
  width: 100%;
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 2rem;
  background: #fff;
}

header .item-wrap .single {
  width: 240px;
  padding: 1.5rem 1rem;
}

header .item-wrap .single li {
  margin-bottom: 5px;
}

header .item-wrap .single li a {
  border-radius: 3px;
  display: block;
  text-decoration: none;
}

header .item-wrap .single .sub-title {
  text-align: center;
}

header .item-wrap .single li a:hover {
  background: #326c9e;
}

header .item-wrap .single li a:hover h3 {
  color: #fff;
}

header .item-wrap .group {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

header .item-wrap .single+.group {
  width: calc(100% - 240px);
}

header .item-wrap .group .dropdown-item {
  padding: 0;
  width: calc(100% / 5);
}

header .item-wrap .single+.group .dropdown-item {
  width: calc(100% / 4);
}

header .item-wrap ul {
  padding-left: 0;
  list-style: none;
  width: 100%;
}

header .item-wrap .group .dropdown-item+.dropdown-item {
  border-left: solid thin #ccc;
}

header .item-wrap .single+.group .dropdown-item:nth-child(4n + 1) {
  border-left: none;
}

header .item-wrap .group:only-child .dropdown-item:nth-child(5n + 1) {
  border-left: none;
}

header .item-wrap .group .dropdown-item .box {
  padding: 1.5rem 1rem;
}

header .item-wrap .group .sub-title {
  clear: both;
  overflow: hidden;
  padding: 0.25rem 0 1rem;
  margin-bottom: 1rem;
  border-bottom: solid thin #326c9e;
  position: relative;
}

header .item-wrap .group .sub-title:before {
  content: "";
  display: block;
  width: 20px;
  height: 3px;
  background: #326c9e;
  position: absolute;
  bottom: -1.5px;
  left: 0;
}

header .item-wrap .group .sub-title a {
  margin-top: -0.25rem;
  margin-bottom: -0.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
}

header .item-wrap .group .sub-title a:hover {
  color: #fff;
  background: #326c9e;
}

header .group a {
  position: relative;
  display: block;
  text-decoration: none;
  font-size: 18px;
  text-decoration: none;
}

header button.navbar-toggler {
  z-index: 999;
  border-radius: 0;
  width: 44px;
  height: 54px;
  min-width: auto;
  min-height: auto;
  padding: 0;
  position: relative;
  text-align: center;
  outline: none;
  margin-right: 10px;
}

header button.navbar-toggler:hover:after {
  display: none;
}

header button.navbar-toggler span {
  display: table;
  width: 80%;
  border-bottom: solid 2px #447a6a;
  margin: 0 auto;
  transition: all 0.3s linear;
}

header button.navbar-toggler span+span {
  margin-top: 8px;
}

body.on header button.navbar-toggler span {
  position: absolute;
  left: 10%;
  /* border-bottom:solid 2px #fff */
}

body.on header button.navbar-toggler span:nth-child(1) {
  transform: rotate(-45deg);
  top: 18px;
}

body.on header button.navbar-toggler span:nth-child(2) {
  display: none;
}

body.on header button.navbar-toggler span:nth-child(3) {
  transform: rotate(45deg);
}

.dropdown-item {
  white-space: inherit;
}

/*次選單*/

.owl-carousel.siderbar-nav .owl-stage {
  margin-left: auto;
  margin-right: auto;
}

.siderbar-nav {
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: center;
}

.siderbar-nav .owl-dots {
  margin-top: 0 !important;
  padding-bottom: 0.25em;
  line-height: 0.5;
}

.siderbar-nav.owl-theme .owl-nav {
  margin-top: 0;
}

.siderbar-nav.owl-theme .owl-dots .owl-dot span {
  width: 6px;
  height: 6px;
  margin-bottom: 0;
  margin-top: 0;
}

.siderbar-nav.owl-theme .owl-dots .owl-dot.active span,
.siderbar-nav.owl-theme .owl-dots .owl-dot:hover span {
  border: solid 1px #fff;
  width: 8px;
  height: 8px;
  margin-bottom: -1px;
  background: rgba(255, 255, 255, 0.2);
}

.owl-theme.siderbar-nav .owl-nav [class*="owl-"] span {
  margin-top: -2px;
  display: block;
}

.owl-carousel.siderbar-nav .owl-nav button.owl-next,
.owl-carousel.siderbar-nav .owl-nav button.owl-prev {
  position: absolute;
  top: 0;
  width: 20px;
  height: 100%;
  margin: 0;
  border-radius: 0;
  background: #346d9f;
  line-height: 1;
  text-align: center;
  border: solid 1px #346d9f;
  color: #fff;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.8);
}

.owl-carousel.siderbar-nav .owl-nav [class*="owl-"]:hover {
  background: #447a6a;
}

.owl-carousel .owl-nav button.owl-next {
  left: 100%;
}

.owl-carousel .owl-nav button.owl-prev {
  right: 100%;
}

.owl-carousel .owl-nav button span {
  position: relative;
  text-indent: -99999999px;
  display: block;
}

.owl-carousel .owl-nav button.owl-next span:after,
.owl-carousel .owl-nav button.owl-prev span:after {
  content: "";
  position: absolute;
  top: 0;
  font-weight: 900;
  display: block;
  text-indent: 0;
}

.owl-carousel .owl-nav button.owl-next span:after {
  content: "\f0da";
  left: 50%;
  -ms-transform: translate(-25%, 0);
  -webkit-transform: translate(-25%, 0);
  transform: translate(-25%, 0);
}

.owl-carousel .owl-nav button.owl-prev span:after {
  content: "\f0d9";
  right: 50%;
  -ms-transform: translate(25%, 0);
  -webkit-transform: translate(25%, 0);
  transform: translate(25%, 0);
}

.siderbar-nav .item {
  overflow: hidden;
  padding: 2px 0;
  box-shadow: 5px 0 1px -4px rgba(255, 255, 255, 0.5);
}

.siderbar-nav .item a {
  position: relative;
  padding: 8px 15px;
  transition: all 0.2s linear;
  color: #fff;
  white-space: nowrap;
}

.siderbar-nav .item.active a:before,
.siderbar-nav .item.active a:after {
  content: "";
  position: absolute;
  z-index: 2;
  bottom: -5px;
  width: 10px;
  height: 40px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
  border-radius: 100%;
}

.siderbar-nav .item.active a:before {
  right: 100%;
}

.siderbar-nav .item.active a:after {
  left: 100%;
}

.siderbar-nav .item.active a,
.siderbar-nav .item.active:hover a {
  color: #fff;
  font-weight: 700;
  border-bottom: solid 4px #fff;
}

/*首頁形象*/
.carousel-item .img-box {
  width: 100%;
  height: 28vw;
  margin: 0 auto;
}

[class^="carousel-control"] img {
  max-width: 100%;
}

.carousel-control-next img {
  -ms-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}

.carousel-control-prev,
.carousel-control-next {
  display: inline-block;
  top: auto;
  bottom: 5rem;
  left: 1rem;
  /* right:1rem; */
  opacity: 1;
  padding: 0 0.4rem;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background: #fff;
  text-align: center;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  color: #326c9e;
  line-height: 45px;
}

.carousel-control-prev,
.carousel-control-next,
.carousel-control-prev img,
.carousel-control-next img {
  -o-transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  transition: all 0.3s linear;
}

.carousel-control-prev {
  margin-bottom: 4rem;
}

.carousel-control-next {
  border-left: none;
}

.carousel-control-prev:hover {
  background: rgba(159, 143, 118, 0.7);
  -ms-transform: scale(0.85);
  -webkit-transform: scale(0.85);
  transform: scale(0.85);
}

.carousel-control-next:hover {
  background: rgba(159, 143, 118, 0.7);
  -ms-transform: scale(0.85);
  -webkit-transform: scale(0.85);
  transform: scale(0.85);
}

.carousel-control-prev:hover img {
  -ms-transform: translate(-1.5rem, 0);
  -webkit-transform: translate(-1.5rem, 0);
  transform: translate(-1.5rem, 0);
}

.carousel-control-next:hover img {
  -ms-transform: scaleX(-1) translate(-1.5rem, 0);
  -webkit-transform: scaleX(-1) translate(-1.5rem, 0);
  transform: scaleX(-1) translate(-1.5rem, 0);
}

.carousel-control-prev span,
.carousel-control-next span {
  display: none;
}

.carousel-item .mb {
  display: none !important;
}

.carousel-indicators {
  display: none;
}

.carousel-indicators li {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #d6d6d6;
  border: 0;
  opacity: 1 !important;
}

.carousel-indicators .active {
  background: #447a6a;
}

/*首頁*/
.index .photo img {
  max-width: 100%;
  max-height: 100%;
  -webkit-transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  -moz-transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  -o-transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  -ms-transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.index-news .item:hover .photo {
  -webkit-transform: scale(1.25);
  -ms-transform: scale(1.25);
  transform: scale(1.25);
  transform-origin: center top;
}

.nav-style.owl-theme .owl-nav {
  margin-top: 0;
}

.nav-style.owl-carousel .owl-nav button.owl-next {
  /* position:static */
  left: 100%;
  transform: translate(0, -50%);
}

.nav-style.owl-carousel .owl-nav button.owl-prev {
  /* position:static */
  right: 100%;
  transform: translate(0, -50%);
}

.nav-style.owl-carousel .owl-nav button {
  position: absolute;
  top: 50%;
  left: inherit;
  right: inherit;
  width: 40px;
  height: 40px;
  margin-top: 0;
  margin-bottom: 0;
  background: #326c9e;
  color: #fff;
  text-align: center;
  line-height: 0;
  /* text-indent: 0; */
  /* border-radius: 100%; */
  /* transform: translateY(-50%); */
}

.nav-style.owl-carousel .owl-nav button.owl-next span:after,
.nav-style.owl-carousel .owl-nav button.owl-prev span:after {
  position: static;
  -ms-transform: translate(0, 0);
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0);
  line-height: 40px;
}

.nav-style.owl-carousel .owl-nav button.owl-next span:after {
  content: "\f054";
}

.nav-style.owl-carousel .owl-nav button.owl-prev span:after {
  content: "\f053";
}

/*首頁-快速連結*/
.hot-key {
  position: relative;
  z-index: 1;
}

.hot-key ul {
  padding-left: 0;
  list-style: none;
  margin-bottom: 0;
  display: flex;
  overflow: hidden;
  -ms-flex-pack: center;
  justify-content: center;
  box-shadow: 0 2px 12px 2px rgba(0, 0, 0, 0.5);
  /* border-radius: 7rem; */
  /* border: solid 6px #ffffff; */
}

.hot-key ul li {
  border-top: 0;
  width: 25%;
  box-shadow: 0 0px 12px rgba(0, 0, 0, 0.8);
}

.hot-key ul li a {
  text-decoration: none;
  text-align: center;
  padding: 1.5rem 0;
  display: block;
  color: #fff;
}

.hot-key ul li:nth-child(1) {
  background: #447a6a;
}

.hot-key ul li:nth-child(2) {
  background: #9f8f76;
}

.hot-key ul li:nth-child(3) {
  background: #326c9e;
}

.hot-key ul li:nth-child(4) {
  background: #a4426b;
}

.hot-key ul li:nth-child(1):hover {
  background: #2f6152;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5) inset;
}

.hot-key ul li:nth-child(2):hover {
  background: #807057;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5) inset;
}

.hot-key ul li:nth-child(3):hover {
  background: #1a5283;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5) inset;
}

.hot-key ul li:nth-child(4):hover {
  background: #882c52;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5) inset;
}

.hot-key ul li .icon {
  width: 30px;
  margin: 0 auto;
}

.hot-key ul li .icon img {
  max-width: 100%;
  max-height: 100%;
}

.hot-key ul li h4 {
  font-size: 1.25rem;
  letter-spacing: 2px;
  margin: 0.5rem 0 0;
  o-transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  transition: all 0.3s linear;
}

.hot-key ul li:nth-child(4) h4 br {
  display: none;
}

/*首頁－服務時間*/
.service-time .container {
  padding-top: 3rem;
  padding-bottom: 1rem;
}

.service-time:after {
  content: "";
  clear: both;
  display: block;
}

.service-time .title-box {
  position: relative;
  text-align: center;
}

.service-time .title-box .mj {
  margin-bottom: 2rem;
  font-size: 2rem;
  letter-spacing: 2px;
  font-weight: 400;
  color: #326c9e;
}

.service-time .time {
  position: relative;
  list-style: none;
  padding: 1rem 0;
  margin: 0;
}

.service-time .time .box2 {
  width: 100%;
  text-align: center;
  color: #a4426b;
}

.service-time .time .box1 p {
  display: inline-block;
}

.service-time .time-mj {
  display: inline;
}

.service-time .morning svg path {
  fill: #fce540;
}

.service-time .noon svg path {
  fill: #f39118;
}

.service-time .night svg path {
  fill: #326c9e;
}

.service-time .time-mj span {
  border-radius: 3px;
  margin-left: 10px;
  margin-right: 0.5rem;
  padding: 0.25rem 0.5rem 0 1rem;
  font-size: 1rem;
  letter-spacing: 0.5rem;
  width: 74px;
}

.service-time .morning .time-mj span {
  background: #fce540;
}

.service-time .noon .time-mj span {
  background: #f39118;
}

.service-time .night .time-mj span {
  background: #326c9e;
  color: #fff;
}

.service-time .time .tt {
  width: 72px;
  margin-left: 40px;
  margin-right: 1rem;
  padding: 0.25rem 0.5rem 0 1rem;
  margin-left: 10px;
  margin-right: 0.5rem;
}

/*首頁內容*/
.index .main section {
  padding: 2rem 0;
}

.ix-title {
  position: relative;
  font-size: 2rem;
  margin-bottom: 2rem;
}

.ix-title:before {
  content: "";
  width: 40%;
  border-bottom: solid thin #326c9e;
  position: absolute;
  top: 50%;
  left: 0;
  -o-transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  transition: all 0.3s linear;
}

.ix-title.w-100:before {
  width: 100%;
}

.ix-title span {
  background: #fff;
  padding: 0 10px;
  display: table;
  letter-spacing: 2px;
  font-weight: 400;
  color: #326c9e;
  position: relative;
  z-index: 1;
}

.ix-title span:before {
  content: "";
  display: block;
  width: 0.25rem;
  height: 1.25rem;
  background: #326c9e;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;
}

.ix-title span:after {
  content: "";
  display: block;
  width: 20px;
  height: 4px;
  background: #326c9e;
  position: absolute;
  top: 50%;
  right: -20px;
  transform: translateY(-50%);
}

.ix-title-box {
  display: block;
  clear: both;
  overflow: hidden;
}

.ix-title-box .ix-title {
  float: left;
  width: calc(100% - 100px);
}

.ix-title-box .btn-style {
  float: right;
  margin-top: 2px;
  text-align: center;
  width: 80px;
  min-width: inherit;
  min-height: inherit;
  padding: 0.25rem;
  font-size: 0.9rem;
}

.ix-title-box .ix-title:after {
  content: "";
  opacity: 0;
  position: absolute;
  right: 80%;
  top: 50%;
  width: 5px;
  height: 5px;
  margin-top: -2px;
  border-radius: 100%;
  background: #326c9e;
  -o-transition: all 0.5s ease-in-out;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}

.ix-title-box:hover .ix-title span:before {
  width: 1.25rem;
  background: #f39118;
}

.ix-title-box:hover .ix-title:before {
  width: 100%;
}

.ix-title-box:hover .ix-title:after {
  right: 0;
  opacity: 1;
}

/*首頁－最新消息*/
.index-news .owl-stage {
  padding-bottom: 0.5em;
}

.index-news .item {
  overflow: hidden;
  padding-bottom: 60px;
  border-radius: 0.5rem;
}

.index-news .item .photo {
  position: relative;
  -o-transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  transition: all 0.3s linear;
}

.index-news .item .info {
  position: relative;
  z-index: 1;
  padding: 0.5rem 0.5rem 0.5rem;
  background: #326c9e;
  color: #fff;
}

.index-news .info .date {
  display: inline-block;
  padding: 0 0.5rem;
  font-size: 0.9rem;
  background: #f39118;
  border-radius: 30px;
}

.index-news .info .view {
  position: absolute;
  right: 0.5rem;
  top: -20px;
  min-width: 40px;
  height: 40px;
  padding: 0.25rem 0.5rem 0;
  border-radius: 3rem;
  background: #fff;
  text-align: center;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  color: #326c9e;
  line-height: 1;
  font-size: 0.9rem;
}

.index .index-news .owl-nav {
  width: 100%;
  height: 40px;
  margin: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: none;
}

.index .index-news .owl-nav button {
  position: absolute;
  margin: 0;
  outline: none;
}

.index .index-news .owl-nav button:hover {
  background: transparent;
}

.index .index-news .owl-nav button:hover span {
  opacity: 0.5;
}

.index .index-news .owl-nav button {
  display: block;
  font-size: 1.5em;
  height: 36px;
  line-height: 31px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 12px 0 12px 20px;
  border-color: transparent transparent transparent #2f7e20;
}

.index .index-news .owl-nav button span {
  display: none;
}

.index .index-news .owl-nav .owl-prev {
  left: -50px;
  top: 50%;
  transform: translateY(-50%) rotate(-180deg);
}

.index .index-news .owl-nav .owl-next {
  right: -50px;
}

/*首頁－博愛影音*/
.index-video {
  position: relative;
  overflow: hidden;
  z-index: 1;
  background: linear-gradient(135deg, #fff 0%, #e0eff7 100%);
}

.index-video:before,
.index-video:after,
.index-video .container:before,
.index-video .container:after {
  content: "";
  pointer-events: none;
  position: absolute;
  z-index: -1;
  width: 0;
  height: 0;
  border-style: solid;
}

.index-video:before {
  border-width: 320px 10000px 319px 0;
  border-color: transparent rgba(148, 201, 213, 0.4) transparent transparent;
  top: 50%;
  right: 0;
  transform: translateY(-47%);
  z-index: -2;
}

.index-video:after {
  border-width: 320px 0 319px 10000px;
  border-color: transparent transparent transparent rgba(225, 243, 238, 0.5);
  top: 0;
  right: 0;
  transform: translateY(-40%);
  z-index: -3;
}

.index-video .container:before {
  top: 0;
  left: 0;
  border-width: 0 10000px 319px 0;
  border-color: transparent #fff transparent transparent;
}

.index-video .container:after {
  bottom: 0;
  right: 0;
  border-width: 319px 10000px 0 0;
  border-color: transparent rgba(96, 156, 208, 0.3) transparent transparent;
  border-color: transparent rgba(192, 209, 218, 0.72) transparent transparent;
}

.index .main .index-video h2 span {
  background: #eff8f6;
}

.index-video .box-wrap {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
}

.index-video .box {
  width: 60%;
}

.index-video .box+.box {
  width: 40%;
  padding-left: 2rem;
}

.index-video .box .item {
  margin-bottom: 2rem;
}

.index-video .video-wrap {
  position: relative;
  padding: 0;
  overflow: hidden;
}

.index-video .video-wrap a {
  display: block;
  position: relative;
}

.index-video .video-wrap a:before {
  content: "\f144";
  font-weight: 900;
  font-size: 5rem;
  color: rgba(255, 255, 255, 0.9);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}

.index-video .btn-wrap {
  margin-top: 1rem;
  margin-bottom: 2rem;
}

/*首頁－衛教專欄*/
.edu {
  position: relative;
  z-index: 1;
  box-shadow: 0 -8px 15px rgba(0, 0, 0, 0.1);
}

.edu ul {
  position: relative;
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
}

.edu ul:after {
  content: "";
  display: block;
  clear: both;
}

.edu ul li:nth-child(4n) {
  margin-right: 0;
}

.edu .item {
  position: relative;
  text-decoration: none;
  display: block;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  overflow: hidden;
}

.edu ul li:focus,
.edu .item:focus,
.edu ul li .content:focus {
  outline: none;
}

.edu ul li .date {
  background: #326c9e;
  color: #fff;
  display: inline-block;
  vertical-align: middle;
  margin-right: -1rem;
  padding: 0.5rem 1rem;
  text-align: center;
  font-size: 14px;
  line-height: 1;
  z-index: 2;
  border-radius: 3px 0 0 3px;
}

.edu ul li .date span {
  display: block;
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
}

.edu ul li .photo {
  overflow: hidden;
}

.edu ul li .content {
  padding: 1rem;
  background: #fff;
  border: solid thin #f2f2f2;
}

.edu ul li .content h3 {
  font-size: 1.25rem;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-weight: 500;
  margin-top: 0.5rem;
}

.edu ul li .content article {
  height: 25px;
  font-size: 1rem;
  line-height: 1.5;
  margin: 1rem 0 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.edu ul li .info {
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  margin-top: 1rem;
  position: relative;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.edu ul li .info span {
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  background: #fff;
  color: #326c9e;
  z-index: 2;
  font-weight: 700;
}

.edu ul li .info i {
  display: inline-block;
  margin-right: 0.25rem;
}

.edu ul li .info span+span {
  margin-left: 1em;
}

/*首頁－活動資訊、學術課程*/
.index .main section.paper {
  padding-top: 0;
}

.index .paper {
  position: relative;
  z-index: 2;
  background: #fff;
}

.index .paper .container {
  display: flex;
}

.index .paper .box {
  width: 50%;
}

.index .paper .box+.box {
  margin-left: 2em;
}

.index .paper .box h2:before {
  width: 100%;
}

.index .paper .box .head a {
  display: flex;
  align-items: self-start;
  text-decoration: none;
}

.index .paper .box .head a:hover .photo {
  -webkit-transform: scale(0.98);
  -ms-transform: scale(0.98);
  transform: scale(0.98);
}

.index .paper .box .head .photo {
  width: 280px;
  overflow: hidden;
  -webkit-transition: all 3s cubic-bezier(0.165, 0.84, 0.44, 1);
  -webkit-transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  -moz-transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  -o-transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  -ms-transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.index .paper .box .head a:hover h3 {
  color: #447a6a;
}

.index .paper .box .head .content {
  width: calc(100% - 300px);
  padding-left: 1.5em;
}

.index .paper .box .head .content h3 {
  font-size: 1.3em;
  font-weight: 500;
}

.index .paper .box .head .content h3 span {
  display: block;
  font-size: 0.85em;
}

.index .paper .box .head .content article {
  line-height: 1.5;
  color: #444;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.index .paper .box ul {
  padding-left: 0;
  list-style: none;
  margin: 1em 0;
}

.index .paper .box ul li {
  border-top: dotted 1px #ddd;
}

.index .paper .box ul li a:after {
  content: "\f105";
  font-weight: 700;
  position: absolute;
  top: 50%;
  right: 1em;
  transform: translateY(-50%);
  transition: all 0.2s linear;
}

.index .paper .box ul li a {
  display: block;
  text-decoration: none;
  position: relative;
  padding: 1em;
  padding-right: 1.8em;
}

.index .paper .box ul li a:hover:after {
  color: #447a6a;
  right: 0.5em;
}

.index .paper .box ul li a:hover h3 {
  color: #447a6a;
}

.index .paper .box ul li h3 {
  font-size: 1em;
  margin-bottom: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.index .paper .box ul li h3 span {
  margin-right: 2em;
}

/*底部選單*/
.index .main section.f-menu {
  padding-top: 0;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
}

.f-menu .item a {
  overflow: hidden;
  display: flex;
  text-decoration: none;
  background: #447a6a;
  border-right: solid 4px #447a6a;
}

.f-menu .item .content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 1rem 0 0.5rem;
}

.f-menu .owl-item:nth-child(4n) a {
  background: #a4426b;
  border-color: #a4426b;
}

.f-menu .owl-item:nth-child(4n-1) a {
  background: #326c9e;
  border-color: #326c9e;
}

.f-menu .owl-item:nth-child(4n-2) a {
  background: #9f8f76;
  border-color: #9f8f76;
}

.f-menu .item .content .icon {
  width: 60px;
  height: 60px;
  background: #fff;
  border-radius: 50%;
  max-width: 100%;
  max-height: 100%;
}

.f-menu .item .content p {
  overflow: hidden;
  height: 55px;
  margin: 0;
  margin-top: 0.5em;
  padding-left: 1rem;
  padding-right: 1rem;
  color: #fff;
  text-align: center;
}

.f-menu .item .photo {
  width: 50%;
}

.f-menu .item .photo img {
  max-width: 100%;
  max-height: 100%;
}

.owl-theme .owl-dots .owl-dot.active span,
.owl-theme .owl-dots .owl-dot:hover span {
  background: #447a6a;
}

.index .f-menu .owl-nav {
  width: 100%;
  height: 40px;
  margin: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: none;
}

.owl-theme .owl-dots .owl-dot:focus {
  outline: none;
}

.index .f-menu .owl-nav button {
  position: absolute;
  margin: 0;
  outline: none;
}

.index .f-menu .owl-nav button:hover {
  background: transparent;
}

.index .f-menu .owl-nav button:hover span {
  opacity: 0.5;
}

.index .f-menu .owl-nav button {
  display: block;
  font-size: 1.5em;
  height: 36px;
  line-height: 31px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 12px 0 12px 20px;
  border-color: transparent transparent transparent #2f7e20;
}

.index .f-menu .owl-nav button span {
  display: none;
}

.index .f-menu .owl-nav .owl-prev {
  left: -50px;
  top: 50%;
  transform: translateY(-50%) rotate(-180deg);
}

.index .f-menu .owl-nav .owl-next {
  right: -50px;
}

/*重大訊息框*/
.lotung_mesg {
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1001;
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
}

.lotung_mesg .wrap {
  margin: auto;
  width: 95%;
  background: #f2f2f2;
  left: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  max-width: 1000px;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  box-shadow: 0 3px 1rem rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}

.lotung_mesg .container> :not(.content) {
  width: 100%;
}

.lotung_mesg .wrap .mesg-close {
  border: 0;
  background: #444;
  color: #fff;
  width: 50px !important;
  height: 50px;
  line-height: 50px;
  border-radius: 50px;
  position: absolute;
  top: -25px;
  right: 0;
  outline: none;
  cursor: pointer;
  background: #f39118;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.15);
  -o-transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.1s linear;
  transition: all 0.1s linear;
}

.lotung_mesg .wrap .mesg-close:hover {
  background: #447a6a;
}

.lotung_mesg .container {
  max-height: 90vh;
  max-width: 1000px;
  padding: 1em;
  position: relative;
  -ms-flex-pack: center;
  justify-content: center;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -ms-flex-line-pack: center;
  align-content: center;
}

.lotung_mesg:not(.mesg_alert) .container {
  overflow: hidden;
  overflow-y: scroll;
}

.lotung_mesg .container:only-child(".photo") {
  display: -ms-block;
  display: block;
}

.lotung_mesg .container .btn-style {
  min-width: 80px;
}

.lotung_mesg .photo {
  text-align: center;
}

.lotung_mesg .content {
  padding: 0;
}

.lotung_mesg .photo img {
  max-width: 100%;
  max-height: 100%;
}

.lotung_mesg .photo+.content {
  width: calc(100% - 400px);
  padding-left: 1.5em;
  text-align: left;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-line-pack: center;
  align-content: center;
}

.lotung_mesg.mesg_alert {
  display: none;
}

.lotung_mesg.mesg_alert.open {
  display: block;
}

.lotung_mesg.mesg_alert .wrap {
  width: auto;
}

/*頁尾*/
footer {
  position: relative;
  background: linear-gradient(135deg, #326c9e 0%, rgba(71, 136, 191, 0.8) 100%),
    url(../../assets/sidebar-bg.png) center/cover;
  font-size: 0.9em;
  color: #fff;
}

footer .container {
  max-width: 1280px;
  display: flex;
  padding-top: 2rem;
  padding-bottom: 2rem;
  align-items: center;
}

footer .container div+div {
  margin-left: 2em;
}

footer h4 {
  font-size: 0.9em;
  border-bottom: solid thin #ddd;
  padding-bottom: 1em;
  margin-bottom: 1em;
  color: #444;
}

footer .awards {
  width: calc(100% / 3);
  margin-bottom: 1em;
}

footer .awards ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}

footer .awards ul:after {
  content: "";
  display: block;
  clear: both;
}

footer .awards ul li {
  max-width: calc(100% / 3);
  display: inline-block;
  margin: 0.5em 0;
  padding: 0 0.8em;
}

footer .awards ul li:nth-child(5n + 1) {
  /* clear:both */
}

footer .awards ul li .photo {
  /* width:90%; */
  /* height: 100%; */
  /* margin: auto; */
  /* text-align: center; */
}

footer .awards .photo img {
  max-width: 100%;
  max-height: 100px;
}

footer .awards ul li p {
  width: calc(100% - 36px);
  font-size: 13px;
  line-height: normal;
  margin-bottom: 0;
  padding: 0 0.5em;
}

footer .foot-map {
  width: calc(100% / 3);
}

footer .foot-map iframe {
  width: 100%;
  height: 130px;
}

footer .foot-map a:hover {
  color: #fff;
  text-decoration: underline;
}

footer .foot-contact {
  width: calc(100% / 3);
  border-left: solid thin rgba(255, 255, 255, 0.2);
  border-right: solid thin rgba(255, 255, 255, 0.2);
}

footer .foot-contact>ul {
  list-style: none;
  padding-left: 0;
  margin: 1rem 0;
  display: flex;
  justify-content: space-around;
}

footer .foot-contact p {
  margin: 0;
  font-size: 0.9em;
  padding-left: 1em;
  border-top: solid thin #ddd;
  padding-top: 1em;
}

footer .foot-contact li.mb_block {
  display: none;
}

footer .foot-contact ul li a {
  text-decoration: none;
  display: block;
  text-align: center;
  transition: none;
  padding: 10px;
  -o-transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  transition: all 0.3s linear;
}

footer .foot-contact ul li i {
  font-size: 30px;
  margin-bottom: 0.2em;
  display: block;
  -o-transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  transition: all 0.3s linear;
}

.copyright {
  background: #326c9e;
  color: #fff;
  /* text-align:center; */
  /* padding:.5rem 15px; */
  font-size: 0.9rem;
}

.copyright .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  /* max-width: 800px; */
}

.copyright a {
  color: #fff;
}

.copyright p {
  margin-bottom: 0;
}

.tools-mb {
  display: none;
}

/*右側選單*/
.btn-right {
  text-align: center;
  position: fixed;
  right: 5px;
  bottom: 90px;
  /* transform:translateY(-50%); */
  z-index: 10;
}

.btn-right ul {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  border-radius: 0.75rem 0 0 0.75rem;
  overflow: hidden;
}

.btn-right ul li {
  background: #326c9e;
  -o-transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  transition: all 0.3s linear;
}

.btn-right ul li+li:before {
  content: "";
  width: 60%;
  display: block;
  margin: 0 auto;
  border-top: solid thin #fff;
}

.btn-right ul li:hover {
  background: #326c9e;
}

.btn-right ul li:nth-child(3) {
  min-height: 60px;
  cursor: pointer;
  position: relative;
}

.btn-right ul li a {
  display: block;
  padding: 1rem 0.75rem;
  color: #fff;
  display: block;
  text-decoration: none;
  text-align: center;
}

.btn-right ul li .icon {
  width: 30px;
  margin: 0 auto;
}

.btn-right ul li h4 {
  font-size: 1em;
  letter-spacing: 2px;
  margin: 0.5em auto 0;
}

.btn-right ul li h4 span {
  display: block;
  width: 19px;
  word-break: break-all;
  text-align: center;
  letter-spacing: 0;
  margin: auto;
}

.btn-right ul li .icon img {
  max-width: 100%;
  max-height: 100%;
}

.btn-right ul li i {
  color: #fff;
  font-size: 1.2em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#gotop {
  display: none;
  cursor: pointer;
  position: fixed;
  right: 5px;
  bottom: 20px;
  z-index: 2;
  width: 50px;
  height: 50px;
  background: #447a6a;
  border-radius: 100%;
  color: #fff;
  text-align: center;
  line-height: 50px;
}

#gotop:hover {
  background: #2f6152;
}

#gotop:hover i {
  transform: translate(0, -50%);
}

/*內頁架構*/
.m-wrap {
  padding-bottom: 3rem;
}

.container {
  max-width: 1300px;
  padding: 0 2rem;
}

/*內頁形象*/
.banner .container {
  position: relative;
  height: 160px;
}

.banner h2 {
  display: inline-block;
  margin-bottom: 0;
  font-size: 1.6em;
  text-align: center;
  padding: 5px 10px;
  background: #326c9e;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
}

.banner h2:before {
  content: "";
  width: 2px;
  height: 100%;
  background: #326c9e;
  position: absolute;
  left: -5px;
  top: 0;
}

/*分頁*/
.pagination {
  justify-content: center;
  margin: 2em 0 0;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.pagination .page-item {
  margin-bottom: 0.5em;
}

.pagination .page-item+.page-item {
  margin-left: 0.5em;
}

.pagination .page-item .page-link,
.page-item:first-child .page-link {
  border-radius: 0;
}

.pagination .page-item .page-link {
  border-color: #ddd;
  color: #447a6a;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  padding: 0;
}

.pagination .page-item .page-link.ten {
  width: auto;
  padding-left: 5px;
  padding-right: 5px;
  font-size: 0.8rem;
}

.page-item.active .page-link {
  background: #447a6a;
  color: #fff;
  border-color: #447a6a;
}

.page-item.disabled .page-link {
  color: #6c757d;
}

/*RWD編輯器表格(X捲軸)*/
.table-container table td {
  min-width: 100px;
  padding: 5px;
  border: 1px solid #ccc;
  white-space: inherit;
}

.table-container {
  overflow-x: scroll;
}

.register .login {
  max-width: 600px;
  margin: 2rem auto;
  background: #f2f2f2;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 5px 12px rgb(0 0 0 / 15%);
  background: #fff;
}

.m-wrap .title2 .mjTitle {
  display: block;
  padding: 1.5rem rem 0 1.2rem;
  margin-bottom: 2rem;
  border-top: solid thin #ddd;
  border-bottom: solid thin #ddd;
  position: relative;
}

.register .login .item ul,
.register .login .item p {
  padding-left: 40px;
  list-style: none;
  margin: 0;
}

.register .login .item ul li:not(:last-child) {
  margin-right: 1rem;
}

.register .btn-wrap {
  display: flex;
  justify-content: center;
  margin: 2rem 0 0;
}

body {
  position: relative;
  padding-top: 123px;
}

body,
h3,
.form-control {
  font-size: 18px;
  line-height: 1.6;
}

.form-group {
  display: flex;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.register .login .item ul li {
  display: inline-block;
  line-height: normal;
  padding: 0.5rem 0.5rem 0.5rem 1.5rem;
}

.custom-control-label::after {
  position: absolute;
  top: 0.25rem;
  left: -1.5rem;
  display: block;
  width: 1rem;
  height: 1rem;
  content: "";
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}

body {
  font-size: 18px;
}

.form-group input,
.form-group select {
  padding: 0 0.5rem;
  width: calc(100% - 40px);
  height: 44px;
  line-height: 44px;
  border: solid thin #ddd;
  outline: none;
  transition: all 0.3s linear;
  border-radius: 3px;
}

.form-group label {
  margin-bottom: 0;
  margin-right: 0.5rem;
  width: 30px;
}

.form-group label i {
  color: #447a6a;
  font-size: 1.5rem;
}

.i-cancel .title2 .mjTitle {
  display: block;
  padding: 1.5rem 0 1.2rem;
  margin-bottom: 2rem;
  border-top: solid thin #ddd;
  border-bottom: solid thin #ddd;
  position: relative;
  font-size: 1.75rem;
  font-weight: 400;
}

.i-cancel .title2 .mjTitle:before {
  content: '';
  display: block;
  width: 40px;
  height: 4px;
  background: #447A6A;
  position: absolute;
  top: -3px;
  left: 0;
}

.i-cancel .form-group input {
  background-color: #fff;
}

.i-cancel .custom-radio input:checked~.custom-control-label::before {
  color: #fff;
  border-color: #f39118;
  background-color: #f39118;
  box-shadow: none;
}

.i-cancel .custom-radio .custom-control-label {
  font-size: 18px;
}

.i-cancel .custom-radio .custom-control-label::before {
  background-color: #ddd;
}

.i-cancel .custom-radio input:not(:disabled):active~.custom-control-label::before {
  color: #fff;
  background-color: #b3d7ff;
  border-color: #ddd;
}

.i-cancel .form-group input {
  font-size: 18px;
  color: #495057;
}

#birthTxt {
  font-size: 18px;
  color: #212529;
}

.i-cancel .btn-wrap .btn-style {
  padding: 0.782rem 1rem;
}

.i-cancel table {
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 3px 12px rgb(0 0 0 / 10%);
}

.i-cancel table thead {
  background-color: #447a6a;
  color: #fff;
  font-size: 20px;
}

.i-cancel table thead tr th {
  font-weight: 400;
  vertical-align: middle;
  text-align: center;
}

.i-cancel table tbody tr td {
  vertical-align: middle;
  border-right: solid thin #ddd;
  text-align: center;
}

.i-cancel table tbody tr td:last-child {
  border-right: none;
}

.i-cancel table tbody tr th {
  vertical-align: middle;
  border-right: solid thin #ddd;
  text-align: center;
  padding: .6rem 1rem;
}

.i-cancel table tbody tr {
  border-bottom: solid thin #ddd;
}

.i-cancel table tbody tr:last-child {
  border-bottom: none;
}

.i-cancel table tbody tr td button {
  background-color: #4886b8;
  border-radius: 50px;
  line-height: 24px;
}
.i-cancel table tbody tr td button:hover {
  background-color: #4886b8;
}
.i-cancel table tbody tr td button:enabled:hover {
    background: #4886b8;
    color: #ffffff;
    border-color: transparent;
    opacity: 1;
}

.i-cancel table tbody tr:nth-child(even) {
  background-color: #eef5f3;
}

.i-cancel .table-ftr-btn .btn-style:hover {
  cursor: pointer;
}

.i-cancel .table-ftr-btn .badge-success {
  background-color: #447a6a;
}

.i-cancel .table-ftr-btn .badge-primary {
  background-color: #4886b8;
}
</style>

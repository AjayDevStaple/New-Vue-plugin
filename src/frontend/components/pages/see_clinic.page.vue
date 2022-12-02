<template>
  <div class="register">
    <div class="title2">
      <h1 class="mjTitle"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
      see clinic number query        </font></font></h1>
    </div>
    <form id="form1" name="form1" method="post" action="#sidebar_3">
<div class="login w-100 d-flex flex-wrap justify-content-lg-between">
      <div class="form-group col-12 col-md-6 mb-3 mb-md-0">
        <label for=""><i class="fas fa-user-md"></i></label>
        <select v-model="selected" :required @change="changeLocation" class="custom-select" name="deptCode" id="deptCode">
          <option value=""><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Please select a subject</font></font></option>
                  <option  v-for="option in options" v-bind:value="option.id"  value="00"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Psychology and Psychiatry</font></font></option>
                  <option value="10"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">General Medicine</font></font></option>
                  <option value="11"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">dermatology</font></font></option>
                  <option value="13"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chest Medicine</font></font></option>
                  <option value="14"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Cardiovascular Medicine</font></font></option>
                  <option value="15"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Hematology Oncology</font></font></option>
                  <option value="16"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Gastrointestinal Hepatobiliary</font></font></option>
                  <option value="17"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nephrology</font></font></option>
                  <option value="18"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Metabolism</font></font></option>
                  <option value="19"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Neurology</font></font></option>
                  <option value="1A"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Family Medicine</font></font></option>
                  <option value="1C"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Division of Rheumatology</font></font></option>
                  <option value="1D"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Infectious Diseases</font></font></option>
                  <option value="1E"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Occupational Medicine</font></font></option>
                  <option value="20"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">general surgey</font></font></option>
                  <option value="21"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">plastic surgery</font></font></option>
                  <option value="22"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">orthopedics</font></font></option>
                  <option value="23"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Thoracic surgery</font></font></option>
                  <option value="24"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Cardiovascular Surgery</font></font></option>
                  <option value="26"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Colorectal Surgery</font></font></option>
                  <option value="27"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Urology</font></font></option>
                  <option value="29"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">neurosurgery</font></font></option>
                  <option value="2B"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Pediatric Surgery</font></font></option>
                  <option value="2X"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ophthalmology</font></font></option>
                  <option value="2Y"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ENT</font></font></option>
                  <option value="37"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Obstetrics and Gynecology</font></font></option>
                  <option value="40"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Pediatrics</font></font></option>
                  <option value="60"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Diagnostic Radiology</font></font></option>
                  <option value="65"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Radiation Oncology</font></font></option>
                  <option value="70"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Rehabilitation Medicine</font></font></option>
                  <option value="80"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Anesthesiology</font></font></option>
                  <option value="D2"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Oral and Maxillofacial Surgery</font></font></option>
                  <option value="D6"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">dental</font></font></option>
                </select>
      <small id="deptCode_txt" class="red"></small>
      </div>
      <div class="col-12 col-md-6 d-flex align-items-center justify-content-center mb-0"><button type="button" class="btn-style" @click="handleSubmit" ><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Inquire</font></font></button></div>
    </div>
<input type="hidden" name="Send">
<input type="hidden" name="second" id="second" value="1">
<input type="hidden" name="deptChName" id="deptChName">
</form>
    <section style="position:relative;"><span id="main_dot" style="position:absolute;top:-120px"></span></section>

<h1 class="text-center"></h1>
    <div class="register-table no-x">
      <table class="table-border-radius">
        <thead>
          <tr>
            <td class="txt-big"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Current clinic number</font></font></td>
            <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">doctor</font></font></td>
            <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Consultation time</font></font></td>
            <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">consulting room</font></font></td>
            <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Location</font></font></td>
            <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Registration number</font></font></td>
            <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Viewed times</font></font></td>
          </tr>
        </thead>
        <tbody  v-if="this.showMore">

        
     </tbody>
      </table>
              </div>

             
    <div class="btn-wrap">
      <button type="button" onclick="javascript:location.href='health.php'" class="btn-style"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">News/ Video</font></font></button>
     
      <button type="button" onclick="javascript:location.href='register.php'" class="btn-style"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">I want to register</font></font></button>
    </div>
  </div>

</template>

<script lang="ts">
import { _services } from "./../../../Services/Api/index";
import { toRaw } from "vue";
export default {
  name: 'SeeClinic',
  components: {},
  methods: {
    handleSubmit() {
    

      const data = {

  deptCode: this.selected,


  idType: "1", 

  pass: "Kumar",

  userId: "webapp" 
}

      _services.outGetRegOpdSeqNo(data)
        .then((res) => {
          console.log(res.data.code)
          if (res.data.code == 200) {
            this.showMore = true;
          }
         
          this.respData = res.data.data;
          console.log(toRaw(this.respData))
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  data() {
    return {
      selected : "choosse",
     respData : [],
     showMore : false,
    }
  }
}
</script>

<style scoped src="../../components/pages/styles/see_clinic.page.css">

</style>
<template>
  <div class="register">
    <div class="title2">
      <h1 class="mjTitle">
        <span style="vertical-align: inherit;">
          
            see clinic number query
        </span>
      </h1>
    </div>
    <form id="form1" name="form1" method="post" action="#sidebar_3">
      <div class="login w-100 d-flex flex-wrap justify-content-lg-between">
        <div class="form-group col-12 col-md-6 mb-3 mb-md-0">
          <label for=""><i class="fas fa-user-md"></i></label>
          <select  v-model="selected"  v-on:change="changeLocation($event)" :required class="custom-select" name="deptCode"
            id="deptCode">
            <option value=""   >
   
                <span style="vertical-align: inherit;">Please select a subject</span>
        
            </option>
            <option  value="00">
     
                <span style="vertical-align: inherit;">Psychology and Psychiatry</span>
         
            </option>
            <option value="10">
            
                <span style="vertical-align: inherit;">General Medicine</span>
           
            </option>
            <option value="11">
          
                <span style="vertical-align: inherit;">dermatology</span>
       
            </option>
            <option value="13">
             
                <span style="vertical-align: inherit;">Chest Medicine</span>
      
            </option>
            <option value="14">
             
                <span style="vertical-align: inherit;">Cardiovascular Medicine</span>
       
            </option>
            <option value="15">
         
                <span style="vertical-align: inherit;">Hematology Oncology</span>
     
            </option>
            <option value="16">
    
                <span style="vertical-align: inherit;">Gastrointestinal Hepatobiliary</span>

            </option>
            <option value="17">
       
                <span style="vertical-align: inherit;">Nephrology</span>
    
            </option>
            <option value="18">
           
                <span style="vertical-align: inherit;">Metabolism</span>
     
            </option>
            <option value="19">
           
                <span style="vertical-align: inherit;">Neurology</span>
        
            </option>
            <option value="1A">
          
                <span style="vertical-align: inherit;">Family Medicine</span>
        
            </option>
            <option value="1C">
       
                <span style="vertical-align: inherit;">Division of Rheumatology</span>
       
            </option>
            <option value="1D">
             
                <span style="vertical-align: inherit;">Infectious Diseases</span>
      
            </option>
            <option value="1E">
          
                <span style="vertical-align: inherit;">Occupational Medicine</span>
        
            </option>
            <option value="20">

                <span style="vertical-align: inherit;">general surgey</span>

            </option>
            <option value="21">

                <span style="vertical-align: inherit;">plastic surgery</span>

            </option>
            <option value="22">
            
                <span style="vertical-align: inherit;">orthopedics</span>

            </option>
            <option value="23">

                <span style="vertical-align: inherit;">Thoracic surgery</span>
   
            </option>
            <option value="24">
    
                <span style="vertical-align: inherit;">Cardiovascular Surgery</span>
    
            </option>
            <option value="26">
     
                <span style="vertical-align: inherit;">Colorectal Surgery</span>
    
            </option>
            <option value="27">
     
                <span style="vertical-align: inherit;">Urology</span>
  
            </option>
            <option value="29">
           >
                <span style="vertical-align: inherit;">neurosurgery</span>
 
            </option>
            <option value="2B">
         
                <span style="vertical-align: inherit;">Pediatric Surgery</span>

            </option>
            <option value="2X">
            
                <span style="vertical-align: inherit;">ophthalmology</span>

            </option>
            <option value="2Y">
  
                <span style="vertical-align: inherit;">ENT</span>
  
            </option>
            <option value="37">

                <span style="vertical-align: inherit;">Obstetrics and Gynecology</span>

            </option>
            <option value="40">
          
                <span style="vertical-align: inherit;">Pediatrics</span>

            </option>
            <option value="60">

                <span style="vertical-align: inherit;">Diagnostic Radiology</span>

            </option>
            <option value="65">

                <span style="vertical-align: inherit;">Radiation Oncology</span>
  
            </option>
            <option value="70">

                <span style="vertical-align: inherit;">Rehabilitation Medicine</span>

            </option>
            <option value="80">

                <span style="vertical-align: inherit;">Anesthesiology</span>

            </option>
            <option value="D2">
        
                <span style="vertical-align: inherit;">Oral and Maxillofacial Surgery</span>
     
            </option>
            <option value="D6">

                <span style="vertical-align: inherit;">dental</span>

            </option>
          </select>
          <small id="deptCode_txt" class="red"></small>
        </div>
        <div class="col-12 col-md-6 d-flex align-items-center justify-content-center mb-0"><button type="button"
            class="btn-style" @click="handleSubmit">
   
              <span style="vertical-align: inherit;">Inquire</span>

          </button></div>
         
      </div>
      <input type="hidden" name="Send">
      <input type="hidden" name="second" id="second" value="1">
      <input type="hidden" name="deptChName" id="deptChName">
    </form>
    <section style="position:relative;"><span id="main_dot" style="position:absolute;top:-120px"></span></section>

    <h1 v-if="showMore" class="text-center subHeading">{{departmentName}}</h1>
    <div class="register-table no-x">
      <table class="table-border-radius">
        <thead>
          <tr>
            <td class="txt-big">

                <span style="vertical-align: inherit;">Current clinic number</span>

            </td>
            <td>

                <span style="vertical-align: inherit;">doctor</span>
  
            </td>
            <td>

                <span style="vertical-align: inherit;">Consultation time</span>

            </td>
            <td>

                <span style="vertical-align: inherit;">consulting room</span>

            </td>
            <td>
    
                <span style="vertical-align: inherit;">Location</span>
  
            </td>
            <td>
           
                <span style="vertical-align: inherit;">Registration number</span>
       
            </td>
            <td>

                <span style="vertical-align: inherit;">Viewed times</span>
       
            </td>
          </tr>
        </thead>
        <tbody v-if="showMore">
          <tr v-for="(value, index) in respData">
            <td> {{value.maxSeqNo}}</td>
            <td> {{value.docName}}</td>
            <td> {{value.shiftNo}}</td>
            <td> {{value.deptRoom}}</td>
            <td> {{value.roomDesc}}</td>
            <td> {{value.maxCount}}</td>
            <td> {{value.maxopdCnt}}</td>
          </tr>

        </tbody>
      </table>
    </div>


    <div class="btn-wrap">
      <button type="button" onclick="javascript:location.href='health.php'" class="btn-style">

          <span style="vertical-align: inherit;">News/ Video</span>
 </button>

      <button type="button" onclick="javascript:location.href='register.php'" class="btn-style">

          <span style="vertical-align: inherit;">I want to register</span>

      </button>
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
    }, 
    changeLocation(e) {
   
        var name = e.target.options[e.target.options.selectedIndex].text;
        this.departmentName = name;
        this.handleSubmit()
    }
  },
  data() {
    return {
      selected: "",
      respData: [],
      showMore: false,
      departmentName: "",
    
    }
  }
}
</script>

<style scoped src="../../components/pages/styles/see_clinic.page.css">

</style>
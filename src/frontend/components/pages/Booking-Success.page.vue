
   
    <template>
        <div class="container b-page">
          <span class="main-head"
            >
            <i class="fas fa-check-circle"></i>
            Registered successfully
          </span>
      
          <Row class="row">
           <div class="col-md-12 maindiv">
              <Row class="row maindiv-inner">
                  <Col class="col-md-6 firstDiv">
                      <div class="row">
                        <div class="col-md-6 firstDivCont">
                          <div class="divFlex">
                          <span class="tags">Consultation date</span>
                          <div>
                            <span>{{this.$route.params.opdDate}}</span>
                          <p>{{this.$route.params.shiftNo}}</p>
                          </div>
                          </div>
                        </div>
                        <div class="col-md-6 firstDivCont">
                          <div class="divFlex">
                              <span class="tags">Consultation Number</span>
                              <span>{{this.$route.params.seqNo}}</span>
                          </div>
                        </div>
                      </div>
              
                      <div class="row">
                        <div class="col-md-6 firstDivCont">
                         <div class="divFlex">
                          <span class="tags">Name</span>
                          <span>{{this.$route.params.docName}}</span>
                         </div>
                        </div>
                        <div class="col-md-6 firstDivCont">
                          <div class="divFlex">
                              <span class="tags">Consultation location</span>
                              <span>{{this.$route.params.roomDesc}}</span>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6 firstDivCont">
                         <div class="divFlex">
                          <span class="tags">doctor </span>
                          <span>{{this.$route.params.deptName}}</span>
                         </div>
                        </div>
                        <div class="col-md-6 firstDivCont"> 
                          <div class="divFlex">
                              <span class="tags">Refer to estimated time of arrival</span>
                              <span>{{this.$route.params.rsvOpdTime}}</span>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col class="col-md-6 secondDiv">

                         <p>
                          <strong>Registration is successful!</strong>
                         </p>
                        
                        <p class="mt-4">
                          <strong>General outpatient consultation time</strong>, morning consultation 8:30-12:00, afternoon consultation 13:30-16:30, evening consultation time 18:00-20:00
                        </p>
                        
                        <p>
                          <strong>Dental on-site registration time:</strong>
                           Monday to Friday 08:00-11:00 am, 13:00-15:30pm,
                        </p>
                        
                        <p> 18:00-1930 in the evening, 08:00-11:00 in the morning of Saturday</p>
                        
                        <hr>
                        
                         <p>
                          After the video-consultation patient completes the registration, please join the offical LINE and take the initiatve to send a screenshot of the registration completion. (ID: @lotungpohai, or click on the mobile phone link : <a href="#">https://lin.ee/aINIcxd</a> )
                         </p>
                        
                
                      
                    </Col>
              </Row>
              <div class="btn-div-suc text-center mb-3">
      
                <span class="btn">build a healthier self</span>
                    <span class="btn">News/Education</span>
                    <span class="btn blue-btn">Print</span>
    <!-- <p> {{this.$route.params}}</p> -->
            </div>
           </div>
          </Row>
        </div>
      </template>
    
    
 
    
    <script lang="ts">
    
    
    
    export default {
      name: 'Booking-Success',
      components: {},
      props: ['data'],
      methods: {},
      data() {
        return {
          value: 0
        }
      }
    }
    </script>
    
    <style scoped src="../pages/styles/Booking-success.page.css">

    </style>
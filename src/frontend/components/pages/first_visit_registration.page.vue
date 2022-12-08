<template>

    <div class="main mt-3">

        <div class="custom-registration-form">

            <h2 class="mjTitle">First Visit Registration Form</h2>

            <div class="remind-Block text-red">
                <b>Remind You!</b>
                <ol>
                    <li>Only when the information is filled out and archived are the online registration procedures completed.</li>
                    <li>Please bring your ID card to the rgistration counter 20 mintues in advance to go through the formalities
                    before going to the clinic.</li>
                    </ol>
                
            </div>

            <span class="subTitle">
                For your health to facilitate doctor's diagnosis and treatment and to save your consulation time, please
                be sure to fill in the following information correctly!
            </span>

            <div class="row">
                <div class="col-md-12">
                   <div class="customForm mt-5">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-input">
                                    <label>Name</label>
                                    <input class="form-control" type="text" placeholder="Enter Name" v-model="patName"/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-input genderInput d-flex mt-24">
                                    <label>Gender</label>
                                    <div class="singleRow d-flex">
                                        <div class="custom-radio">
                                            <input type="radio" id="maleInput" name="radio-group" value="1" v-model="sexType"/>
                                            <label for="maleInput">Male</label>
                                        </div>
                                        <div class="custom-radio ">
                                            <input type="radio" id="femaleInput"  name="radio-group" value="2" v-model="sexType"/>
                                            <label for="femaleInput">Female</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <span class="dotted-area"></span>
                            </div>
                            <div class="col-md-4">
                                <div class="form-input residence-input ">
                                    <div class="custom-radio d-inline-block">
                                        <input type="radio" id="idnumber" name="radio-group-1" value="99" v-model="idType"/>
                                        <label for="idnumber">ID Number</label>
                                    </div>
                                    <div class="custom-radio d-inline-block">
                                        <input type="radio" id="passport-number"  name="radio-group-1" value="56" v-model="idType"/>
                                        <label for="passport-number">Passport Number</label>
                                    </div>
                                    <br/>
                                    <div class="custom-radio ">
                                        <input type="radio" id="residence-number"  name="radio-group-1" value="564" v-model="idType"/>
                                        <label for="residence-number">Residence Card Number</label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="form-input">
                                    <label></label>
                                    <input class="form-control" type="text" placeholder="Enter Patdata" v-model="patData"/>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <span class="dotted-area"></span>
                            </div>

                            <div class="col-md-12">
                                <div class="form-input">
                                    <label>Cell Phone</label>
                                    <input class="form-control" type="text" placeholder="Enter mobile number" v-model="mobile"  />
                                </div>
                            </div>
                            <div class="col-md-12">
                                <span class="dotted-area"></span>
                            </div>

                            <div class="col-md-12">
                                <div class="form-input">
                                    <label>Date of Birth <span>(Date of the Republic of China)</span></label>
                                    <input class="form-control" type="text" v-model="birthDate" placeholder="Enter date of birth"/>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <span class="dotted-area"></span>
                            </div>



                          

                            <div class="col-md-12">
                                <div class="form-input residence-address d-flex align-items-center">
                                    <label>Residence address</label>
                                    <div class="residence-address-inner">
                                        <select class="form-control custom-select-1" id="cars" name="cars" defaultValue="1" v-model="foreverCity">
                                            <option value="1">Please Check</option>
                                            <option value="2">Volvo</option>
                                            <option value="3">Saab</option>
                                            <option value="4">Fiat</option>
                                            <option value="5">Audi</option>
                                        </select> 
                                        <select class="form-control custom-select-2" id="cars" name="cars" defaultValue="1" v-model="foreverAddrNameFlag">
                                            <option value="1">Please Check</option>
                                            <option value="2">Volvo</option>
                                            <option value="3">Saab</option>
                                            <option value="4">Fiat</option>
                                            <option value="5">Audi</option>
                                        </select> 
                                        <input class="form-control postal-code" placeholder="Postal code" v-model="foreverZipCode" /> 
                                        <input class="form-control complete-address" placeholder="Please enter the complete address" v-model="foreverAddrName" />
                                    </div>
                                </div>
                                
                            </div>

                            <div class="col-md-12">
                                <span class="dotted-area"></span>
                            </div>

                            <div class="col-md-12">
                                <div class="form-input mailing-checkbox">
                                    <div class="custom-radio d-inline-block">
                                        <input type="checkbox" id="mailing-checkbox"  name="radio-group" @change="check($event)"
                        v-model="sameAddress" />
                                        <label for="mailing-checkbox">same registered address</label>
                                    </div>
                                </div>

                                <div class="form-input residence-address d-flex align-items-center">
                                    <label>Mailing address</label>
                                    <div class="residence-address-inner">
                                        <select class="form-control custom-select-1" id="cars" name="cars" defaultValue="1" v-model="tmpCity">
                                            <option value="1">Please Check</option>
                                            <option value="2">Volvo</option>
                                            <option value="3">Saab</option>
                                            <option value="4">Fiat</option>
                                            <option value="5">Audi</option>
                                        </select> 
                                        <select class="form-control custom-select-2" id="cars" name="cars" defaultValue="1" v-model="tmpAddrNameFlag">
                                            <option value="1">Please Check</option>
                                            <option value="2">Volvo</option>
                                            <option value="3">Saab</option>
                                            <option value="4">Fiat</option>
                                            <option value="5">Audi</option>
                                        </select> 
                                        <input class="form-control postal-code" placeholder="Postal code" v-model="tmpZipCode" /> 
                                        <input class="form-control complete-address" placeholder="Please enter the complete address" v-model="tmpAddrName" />
                                    </div>
                                </div>
                                
                            </div>

                            <div class="col-md-12">
                                <div class="register-flex-btn">
                                    <Button @click="onConfirm"> confirm</Button>
                                    <Button> cancel</Button>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
            </div>


        </div>


       






    </div>



</template>

<script>

import { _services } from '../../../Services/Api/index'
export default {
    name: 'FirstVisit',
    components: {},
    methods: {
        check(e) {
            console.log(e.target.value)
            if (e.target.value === 'on') {
                e.target.value = 'off'
            } else {
                e.target.value = 'on'
            }

            if (this.sameAddress === true) {
                this.tmpAddrName = this.foreverAddrName,
                this.tmpAddrNameFlag = this.foreverAddrNameFlag,
                this.tmpCity = this.foreverCity,
                this.tmpZipCode = this.foreverZipCode
            } else {
                this.tmpAddrName = '',
                this.tmpAddrNameFlag = '',
                this.tmpCity = '',
                this.tmpZipCode = ''
            }
            console.log(this.sameAddress)
        },

        onConfirm() {
            const data = {
                addrName: this.addrName,
                birthDate: this.birthDate,
                city: this.city,
                deptCode: this.deptCode,
                deptRoom: this.deptRoom,
                docCode: this.docCode,
                foreverAddrName: this.foreverAddrName,
                foreverAddrNameFlag: this.foreverAddrNameFlag,
                foreverCity: this.foreverCity,
                foreverZipCode: this.foreverZipCode,
                idType: this.idType,
                mobile: this.mobile,
                opdDate: this.opdDate,
                pass: this.pass,
                password: this.password,
                patData: this.patData,
                patName: this.patName,
                regIp: this.regIp,
                regWay: this.regWay,
                sexType: this.sexType,
                shiftNo: this.shiftNo,
                userId: this.userId,
                zipCode: this.zipCode
            }
            _services.outSetRegWebChrbas(data).then((res) => {
                console.log(res.data)
            })
        }
    },
    data() {
        return {
            addrName: "string",
            birthDate: "2022-12-06T05:37:08.119Z",
            city: "",
            deptCode: this.$route.params.deptCode,
            deptRoom: this.$route.params.deptRoom,
            docCode: this.$route.params.docCode,
            foreverAddrName: "",
            foreverAddrNameFlag: "1",
            foreverCity: "1",
            foreverZipCode: "",
            tmpAddrName: "",
            tmpAddrNameFlag: "1",
            tmpCity: "1",
            tmpZipCode: "",
            idType: "",
            mobile: "",
            opdDate: this.$route.params.opdDate,
            pass: "",
            password: "",
            patData: "",
            patName: "",
            regIp: "",
            regWay: "",
            sexType: "",
            shiftNo:  this.$route.params.shiftNo,
            userId: "webapp",
            zipCode: "",
            sameAddress: false,
            
        }
    }
}
</script>

<style scoped src="./styles/first_visit_registration.page.css">

</style>
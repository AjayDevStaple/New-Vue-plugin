<template>

    <div class="main mt-3">

        <h1>First visit registration information</h1>

        <span class="red-subhead mt-3">
            Remind you!
        </span>
        <br />
        <span class="red-subhead mt-3">
            1.Only when the information is filled out and archived are the online registration procedures completed.
        </span>
        <br />

        <span class="red-subhead">
            2. Please bring your ID card to the rgistration counter 20 mintues in advance to go through the formalitites
            before going to the clininc.
        </span>
        <br />

        <span>


            For your health to facilitate doctore's diagnosis and treatement and to save yout consulation time, please
            be sure to fill in the following indormation correctly!
        </span>

        <div class="container cont mt-4">
            <Row class="row">
                <Col class="col">
                Name<br />

                <input placeholder="Enter name" v-model="patName" />

                </Col>

                <Col class="row">

                gender

                <input type="radio" id="html" name="male" value="1" v-model="sexType">
                <label for="html">Male</label>

                <input type="radio" id="html" name="female" value="2" v-model="sexType">
                <label for="html">Female</label>


                </Col>
            </Row>
            <hr />
            <Row class="row">
                <Col class="col">

                <input type="radio" id="html" name="idNumber" value="1" v-model="idType">
                  <label for="html">idNumber</label>
                <input type="radio" id="html" name="passportNumber" value="2" v-model="idType">
                  <label for="html">Passport No.</label>
                <input placeholder="Enter Passport No." v-model="patData" />
                <br />

                <input type="radio" id="html" name="RcardNumber" value="3" v-model="idType">
                  <label for="html">Residence Card Number</label>

                </Col>
            </Row>
            <hr />

            <Row class="row">
                <Col class="col">

                <span>
                    cell phone
                </span>
                <input placeholder="cell phone number" v-model="mobile" />

                </Col>
            </Row>

            <hr />
            <Row class="row">
                <Col class="col">

                <span>Date of Birth (Date of the Republic of China)</span>
                <input placeholder="date of birth" v-model="birthDate" />
                </Col>
            </Row>

            <hr />

            <Row class="row">

                <Col class="col">

                <span>
                    Residence address
                    <select id="cars" name="cars" defaultValue="1" v-model="foreverCity">
                        <option value="1">Please Check</option>
                        <option value="2">Volvo</option>
                        <option value="3">Saab</option>
                        <option value="4">Fiat</option>
                        <option value="5">Audi</option>
                    </select> <input placeholder="Postal code" v-model="foreverZipCode" /> <input
                        placeholder="Please enter the complete address" v-model="foreverAddrName" />


                </span>

                </Col>
                <Col class="col">

                <select id="cars" name="cars" defaultValue="1" v-model="foreverAddrNameFlag">
                    <option value="1">Please Check</option>
                    <option value="2">Volvo</option>
                    <option value="3">Saab</option>
                    <option value="4">Fiat</option>
                    <option value="5">Audi</option>
                </select>




                </Col>


            </Row>
            <hr />

            <Row class="row">

                <Col class="col">
                <span>
                    <input type="checkbox" id="vehicle1" name="vehicle1" @change="check($event)"
                        v-model="sameAddress" />
                    same registerd address
                </span>

                <br />
                <span>
                    Mailing Address <span> <select id="cars" name="cars" defaultValue="1" v-model="tmpCity">
                            <option value="1">Please Check</option>
                            <option value="2">Volvo</option>
                            <option value="3">Saab</option>
                            <option value="4">Fiat</option>
                            <option value="5">Audi</option>
                        </select> <input placeholder="Postal code" v-model="tmpZipCode" /> <input
                            placeholder="Please enter the complete address" v-model="tmpAddrName" /> </span> 
                </span>


                </Col>
                <Col class="col">

                    <select id="cars" name="cars" defaultValue="1" v-model="tmpAddrNameFlag">
                        <option value="1">Please Check</option>
                        <option value="2">Volvo</option>
                        <option value="3">Saab</option>
                        <option value="4">Fiat</option>
                        <option value="5">Audi</option>
                    </select>
    
    
    
    
                    </Col>
            </Row>

            <hr />
        </div>

        <Button @click="onConfirm"> confirm</Button>

        <Button> cancel</Button>
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
            deptCode: "",
            deptRoom: "",
            docCode: "",
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
            opdDate: "2022-12-06T10:40:02.617Z",
            pass: "",
            password: "",
            patData: "",
            patName: "",
            regIp: "",
            regWay: "",
            sexType: "",
            shiftNo: "",
            userId: "webapp",
            zipCode: "",
            sameAddress: false,
        }
    }
}
</script>

<style scoped src="./styles/first_visit_registration.page.css">

</style>
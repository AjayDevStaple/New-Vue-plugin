<template>
    <div class="register">
        <div class="sub-service">
            <hr>
            <div class="row">
                <div class="col-md-6 left-sub">
                    <h2>
                        COVID-19 Vaccination: BNT
                    </h2>
                </div>
                <div class="col-md-6 right-sub">
                    <ul>
                        <li>
                            The injection conditions have been explained in each special clinic. Please choose the
                            correct type of injection. If you find that you do not meet the requirements when you
                            report, the hospital will not be able to provide consultation and injection.
                        </li>
                        <li>
                            Boai only provides public-funded vaccines, and you must bring your health insurance card,
                            yellow card, and mobile phone when you register.
                        </li>
                        <li>
                            The fourth dose is open to 1. Elderly people
                            over the age of 65 can register online
                        </li>
                        <li>
                            2. The first category of personnel, airport ports, home quarantine, airline crew members and
                            staff related to institutions and social welfare care systems, residents of long-term care
                            institutions, and diplomatic substitute draft men (Requires a notification letter from the
                            Government Office to replace the service contract) Please call the consultation hotline to
                            register.
                        </li>
                        <li>
                            In order to avoid extra trips, please check your qualifications before registering. You are
                            welcome to call in advance for confirmation.
                        </li>
                        <li>
                            Consultation hotline: 03-9543131, extension 3152; or through the official LINE of Luodong
                            Pok Oi Hospital. (Service hours: Monday to Friday 08:00-12:00, 13:00-16:30)
                        </li>
                    </ul>
                </div>
            </div>

            <hr>
            <div class="register-table" v-for='index in mainNumber' :key='index'>
                <table class="table-border-radius">
                    <thead>
                        <tr>
                            <td v-if="index == 1">
                                <button class="dropbtn" @click="showMore = !showMore" v-if="showMore"><i
                                        class="fas fa-chevron-circle-up"></i></button>
                                <button class="dropbtn" @click="showMore = !showMore" v-else="showMore"><i
                                        class="fas fa-chevron-circle-down"></i></button>
                            </td>
                            <td v-if="(index == 2)">
                                <button class="dropbtn" @click="(showmoretwo = !showmoretwo)" v-if="showmoretwo"><i
                                        class="fas fa-chevron-circle-up"></i></button>
                                <button class="dropbtn" @click="(showmoretwo = !showmoretwo)" v-else="showmoretwo"><i
                                        class="fas fa-chevron-circle-down"></i></button>
                            </td>

                            <td v-for="(value, index) in getShortList(7)" :key="index" v-if="index == 1">
                                <h4>{{ createConversation(value.opdDate) }}</h4>
                                <p>{{ DateConversation(value.opdDate) }}</p>
                            </td>
                            <td v-for="(value, index) in getShortListother(14)" :key="index" v-if="(index == 2)">
                                <h4>{{ createConversation(value.opdDate) }} 222</h4>
                                <p>{{ DateConversation(value.opdDate) }}</p>
                            </td>
                        </tr>
                    </thead>
                    <tbody v-show="showMore">
                        <tr>
                            <td v-if="index == 1">
                                <p>
                                    morning
                                </p>
                            </td>
                            <td v-for="(value, index) in getShortList(7)" :key="index" v-if="index == 1">
                                <span @click="redirect(index)" v-bind:id="index" v-if="value.shiftNo == 1">{{ value.docName }}</span>
                            </td>
                        </tr>
                        <tr>
                            <td v-if="index == 1"><p>noon</p></td>
                            <td v-for="(value, index) in getShortList(7)" :key="index" v-if="index == 1">
                                <span v-if="value.shiftNo == 2">{{ value.docName }}</span>
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-show="showmoretwo">
                        <tr>
                            <td v-if="(index == 2)">
                                <p>
                                    morning
                                </p>
                            </td>
                            <td v-for="(value, index) in getShortListother(14)" :key="index" v-if="(index == 2)">
                                <span @click="redirect(index)" v-bind:id="index" v-if="value.shiftNo == 1">{{ value.docName }}</span>
                            </td>
                        </tr>
                        <tr>
                            <td v-if="(index == 2)"><p>noon</p></td>
                            <td v-for="(value, index) in getShortListother(14)" :key="index" v-if="(index == 2)">
                                <span v-if="value.shiftNo == 2">{{ value.docName }}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</template>
  
<script lang="ts">
import { _services } from './../../../../Services/Api/index'
import BookingPageVue from '../Booking.page.vue'
import { isProxy, toRaw } from 'vue';

export default {
    name: 'HomePage',
    components: {
        BookingPageVue
    },
    components: {
        navigation
    },
    data() {
        return {
            arrayData0: [],
            arrayData1: null,
            showMore: false,
            mainNumber: null,
            showmoretwo: false,
        }
    },
    methods: {
        getData() {
            var d = new Date();
            var startDate = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate();
            d.setDate(d.getDate() + 13);
            var de = d;
            var endDate = de.getFullYear() + "-" + (de.getMonth()+1) + "-" + de.getDate();
            console.log(endDate);
            const data = {
                "deptCode": this.$route?.params?.deptCode,
                "deptRoom": "",
                "docCode": this.$route?.params?.docCode,
                "endDate": endDate,
                "pass": "Kumar",
                "shiftNo": "",
                "startDate": startDate,
                "userId": "webapp"
            }
            _services.outGetWebSchebasic(data)
                .then(res => {
                    this.arrayData0 = res.data.data;
                    _services.outGetWebSchebasic(data).then(res => {
                        this.arrayData0 = res.data.data

                        if ( this.arrayData0.length > 1  ) {
                            this.mainNumber = 2;
                        } else {
                            this.mainNumber = 1;
                        }
                        //alert(this.arrayData0.length);
                        console.log(this.$route.query.abc)
                    }).catch(err => {
                        console.log(err)
                    })
                },
        },
        redirect(index) {
            const data2send = {
                "deptName": toRaw(this.arrayData0?.[index].deptName),
                "deptCode": toRaw(this.arrayData0?.[index].deptCode),
                "opdDate": toRaw(this.arrayData0?.[index].opdDate),
                "shiftNo": toRaw(this.arrayData0?.[index].shiftNo),
                "docName": toRaw(this.arrayData0?.[index].docName),
                "webRoomDesc": toRaw(this.arrayData0?.[index].webRoomDesc),
                "roomDesc": toRaw(this.arrayData0?.[index].roomDesc),
                "nextNum": toRaw(this.arrayData0?.[index].nextNum),
                "deptRoom": toRaw(this.arrayData0?.[index].deptRoom),
                "docCode": toRaw(this.arrayData0?.[index].docCode),
                "regIp": toRaw(this.arrayData0?.[index].regIp),
                "regWay": toRaw(this.arrayData0?.[index].regWay),
            }
            console.log('========> data of sub', data2send)
            this.$router.push({
                name: 'Booking',
                params: data2send,
            })
        },
        createConversation: function (id) {
            var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            var d = new Date(id);
            var dayName = days[d.getDay()];
            return dayName;
            /* console.log(dayName) */
        },
        DateConversation: function (id) {
            var d = id.split("-");
            var dayName = d[1] + '/' + d[2];
            return dayName;
            /* console.log(dayName) */
        },
        getShortList(shortListSize) {
            return this.arrayData0.slice(0, shortListSize);
        },
        getShortListother(shortListSize) {
            return this.arrayData0.slice(7, shortListSize);
        },
    },
    beforeMount() {
        this.getData()
    },
}
</script>
  
<style scoped src="../../pages/styles/subservice.page.css">

</style>
<template>
<div class="addmin py-5">
    <div class="container">
        <div class="ad_rectangle">
            <div class="row">
                <div class="col-12">
                    <h1 class="p-24">Add BDC Operator</h1>
                    <hr>
                </div>
                <div class="col-lg-8 col-xs-12">
                    <form>
                    <div class="row">
                        <div class="col-lg-6 col-xs-12 mb-4">
                            <b class="p-15">Full Name</b><br>
                            <small class="l-12">First and Last Name of BDC Operator</small>
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-4">
                            <label for="" class="pl-14">Full Name</label>
                            <input type="text" name="name" v-model="user.name" class="lightform form-control" placeholder="John Doe" required>
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-4">
                            <b class="p-15">Type of Institution</b><br>
                            <small class="l-12">Institution type od BDC operator</small>
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-4">
                            <label for="" class="pl-14">Type of Institution</label><br/>
                            <select name="typeOfInstitution" v-model="user.typeOfInstitution" class="lightform form-control">
                                <option value="Bureau de change">Bureau de change</option>
                                <option value="Bank">Bank</option>
                            </select>
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-4">
                            <b class="p-15">Date Registered</b><br>
                            <small class="l-12">Date of Registration </small>
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-4">
                            <label for="" class="pl-14">Date</label>
                            <input type="date" name="dateRegistered" v-model="user.dateRegistered" class="lightform form-control" placeholder="mm / dd / yyyy" required>
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-4">
                            <b class="p-15">Street Address</b><br>
                            <small class="l-12">Address, City and Country of operation</small>
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-4">
                            <label for="" class="pl-14">Street Address</label>
                            <input type="text" name="streetAddress" v-model="user.streetAddress" class="lightform form-control" placeholder="47 Ignacio Ramp Apt. 631">
                            <label for="" class="pl-14">Area</label>
                            <input type="text" name="area" v-model="user.area" class="lightform form-control" placeholder="Portharcourt">
                            <label for="" class="pl-14">Area</label>
                            <input type="text" name="state" v-model="user.state" class="lightform form-control" placeholder="Lagos State">
                            <label for="" class="pl-14">Country</label>
                            <input type="text" name="country" v-model="user.country" class="lightform form-control" placeholder="Nigeria">
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-4">
                            <b class="p-15">Telephone</b><br>
                            <small class="l-12">Current phone number of BDC operator</small>
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-4">
                            <label for="" class="pl-14">Telephone</label>
                            <div class="input-group lightform">
                                <div class="input-group-prepend pt-2 p-14 pl-3">
                                    234
                                </div>
                                <input type="text" name="telephone" v-model="user.telephone" class="form-control" required>
                            </div>
                            
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-4">
                            <b class="p-15">Email</b><br>
                            <small class="l-12">Email address of BDC operator</small>
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-4">
                            <label for="" class="pl-14">Email</label>
                            <input type="text" name="email" v-model="user.email" class="lightform form-control" required>
                        </div>
                        
                        <div class="col-lg-6 col-xs-12 mb-5">
                            <b class="p-15">Ownership</b><br>
                            <small class="l-12">Select ownership type</small>
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-5">
                            <label for="" class="pl-14">Ownership Type</label>
                            <select name="ownershipType" v-model="user.ownershipType" class="lightform form-control">
                                <option value="Domestic">Domestic</option>
                                <option value="Corporate">Corporate</option>
                            </select>
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-4">
                            <b class="p-15">Date of License</b><br>
                            <small class="l-12">Date of License </small>
                        </div>
                        <div class="col-lg-6 col-xs-12 mb-4">
                            <label for="" class="pl-14">Date</label>
                            <input type="date" name="dateLicensed" v-model="user.dateLicensed" class="lightform form-control" placeholder="mm / dd / yyyy" required>
                        </div>
                        <div class="col-lg-6 col-xs-12"></div>
                        <div class="col-lg-6 col-xs-12">
                            <button class="btn btn-green px-5" @click="create">
                                Create Operator
                            </button>
                        </div>
                    </div>
                 </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import authservice from '../../services/authservice'

export default {
    data () {
        return {
        user: {
            name: '',
            typeOfInstitution: '',
            dateRegistered: '',
            streetAddress: '',
            area: '',
            state: '',
            telephone: '',
            email: '',
            country: '',
            ownershipType: '',
            dateLicensed: '',
        }
    }
    },

    methods: {
        async create() {
            try {
                let userDet = {
                    name: this.user.name,
                    typeOfInstitution: this.user.typeOfInstitution,
                    streetAddress: this.user.streetAddress,
                    area: this.user.area,
                    state: this.user.state,
                    telephone: this.user.telephone,
                    email: this.user.email,
                    country: this.user.country,
                    ownershipType: this.user.ownershipType,
                    dateLicensed: this.user.dateLicensed
                }
                
                await authservice.signup(userDet)
                                 .then(user => user.data)
                    console.log('response user', user);
                    this.$router.push({name: 'operator'})
            } catch (error) {
              throw error;
            } 

        }

    }
    
};
</script>
<style>

</style>

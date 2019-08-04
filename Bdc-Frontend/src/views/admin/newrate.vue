<template>
  <div class="addmin py-5">
    <div class="container">
      <div class="ad_rectangle">
        <div class="row">
          <div class="col-12">
            <h1 class="p-24">New Input Rate</h1>
            <hr>
          </div>
          <div class="col-lg-8 col-xs-12">
            <!-- <div class="row"> -->
            <form v-on:submit.prevent="onSubmit" class="row">
              <div class="col-lg-6 col-xs-12 mb-4">
                <b class="p-15">Select Currency</b><br>
                <small class="l-12">Please choose a currency you want to be traded on our platform </small>
              </div>
              <div class="col-lg-6 col-xs-12 mb-4">
                <label for="" class="pl-14">Select Currency</label>
                <select v-model="baseCurrency" class="lightform custom-select">
                  <option v-for="currency in currencies" v-bind:key="currency.name">
                    {{ currency.name }}
                  </option>
                </select>
              </div>
              <div class="col-lg-6 col-xs-12 mb-4">
                <b class="p-15">Enter Buy Rate</b><br>
                <small class="l-12">Enter a price you want to purchase your currencies for</small>
              </div>
              <div class="col-lg-6 col-xs-12 mb-4">
                <label for="" class="pl-14">Buy Rate</label>
                <input v-model.number="buyingRate" type="text" class="lightform form-control">
              </div>

              <div class="col-lg-6 col-xs-12 mb-4">
                <b class="p-15">Enter Sell Rate</b><br>
                <small class="l-12">Enter a price you want to sell your currencies for</small>
              </div>
              <div class="col-lg-6 col-xs-12 mb-4">
                <label for="" class="pl-14">Sell Rate</label>
                <input v-model.number="sellingRate" type="text" class="lightform form-control">
              </div>
              <div class="col-lg-6 col-xs-12 mb-4">
                <b class="p-15">Select Location</b><br>
                <small class="l-12">Select where you reside</small>
              </div>
              <div class="col-lg-6 col-xs-12 mb-4">
                <label for="" class="pl-14">Select Location</label>
                <select v-model="selectedLocation" class="lightform custom-select">
                  <option v-for="location in locations" v-bind:key="location.name">
                    {{ location.name }}
                  </option>
                </select>
              </div>
              <div class="col-lg-6 col-xs-12"></div>
              <div class="col-lg-6 col-xs-12">
                <button class="btn btn-green px-5">
                  Submit Rate
                </button>
              </div>
            </form>

            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { RateService } from '../../services/rateservice';

  const rateService = new RateService();

  export default {

    data() {
      return {
        currencies: [],
        locations: [],
        selectedLocation: '',
        baseCurrency: '',
        buyingRate: '',
        sellingRate: '',
        time: '',
        user_id: ''
      };
    },

    methods: {
      getLocations() {
        rateService.getLocations()
          .then(data => {
            this.locations = data;
          })
          .catch(error => {
            console.log(error)
          });
      },

      getCurrencies() {
        rateService.getCurrencies()
          .then(data => {
            this.currencies = data.result;
          })
          .catch(error => {
            console.log(error)
          });
      },

      onSubmit: function () {
        
        let d = new Date();

        let rate = {
          location: this.selectedLocation,
          baseCurrency: this.baseCurrency,
          buyingRate: this.buyingRate,
          sellingRate: this.sellingRate,
          time: d.getHours(),
          user_id: '5d384433850f0a49d8bd4af1'
        }

        rateService.createRate(rate)
          .then(data => {
              console.log(data)
          })
          .catch(error => {
            console.log(error)
          });

          this.selectedLocation = '';
          this.baseCurrency = '';
          this.buyingRate = '';
          this.sellingRate = '';
      }

    },

    mounted() {
      this.getLocations();
      this.getCurrencies();
    },
  }
</script>
<style>

</style>
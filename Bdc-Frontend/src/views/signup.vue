<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-7 col-xs-12 px-0 d-none d-md-block">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li
                style=" width: 58px; height: 10px;border-radius: 6px;background-color: #008752; border: none;"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div id="sign-in"></div>
              </div>
              <div class="carousel-item">
                <div id="sign-in-1"></div>
              </div>
            </div>
          </div>
          <!-- <div id="sign-in"></div> -->
        </div>
        <div class="col-lg-5 col-xs-12">
          <div class="sign-in-container">
            <div class="container px-lg-5">
              <h2 class="p-32">Welcome</h2>
              <p class="p-24">Sign Up to Create Your Account</p>
              <form class="ui form" @submit.prevent="signup">
                <label for class="p-15 mt-4">Email Address</label>
                <div class="input-group login">
                  <input type="email" name="email" v-model="email" placeholder="Email" required />
                  <div class="input-group-append pt-2 px-2">
                    <i class="icon ion-ios-contact"></i>
                  </div>
                </div>
                <label for class="p-15 mt-4">Password</label>
                <div class="input-group login">
                  <input
                    type="password"
                    name="password"
                    v-model="password"
                    placeholder="Password"
                    required
                  />
                  <div class="input-group-append pt-2 px-2">
                    <i class="fas fa-shield-alt"></i>
                  </div>
                </div>

                <label for class="p-15 mt-4">Confirm Password</label>
                <div class="input-group login">
                  <input
                    type="password"
                    name="password"
                    v-model="password_confirmation"
                    placeholder="Password"
                    required
                  />
                  <div class="input-group-append pt-2 px-2">
                    <i class="fas fa-shield-alt"></i>
                  </div>
                </div>
                <br />
                <button class="btn btn-green px-5 mt-5">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  // import { AuthService } from "../services/authservice";

  // let authservice = new AuthService();

  export default {
    data() {
      return {        
        email: "",
        password: "",
        password_confirmation: ""
      }
    },
    methods: {
      signup() {

        if (this.password == this.password_confirmation && this.password.length > 0) {
            
          let user = {
            email: this.email,
            password: this.password,
            returnSecureToken:true
          }

         console.log(user)
         this.$store.dispatch('signup', {email: user.email, password: user.password})
        }  else {
          this.password = "";
          this.password_confirmation = "";
          this.email = "";

          return alert("Passwords do not match")
        }
      }
    }
  }
</script>


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
              <p class="p-24">Sign Into your Account</p>
              <form class="ui form" @submit.prevent="login">
                <label for class="p-15 mt-5">Email Address</label>
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
                <a href="#" class="g-15">I forgot my password</a>
                <br />
                <button class="btn btn-green px-5 mt-5">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    login() {
      let user = {
        email: this.email,
        password: this.password
      };

      console.log(user);
      this.$store.dispatch("login", {
        email: user.email,
        password: user.password
      });
    }
  }
};
</script>
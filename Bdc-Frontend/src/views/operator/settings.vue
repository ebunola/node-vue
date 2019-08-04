
<template>
  <div class="addmin py-5">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-lg-10">
          <h1 class="p-24">Settings</h1>
        </div>

        </div>
        <div class="col-12">
          <ul class="nav nav-tabs ad_tabs" role="tablist">
            <li class="nav-item pr-3">
              <a class="nav-link active" href="#settings" role="tab" data-toggle="tab">Settings</a>
            </li>
          </ul>
        </div>
        <div class="col-12">
          <div class="ad_rectangle">
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane active" id="settings">
                <div class="row">
                  <div class="col-12">
                    <h5 class="g-17">Settings</h5>
                    <hr />
                  </div>
                  <div class="col-lg-8 col-xs-12">
                    <div class="row">
                      <div class="col-lg-6 col-xs-12 mb-4">
                        <b class="p-15">Old Password</b>
                        <br />
                        <small class="l-12">Enter the current passord which you want to change</small>
                      </div>
                      <div class="col-lg-6 col-xs-12 mb-4">
                        <label for class="pl-14">Old Password</label>
                        <input type="text" name ="password" v-model="user.password" class="lightform form-control" placeholder="Old Password"/>
                      </div>

                      <div class="col-lg-6 col-xs-12 mb-4">
                        <b class="p-15">New Password</b>
                        <br />
                        <small
                          class="l-12"
                        >Now enter a new password, Make sure this remains confidential</small>
                      </div>
                      <div class="col-lg-6 col-xs-12 mb-4">
                        <label for class="pl-14">New Password</label>
                        <input type="text" name ="newpassword" v-model="user.newpassword" class="lightform form-control" placeholder="New Password"/>
                      </div>
                      <div class="col-lg-6 col-xs-12 mb-4">
                        <b class="p-15">Confirm password</b>
                        <br />
                        <small class="l-12">Confirm the new password</small>
                      </div>
                      <div class="col-lg-6 col-xs-12 mb-4">
                        <label for class="pl-14">Confirm password</label>
                        <input type="text" name="confirmpassword" v-model="user.confirmpassword" class="lightform form-control" placeholder="Confirm Password"/>
                      </div>
                      <div class="col-lg-6 col-xs-12"></div>
                      <div class="col-lg-6 col-xs-12">
                        <button class="btn btn-green px-5" @click="changePassword">Submit Password</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>
<script>
  import { AuthService } from "../../services/authservice"

  let authservice = new AuthService()
  
  export default {
    data() {
      return {
        user: {
          password: "",
          newpassword:"",
          confirmpassword:""
        },
      }
    },

    methods: {
      async changePassword() {
        
        try {
          let passwordDetails = {
            password: this.user.password,
            newpassword: this.user.newpassword,
            confirmpassword: this.user.confirmpassword
          }
          console.log("password details here ", passwordDetails);
          await authservice.updatePassword(passwordDetails).then((payload) => {
            this.password = this.newPassword = this.confirmPassword = ''
            console.log("res password details", payload);
            this.$router.push({name: 'password'})
          })
        } catch(error){
          throw error;
        }
      }
    }
  }
</script>
<style>
</style>
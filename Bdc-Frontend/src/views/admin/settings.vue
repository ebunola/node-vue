//  eslint-disable 
<template>
  <div class="addmin py-5" v-if="isLoggedIn">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-lg-10">
          <h1 class="p-24">Settings</h1>
        </div>
        <div class="col-xs-12 col-lg-2">
          <button
            class="btn btn-green w-100"
            data-toggle="modal"
            data-target="#exampleModal"
          >Add User</button>
        </div>
        <div class="col-12">
          <ul class="nav nav-tabs ad_tabs" role="tablist">
            <li class="nav-item pr-3">
              <a
                class="nav-link active"
                href="#usermanagement"
                role="tab"
                data-toggle="tab"
              >User Management</a>
            </li>
            <li class="nav-item pr-3">
              <a class="nav-link" href="#settings" role="tab" data-toggle="tab">Settings</a>
            </li>
          </ul>
        </div>
        <div class="col-12">
          <div class="ad_rectangle">
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane active" id="usermanagement">
                <div class="row">
                  <div class="col-12">
                    <h5 class="g-17">User Management</h5>
                    <hr />
                  </div>
                  <div class="col-12">
                    <div class="table-responsive-md">
                      <table class="table table-striped ad_table">
                        <thead>
                          <th>FULL NAME</th>
                          <th>EMAIL ADDRESS</th>
                          <th>ROLE</th>
                          <th>STATUS</th>
                          <th>ACTION</th>
                        </thead>
                        <tbody>
                          <tr v-for="user in users" v-bind:key="user">
                            <td>{{user.firstname}} {{user.lastname}}</td>
                            <td>{{user.email}}</td>
                            <td>{{user.role}}</td>
                            <td>Active</td>
                            <td>07:38AM</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div role="tabpanel" class="tab-pane" id="settings">
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
                        <input
                          type="text"
                          name="password"
                          v-model="user.password"
                          class="lightform form-control"
                          placeholder="Old Password"
                        />
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
                        <input
                          type="text"
                          name="newpassword"
                          v-model="user.newpassword"
                          class="lightform form-control"
                          placeholder="New Password"
                        />
                      </div>
                      <div class="col-lg-6 col-xs-12 mb-4">
                        <b class="p-15">Confirm password</b>
                        <br />
                        <small class="l-12">Confirm the new password</small>
                      </div>
                      <div class="col-lg-6 col-xs-12 mb-4">
                        <label for class="pl-14">Confirm password</label>
                        <input
                          type="text"
                          name="confirmpassword"
                          v-model="user.confirmpassword"
                          class="lightform form-control"
                          placeholder="Confirm Password"
                        />
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
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content p-5">
          <h1 class="p-20">Add New User</h1>
          <hr />
          <label for class="p-14">First Name</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            v-model="user.firstname"
            placeholder="First Name"
            class="lightform form-control mb-4"
          />
          <label for class="p-14">Last Name</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            v-model="user.lastname"
            placeholder="Last Name"
            class="lightform form-control mb-4"
          />

          <label for class="p-14">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            v-model="user.email"
            placeholder="Email Address"
            class="lightform form-control mb-4"
          />
          <label for class="p-14">Location</label>
          <select v-model="user.location_id" class="lightform custom-select">
            <option v-for="location in locations" v-bind:value="location._id">{{ location.name }}</option>
          </select>
          <br />

          <label for="basic-dropdown" class="p-14">Role</label>
          <select name id v-model="user.role" class="lightform custom-select">
            <option
              v-for="role in roles"
              v-bind:key="role"
              class="lightform form-control mb-4"
            >{{ role }}</option>
          </select>
          <br />
          <button class="btn btn-green px-4" data-dismiss="modal" @click="signup">Add User</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { AuthService } from "../../services/authservice";
import { RateService } from "../../services/rateservice";
import { UserService } from "../../services/userservices";

let authservice = new AuthService();
let rateService = new RateService();
let userservice = new UserService();

export default {
  // name: Settings,
  data() {
    return {
      locations: [],
      users: [],
      roles: ["admin", "operator"],
      user: {
        firstname: "",
        lastname: "",
        email: "",
        location_id: "",
        password: "",
        newpassword: "",
        confirmpassword: "",
        role: ""
      }
    };
  },

  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    },
    email() {
      return this.$store.getters.user.email;
    }
  },

  created() {
    this.$store.dispatch("fetchUser");
  },

  methods: {
    async getLocations() {
      await rateService
        .getLocations()
        .then(data => {
          this.locations = data;
        })
        .catch(error => {
          console.log(error);
        });
    },

    async getUsers() {
      await userservice
        .getUsers()
        .then(data => {
          this.users = data.result;
        })
        .catch(error => {
          console.log(error);
        });
    },

    async changePassword() {
      try {
        let passwordDetails = {
          password: this.user.password,
          newpassword: this.user.newpassword,
          confirmpassword: this.user.confirmpassword
        };

        await authservice.updatePassword(passwordDetails).then(payload => {
          this.password = this.newPassword = this.confirmPassword = "";
          console.log("res password details", payload);
          this.$router.push({ name: "password" });
        });
      } catch (error) {
        throw error;
      }
    },

    // async AddUser() {
    //   try {
    //     let userData = {
    //       firstname: this.user.firstname,
    //       lastname: this.user.lastname,
    //       email: this.user.email,
    //       role: this.user.role,
    //       location_id: this.user.location_id
    //     };
    //     await authservice.createUser(userData).then(() => {
    //       this.$router.push("/admin/settings");
    //     });
    //   } catch (error) {
    //     throw error;
    //   }
    // },

    signup: function() {
      let data = {
        firstname: this.user.firstname,
        lastname: this.user.lastname,
        email: this.user.email,
        role: this.user.role,
        location_id: this.user.location_id
      };
      this.$store
        .dispatch("signup", data)
        .then(() => this.$router.push("/admin"))
        .catch(err => console.log(err));
    }
  },

  mounted() {
    this.getLocations();
    this.getUsers();
  }
};
</script>
<style>
</style>
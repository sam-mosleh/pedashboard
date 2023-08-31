<template>
  <v-container fluid>
    <!-- Snack -->
    <v-snackbar v-model="snackbar.isOpen" top>
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar.isOpen = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <!-- Snack -->
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title class="headline">
            Welcome
          </v-card-title>
          <v-card-text>
            <p>This tool utilizes AI algorithms to conduct in-depth research on potential investment opportunities.</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
<!--    <div class="text-h6 text-center mt-4">{{ $t("login.title") }}</div>-->

    <v-col
      justify="space-between"
      style="margin-top: 20px; max-width: 320px"
      class="mx-auto"
    >
      <div class="text-body-4 text-left">Email</div>
      <v-text-field v-model="email" outlined class="mx-auto" />
    </v-col>
    <v-col>
      <v-row justify="space-between" style="max-width: 300px" class="mx-auto">
        <div class="text-body-4 text-center">Password</div>
      </v-row>
      <v-text-field
        style="max-width: 300px; margin-top: 15px"
        outlined
        v-model="password"
        type="password"
        class="mx-auto"
      />
    </v-col>
    <v-row justify="center">
      <v-btn
        style="
          text-transform: capitalize;
          color: white;
          height: 46px;
          width: 280px;
          font-size: 18px;
          padding: 20px;
          margin-top: 30px;
        "
        class="rounded-pill"
        color="black"
        append-icon="mdi-cloud-upload"
        @click="() => console.log('login')"
      >
        Login
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "login",
  // head() {
  //   return {
  //     title: "Login",
  //   };
  // },
  data() {
    return {
      email: "",
      password: "",
      snackbar: {
        isOpen: false,
        text: "",
      },
    };
  },
  // methods: {
  //   login() {
  //     console.log("")
  //     // this.$auth
  //     //   .loginWith("local", {
  //     //     data: {
  //     //       email: this.email.toLowerCase(),
  //     //       password: this.password,
  //     //     },
  //     //   })
  //     //   .then((res) => {
  //     //     if (res.data.status !== 1) {
  //     //       this.snackbar.text = res.data.error;
  //     //       this.snackbar.isOpen = true;
  //     //     } else {
  //     //       // window.location.href = "/";
  //     //     }
  //     //   });
  //   },
  // },
};
</script>

<style scoped>
</style>

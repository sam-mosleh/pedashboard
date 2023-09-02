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
        @click="login"
      >
        Login
      </v-btn>
    </v-row>
    <v-row>
      <div
        class="text-body-4"
        style="margin-top: 30px; text-align: center; width: 100%"
      >
        For the test account you can have access with Email:userTest@gmail.com
        and password:1234
      </div>
    </v-row>
  </v-container>
</template>

<script>
import api from "@/components/API";

export default {
  name: "login",
  head() {
    return {
      title: "Login",
    };
  },
  mounted() {},

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
  methods: {
    login() {
      // const allTrackingKPIs = api.getAllTrackingKPIs();
      const allAiRobots = api.getAllAiRobots();
      const allCompanies = api.getAllCompanies();
      if (allAiRobots.length == 0 && allCompanies.length == 0) {
        const allData = api.getFullUserData();
        api.saveAiRobots(allData.robots);
        api.saveCompanies(allData.companies);
        api.saveTrackingKPIs(allData.trackingCompaniesKPIs);
        api.saveTrackingKPIKeys(allData.trackingKpiKeys);
        api.saveInsightCompanies(allData.insights);
        console.log(JSON.stringify(allData));
      }
      if (this.email == "userTest@gmail.com" && this.password == "1234") {
        api.saveAuth();
        window.location.href = "/dashboard";
      } else {
        this.snackbar.text = "invalid username or password!";
        this.snackbar.isOpen = true;
      }
    },
  },
};
</script>

<style scoped></style>

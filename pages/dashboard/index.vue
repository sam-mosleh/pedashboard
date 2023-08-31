<template>
  <div>
    <v-row
      class="ps-3 pt-8 pb-6 mb-3"
      style="font-weight: 600; font-size: 28px; background: black; color: white"
      >Dashboard</v-row
    >
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="3"
        lg="3"
        xl="3"
        xxl="3"
        style="
          background: linear-gradient(
            78.84deg,
            rgb(85, 61, 239) 8.24%,
            rgb(207, 95, 228) 91.76%
          ) !important;
        "
      >
        <v-card
          style="
            padding: 10px;
            background: linear-gradient(
              78.84deg,
              rgb(85, 61, 239) 8.24%,
              rgb(207, 95, 228) 91.76%
            ) !important;
            color: white !important;
          "
        >
          <v-btn
            class="d-flex flex-row ms-auto me-2 mt-2"
            style="
              background: black;
              color: white;
              border-radius: 30px;
              text-transform: capitalize;
            "
            >View</v-btn
          >
          <v-col class="justify-space-between align-center h-100">
            <p
              class="text-center"
              style="font-size: 2rem; line-height: 2.75rem; font-weight: 700"
            >
              {{ `3` }}
            </p>
            <p
              class="text-center"
              style="font-size: 1.2rem; line-height: 1.5rem; font-weight: 700"
            >
              Property deals found!
            </p>
            <div style="height: 2px; background: blue"></div>
            <p
              class="text-center mt-4"
              style="font-size: 1.2rem; line-height: 1.5rem; font-weight: 700"
            >
              {{ `Median score: 3` }}
            </p>
          </v-col>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3" lg="3" xl="3" xxl="3">
        <v-card
          style="
            padding-top: 10px;
            padding-bottom: 2px;
            padding-left: 10px;
            padding-right: 10px;
            background: linear-gradient(
              82.99deg,
              rgb(92, 105, 226) 5.47%,
              rgb(8, 207, 234) 94.53%
            );
            color: white;
          "
        >
          <v-btn
            class="d-flex flex-row ms-auto me-2 mt-2"
            style="
              background: black;
              color: white;
              border-radius: 30px;
              text-transform: capitalize;
            "
            >View</v-btn
          >
          <v-col class="justify-space-between align-center h-100">
            <p
              class="text-center"
              style="font-size: 2rem; line-height: 2.75rem; font-weight: 700"
            >
              {{ `5` }}
            </p>
            <p
              class="text-center"
              style="font-size: 1.2rem; line-height: 1.5rem; font-weight: 700"
            >
              Company insights
            </p>
            <div style="height: 2px; background: red"></div>
            <div class="candlestick">
              <div class="wick"></div>
              <div class="body" style="width: 70%; left: 10%"></div>
              <div class="shadow-left" style="width: 10%"></div>
              <div class="shadow-right" style="width: 20%"></div>
            </div>
            <v-row class="justify-space-between mt-1 px-2">
              <p style="font-size: 10px">min: 10%</p>
              <p style="font-size: 10px">max: 70%</p>
            </v-row>
          </v-col>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3" lg="3" xl="3" xxl="3">
        <v-card
          style="
            padding: 10px;
            background: linear-gradient(
              78.84deg,
              rgb(241, 91, 91) 8.24%,
              rgb(177, 36, 121) 91.76%
            );
            color: white;
          "
        >
          <v-btn
            class="d-flex flex-row ms-auto me-2 mt-2"
            style="
              background: black;
              color: white;
              border-radius: 30px;
              text-transform: capitalize;
            "
            >View</v-btn
          >
          <v-col class="justify-space-between align-center h-100">
            <p
              class="text-center"
              style="font-size: 2rem; line-height: 2.75rem; font-weight: 700"
            >
              {{ `8` }}
            </p>
            <p
              class="text-center"
              style="font-size: 1.2rem; line-height: 1.5rem; font-weight: 700"
            >
              Assets tracked
            </p>
            <div style="height: 2px; background: blue"></div>
            <p
              class="text-center mt-4"
              style="font-size: 1.2rem; line-height: 1.5rem; font-weight: 700"
            >
              {{ `3 Ready to buy` }}
            </p>
          </v-col>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3" lg="3" xl="3" xxl="3">
        <v-card
          style="
            padding-top: 10px;
            padding-bottom: 2px;
            padding-left: 10px;
            padding-right: 10px;
            background: linear-gradient(
              82.99deg,
              rgb(255, 118, 3) 5.47%,
              rgb(255, 197, 44) 94.53%
            );
            color: white;
          "
        >
          <v-btn
            class="d-flex flex-row ms-auto me-2 mt-2"
            style="
              background: black;
              color: white;
              border-radius: 30px;
              text-transform: capitalize;
            "
            >View</v-btn
          >
          <v-col class="justify-space-between align-center h-100">
            <p
              class="text-center"
              style="font-size: 2rem; line-height: 2.75rem; font-weight: 700"
            >
              {{ `10` }}
            </p>
            <p
              class="text-center"
              style="font-size: 1.2rem; line-height: 1.5rem; font-weight: 700"
            >
              Models trained
            </p>
            <div style="height: 2px; background: red"></div>
            <div class="candlestick">
              <div class="wick"></div>
              <div class="body" style="width: 70%; left: 10%"></div>
              <div class="shadow-left" style="width: 10%"></div>
              <div class="shadow-right" style="width: 20%"></div>
            </div>
            <v-row class="justify-space-between mt-1 px-2">
              <p style="font-size: 10px">min: 10%</p>
              <p style="font-size: 10px">max: 70%</p>
            </v-row>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import utils from "@/components/utils";
export default {
  name: "Dashboard",
  data() {
    return {
      start: 50, // Dynamic start value
      end: 70, // Dynamic end value
    };
  },
  methods: {},
  mounted() {},
  watch: {},
};
</script>

<style>
.candlestick {
  width: 90%;
  height: 20px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  margin-top: 20px;
}

.body {
  /*width: 70%;*/
  height: 14px;
  background-color: rgba(0, 0, 255, 0.6);
  border-radius: 3px;
  position: absolute;
  /*left: 10%;*/
  top: 3px;
}

.shadow-left {
  /*width: 10%;*/
  height: 3px;
  background-color: rgba(255, 0, 0, 0.6);
  position: absolute;
  left: 0;
  top: 8px;
}

.shadow-right {
  /*width: 20%;*/
  height: 3px;
  background-color: rgba(255, 0, 0, 0.6);
  position: absolute;
  right: 0;
  top: 8px;
}
</style>

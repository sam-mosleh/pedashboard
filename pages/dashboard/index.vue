<template>
  <div>
    <v-row
      class="ps-3 pt-8 pb-6 mb-3"
      style="font-weight: 600; font-size: 28px; background: black; color: white"
      >Dashboard</v-row
    >
    <v-row>
      <v-col cols="12" sm="6" md="3" lg="3" xl="3" xxl="3">
        <v-card class="cart-deals">
          <v-btn
            class="d-flex flex-row ms-auto me-2 mt-2"
            style="
              background: black;
              color: white;
              border-radius: 30px;
              text-transform: capitalize;
            "
            @click="redirect('/dashboard/recommendations')"
            >View</v-btn
          >

          <v-col class="justify-space-between align-center h-100">
            <p
              class="text-center"
              style="font-size: 2rem; line-height: 2.75rem; font-weight: 700"
            >
              {{ summaryRecommendedCompanies.count }}
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
              Median score: {{ summaryRecommendedCompanies.median }}
            </p>
          </v-col>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3" lg="3" xl="3" xxl="3">
        <v-card class="cart-insights" style="">
          <v-btn
            class="d-flex flex-row ms-auto me-2 mt-2"
            style="
              background: black;
              color: white;
              border-radius: 30px;
              text-transform: capitalize;
            "
            @click="redirect('/dashboard/deal_insights')"
            >View</v-btn
          >

          <v-col class="justify-space-between align-center h-100">
            <p
              class="text-center"
              style="font-size: 2rem; line-height: 2.75rem; font-weight: 700"
            >
              {{ summaryInsights.count }}
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
              <div
                class="body"
                :style="{
                  width: `${summaryInsights.max - summaryInsights.min}%`,
                  left: `${summaryInsights.min}%`,
                }"
              ></div>
              <div
                class="shadow-left"
                :style="{ width: `${summaryInsights.min}%` }"
              ></div>
              <div
                class="shadow-right"
                :style="{ width: `${summaryInsights.max}%` }"
              ></div>
            </div>
            <v-row class="justify-space-between mt-1 px-2">
              <p style="font-size: 10px">min: {{ summaryInsights.min }}%</p>
              <p style="font-size: 10px">max: {{ summaryInsights.max }}%</p>
            </v-row>
          </v-col>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3" lg="3" xl="3" xxl="3">
        <v-card class="cart-track">
          <v-btn
            class="d-flex flex-row ms-auto me-2 mt-2"
            style="
              background: black;
              color: white;
              border-radius: 30px;
              text-transform: capitalize;
            "
            @click="redirect('/dashboard/tracking')"
            >View</v-btn
          >
          <v-col class="justify-space-between align-center h-100">
            <p
              class="text-center"
              style="font-size: 2rem; line-height: 2.75rem; font-weight: 700"
            >
              {{ allTrackingSelectedCompanies.length }}
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
              {{
                allTrackingSelectedCompanies.filter((x) => x.readyToBuy).length
              }}
              Ready to buy
            </p>
          </v-col>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3" lg="3" xl="3" xxl="3">
        <v-card class="cart-models-trained">
          <v-btn
            class="d-flex flex-row ms-auto me-2 mt-2"
            style="
              background: black;
              color: white;
              border-radius: 30px;
              text-transform: capitalize;
            "
            @click="redirect('/dashboard/modelsTrained')"
            >View</v-btn
          >
          <v-col class="justify-space-between align-center h-100">
            <p
              class="text-center"
              style="font-size: 2rem; line-height: 2.75rem; font-weight: 700"
            >
              {{ summaryCartModels.modelsTrainedCount }}
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
              <div
                class="body"
                :style="{
                  width: `${
                    summaryCartModels.maxProcess - summaryCartModels.minProcess
                  }%`,
                  left: `${summaryCartModels.minProcess}%`,
                }"
              ></div>
              <div
                class="shadow-left"
                :style="{ width: `${summaryCartModels.minProcess}%` }"
              ></div>
              <div
                class="shadow-right"
                :style="{ width: `${summaryCartModels.maxProcess}%` }"
              ></div>
            </div>
            <v-row class="justify-space-between mt-1 px-2">
              <p style="font-size: 10px">
                min: {{ summaryCartModels.minProcess }}%
              </p>
              <p style="font-size: 10px">
                max: {{ summaryCartModels.maxProcess }}%
              </p>
            </v-row>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import api from "@/components/API";

export default {
  name: "Dashboard",
  data() {
    return {
      start: 50, // Dynamic start value
      end: 70, // Dynamic end value

      allTrackingSelectedCompanies: [],
      summaryCartModels: {
        modelsTrainedCount: 0,
        minProcess: 1000,
        maxProcess: -1,
      },
      allUserAiRobots: [],
      allRecommendedCompanies: [],
      summaryRecommendedCompanies: {
        count: 0,
        median: 0,
      },
      allInsightCompanies: [],
      summaryInsights: {
        count: 0,
        min: 1990,
        max: -10,
      },
    };
  },
  methods: {
    redirect(address) {
      window.location.href = address;
    },
    init() {
      this.allInsightCompanies = api.getAllInsightCompanies();
      this.summaryInsights.count = this.allInsightCompanies.length;
      console.log(this.allInsightCompanies);
      this.allInsightCompanies.map((company) => {
        this.summaryInsights.min =
          company.completeness < this.summaryInsights.min
            ? company.completeness
            : this.summaryInsights.min;
        this.summaryInsights.max =
          company.completeness > this.summaryInsights.max
            ? company.completeness
            : this.summaryInsights.max;
      });
      this.allTrackingSelectedCompanies = api.getAllTrackingKPIs();
      this.allUserAiRobots = api.getAllAiRobots();
      this.summaryCartModels.modelsTrainedCount = this.allUserAiRobots.length;
      this.allUserAiRobots.map((robot) => {
        this.summaryCartModels.minProcess =
          parseFloat(robot.totalCompleteness) <
          this.summaryCartModels.minProcess
            ? parseFloat(robot.totalCompleteness)
            : this.summaryCartModels.minProcess;
        this.summaryCartModels.maxProcess =
          parseFloat(robot.totalCompleteness) >
          this.summaryCartModels.maxProcess
            ? parseFloat(robot.totalCompleteness)
            : this.summaryCartModels.maxProcess;
      });

      // =====================
      this.allRecommendedCompanies = api.getStandardCompanyList(
        api.getCompanies(),
        api.getAiRobots()
      );
      const recommendedCompaniesTemp = this.allRecommendedCompanies.filter(
        (x) => x.recommendation.recommended == true
      );
      this.summaryRecommendedCompanies.count = recommendedCompaniesTemp.length;
      let counter = 0;
      console.log(this.allRecommendedCompanies, recommendedCompaniesTemp);
      recommendedCompaniesTemp.map((x) => {
        this.summaryRecommendedCompanies.median =
          this.summaryRecommendedCompanies.median + parseInt(x.score);
        counter++;
      });
      this.summaryRecommendedCompanies.median = parseFloat(
        this.summaryRecommendedCompanies.median / counter
      ).toFixed(2);
      console.log(this.summaryRecommendedCompanies.median);
    },
  },
  mounted() {
    if (!api.getAuth()) window.location.href = "/login";

    this.init();
  },
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
.cart-insights {
  padding-top: 10px !important;
  padding-bottom: 2px !important;
  padding-left: 10px !important;
  padding-right: 10px !important;
  background: linear-gradient(
    82.99deg,
    rgb(92, 105, 226) 5.47%,
    rgb(8, 207, 234) 94.53%
  ) !important;
  color: white !important;
}
.cart-deals {
  padding: 10px !important;
  background: linear-gradient(
    78.84deg,
    rgb(85, 61, 239) 8.24%,
    rgb(207, 95, 228) 91.76%
  ) !important;
  color: white !important;
}
.cart-track {
  padding: 10px !important;
  background: linear-gradient(
    78.84deg,
    rgb(241, 91, 91) 8.24%,
    rgb(177, 36, 121) 91.76%
  ) !important;
  color: white !important;
}
.cart-models-trained {
  padding-top: 10px !important;
  padding-bottom: 2px !important;
  padding-left: 10px !important;
  padding-right: 10px !important;
  background: linear-gradient(
    82.99deg,
    rgb(255, 118, 3) 5.47%,
    rgb(255, 197, 44) 94.53%
  ) !important;
  color: white !important;
}
</style>

<template>
  <div>
    <v-row
      class="ps-3 pt-8 pb-6 mb-3"
      style="font-weight: 600; font-size: 28px; background: black; color: white"
      >Dashboard</v-row
    >

    <v-container fluid>
      <!-- <v-row>
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
            <div class="candlestick" v-if="summaryCartModels.minProcess < 100">
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
            <v-row
              class="justify-space-between mt-1 px-2"
              v-if="summaryCartModels.minProcess < 100"
            >
              <p style="font-size: 10px; color: black">
                min: {{ summaryCartModels.minProcess }}%
              </p>
              <p style="font-size: 10px; color: black">
                max: {{ summaryCartModels.maxProcess }}%
              </p>
            </v-row>
            <v-row class="justify-space-between mt-1 px-2">
              <p style="font-size: 10px; color: black">
                Mega Models: {{ trainedModelsTable.megaModelCount }}
              </p>
              <p style="font-size: 10px; color: black">
                Forked Models: {{ trainedModelsTable.forkedModelCount }}
              </p>
            </v-row>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="6" lg="6" xl="6" xxl="6">
        <v-data-table
          :headers="insightTable.headers"
          :items="insightTable.items"
          hide-default-footer
          disable-sort
          class="elevation-1"
        ></v-data-table>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="6" xl="6" xxl="6">
        <v-data-table
          :headers="trainedModelsTable.headers"
          :items="trainedModelsTable.items"
          hide-default-footer
          disable-sort
          class="elevation-1"
        ></v-data-table>
      </v-col>
    </v-row> -->
      <!-- =========================================== -->
      <v-row>
        <v-col cols="12" sm="6" md="6" lg="6" xl="6" xxl="6">
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
        <v-col cols="12" sm="6" md="6" lg="6" xl="6" xxl="6">
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
                  allTrackingSelectedCompanies.filter((x) => x.readyToBuy)
                    .length
                }}
                Ready to buy
              </p>
            </v-col>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="cart-insights">
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
              <div class="candlestick" v-if="summaryInsights.min < 100">
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
              <v-row
                class="justify-space-between mt-1 px-2"
                v-if="summaryInsights.min < 100"
              >
                <p style="font-size: 10px">min: {{ summaryInsights.min }}%</p>
                <p style="font-size: 10px">max: {{ summaryInsights.max }}%</p>
              </v-row>
              <v-row
                class="justify-space-between mt-1 px-2"
                v-if="summaryInsights.min >= 100"
              >
                <p style="font-size: 10px; width: 100%; text-align: center">
                  All insights are completed!
                </p>
              </v-row>
            </v-col>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="9" lg="9" xl="9" xxl="9">
          <v-data-table
            :headers="insightTable.headers"
            :items="insightTable.items"
            hide-default-footer
            disable-sort
            class="elevation-1"
          ></v-data-table>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          sm="12"
          md="12"
          lg="12"
          xl="12"
          xxl="12"
          style="padding: 1px 0px 1px 0px"
        >
          <v-card class="cart-data" min-width="100%">
            <v-card-text class="text--primary">
              <v-row>
                <v-col cols="12" sm="12" md="4" lg="3" xl="3" xxl="3">
                  <v-card class="cart-data">
                    <v-btn
                      class="d-flex flex-row ms-auto me-2 mt-2"
                      style="
                        background: black;
                        color: white;
                        border-radius: 30px;
                        text-transform: capitalize;
                      "
                      @click="redirect('/dashboard/dataCollector')"
                      >View</v-btn
                    >

                    <v-col class="justify-space-between align-center h-100">
                      <p
                        class="text-center"
                        style="
                          font-size: 2rem;
                          line-height: 2.75rem;
                          font-weight: 700;
                        "
                      >
                        100Tb
                      </p>
                      <p
                        class="text-center"
                        style="
                          font-size: 1.2rem;
                          line-height: 1.5rem;
                          font-weight: 700;
                        "
                      >
                        Gathered Data
                      </p>
                    </v-col>
                  </v-card>
                </v-col>
                <v-col cols="12" sm="12" md="8" lg="9" xl="9" xxl="9">
                  <v-row class="item-border">
                    <v-col>
                      <p class="item-text-show-position">75Tb of Public Data</p>
                    </v-col>
                    <v-col>
                      <p class="item-text-show-position-2">95% Trained</p>
                    </v-col>
                  </v-row>
                  <v-row
                    ><div
                      style="
                        height: 2px;
                        width: 65%;
                        margin: 0px auto 10px;
                        border-style: dashed;
                        border-color: rgb(94, 47, 164);
                        border-width: 2px;
                      "
                    ></div
                  ></v-row>
                  <v-row class="item-border">
                    <v-col>
                      <p class="item-text-show-position">
                        25Tb of Proprietary Data
                      </p>
                    </v-col>
                    <v-col>
                      <p class="item-text-show-position-2">75% Trained</p>
                    </v-col>
                  </v-row>
                  <v-row
                    ><div
                      style="
                        height: 2px;
                        width: 65%;
                        margin: 0px auto 10px;
                        border-style: dashed;
                        border-color: rgb(94, 47, 164);
                        border-width: 2px;
                      "
                    ></div
                  ></v-row>
                  <v-row class="item-border">
                    <v-col>
                      <p class="item-text-show-position">5Tb of Target Data</p>
                    </v-col>
                    <v-col>
                      <p class="item-text-show-position-2">97% Trained</p>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <!-- ============================ -->
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="cart-models-trained" style="margin-top: 10px">
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
              <div
                class="candlestick"
                v-if="summaryCartModels.minProcess < 100"
              >
                <div class="wick"></div>
                <div
                  class="body"
                  :style="{
                    width: `${
                      summaryCartModels.maxProcess -
                      summaryCartModels.minProcess
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
              <v-row
                class="justify-space-between mt-1 px-2"
                v-if="summaryCartModels.minProcess < 100"
              >
                <p style="font-size: 10px; color: black">
                  min: {{ summaryCartModels.minProcess }}%
                </p>
                <p style="font-size: 10px; color: black">
                  max: {{ summaryCartModels.maxProcess }}%
                </p>
              </v-row>
              <v-row class="justify-space-between mt-1 px-2">
                <p style="font-size: 10px; color: black">
                  Mega Models: {{ trainedModelsTable.megaModelCount }}
                </p>
                <p style="font-size: 10px; color: black">
                  Forked Models: {{ trainedModelsTable.forkedModelCount }}
                </p>
              </v-row>
            </v-col>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="9" lg="9" xl="9" xxl="9">
          <v-data-table
            :headers="trainedModelsTable.headers"
            :items="trainedModelsTable.items"
            hide-default-footer
            disable-sort
            class="elevation-1"
          ></v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import api from "@/components/API";

export default {
  name: "Dashboard",
  head() {
    return {
      title: "Dashboard",
    };
  },
  data() {
    return {
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
      trainedModelsTable: {
        headers: [
          {
            text: "#",
            align: "start",
            value: "name",
          },
          { text: "Mega Model", value: "megaModel" },
          { text: "Forked Model", value: "forkedModel" },
        ],
        items: [],
        megaModelCount: 0,
        forkedModelCount: 0,
      },
      insightTable: {
        headers: [
          {
            text: "#",
            align: "start",
            value: "name",
          },
          { text: "P0", value: "p0" },
          { text: "P1", value: "p1" },
          { text: "P2", value: "p2" },
        ],
        items: [],
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
      recommendedCompaniesTemp.map((x) => {
        this.summaryRecommendedCompanies.median =
          this.summaryRecommendedCompanies.median + parseInt(x.score);
        counter++;
      });
      this.summaryRecommendedCompanies.median = parseFloat(
        this.summaryRecommendedCompanies.median / counter
      ).toFixed(2);
      console.log(this.summaryRecommendedCompanies.median);

      this.fillTrainedModelsTableItems();
      this.fillInsightTableItems();
    },
    fillTrainedModelsTableItems() {
      const iqLevel = {
        forkedModel: 0,
        megaModel: 0,
        name: "IQ Level",
      };
      const iqBenchMarkLevel = {
        forkedModel: 0,
        megaModel: 0,
        name: "IQ Benchmarck",
      };
      const iqImprovementLevel = {
        forkedModel: 0,
        megaModel: 0,
        name: "IQ Improvement for last 30 Days",
      };
      let megaCount = 0;
      let forkedCount = 0;
      for (let index = 0; index < this.allUserAiRobots.length; index++) {
        const robot = this.allUserAiRobots[index];
        this.trainedModelsTable.forkedModelCount +=
          robot.selectedForkedModels.length;
        this.trainedModelsTable.megaModelCount +=
          robot.selectedMegaModels.length;

        for (
          let iqMegaIndex = 0;
          iqMegaIndex < robot.selectedMegaModels.length;
          iqMegaIndex++
        ) {
          megaCount++;
          iqLevel.megaModel += robot.selectedMegaModels[iqMegaIndex].iqLevel;
          iqBenchMarkLevel.megaModel +=
            robot.selectedMegaModels[iqMegaIndex].benchMark;
          iqImprovementLevel.megaModel +=
            robot.selectedMegaModels[iqMegaIndex].lastMonthIqLevel;
        }
        for (
          let iqMegaIndex = 0;
          iqMegaIndex < robot.selectedForkedModels.length;
          iqMegaIndex++
        ) {
          forkedCount++;
          iqLevel.forkedModel +=
            robot.selectedForkedModels[iqMegaIndex].iqLevel;
          iqBenchMarkLevel.forkedModel +=
            robot.selectedForkedModels[iqMegaIndex].benchMark;
          iqImprovementLevel.forkedModel +=
            robot.selectedForkedModels[iqMegaIndex].lastMonthIqLevel;
        }
      }
      iqLevel.megaModel = parseFloat(iqLevel.megaModel / megaCount).toFixed(2);
      iqLevel.forkedModel = parseFloat(
        iqLevel.forkedModel / forkedCount
      ).toFixed(2);

      iqBenchMarkLevel.megaModel = parseFloat(
        iqBenchMarkLevel.megaModel / megaCount
      ).toFixed(2);
      iqBenchMarkLevel.forkedModel = parseFloat(
        iqBenchMarkLevel.forkedModel / forkedCount
      ).toFixed(2);

      iqImprovementLevel.megaModel = parseFloat(
        iqImprovementLevel.megaModel / megaCount
      ).toFixed(2);
      iqImprovementLevel.forkedModel = parseFloat(
        iqImprovementLevel.forkedModel / forkedCount
      ).toFixed(2);

      this.trainedModelsTable.items = [
        iqLevel,
        iqBenchMarkLevel,
        iqImprovementLevel,
      ];
    },
    fillInsightTableItems() {
      const assetPhases = api.getAllAssetPhases();
      const totalAssets = {
        name: "Total Assets",
        p0: this.allInsightCompanies.filter((x) => x.assetPhase == 0).length,
        p1: this.allInsightCompanies.filter((x) => x.assetPhase == 1).length,
        p2: this.allInsightCompanies.filter((x) => x.assetPhase == 2).length,
      };
      const avgCompleteness = {
        name: "Avg Insight Completeness",
        p0: 0,
        p1: 0,
        p2: 0,
      };
      const avgPast = {
        name: "Avg Assets Completed in last 30 days",
        p0: assetPhases[0],
        p1: assetPhases[1],
        p2: assetPhases[2],
      };
      for (let index = 0; index < this.allInsightCompanies.length; index++) {
        const company = this.allInsightCompanies[index];
        if (company.assetPhase == 0)
          avgCompleteness.p0 += parseFloat(company.totalProcessingPercentage);
        if (company.assetPhase == 1)
          avgCompleteness.p1 += parseFloat(company.totalProcessingPercentage);
        if (company.assetPhase == 2)
          avgCompleteness.p2 += parseFloat(company.totalProcessingPercentage);
      }
      if (avgCompleteness.p0 != 0)
        avgCompleteness.p0 = `${parseFloat(
          avgCompleteness.p0 / totalAssets.p0
        ).toFixed(2)}%`;
      else avgCompleteness.p0 = "0%";
      if (avgCompleteness.p1 != 0)
        avgCompleteness.p1 = `${parseFloat(
          avgCompleteness.p1 / totalAssets.p1
        ).toFixed(2)}%`;
      else avgCompleteness.p1 = "0%";
      if (avgCompleteness.p2 != 0)
        avgCompleteness.p2 = `${parseFloat(
          avgCompleteness.p2 / totalAssets.p2
        ).toFixed(2)}%`;
      else avgCompleteness.p2 = "0%";
      this.insightTable.items = [totalAssets, avgCompleteness, avgPast];
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
  );
  color: white !important;
}
.cart-data {
  background: linear-gradient(
    78.84deg,
    rgb(60, 192, 0) 8.24%,
    rgb(35, 131, 141) 91.76%
  ) !important;
  padding-top: 10px !important;
  padding-bottom: 2px !important;
  padding-left: 10px !important;
  padding-right: 10px !important;
  color: white !important;
}
.item-text-show-position {
  font-size: 1.9rem;
  line-height: 1.85rem;
  font-weight: 300;
  color: white;
  text-align: left;
  display: block;
  width: 100%;
}
.item-text-show-position-2 {
  font-size: 1.9rem;
  line-height: 1.85rem;
  font-weight: 300;
  color: white;
  text-align: right;
  display: block;
  width: 100%;
}
.item-border {
}
</style>

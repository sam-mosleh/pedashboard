<template>
  <v-row style="background: rgba(199, 184, 255, 0.1); padding: 0px">
    <v-row
      class="ps-6 pt-5 pb-6"
      style="font-weight: 400; font-size: 28px; color: black"
      >Dashboard</v-row
    >

    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="6" md="6" lg="6" xl="6" xxl="6">
          <div class="pt-1 mb-3 d-flex flex-row" style="align-items: center">
            <v-avatar>
              <img
                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                alt="John"
              >
            </v-avatar>
            <v-col>
              <div>Welcome Back Jack!</div>
              <div style="color: #808080">Happy to see you again on your dashboard.</div>
            </v-col>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6" xl="6" xxl="6">
          <div class="d-flex flex-row pe-2" style="justify-content: flex-end">
            <v-btn
              color="white"
              class="primary--text"
              @click="() =>console.log()"
              style="text-transform: capitalize; height: 40px; border-radius: 12px; margin-top: 10px"
            >
              <v-icon
                right
                dark
                class="me-4"
              >
                mdi-robot-outline
              </v-icon>
              Talk with AI
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row style="font-size: 18px; font-weight: 500; color: #808080; padding-left: 1rem">Short Summary</v-row>
<!--      AA-->
      <v-row>
        <v-col cols="12" sm="6" md="6" lg="6" xl="6" xxl="6">
          <v-card class="cart-deals">
            <div class="d-flex flex-row mx-auto" style="justify-content: space-between; align-items: center">
              <v-icon large>mdi-robot-confused</v-icon>
              <div class="my-auto ms-2">RECOMMENDATIONS</div>
              <v-btn
                class="d-flex flex-row ms-auto me-2 my-auto"
                style="
                background: white;
                color: black;
                border: 1px solid #CCCCCC;
                border-radius: 15px;
                text-transform: capitalize;
              "
                @click="redirect('/dashboard/recommendations')"
              >View</v-btn
              >
            </div>

            <div class="d-flex flex-row justify-space-between align-center h-100" style="margin-top: 50px">
              <div class="d-flex flex-column mx-auto">
                <p
                  class="text-center"
                  style="font-size: 1.8rem; line-height: 0.75rem; font-weight: 400"
                >
                  {{ summaryRecommendedCompanies.count }}
                </p>
                <p
                  class="text-center"
                  style="font-size: 1.2rem; line-height: 1.5rem; font-weight: 400"
                >
                  Proprietary deals found
                </p>
              </div>
              <div style="width: 1px; height: 100px; background: rgba(211, 211, 211, 0.8)"></div>
              <div class="d-flex flex-column mx-auto">
                <p
                  class="text-center"
                  style="font-size: 1.8rem; line-height: 0.75rem; font-weight: 400"
                >
                  {{ summaryRecommendedCompanies.median }}
                </p>
                <p
                  class="text-center"
                  style="font-size: 1.2rem; line-height: 1.5rem; font-weight: 400"
                >
                  Median score
                </p>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6" xl="6" xxl="6">
          <v-card class="cart-deals">
            <div class="d-flex flex-row mx-auto" style="justify-content: space-between; align-items: center">
              <v-icon large>mdi-radar</v-icon>
              <div class="ms-2 my-auto">TRACKING</div>
              <v-btn
                class="d-flex flex-row ms-auto me-2 my-auto"
                style="
                background: white;
                color: black;
                border: 1px solid #CCCCCC;
                border-radius: 15px;
                text-transform: capitalize;
              "
                @click="redirect('/dashboard/tracking')"
              >View</v-btn
              >
            </div>

            <div class="d-flex flex-row justify-space-between align-center h-100" style="margin-top: 50px">
              <div class="d-flex flex-column mx-auto">
                <p
                  class="text-center"
                  style="font-size: 1.8rem; line-height: 0.75rem; font-weight: 400"
                >
                  {{ allTrackingSelectedCompanies.length }}
                </p>
                <p
                  class="text-center"
                  style="font-size: 1.2rem; line-height: 1.5rem; font-weight: 400"
                >
                  Assets tracked
                </p>
              </div>
              <div style="width: 1px; height: 100px; background: rgba(211, 211, 211, 0.8)"></div>
              <div class="d-flex flex-column mx-auto">
                <p
                  class="text-center"
                  style="font-size: 1.8rem; line-height: 0.75rem; font-weight: 400"
                >
                  {{
                    allTrackingSelectedCompanies.filter((x) => x.readyToBuy)
                      .length
                  }}
                </p>
                <p
                  class="text-center"
                  style="font-size: 1.2rem; line-height: 1.5rem; font-weight: 400"
                >
                  Ready to buy
                </p>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="6" lg="6" xl="6" xxl="6">
          <v-card class="cart-deals">
            <div class="d-flex flex-row mx-auto" style="justify-content: space-between; align-items: center">
              <v-icon large>mdi-database-outline</v-icon>
              <div class="ms-2 my-auto">DATA</div>
              <v-btn
                class="d-flex flex-row ms-auto me-2 my-auto"
                style="
                background: white;
                color: black;
                border: 1px solid #CCCCCC;
                border-radius: 15px;
                text-transform: capitalize;
              "
                @click="redirect('/dashboard/dataCollector')"
              >View</v-btn
              >
            </div>

            <div class="d-flex flex-row justify-space-between align-center h-100" style="margin-top: 50px">
              <div class="d-flex flex-column" style="font-size: 1.3rem; font-weight: 400">
                Number of Sources
              </div>
              <div style="width: 1px; height: 100px; background: rgba(211, 211, 211, 0.8)"></div>
              <div class="d-flex flex-column">
                <p
                  class="text-center"
                  style="font-size: 1rem; line-height: 1.5rem; font-weight: 400"
                >
                  Public Data
                </p>
                <p
                  class="text-center"
                  style="font-size: 1rem; line-height: 0.75rem; font-weight: 400"
                >
                  40
                </p>
              </div>
              <div style="width: 1px; height: 100px; background: rgba(211, 211, 211, 0.8)"></div>
              <div class="d-flex flex-column">
                <p
                  class="text-center"
                  style="font-size: 1rem; line-height: 1.5rem; font-weight: 400"
                >
                  Proprietary Data
                </p>
                <p
                  class="text-center"
                  style="font-size: 1rem; line-height: 0.75rem; font-weight: 400"
                >
                  45
                </p>
              </div>
              <div style="width: 1px; height: 100px; background: rgba(211, 211, 211, 0.8)"></div>
              <div class="d-flex flex-column">
                <p
                  class="text-center"
                  style="font-size: 1rem; line-height: 1.5rem; font-weight: 400"
                >
                  Target Data
                </p>
                <p
                  class="text-center"
                  style="font-size: 1rem; line-height: 0.75rem; font-weight: 400"
                >
                  7
                </p>
              </div>

            </div>
            <div class="mt-8 mb-12" style="height: 1px; background: rgba(211, 211, 211, 0.8)"></div>
            <v-row>
              <apexchart
                :options="dataChartOptions"
                :series="dataSeries"
                type="bar"
                style="width: 100% !important"
                height="300"
              ></apexchart>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6" xl="6" xxl="6">
          <v-card class="cart-deals">
            <div class="d-flex flex-row mx-auto" style="justify-content: space-between; align-items: center">
              <v-icon large>mdi-robot-outline</v-icon>
              <div class="ms-2 my-auto">MODELS TRAINED</div>
              <v-btn
                class="d-flex flex-row ms-auto me-2 my-auto"
                style="
                background: white;
                color: black;
                border: 1px solid #CCCCCC;
                border-radius: 15px;
                text-transform: capitalize;
              "
                @click="redirect('/dashboard/modelsTrained')"
              >View</v-btn
              >
            </div>

            <div class="d-flex flex-row justify-space-between align-center h-100" style="margin-top: 50px">
              <div class="d-flex flex-column" style="font-size: 1.3rem; font-weight: 400">
                Number of Models
              </div>
              <div style="width: 1px; height: 100px; background: rgba(211, 211, 211, 0.8)"></div>
              <div class="d-flex flex-column">
                <p
                  class="text-center"
                  style="font-size: 1rem; line-height: 1.5rem; font-weight: 400"
                >
                  Mega Models
                </p>
                <p
                  class="text-center"
                  style="font-size: 1rem; line-height: 0.75rem; font-weight: 400"
                >
                  2
                </p>
              </div>
              <div style="width: 1px; height: 100px; background: rgba(211, 211, 211, 0.8)"></div>
              <div class="d-flex flex-column">
                <p
                  class="text-center"
                  style="font-size: 1rem; line-height: 1.5rem; font-weight: 400"
                >
                  Forked Models
                </p>
                <p
                  class="text-center"
                  style="font-size: 1rem; line-height: 0.75rem; font-weight: 400"
                >
                  5
                </p>
              </div>
            </div>
            <div class="mt-8 mb-12" style="height: 1px; background: rgba(211, 211, 211, 0.8)"></div>
            <v-row>
              <apexchart
                :options="dataChartOptions"
                :series="dataSeries"
                type="bar"
                style="width: 100% !important"
                height="300"
              ></apexchart>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-col cols="12" sm="12" md="12" lg="12" xl="12" xxl="12">
        <v-card style="
          margin-top: 15px;
          padding: 30px !important;
          background: white;
          color: black !important;
        ">
          <div class="d-flex flex-row mx-auto" style="justify-content: space-between; align-items: center">
            <v-icon large>mdi-head-lightbulb</v-icon>
            <div class="ms-2 my-auto">INSIGHTS</div>
            <v-btn
              class="d-flex flex-row ms-auto me-2 my-auto"
              style="
                background: white;
                color: black;
                border: 1px solid #CCCCCC;
                border-radius: 15px;
                text-transform: capitalize;
              "
              @click="redirect('/dashboard/deal_insights')"
            >View</v-btn
            >
          </div>

          <div class="d-flex flex-row justify-center align-center h-100" style="margin-top: 50px">
            <div class="d-flex flex-column" style="font-size: 1.3rem; font-weight: 400">
              {{`Total Assets: ${`5`}`}}
            </div>
          </div>
          <div class="mt-8 mb-12" style="height: 1px; background: rgba(211, 211, 211, 0.8)"></div>
          <v-row>
            <apexchart
              :options="dataChartOptions"
              :series="dataSeries"
              type="bar"
              style="width: 100% !important"
              height="300"
            ></apexchart>
          </v-row>
        </v-card>
      </v-col>
    </v-container>
  </v-row>
</template>

<script>
import api from "@/components/API";

export default {
  name: "Dashboard",
  components: {
    [process.browser && "apexchart"]: () => import("vue-apexcharts"),
  },
  head() {
    return {
      title: "Dashboard",
    };
  },
  data() {
    return {
      dataSeries: [
        {
          name: 'Q1 Budget',
          group: 'budget',
          data: [44000, 55000, 41000, 67000, 22000]
        },
        {
          name: 'Q1 Actual',
          group: 'actual',
          data: [48000, 50000, 40000, 65000, 25000]
        },
        {
          name: 'Q2 Budget',
          group: 'budget',
          data: [13000, 36000, 20000, 8000, 13000]
        },
        {
          name: 'Q2 Actual',
          group: 'actual',
          data: [20000, 40000, 25000, 10000, 12000]
        }
      ],
      dataChartOptions: {
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
        },
        stroke: {
          width: 1,
          colors: ['#fff']
        },
        dataLabels: {
          formatter: (val) => {
            return val / 1000 + 'K'
          }
        },
        plotOptions: {
          bar: {
            horizontal: false
          }
        },
        xaxis: {
          categories: [
            'Online advertising',
            'Sales Training',
            'Print advertising',
            'Catalogs',
            'Meetings'
          ],
          labels: {
            formatter: (val) => {
              return val / 1000 + 'K'
            }
          }
        },
        fill: {
          opacity: 1,
        },
        colors: ['#80c7fd', '#008FFB', '#80f1cb', '#00E396'],
        legend: {
          position: 'top',
          horizontalAlign: 'center'
        }
      },
      allTrackingSelectedCompanies: [],
      summaryCartModels: {
        modelsTrainedCount: 0,
        minProcess: 1000,
        maxProcess: -1,
      },
      allUserAiRobots: [],
      allRecommendedCompanies: [],
      dataPageTable: {
        headers: [
          {
            text: "",
            align: "start",
            value: "name",
          },
          {
            text: "Public Data",
            align: "start",
            value: "numberOfSources",
          },
          {
            text: "Proprietary Data",
            align: "start",
            value: "dataVolume",
          },
          { text: "Target Data", value: "trainedPercentage" },
        ],
        items: [
          {
            name: "Data Volume",
            numberOfSources: "75Tb",
            dataVolume: "25Tb",
            trainedPercentage: "5Tb",
          },
          {
            name: "Number Of Sources",
            numberOfSources: 40,
            dataVolume: 45,
            trainedPercentage: 7,
          },
          {
            name: "Trained Percentage",
            numberOfSources: "95%",
            dataVolume: "75%",
            trainedPercentage: "97%",
          },
          {
            name: "Volume of new data in past 30 days",
            numberOfSources: "70Tb",
            dataVolume: "30Tb",
            trainedPercentage: "22Tb",
          },
        ],
      },
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
            text: "",
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
            text: "",
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
      this.trainedModelsTable.forkedModelCount = this.summaryInsights.count;
      this.trainedModelsTable.megaModelCount =
        this.summaryCartModels.modelsTrainedCount;
      for (let index = 0; index < this.allUserAiRobots.length; index++) {
        const robot = this.allUserAiRobots[index];

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

      iqImprovementLevel.megaModel = `+${parseFloat(
        iqImprovementLevel.megaModel / megaCount
      ).toFixed(2)}%`;
      iqImprovementLevel.forkedModel = `+${parseFloat(
        iqImprovementLevel.forkedModel / forkedCount
      ).toFixed(2)}%`;

      this.trainedModelsTable.items = [
        {
          forkedModel: this.trainedModelsTable.forkedModelCount,
          megaModel: this.trainedModelsTable.megaModelCount,
          name: "Number of Models",
        },
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
  padding: 30px !important;
  /*background: linear-gradient(*/
  /*  78.84deg,*/
  /*  rgb(85, 61, 239) 8.24%,*/
  /*  rgb(207, 95, 228) 91.76%*/
  /*) !important;*/
  background: white;
  color: black !important;
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
</style>

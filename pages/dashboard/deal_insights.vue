<template>
  <div>
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
    <v-row
      class="ps-3 pt-8 pb-6 mb-3"
      style="font-weight: 600; font-size: 28px; background: black; color: white"
      >Deal Insights</v-row
    >

    <v-row style="justify-content: space-between">
      <v-col cols="12" sm="6" md="3" lg="3" xl="3" xxl="3">
        <v-card class="cart-insights" style="">
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
      <v-col class="mt-7">
        <v-row style="gap: 10px" class="px-2">
          <v-col cols="12">
            <v-btn
              class="ms-3"
              color="black"
              style="color: white; border-radius: 20px; width: 100%"
              @click="() => (addNewTrackingCompanyDialog.isOpen = true)"
            >
              + Add asset for insight
            </v-btn>
          </v-col>
        </v-row>
        <v-row style="gap: 10px" class="px-2">
          <v-col cols="12">
            <p
              class="ms-3"
              style="
                background: black;
                color: white;
                width: 100%;
                padding: 10px 10px 10px 10px;
                text-align: center;
              "
            >
              +100Tb of gathered data and +4 AI model we are providing the
              future.
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-card
        v-for="company in allInsightCompanies"
        class="mx-auto mt-5"
        max-width="344"
      >
        <v-card-text>
          <p class="text-h4 text--primary">{{ company.name }}</p>
          <div class="text--primary">
            <v-chip-group active-class="primary--text" column>
              <v-chip>score: {{ company.score }}</v-chip>
              <v-chip>sellChance: {{ company.sellChance }}</v-chip>
              <v-chip
                >Total Processing Percentage:
                {{ company.totalProcessingPercentage }}%</v-chip
              >
              <v-chip>Completeness: {{ company.completeness }}%</v-chip>
              <v-chip
                >Total AI Processing:
                {{ company.totalAIProcessingPercentage }}%</v-chip
              >
              <v-chip
                >Total Data Gathering Processed:
                {{ company.totalDataGatheringProcessingPercentage }}%</v-chip
              >
              <v-chip>Documents: {{ company.uploadedFiles.length }}</v-chip>
            </v-chip-group>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            text
            color="green"
            @click="
              () => {
                dialogViewAssetDetail.isOpen = true;
                dialogViewAssetDetail.company = company;
              }
            "
          >
            view
          </v-btn>
          <!-- TODO: must be added -->
          <!-- <v-btn
            text
            color="red"
            @click="
              () => {
                deleteTrackingDialog.isOpen = true;
                deleteTrackingDialog.companyId = company.companyId;
              }
            "
          >
            delete
          </v-btn> -->
        </v-card-actions>
      </v-card>
    </v-row>

    <!-- Delete asset Dialog START -->
    <v-dialog v-model="dialogDeleteAsset" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="px-3" style="font-size: 18px; font-weight: 500"
            >Are you sure want to delete this asset</span
          >
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="dialogDeleteAsset = false">
            Cancel
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="() => console.log('delete asset')"
          >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- Delete asset Dialog END -->

    <!-- View Asset Detail Dialog START -->
    <v-dialog v-model="dialogViewAssetDetail.isOpen" max-width="90vw">
      <v-card class="mt-5">
        <v-card-text>
          <v-container>
            <v-col>
              <v-row style="border-bottom: 1px solid gray">
                <v-col cols="12" sm="12" md="6" lg="6" xl="6" xxl="6">
                  <v-card
                    style="padding: 10px; background: #f0f0f0; color: black"
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
                        {{ dialogViewAssetDetail.company?.name }}
                      </p>
                      <v-chip-group active-class="primary--text mt-3" column>
                        <v-chip
                          >score:
                          {{ dialogViewAssetDetail.company?.score }}</v-chip
                        >
                        <v-chip
                          >sellChance:
                          {{
                            dialogViewAssetDetail.company?.sellChance
                          }}</v-chip
                        >
                        <v-chip
                          >Total Processing Percentage:
                          {{
                            dialogViewAssetDetail.company
                              ?.totalProcessingPercentage
                          }}%</v-chip
                        >

                        <v-chip
                          >Total AI Processing:
                          {{
                            dialogViewAssetDetail.company
                              ?.totalAIProcessingPercentage
                          }}%</v-chip
                        >
                        <v-chip
                          >Total Data Gathering Processed:
                          {{
                            dialogViewAssetDetail.company
                              ?.totalDataGatheringProcessingPercentage
                          }}%</v-chip
                        >
                        <v-chip
                          >Documents:
                          {{
                            dialogViewAssetDetail.company?.uploadedFiles.length
                          }}</v-chip
                        >
                      </v-chip-group>
                    </v-col>
                  </v-card>
                  <v-row class="justify-space-between mt-3">
                    <v-chip
                      class="ma-2"
                      color="#F0F0F0"
                      label
                      text-color="black"
                    >
                      <v-icon left> mdi-puzzle </v-icon>
                      {{ dialogViewAssetDetail.company?.industry }}
                    </v-chip>
                  </v-row>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="6" xl="6" xxl="6">
                  <v-row class="mt-1 justify-end">
                    <!-- TODO: must be added -->
                    <!-- <v-btn
                      class="me-2"
                      color="black"
                      style="color: white; border-radius: 20px"
                      >Chat with AI</v-btn
                    > -->
                    <v-btn
                      color="white"
                      style="color: black; border-radius: 20px"
                      @click="
                        () => {
                          dialogMonitoring.isOpen = true;
                          dialogMonitoring.company =
                            dialogViewAssetDetail.company;
                        }
                      "
                      >Monitoring</v-btn
                    >
                  </v-row>
                  <v-row class="w-100 mt-3 justify-center">
                    <!-- <v-btn
                      class="w-100 mt-5 me-2"
                      color="gray"
                      style="color: black; border-radius: 20px"
                      @click="()=>{
                        fireSnack('')
                      }"
                    >
                      <v-icon>mdi-plus</v-icon>
                      Upload more documents
                    </v-btn> -->
                  </v-row>
                  <v-row
                    v-for="file in dialogViewAssetDetail.company?.uploadedFiles"
                    class="w-100 px-3 pt-3 mt-8 justify-space-between"
                    style="background: lightgray; border-radius: 5px"
                  >
                    <p>{{ file }}</p>
                    <p>Size: {{ Math.floor(Math.random() * 2048) }}Kb</p>
                    <!-- <v-icon class="mt-0 mb-auto" style="color: red"
                      >mdi-delete</v-icon
                    > -->
                  </v-row>
                </v-col>
              </v-row>
              <v-row class="my-5 justify-center">
                <v-tabs color="black accent-4">
                  <v-tab style="text-transform: capitalize"
                    >Standard Due Diligence</v-tab
                  >
                  <v-tab style="text-transform: capitalize"
                    >Alternative Insights</v-tab
                  >
                  <v-tab-item v-for="n in 2" :key="n">
                    <v-container fluid v-if="n === 1">
                      <v-tabs color="black accent-4">
                        <v-tab style="text-transform: capitalize"
                          >Commercial</v-tab
                        >
                        <v-tab style="text-transform: capitalize"
                          >Finance</v-tab
                        >
                        <v-tab style="text-transform: capitalize">Legal</v-tab>
                        <v-tab style="text-transform: capitalize">IT</v-tab>
                        <v-tab-item v-for="n in [3, 4, 5, 6]" :key="n">
                          <v-container fluid v-if="n === 3">
                            <p>
                              {{
                                dialogViewAssetDetail.company?.insight
                                  .standardDueDiligence.commercial
                              }}
                            </p>
                          </v-container>
                          <v-container fluid v-if="n === 4">
                            <p>
                              {{
                                dialogViewAssetDetail.company?.insight
                                  .standardDueDiligence.financial
                              }}
                            </p>
                          </v-container>
                          <v-container fluid v-if="n === 5">
                            <p>
                              {{
                                dialogViewAssetDetail.company?.insight
                                  .standardDueDiligence.legal
                              }}
                            </p>
                          </v-container>
                          <v-container fluid v-if="n === 6">
                            <p>
                              {{
                                dialogViewAssetDetail.company?.insight
                                  .standardDueDiligence.it
                              }}
                            </p>
                          </v-container>
                        </v-tab-item>
                      </v-tabs>
                      <v-row class="mb-5 justify-center"> </v-row>
                    </v-container>
                    <v-container fluid v-if="n === 2">
                      <v-tabs color="black accent-4">
                        <v-tab style="text-transform: capitalize"
                          >Key Features</v-tab
                        >
                        <v-tab style="text-transform: capitalize"
                          >Key Risks</v-tab
                        >
                        <v-tab style="text-transform: capitalize"
                          >Key Upsides</v-tab
                        >

                        <v-tab-item v-for="n in [7, 8, 9]" :key="n">
                          <v-container fluid v-if="n === 7">
                            <p>
                              {{
                                dialogViewAssetDetail.company?.insight
                                  .alternativeInsights.keyFeaters
                              }}
                            </p>
                          </v-container>
                          <v-container fluid v-if="n === 8">
                            <p>
                              {{
                                dialogViewAssetDetail.company?.insight
                                  .alternativeInsights.keyRisks
                              }}
                            </p>
                          </v-container>
                          <v-container fluid v-if="n === 9">
                            <p>
                              {{
                                dialogViewAssetDetail.company?.insight
                                  .alternativeInsights.keyUpsides
                              }}
                            </p>
                          </v-container>
                        </v-tab-item>
                      </v-tabs>
                    </v-container>
                  </v-tab-item>
                </v-tabs>
              </v-row>
            </v-col>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red darken-1"
            text
            @click="dialogViewAssetDetail.isOpen = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- View Asset Detail Dialog END -->

    <!-- View Asset Detail Dialog START -->
    <v-dialog v-model="dialogMonitoring.isOpen" max-width="90vw">
      <v-card>
        <v-card-text>
          <v-container>
            <v-col class="py-10">
              <v-row class="px-3">
                <p style="font-size: 20px; font-weight: 600" class="my-3">
                  Insight
                </p>
                <div class="d-flex flex-row ms-auto me-0 my-3">
                  <v-row>
                    <v-btn
                      @click="dialogAddReview = true"
                      rounded
                      color="gray"
                      class="mt-4 mx-3"
                      style="color: black"
                    >
                      <v-icon>mdi-plus</v-icon>
                      Add a review
                    </v-btn>
                  </v-row>
                </div>
              </v-row>
              <p style="font-size: 14px; font-weight: 400" class="mt-10">
                {{ dialogMonitoring.company?.insight.aiDescription }}
              </p>
              <v-row class="d-flex justify-space-between mt-10">
                <p style="font-size: 14px; font-weight: 400" class="mt-4 ps-3">
                  There is
                  {{
                    showDataSize(dialogMonitoring.company?.totalDataGathered)
                  }}
                  of data gathered for this company
                </p>
              </v-row>
              <v-card
                v-for="gatheringChannels in dialogMonitoring.company
                  ?.recommendation.gatheringChannels"
                class="mt-10"
                style="background: #f0f0f0"
              >
                <v-row style="justify-content: center; align-items: center">
                  <v-img
                    contain
                    alt="logo"
                    class="ps-4"
                    max-width="100"
                    :src="gatheringChannels.imgSRC"
                  ></v-img>
                  <v-col>
                    <v-chip-group active-class="primary--text" column>
                      <v-chip
                        class="ma-2"
                        color="green"
                        text-color="white"
                        style="justify-content: center; align-items: center"
                      >
                        {{
                          `Status: ${
                            gatheringChannels.isDataGatheringFinished
                              ? gatheringChannels.isDataLearningFinished
                                ? "Finished"
                                : "Learning Data"
                              : "Gathering Data"
                          }`
                        }}
                      </v-chip>
                      <v-chip class="ma-2" color="#87CEEB" text-color="white">
                        {{ `Last Update: ${gatheringChannels.lastUpdate}` }}
                      </v-chip>
                      <v-chip class="ma-2" color="#87CEEB" text-color="white">
                        {{
                          `Gathered Data: ${showDataSize(
                            gatheringChannels.getteredData
                          )}`
                        }}
                      </v-chip>
                      <v-chip class="ma-2" color="#87CEEB" text-color="white">
                        {{
                          `AI Model: ${showAIModelByAiId(
                            gatheringChannels.aiModelsID
                          )}`
                        }}
                      </v-chip>

                      <v-chip class="ma-2" color="cyan" text-color="white">
                        {{
                          `Data Gathering Process: ${gatheringChannels.dataGatheringProcessingPercentage}%`
                        }}
                      </v-chip>

                      <v-chip class="ma-2" color="orange" text-color="white">
                        {{
                          `AI Learning Process: ${gatheringChannels.dataLearningProcessingPercentage}%`
                        }}
                      </v-chip>
                    </v-chip-group>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="
              () => {
                dialogMonitoring.isOpen = false;
                dialogMonitoring.company = null;
              }
            "
          >
            close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- View Asset Detail Dialog END -->

    <!-- Add a review Dialog START -->
    <v-dialog v-model="dialogAddReview" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="px-3" style="font-size: 18px; font-weight: 500"
            >Please leave your review about the trained data</span
          >
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-textarea outlined label="type your review here"></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="dialogAddReview = false">
            Cancel
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="
              () => {
                dialogAddReview = false;
                fireSnack('review submitted successfully');
              }
            "
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- Add a review Dialog END -->
    <!-- -------------------------Tracking Add new DIALOG START------------------------- -->
    <v-dialog v-model="addNewTrackingCompanyDialog.isOpen">
      <v-card>
        <v-card-title class="text-h5">
          Select Your Favorite Companies to Place in Insights!
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-card
              v-for="company in addNewTrackingCompanyDialog.allCompanies"
              class="mx-auto mt-5"
              max-width="300"
            >
              <v-card-text>
                <p class="text-h4 text--primary">{{ company.name }}</p>
                <div class="text--primary">
                  <v-chip-group active-class="primary--text" column>
                    <v-chip
                      >totalDataGathered:
                      {{ showDataSize(company.totalDataGathered) }}
                    </v-chip>
                    <v-chip
                      >totalDataLearned:
                      {{ showDataSize(company.totalDataLearned) }}
                    </v-chip>
                  </v-chip-group>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  v-if="!company.isSelectedAttr"
                  text
                  color="green"
                  @click="
                    () => {
                      company.isSelectedAttr = true;
                    }
                  "
                >
                  Add to insights
                </v-btn>
                <v-btn
                  v-else
                  text
                  color="red"
                  @click="
                    () => {
                      company.isSelectedAttr = false;
                    }
                  "
                >
                  De-Select this company
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="red darken-1"
            text
            @click="
              () => {
                addNewTrackingCompanyDialog.isOpen = false;
              }
            "
          >
            close
          </v-btn>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="addCompanyToTrackingSystem"
          >
            Add Selected Companies
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- -------------------------Add New DIALOG   END------------------------- -->
  </div>
</template>

<script>
import api from "@/components/API";

export default {
  name: "Deal Insights page",
  data() {
    return {
      allInsightCompanies: [],
      summaryInsights: {
        count: 0,
        min: 1990,
        max: -10,
      },
      snackbar: {
        isOpen: false,
        text: "",
      },
      addNewTrackingCompanyDialog: {
        isOpen: false,
        allCompanies: [],
      },
      allAiModels: [],
      //===================
      expanded: [],
      dialogDeleteAsset: false,
      dialogViewAssetDetail: {
        isOpen: false,
        company: null,
      },
      dialogMonitoring: {
        isOpen: false,
        company: null,
      },
      dialogAddReview: false,
    };
  },
  methods: {
    showAIModelByAiId(aiId) {
      return this.allAiModels.filter((x) => x.id == aiId)[0].name;
    },
    fireSnack(text) {
      this.snackbar.text = text;
      this.snackbar.isOpen = true;
    },
    showDataSize(dataSize) {
      return api.dataSizeSerializer(dataSize);
    },
    addCompanyToTrackingSystem() {
      this.addNewTrackingCompanyDialog.allCompanies.map((company) => {
        if (company.isSelectedAttr) {
          this.allInsightCompanies.push(company);
        }
      });
      api.saveInsightCompanies(this.allInsightCompanies);
      this.fireSnack("Companies added successfully!");
      this.inti();
    },
    inti() {
      this.allAiModels = api.getAiRobots();
      this.addNewTrackingCompanyDialog.isOpen = false;
      let allAiRobots = api.getAiRobots();
      this.addNewTrackingCompanyDialog.allCompanies = api
        .getStandardCompanyList(api.getCompanies(), allAiRobots)
        .filter(
          (z) =>
            this.allInsightCompanies.findIndex(
              (k) => k.companyId == z.companyId
            ) == -1
        );

      this.allInsightCompanies = api.getAllInsightCompanies();
      this.summaryInsights.count = this.allInsightCompanies.length;
      console.log(this.allInsightCompanies);
      this.allInsightCompanies.map((company) => {
        console.log(company.completeness);
        this.summaryInsights.min =
          parseFloat(company.completeness) < this.summaryInsights.min
            ? parseFloat(company.completeness)
            : this.summaryInsights.min;
        this.summaryInsights.max =
          parseFloat(company.completeness) > this.summaryInsights.max
            ? parseFloat(company.completeness)
            : this.summaryInsights.max;
      });
    },
  },
 
  mounted() {
    if (!api.getAuth()) window.location.href = "/login";
    this.inti();
  },
  watch: {},
};
</script>

<style>
.circleStyle {
  width: 20px;
  height: 20px;
  background-color: red;
  margin-right: 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 12px;
}

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
</style>

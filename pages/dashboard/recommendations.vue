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
      >Recommendations</v-row
    >
    <v-row style="justify-content: space-between">
      <v-col cols="12" sm="6" md="3" lg="3" xl="3" xxl="3">
        <v-card class="cart-deals">
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
      <v-col class="mt-7">
        <v-row class="px-4 mb-8" style="font-weight: 500; font-size: 14px"
          >Precision vs Recall</v-row
        >
        <v-row style="gap: 10px" class="px-2">
          <v-col cols="12" sm="12" md="12" lg="12" xl="12" xxl="12">
            <v-row>
              <v-slider
                v-model="precisionVsRecall"
                :thumb-size="28"
                color="black"
                thumb-label="always"
              ></v-slider>
              <v-btn
                class="ms-3"
                style="background: black; color: white; border-radius: 20px"
                @click="dialogAddFocusSearch = true"
              >
                Focus Search
              </v-btn>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="px-2 mt-10">
          <v-col cols="12" xs="12" sm="3" md="3" lg="3" xl="3" xxl="3">
            <p style="font-size: 18px; font-weight: 600">Current Search:</p>
          </v-col>
          <v-col cols="12" xs="12" sm="9" md="9" lg="9" xl="9" xxl="9">
            <v-sheet class="mx-auto" max-width="65vw">
              <v-slide-group multiple show-arrows>
                <v-slide-item
                  v-for="(search, i) in currentSearches"
                  :key="i"
                  v-slot="{ active, toggle }"
                >
                  <v-btn
                    class="mx-2"
                    :input-value="active"
                    style="margin: 3px"
                    :color="(i = 0 ? '#989891' : '#e9e9e6')"
                    active-class="purple white--text"
                    depressed
                    rounded
                    @click="toggle"
                  >
                    {{ search.value }}
                  </v-btn>
                </v-slide-item>
              </v-slide-group>
            </v-sheet>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <p class="mt-6" style="font-size: 16px; font-weight: 500">
      Sample Text for recommendations
    </p>
    <div class="mt-6">
      <v-data-table
        v-if="companies"
        :headers="headers"
        :items="allRecommendedCompanies"
        :expanded.sync="expanded"
        item-key="name"
        class="elevation-1"
        show-expand
      >
        <template v-slot:item.recommended="{ item }">
          {{ `${item.recommendation.recommended ? "Yes" : "No"}` }}
        </template>
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Recommendations</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
        </template>
        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length">
            <v-col class="py-10">
              <v-row class="px-3">
                <p style="font-size: 20px; font-weight: 600" class="my-3">
                  Insight
                </p>
                <div class="d-flex flex-row ms-auto me-0 my-3">
                  <v-row>
                    <v-btn
                      @click="setSelectForInsight(item)"
                      rounded
                      color="black"
                      class="mt-4 mx-3"
                      style="color: white"
                    >
                      <v-icon>mdi-plus</v-icon>
                      Add to insight
                    </v-btn>
                    <v-btn
                      v-if="
                        !allTrackingCompanies.filter(
                          (x) => x.companyId == item.companyId
                        )
                      "
                      @click="addCompanyToTracking(item)"
                      rounded
                      color="white"
                      class="mt-4"
                      style="color: black"
                    >
                      <v-icon>mdi-plus</v-icon>
                      Add to tracking
                    </v-btn>
                    <v-btn
                      @click="
                        () => {
                          dialogAddReview.isOpen = true;
                          dialogAddReview.review = '';
                        }
                      "
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
                {{ item.insight.aiDescription }}
              </p>
              <v-row class="d-flex justify-space-between mt-10">
                <p style="font-size: 14px; font-weight: 400" class="mt-4 ps-3">
                  There is {{ showDataSize(item.totalDataGathered) }} of data
                  gathered for this company
                </p>
              </v-row>
              <v-card
                v-for="gatheringChannels in item.recommendation
                  .gatheringChannels"
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
          </td>
        </template>
      </v-data-table>
    </div>

    <!-- Add a review Dialog START -->
    <v-dialog v-model="dialogAddReview.isOpen" max-width="500px">
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
          <v-btn
            color="red darken-1"
            text
            @click="dialogAddReview.isOpen = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="
              () => {
                dialogAddReview.isOpen = false;
                dialogAddReview.review = '';
                fireSnack('your review submitted successfully!');
              }
            "
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- Add a review Dialog END -->

    <!-- Focus search Dialog START -->
    <v-dialog v-model="dialogAddFocusSearch" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="px-3" style="font-size: 18px; font-weight: 500"
            >Please filter the search based on your KPIs. By clicking on '+' you
            can add an AI based custom KPI</span
          >
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-col>
              <v-btn
                style="border-radius: 20px; background: black; color: white"
                @click="dialogSelectFromSearchHistory = true"
              >
                Select from search history
              </v-btn>
              <v-row class="mt-5">
                <p class="mt-3 me-3">Label name</p>
                <v-text-field outlined label="Input value"> </v-text-field>
              </v-row>
              <v-row class="mt-5">
                <p class="mt-1 me-3">Label name</p>
                <v-slider
                  :thumb-size="28"
                  color="black"
                  thumb-label="always"
                ></v-slider>
              </v-row>

              <v-row
                class="mt-5 px-3 py-3"
                style="background: lightskyblue; border-radius: 7px"
              >
                <p class="mt-3 me-3">Custom KPI</p>
                <v-text-field outlined label="Input value"> </v-text-field>
                <v-icon
                  @click="() => console.log('delete custom dialog')"
                  class="mt-0 mb-auto ms-4 pointer"
                  style="
                    font-size: 20px;
                    color: white;
                    background: red;
                    border-radius: 50%;
                  "
                  >mdi-close</v-icon
                >
              </v-row>

              <v-btn
                @click="dialogAddNewAIBasedKPI = true"
                rounded
                color="gray"
                class="mt-10 mx-auto"
                style="color: black"
              >
                <v-icon>mdi-plus</v-icon>
                Add new AI based KPI
              </v-btn>
            </v-col>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red darken-1"
            text
            @click="dialogAddFocusSearch = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialogSearchFilterName = true"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- Focus search Dialog END -->

    <!-- Select From Search History Dialog START -->
    <v-dialog v-model="dialogSelectFromSearchHistory" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="px-3" style="font-size: 18px; font-weight: 500"
            >Searches history</span
          >
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-col>
              <v-card>
                <v-col class="p-3">
                  <v-text-field outlined label="Search name"></v-text-field>
                  <v-textarea outlined label="Search description"></v-textarea>
                  <v-spacer></v-spacer>
                  <v-row justify="between">
                    <v-btn
                      color="red darken-1"
                      text
                      @click="dialogSelectFromSearchHistory = false"
                    >
                      Delete
                    </v-btn>
                    <v-btn
                      color="green darken-1"
                      text
                      @click="() => console.log('')"
                    >
                      Select
                    </v-btn>
                  </v-row>
                </v-col>
              </v-card>
            </v-col>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red darken-1"
            text
            @click="dialogAddFocusSearch = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="() => console.log('save focus search')"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- Select From Search History Dialog END -->

    <!-- Add New AI based KPI Dialog START -->
    <v-dialog v-model="dialogAddNewAIBasedKPI" max-width="500px">
      <v-card>
        <v-card-title>
          <span
            class="px-3"
            style="font-size: 18px; font-weight: 500"
            @click="dialogAddNewAIBasedKPI = true"
            >Add new AI based KPI</span
          >
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-col>
              <v-card>
                <v-col class="p-3">
                  <v-text-field outlined label="KPI label"></v-text-field>
                  <v-text-field outlined label="KPI Type"></v-text-field>

                  <v-spacer></v-spacer>
                  <p>
                    Please write your KPI logic for this input here and AI model
                    will filters the data based on your topic
                  </p>
                  <v-textarea outlined label="KPI logic"></v-textarea>
                  <v-spacer></v-spacer>
                  <v-row justify="between">
                    <v-btn
                      color="red darken-1"
                      text
                      @click="dialogSelectFromSearchHistory = false"
                    >
                      Delete
                    </v-btn>
                    <v-btn
                      color="green darken-1"
                      text
                      @click="() => console.log('')"
                    >
                      Select
                    </v-btn>
                  </v-row>
                </v-col>
              </v-card>
            </v-col>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red darken-1"
            text
            @click="dialogAddNewAIBasedKPI = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="() => console.log('save focus search')"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- Add New AI based KPI Dialog END -->

    <!-- Search Filter Name Dialog START -->
    <v-dialog v-model="dialogSearchFilterName" max-width="500px">
      <v-card>
        <v-card-title>
          <span
            class="px-3"
            style="font-size: 18px; font-weight: 500"
            @click="dialogAddNewAIBasedKPI = true"
            >Please enter name of your search filter</span
          >
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-col>
              <v-card>
                <v-col class="p-3">
                  <v-text-field
                    outlined
                    label="Search filter name"
                  ></v-text-field>
                  <v-spacer></v-spacer>
                </v-col>
              </v-card>
            </v-col>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red darken-1"
            text
            @click="dialogSearchFilterName = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="() => console.log('name for your search filter')"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- Search Filter Name Dialog END -->
  </div>
</template>

<script>
import utils from "@/components/utils";
import api from "@/components/API";

export default {
  name: "Recommendation Page",
  data() {
    return {
      allRecommendedCompanies: [],
      summaryRecommendedCompanies: {
        count: 0,
        median: 0,
      },
      allAiModels: [],
      snackbar: {
        isOpen: false,
        text: "",
      },
      allTrackingCompanies: [],
      //===============================
      expanded: [],
      dialogAddReview: {
        isOpen: false,
        review: "",
      },
      dialogAddFocusSearch: false,
      dialogSelectFromSearchHistory: false,
      dialogAddNewAIBasedKPI: false,
      dialogSearchFilterName: false,
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Score", value: "score" },
        { text: "HQ Location", value: "hqLocation" },
        { text: "Revenue Size", value: "revenueSize" },
        { text: "Industry", value: "industry" },
        { text: "Recommended", value: "recommended" },
        { text: "Insight", value: "data-table-expand" },
      ],
      allCompanies: [],
      companies: null,
      precisionVsRecall: 45,
      currentSearches: [
        {
          label: "0",
          value: "All",
        },
        {
          label: "1",
          value: "Apple",
        },
        {
          label: "2",
          value: "BMW",
        },
        {
          label: "3",
          value: "SpaceX",
        },
        {
          label: "4",
          value: "Tesla",
        },
        {
          label: "5",
          value: "Benz",
        },
        {
          label: "6",
          value: "Coca Cola",
        },
        {
          label: "7",
          value: "Toronto, Ontario, Canada",
        },
        {
          label: "8",
          value: "Los Angeles",
        },
        {
          label: "9",
          value: "Audi",
        },
        {
          label: "10",
          value: "Ottawa",
        },
        {
          label: "11",
          value: "Walmart",
        },
        {
          label: "12",
          value: "New York, USA",
        },
        {
          label: "13",
          value: "BMW",
        },
        {
          label: "14",
          value: "SpaceX",
        },
        {
          label: "15",
          value: "Tesla",
        },
        {
          label: "16",
          value: "Benz",
        },
        {
          label: "17",
          value: "Coca Cola",
        },
        {
          label: "18",
          value: "Toronto, Ontario, Canada",
        },
      ],
    };
  },
  methods: {
    showDataSize(dataSize) {
      return api.dataSizeSerializer(dataSize);
    },
    showAIModelByAiId(aiId) {
      return this.allAiModels.filter((x) => x.id == aiId)[0].name;
    },
    addCompanyToTracking(item) {
      this.allTrackingCompanies = api.getAllTrackingKPIs();
      if (!this.allTrackingCompanies.find((x) => x.companyId == item.companyId))
        this.allTrackingCompanies.push(item);
      api.saveTrackingKPIs(this.allTrackingCompanies);
      this.fireSnack("Asset added to tracking list!");
    },
    fireSnack(text) {
      this.snackbar.text = text;
      this.snackbar.isOpen = true;
    },
    //===============================
    getRandomColor(colorArray) {
      const randomIndex = Math.floor(Math.random() * colorArray.length);
      return colorArray[randomIndex];
    },
    setSelectForInsight(item) {
      let selectedForInsights;
      if (localStorage.getItem("selectedForInsights")) {
        selectedForInsights = JSON.parse(
          localStorage.getItem("selectedForInsights")
        );
        if (
          !selectedForInsights.filter((itemClone) => itemClone === item).length
        ) {
          selectedForInsights.push(item);
        }
      } else {
        selectedForInsights = [item];
      }
      localStorage.setItem(
        "selectedForInsights",
        JSON.stringify(selectedForInsights)
      );
    },
  },
  mounted() {
    const allAvailableAiRobots = api.getAiRobots();
    this.allRecommendedCompanies = api.getStandardCompanyList(
      api.getCompanies(),
      allAvailableAiRobots
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
    this.allAiModels = api.getAiRobots();
    //============================
    this.allCompanies = utils.getCompanies();
    this.companies = this.allCompanies;
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
.cart-deals {
  padding: 10px !important;
  background: linear-gradient(
    78.84deg,
    rgb(85, 61, 239) 8.24%,
    rgb(207, 95, 228) 91.76%
  ) !important;
  color: white !important;
}
</style>

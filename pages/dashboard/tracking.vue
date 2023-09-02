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
    <v-row
      class="ps-3 pt-8 pb-6 mb-3"
      style="font-weight: 600; font-size: 28px; background: black; color: white"
      >Models Trained</v-row
    >
    <v-row style="justify-content: space-between">
      <v-col cols="12" sm="6" md="3" lg="3" xl="3" xxl="3">
        <v-card class="cart-track">
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
      <v-col class="mt-7">
        <v-row style="gap: 10px" class="px-2">
          <v-col cols="12">
            <v-btn
              class="ms-3"
              color="black"
              style="color: white; border-radius: 20px; width: 100%"
              @click="() => (addNewTrackingCompanyDialog.isOpen = true)"
            >
              + Add new company to tracking system.
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
              Your AI robots founded
              <v-chip color="green">{{
                allTrackingSelectedCompanies.filter((x) => x.readyToBuy).length
              }}</v-chip>
              buying opportunities, <v-chip color="green">20%</v-chip> more
              opportunities than yesterday
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-card
        v-for="company in allTrackingSelectedCompanies"
        class="mx-auto mt-5"
        max-width="344"
      >
        <v-card-text>
          <p class="text-h4 text--primary">{{ company.name }}</p>
          <div class="text--primary">
            <v-chip-group active-class="primary--text" column>
              <v-chip :color="`${company.userKPIs.length == 0 ? 'red' : ''}`"
                >Selected KPIs: {{ company.userKPIs.length }}</v-chip
              >
              <v-chip v-if="company.readyToBuy" color="green"
                >Ready to Buy</v-chip
              >
            </v-chip-group>
          </div>
          <div class="text--primary" v-if="company.userKPIs.length == 0">
            you need to add KPI to this company!
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            text
            color="green"
            @click="
              () => {
                viewTrackingCompanyDialog.isOpen = true;
                viewTrackingCompanyDialog.company = company;
                changeKPIChart(0);
              }
            "
          >
            view
          </v-btn>
          <v-btn
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
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
    <!-- -------------------------Tracking View DIALOG START------------------------- -->
    <v-dialog v-model="viewTrackingCompanyDialog.isOpen" max-width="600">
      <v-card>
        <v-card-title> Tracking overview </v-card-title>
        <v-card-text>
          <v-row style="padding: 10px 10px 10px 10px">
            <p class="text-h4 text--primary">
              {{ viewTrackingCompanyDialog.company?.name }}
            </p>
            <div class="text--primary">
              <v-chip-group active-class="primary--text" column>
                <v-chip
                  >totalDataGathered:
                  {{
                    showDataSize(
                      viewTrackingCompanyDialog.company?.totalDataGathered
                    )
                  }}
                </v-chip>
                <v-chip
                  >totalDataLearned:
                  {{
                    showDataSize(
                      viewTrackingCompanyDialog.company?.totalDataLearned
                    )
                  }}
                </v-chip>
              </v-chip-group>
            </div>
          </v-row>
          <v-row>
            <v-chip-group mandatory active-class="primary--text">
              <v-chip
                v-for="(tag, i) in viewTrackingCompanyDialog.company?.userKPIs"
                :key="tag.name"
                @click="changeKPIChart(i)"
              >
                {{ tag.name }}
              </v-chip>
            </v-chip-group>
            <v-spacer></v-spacer>

            <v-btn
              text
              color="green darken-1"
              @click="
                openNewKpiDialog(viewTrackingCompanyDialog.company.companyId)
              "
              >+ Add New KPI</v-btn
            >
          </v-row>
          <v-row>
            <apexchart
              :options="chartOptions"
              :series="chartSeries"
              type="line"
              style="width: 100% !important"
              height="300"
            ></apexchart>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="red darken-1"
            text
            @click="
              () => {
                deleteTrackingDialog.isOpen = true;
                deleteTrackingDialog.companyId =
                  viewTrackingCompanyDialog.company.companyId;
              }
            "
          >
            Delete
          </v-btn>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="
              () => {
                viewTrackingCompanyDialog.isOpen = false;
                viewTrackingCompanyDialog.company = null;
              }
            "
          >
            close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- -------------------------Add View DIALOG        END------------------------- -->
    <!-- -------------------------Tracking Add new DIALOG START------------------------- -->
    <v-dialog v-model="addNewTrackingCompanyDialog.isOpen">
      <v-card>
        <v-card-title class="text-h5">
          Select Your Favorite Companies to Track!
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
                  Select To Track
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
    <!-- -------------------------    DELETE DIALOG   Start------------------------- -->
    <v-dialog v-model="deleteTrackingDialog.isOpen" max-width="500">
      <v-card>
        <v-card-title class="text-h5">
          are you sure to delete this Tracked Company?
        </v-card-title>

        <v-card-actions>
          <v-btn
            color="red darken-1"
            text
            @click="deleteTrackingCompany(deleteTrackingDialog.companyId)"
          >
            Yes
          </v-btn>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="
              () => {
                deleteTrackingDialog.isOpen = false;
                deleteTrackingDialog.companyId = '';
              }
            "
          >
            No
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- -------------------------    DELETE DIALOG   END------------------------- -->
    <!-- -------------------------    Add NEW KPI Key DIALOG   Start------------------------- -->
    <v-dialog v-model="addNewKpiKeyDialog.isOpen" max-width="550">
      <v-card>
        <v-card-title class="text-h5">
          Adding new KPI key filters to the company.
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-text-field
              label="Enter KPI Name"
              v-model="addNewKpiKeyDialog.name"
              hide-details="auto"
            ></v-text-field>
          </v-row>
          <v-row>
            <v-text-field
              v-model="addNewKpiKeyDialog.description"
              label="Enter KPI Logic Commands"
              hide-details="auto"
            ></v-text-field>
          </v-row>

          <v-row>
            <v-spacer></v-spacer>
            <v-btn
              style="float: right"
              color="green darken-1"
              text
              @click="addNewKpiToUserKpiList(key)"
            >
              Add new KPI
            </v-btn>
          </v-row>
          <v-row>KPI Keys:</v-row>
          <v-row v-for="key in addNewKpiKeyDialog.newSelectedKpiKeys">
            <p>
              {{ key.name }}:
              {{ key.description ? key.description : "Default" }}
            </p>
            <v-spacer></v-spacer>
            <v-btn v-if="hasKpiKey(key)" @click="addNewKpiToUserKpiList(key)"
              >Add To KPI List</v-btn
            >
            <v-btn v-else @click="removeKpiToUserKpiList(key)"
              >Remove From KPI list</v-btn
            >
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="red darken-1"
            text
            @click="
              () => {
                addNewKpiKeyDialog.isOpen = false;
                addNewKpiKeyDialog.description = '';
                addNewKpiKeyDialog.name = '';
                addNewKpiKeyDialog.kpiKeysList = [];
              }
            "
          >
            close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- -------------------------    Add NEW KPI key DIALOG   END------------------------- -->
  </v-container>
</template>

<script>
import api from "@/components/API";

export default {
  name: "Tracking",
  components: {
    [process.browser && "apexchart"]: () => import("vue-apexcharts"),
  },
  head() {
    return {
      title: "Tracking",
    };
  },
  mounted() {
    if (!api.getAuth()) window.location.href = "/login";
    // const allData = api.getFullUserData();
    // api.saveAiRobots(allData.robots);
    // api.saveCompanies(allData.companies);
    // api.saveTrackingKPIs(allData.trackingCompaniesKPIs);
    // api.saveTrackingKPIKeys(allData.trackingKpiKeys);
    // console.log(JSON.stringify(allData));
    //======================
    this.init();
  },
  beforeCreate() {
    if (!api.getAuth()) window.location.href = "/login";
  },

  data() {
    return {
      snackbar: {
        isOpen: false,
        text: "",
      },
      deleteTrackingDialog: {
        isOpen: false,
        companyId: "",
      },
      addNewTrackingCompanyDialog: {
        isOpen: false,
        allCompanies: [],
      },
      addNewKpiKeyDialog: {
        isOpen: false,
        name: "",
        description: "",
        companyId: "",
        kpiKeysList: [],

        newSelectedKpiKeys: [],
      },
      viewTrackingCompanyDialog: {
        isOpen: false,
        company: null,
        selectedKpiIndex: 0,
      },
      allTrackingSelectedCompanies: [],
      chartSeries: [],
      chartOptions: {},
    };
  },
  methods: {
    hasKpiKey(tag) {
      const foundedKpi = this.addNewKpiKeyDialog.kpiKeysList.find(
        (x) => x.name == tag.name
      );
      if (foundedKpi) return false;
      return true;
    },
    removeKpiToUserKpiList(key) {
      const companyIndex = this.allTrackingSelectedCompanies.findIndex(
        (x) => x.companyId == this.addNewKpiKeyDialog.companyId
      );
      this.allTrackingSelectedCompanies[companyIndex].userKPIs =
        this.allTrackingSelectedCompanies[companyIndex].userKPIs.filter(
          (z) => z.name != key.name
        );

      this.addNewKpiKeyDialog.kpiKeysList =
        this.addNewKpiKeyDialog.kpiKeysList.filter((x) => x.name != key.name);
      api.saveTrackingKPIs(this.allTrackingSelectedCompanies);
      this.fireSnack("KPI key has ben removed from asset.");
      //this.allTrackingSelectedCompanies
    },
    fireSnack(text) {
      this.snackbar.text = text;
      this.snackbar.isOpen = true;
    },
    init() {
      this.allTrackingSelectedCompanies = api.getAllTrackingKPIs();
      this.deleteTrackingDialog = {
        isOpen: false,
        companyId: "",
      };
      this.addNewKpiKeyDialog = {
        isOpen: false,
        name: "",
        description: "",
        companyId: "",
        kpiKeysList: [],
        newSelectedKpiKeys: [],
      };
      this.viewTrackingCompanyDialog.company = null;
      this.viewTrackingCompanyDialog.isOpen = false;
      this.addNewTrackingCompanyDialog.isOpen = false;
      let allAiRobots = api.getAiRobots();
      this.addNewTrackingCompanyDialog.allCompanies = api
        .getStandardCompanyList(api.getCompanies(), allAiRobots)
        .filter(
          (z) =>
            this.allTrackingSelectedCompanies.findIndex(
              (k) => k.companyId == z.companyId
            ) == -1
        );
    },
    openNewKpiDialog(companyId) {
      this.addNewKpiKeyDialog.companyId = companyId;
      this.addNewKpiKeyDialog.newSelectedKpiKeys = [];
      const companyIndex = this.allTrackingSelectedCompanies.findIndex(
        (x) => x.companyId == companyId
      );

      api.getAllTrackingKPIKeys().map((kpi) => {
        this.addNewKpiKeyDialog.newSelectedKpiKeys.push({
          name: kpi.name,
          data: [],
          description: kpi.description,
        });
      });

      let kpiKeys = api.getAllTrackingKPIKeys();
      if (kpiKeys.length == 0) kpiKeys = api.getAllTrackingKPIKeys();
      this.addNewKpiKeyDialog.kpiKeysList = kpiKeys;
      this.addNewKpiKeyDialog.isOpen = true;
    },
    showDataSize(dataSize) {
      return api.dataSizeSerializer(dataSize);
    },
    deleteTrackingCompany(companyId) {
      const index = this.allTrackingSelectedCompanies.findIndex(
        (x) => x.companyId == companyId
      );
      this.allTrackingSelectedCompanies.splice(index, 1);
      api.saveTrackingKPIs(this.allTrackingSelectedCompanies);
      this.fireSnack("Company removed from tracking system!");
      this.init();
    },
    viewTrackingCompany(company) {},
    addCompanyToTrackingSystem() {
      this.addNewTrackingCompanyDialog.allCompanies.map((company) => {
        if (company.isSelectedAttr) {
          this.allTrackingSelectedCompanies.push(company);
        }
      });
      api.saveTrackingKPIs(this.allTrackingSelectedCompanies);
      this.fireSnack("Companies added successfully!");
      this.init();
    },
    changeKPIChart(kpiIndex) {
      this.chartSeries = [
        {
          name: this.viewTrackingCompanyDialog.company?.userKPIs[kpiIndex].name,
          data: this.viewTrackingCompanyDialog.company?.userKPIs[
            kpiIndex
          ].data.map((x) => x.value),
        },
      ];
      this.chartOptions = {
        chart: {
          id: "line-chart",
        },
        xaxis: {
          categories: this.viewTrackingCompanyDialog.company?.userKPIs[
            kpiIndex
          ].data.map((x) => x.date), // assuming item.time is an array of time labels
        },
      };
    },
    addNewKpiKeyToUserKpiKeyList() {},
    addNewKpiToUserKpiList(kpiKey) {
      if (
        !this.addNewKpiKeyDialog.name ||
        !this.addNewKpiKeyDialog.description
      ) {
        this.fireSnack("all the fields are required!");
        return;
      }
      if (!kpiKey) {
        kpiKey = {
          name: this.addNewKpiKeyDialog.name,
          data: [],
          description: this.addNewKpiKeyDialog.description,
        };
      }
      this.addNewKpiKeyDialog.newSelectedKpiKeys.push({
        name: kpiKey.name,
        data: [],
        description: kpiKey.description,
      });
      api.saveTrackingKPIKeys(this.addNewKpiKeyDialog.newSelectedKpiKeys);
      this.addNewKpiKeyDialog.kpiKeysList.push({
        name: kpiKey.name,
        data: [],
        description: kpiKey.description,
      });

      const allAiRobots = api.getAllAiRobots();
      const companyIndex = this.allTrackingSelectedCompanies.findIndex(
        (x) => x.companyId == this.addNewKpiKeyDialog.companyId
      );
      this.allTrackingSelectedCompanies[companyIndex].userKPIs.push({
        name: kpiKey.name,
        data: [],
        description: kpiKey.description,
      });
      this.allTrackingSelectedCompanies = api.getStandardCompanyList(
        this.allTrackingSelectedCompanies,
        allAiRobots
      );
      api.saveTrackingKPIs(this.allTrackingSelectedCompanies);
      this.addNewKpiKeyDialog.name = "";
      this.addNewKpiKeyDialog.description = "";
      this.fireSnack("KPI Key added successfully!");
    },
  },
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

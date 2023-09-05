<template>
  <div>
    <v-row
      class="ps-3 pt-8 pb-6 mb-3"
      style="font-weight: 600; font-size: 28px; background: black; color: white"
      >Models Trained</v-row
    >
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
        class="cart-models-trained"
        style="margin-top: 10px; margin-bottom: 20px"
      >
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
              @click="
                () => {
                  robotAddNewDialog = {
                    isOpen: true,
                    data: {
                      id: '',
                      nickName: '',
                      selectedCompanies: [],
                    },
                  };
                }
              "
            >
              + Add
            </v-btn>
            <v-col class="justify-space-between align-center h-100">
              <p
                class="text-center"
                style="font-size: 2rem; line-height: 2.75rem; font-weight: 700"
              >
                {{ summaryCart.modelsTrainedCount }}
              </p>
              <p
                class="text-center"
                style="font-size: 1.2rem; line-height: 1.5rem; font-weight: 700"
              >
                Models trained
              </p>
              <div style="height: 2px; background: red"></div>
              <div class="candlestick" v-if="summaryCart.minProcess < 100">
                <div class="wick"></div>
                <div
                  class="body"
                  :style="{
                    width: `${
                      summaryCart.maxProcess - summaryCart.minProcess
                    }%`,
                    left: `${summaryCart.minProcess}%`,
                  }"
                ></div>
                <div
                  class="shadow-left"
                  :style="{ width: `${summaryCart.minProcess}%` }"
                ></div>
                <div
                  class="shadow-right"
                  :style="{ width: `${summaryCart.maxProcess}%` }"
                ></div>
              </div>
              <v-row
                class="justify-space-between mt-1 px-2"
                v-if="summaryCart.minProcess < 100"
              >
                <p style="font-size: 10px; color: black">
                  min: {{ summaryCart.minProcess }}%
                </p>
                <p style="font-size: 10px; color: black">
                  max: {{ summaryCart.maxProcess }}%
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
        <v-col cols="12">
          <v-btn
            v-if="allUserAiRobotsIds.length == allAiRobotsIds.length"
            class="ms-3"
            color="green dark"
            style="color: white; border-radius: 20px; width: 100%"
          >
            You added all the Trained AI Robots to your account
          </v-btn>
        </v-col>
      </v-row>

      <v-row style="margin-top: 20px">
        <v-tabs v-model="tab" dark grow center>
          <v-tab
            v-for="item in [
              { tab: 'Mega Models' },
              { tab: 'Connected Forked Models Assets' },
            ]"
            :key="item.tab"
          >
            {{ item.tab }}
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item
            v-for="item in [
              { tab: 'Mega Models', id: 0 },
              { tab: 'Connected Forked Models Assets', id: 1 },
            ]"
            :key="item.id"
          >
            <v-container v-if="item.id == 0" style="margin-top: 15px">
              <v-row>
                <v-col v-for="robot in allUserAiRobots" cols="4">
                  <v-card class="mx-auto">
                    <v-card-text>
                      <div>{{ robot.nickName }}</div>
                      <p class="text-h4 text--primary">{{ robot.name }}</p>
                      <div class="text--primary">
                        <v-chip-group active-class="primary--text" column>
                          <v-chip
                            >Total Uploaded Documents:
                            {{ robot.totalUploadedDocsFromUser }}
                          </v-chip>
                          <v-chip
                            >Total data learned from assets:
                            {{ showDataSize(robot.totalDataLearnedFromUser) }}
                          </v-chip>
                          <v-chip
                            >Total data gathered for assets:
                            {{ showDataSize(robot.totalDataGatheredFromUser) }}
                          </v-chip>
                          <v-chip
                            >Total completeness: {{ robot.totalCompleteness }}%
                          </v-chip>
                        </v-chip-group>
                      </div>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn
                        text
                        color="green"
                        @click="
                          () => {
                            robotViewDialog.isOpen = true;
                            robotViewDialog.data = robot;
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
                            robotDeleteDialog.isOpen = true;
                            robotDeleteDialog.robotId = robot.id;
                          }
                        "
                      >
                        delete
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
            <v-container v-if="item.id == 1" style="margin-top: 15px">
              <v-row>
                <v-col
                  cols="6"
                  sm="6"
                  md="6"
                  lg="4"
                  xl="3"
                  xxl="3"
                  v-for="company in allSavedCompanies"
                  v-bind:key="company.companyId"
                >
                  <v-card class="mx-auto">
                    <v-card-text>
                      <v-row>
                        <p
                          class="text-h4 text--primary"
                          style="font-size: 2rem !important"
                        >
                          {{ company.name }}
                        </p>
                        <v-spacer></v-spacer>
                      </v-row>
                      <v-row>
                        <div class="text--primary">
                          <v-chip-group active-class="primary--text" column>
                            <v-chip
                              v-for="i in company.recommendation
                                .gatheringChannels"
                              color="green"
                              >Forked from:
                              {{ generateForkedModelsRelation(i) }}</v-chip
                            >
                            <v-chip
                              >Data Size:
                              {{
                                showDataSize(company.totalDataGathered)
                              }}</v-chip
                            >
                            <v-chip
                              >Trained Data Size:
                              {{
                                showDataSize(company.totalDataLearned)
                              }}</v-chip
                            >
                          </v-chip-group>
                        </div>
                      </v-row>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn
                        text
                        color="green"
                        @click="
                          () => {
                            fireSnack(
                              `${company.name.replace(
                                ' ',
                                ''
                              )}-${+new Date()}.pdf Sent to your email!`
                            );
                          }
                        "
                      >
                        Download Report
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
        </v-tabs-items>
      </v-row>
      <!-- -------------------------AI ROBOT DIALOG START---------------- -->
      <v-dialog v-model="robotViewDialog.isOpen" max-width="500">
        <v-card>
          <v-card-title class="text-h5">
            {{ robotViewDialog.data?.nickName }}
            <v-chip color="green">{{ robotViewDialog.data?.name }}</v-chip>
          </v-card-title>

          <v-card-text>
            <v-chip
              >Total Data Gathered From All Users:
              {{
                showDataSize(
                  robotViewDialog.data?.totalDataGatheredFromAllUsers
                )
              }}</v-chip
            >
            <v-chip
              >Total Data Learned From All Users:
              {{
                showDataSize(robotViewDialog.data?.totalDataLearnedFromAllUsers)
              }}</v-chip
            >
            <v-chip>Total Used: {{ robotViewDialog.data?.totalUsed }}</v-chip>
            <v-chip
              >Total Trained Assets From All Users:
              {{
                showDataSize(
                  robotViewDialog.data?.totalTrainedAssetsFromAllUsers
                )
              }}</v-chip
            >
            <v-chip
              >Total Uploaded Docs From User:
              {{ robotViewDialog.data?.totalUploadedDocsFromUser }}</v-chip
            >
            <v-chip
              >Total Data Learned From User:
              {{
                showDataSize(robotViewDialog.data?.totalDataLearnedFromUser)
              }}</v-chip
            >
            <v-chip
              >Total Data Gathered From User:
              {{
                showDataSize(robotViewDialog.data?.totalDataGatheredFromUser)
              }}</v-chip
            >
            <v-chip
              >Total Completeness:
              {{ robotViewDialog.data?.totalCompleteness }}%</v-chip
            >
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="red darken-1"
              text
              @click="
                () => {
                  robotDeleteDialog.isOpen = true;
                  robotDeleteDialog.robotId = robotViewDialog.data?.id;
                }
              "
            >
              delete
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              text
              @click="robotViewDialog.isOpen = false"
            >
              close
            </v-btn>
            <!-- <v-btn
            color="green darken-1"
            text
            @click="robotViewDialog.isOpen = false"
          >
            Edit Connected Assets
          </v-btn> -->
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- -------------------------AI ROBOT DIALOG          END------------------------- -->
      <!-- -------------------------AI ROBOT DELETE DIALOG START------------------------- -->
      <v-dialog v-model="robotDeleteDialog.isOpen" max-width="500">
        <v-card>
          <v-card-title class="text-h5">
            are you sure to delete this Model?
          </v-card-title>

          <v-card-actions>
            <v-btn color="red darken-1" text @click="deleteRobotModelAndSave()">
              Yes
            </v-btn>
            <v-spacer></v-spacer>

            <v-btn
              color="green darken-1"
              text
              @click="
                () => {
                  robotDeleteDialog.isOpen = false;
                  robotDeleteDialog.robotId = null;
                }
              "
            >
              No
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- -------------------------AI ROBOT DELETE DIALOG   END------------------------- -->
      <!-- -------------------------AI ROBOT DELETE DIALOG START------------------------- -->
      <v-dialog v-model="robotAddNewDialog.isOpen" max-width="500">
        <v-card>
          <v-card-title class="text-h5">
            Adding new AI Robots Model
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-text-field
                label="Your Robot Nick Name"
                v-model="robotAddNewDialog.data.nickName"
              ></v-text-field>
            </v-row>
            <v-row>
              <v-select
                v-model="robotAddNewDialog.data.id"
                :items="
                  allAiRobotsIds
                    .filter((x) => !allUserAiRobotsIds.includes(x))
                    .map((z) => {
                      return { text: getRobotModelFromId(z), value: z };
                    })
                "
                label="Select Your AI Model"
                outlined
              ></v-select>
            </v-row>
            <v-row>
              <v-autocomplete
                solo
                multiple
                v-model="robotAddNewDialog.data.selectedCompanies"
                :items="
                  allCompanies.map((company) => {
                    return {
                      text: company.name,
                      value: company.companyId,
                      raw: company,
                    };
                  })
                "
              ></v-autocomplete>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="red darken-1"
              text
              @click="() => (robotAddNewDialog.isOpen = false)"
            >
              close
            </v-btn>
            <v-spacer></v-spacer>

            <v-btn color="green darken-1" text @click="addNewAiRobot()">
              Add
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- -------------------------AI ROBOT DELETE DIALOG   END------------------------- -->
    </v-container>
  </div>
</template>

<script>
import api from "@/components/API";

export default {
  name: "ModelsTrained",
  head() {
    return {
      title: "Models Trained",
    };
  },
  mounted() {
    if (!api.getAuth()) window.location.href = "/login";
    // const allData = api.getFullUserData();
    // api.saveAiRobots(allData.robots);
    // api.saveCompanies(allData.companies);
    // console.log(allData.robots);
    //======================
    this.init();
  },

  data() {
    return {
      tab: null,
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
      summaryCart: {
        modelsTrainedCount: 0,
        minProcess: 1000,
        maxProcess: -1,
      },
      allUserAiRobots: [],
      snackbar: {
        isOpen: false,
        text: "",
      },
      robotAddNewDialog: {
        isOpen: false,
        data: {
          id: "",
          nickName: "",
          selectedCompanies: [],
        },
      },
      robotViewDialog: {
        isOpen: false,
        data: null,
      },
      robotDeleteDialog: {
        isOpen: false,
        robotId: null,
      },
      allAiRobotsIds: [],
      allUserAiRobotsIds: [],
      allCompanies: [],
      allSavedCompanies: [],
    };
  },
  methods: {
    fireSnack(text) {
      this.snackbar.text = text;
      this.snackbar.isOpen = true;
    },
    showDataSize(dataSize) {
      return api.dataSizeSerializer(dataSize);
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
    init() {
      this.allUserAiRobots = api.getAllAiRobots();
      this.allCompanies = api.getStandardCompanyList(
        api.getCompanies(),
        api.getAiRobots()
      );
      this.allUserAiRobots.map((robot) =>
        this.allUserAiRobotsIds.push(robot.id)
      );
      api.getAiRobots().map((robot) => this.allAiRobotsIds.push(robot.id));
      this.robotViewDialog = {
        isOpen: false,
        data: null,
      };
      this.robotDeleteDialog = {
        isOpen: false,
        robotId: null,
      };
      this.robotAddNewDialog = {
        isOpen: false,
        data: {
          id: "",
          nickName: "",
        },
      };
      this.robotAddNewDialog.isOpen = false;
      this.robotAddNewDialog.data.id = "";
      this.robotAddNewDialog.data.nickName = "";
      this.robotAddNewDialog.data["selectedCompanies"] = api
        .getAllCompanies()
        .map((x) => {
          return {
            text: x.name,
            value: x.companyId,
            raw: x,
          };
        });
      this.summaryCart.modelsTrainedCount = this.allUserAiRobots.length;

      this.allUserAiRobots.map((robot) => {
        this.summaryCart.minProcess =
          parseFloat(robot.totalCompleteness) < this.summaryCart.minProcess
            ? parseFloat(robot.totalCompleteness)
            : this.summaryCart.minProcess;
        this.summaryCart.maxProcess =
          parseFloat(robot.totalCompleteness) > this.summaryCart.maxProcess
            ? parseFloat(robot.totalCompleteness)
            : this.summaryCart.maxProcess;
      });
      this.fillTrainedModelsTableItems();
      this.allSavedCompanies = api.getAllCompanies();
    },
    generateForkedModelsRelation(company) {
      return this.allUserAiRobots[
        this.allUserAiRobotsIds.findIndex((z) => z == company.aiModelsID)
      ].name;
    },
    addNewAiRobot() {
      if (
        !this.robotAddNewDialog.data.id ||
        !this.robotAddNewDialog.data.nickName ||
        this.robotAddNewDialog.data.selectedCompanies.length == 0
      ) {
        this.fireSnack("all the fields are required");
        return;
      }
      const userSavedCompanies = api.getAllCompanies();
      this.robotAddNewDialog.data.selectedCompanies.map((companyId) => {
        if (!userSavedCompanies.includes((x) => x.companyId == companyId)) {
          const index = this.allCompanies.findIndex(
            (z) => z.companyId == companyId
          );
          userSavedCompanies.push(this.allCompanies[index]);
        }
      });
      api.saveCompanies(userSavedCompanies);
      //===========
      const allAvailableRobots = api.getAiRobots();
      let robotIndex = allAvailableRobots.findIndex(
        (x) => x.id == this.robotAddNewDialog.data.id
      );
      allAvailableRobots[robotIndex] = api.generateAiRobotsBasedOnUserData(
        [allAvailableRobots[robotIndex]],
        userSavedCompanies
      );
      allAvailableRobots[robotIndex][0]["nickName"] =
        this.robotAddNewDialog.data.nickName;
      this.allUserAiRobots.push(allAvailableRobots[robotIndex][0]);
      api.saveAiRobots(this.allUserAiRobots);
      this.fireSnack("New Model Added Successfully");
      this.init();
    },
    getRobotModelFromId(robotId) {
      return api.getAiRobots().find((x) => x.id == robotId).name;
    },

    deleteRobotModelAndSave() {
      const index = this.allUserAiRobots.findIndex(
        (x) => x.id == this.robotDeleteDialog.robotId
      );
      this.allUserAiRobots.splice(index, 1);
      api.saveAiRobots(this.allUserAiRobots);
      this.fireSnack("Model deleted successfully, Reloading Data!");
      window.location.reload();
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

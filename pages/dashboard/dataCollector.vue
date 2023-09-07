<template>
  <div>
    <v-row
      class="ps-3 pt-8 pb-6 mb-3"
      style="font-weight: 600; font-size: 28px; background: black; color: white"
      >Data</v-row
    >
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
    <!-- =================Uploader================== -->
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          {{ title }}
        </v-card-title>

        <v-card-text>
          <v-tabs v-model="tab" dark grow center>
            <v-tab v-for="item in tabs.headers" :key="`M1_${item.tab}`">
              {{ item.tab }}
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item v-for="item in tabs.headers" :key="`M1_${item.tab}`">
              <v-row>
                <v-col cols="12">
                  <v-file-input
                    v-if="dialogType == 0"
                    v-model="item.uploads"
                    color="deep-purple accent-4"
                    counter
                    label="File input"
                    multiple
                    placeholder="Select your files"
                    prepend-icon="mdi-paperclip"
                    outlined
                    show-size="true"
                  >
                    <template v-slot:selection="{ index, text }">
                      <v-chip
                        v-if="index < 2"
                        color="deep-purple accent-4"
                        dark
                        label
                        small
                      >
                        {{ text }}
                      </v-chip>

                      <span
                        v-else-if="index === 2"
                        class="text-overline grey--text text--darken-3 mx-2"
                      >
                        +{{ files.length - 2 }} File(s)
                      </span>
                    </template>
                  </v-file-input>
                </v-col>
              </v-row>
              <v-row
                cols="12"
                class="w-100 px-3 pt-3 mt-8 justify-space-between"
                style="background: lightgray; border-radius: 5px"
                v-for="fileIndex in item.uploads"
              >
                <p>{{ fileIndex.name }}</p>
                <p>
                  Size:
                  {{ parseFloat(fileIndex.size / 1000000).toFixed(2) }}Mb
                </p>
              </v-row>
              <v-row
                cols="12"
                class="w-100 px-3 pt-3 mt-8 justify-space-between"
                style="background: lightgray; border-radius: 5px"
                v-for="fileIndex in item.sourceCount"
                :key="fileIndex"
                ref="myUploadItems"
              >
                <v-col v-if="dialogType == 1">
                  <p>Company:{{ getRandomCompanyName().name }}</p>
                </v-col>
                <v-col>
                  <p>file-{{ fileIndex }}.pdf</p>
                </v-col>
                <v-col>
                  <p>
                    Size:
                    {{ parseFloat(item.size / item.sourceCount).toFixed(2) }}Tb
                  </p>
                </v-col>
                <v-col cols="2">
                  <v-btn text color="red" @click="hideItem(fileIndex)">
                    <v-icon color="red">mdi-delete</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-tab-item>
          </v-tabs-items>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- =================Uploader================== -->
    <!-- =================ViewData================== -->
    <v-dialog v-model="viewDataModal.isOpen" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          {{ viewDataModal.title }}
        </v-card-title>

        <v-card-text v-if="viewDataModal.type == 0">
          <v-row
            cols="12"
            class="w-100 px-3 pt-3 mt-8 justify-space-between"
            style="background: lightgray; border-radius: 5px"
            v-for="company in viewDataModal.dataList"
          >
            <p>{{ company.name }}</p>
          </v-row>
        </v-card-text>
        <v-card-text v-if="viewDataModal.type == 0">
          <v-row
            cols="12"
            class="w-100 px-3 pt-3 mt-8 justify-space-between"
            style="background: lightgray; border-radius: 5px"
            v-for="company in viewDataModal.dataList"
          >
            <p>{{ company.name }}</p>
          </v-row>
        </v-card-text>
        <v-card-text v-else>
          <v-row
            cols="12"
            class="w-100 px-3 pt-3 mt-8 justify-space-between"
            style="background: lightgray; border-radius: 5px"
            v-for="fileIndex in viewDataModal.dataList"
          >
            <p>{{ fileIndex.name }}</p>
            <p>
              Size:
              {{ fileIndex.volume }}
            </p>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="viewDataModal.isOpen = false">
            close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- =================ViewData================== -->
    <v-container fluid>
      <v-row class="cart-data">
        <v-col cols="12" sm="6" md="3" lg="3" xl="3" xxl="3">
          <v-card class="cart-data" style="">
            <v-col class="justify-space-between align-center h-100">
              <p
                class="text-center"
                style="font-size: 2rem; line-height: 2.75rem; font-weight: 700"
              >
                100Tb
              </p>
              <p
                class="text-center"
                style="font-size: 1.2rem; line-height: 1.5rem; font-weight: 700"
              >
                Gathered Data
              </p>
            </v-col>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="9" lg="9" xl="9" xxl="9">
          <v-data-table
            :headers="dataPageTable.headers"
            :items="dataPageTable.items"
            hide-default-footer
            disable-sort
            class="elevation-1"
          ></v-data-table>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" md="6" lg="6" xl="4" xxl="4">
          <v-card>
            <v-app-bar flat color="rgba(0, 0, 0, 0)">
              <v-toolbar-title class="text-h6 pl-0">
                Public Data (75Tb)
              </v-toolbar-title>
              <v-spacer></v-spacer>
            </v-app-bar>

            <v-card-text>
              <v-row>
                <v-col
                  cols="6"
                  sm="12"
                  md="6"
                  lg="6"
                  xl="6"
                  xxl="6"
                  style="padding: 0px 0px 0px 0px"
                >
                  <div
                    class="font-weight-bold ml-8 mb-2"
                    style="text-align: left"
                  >
                    Standard Data
                  </div>

                  <v-timeline align-top dense>
                    <v-timeline-item
                      v-for="message in [
                        {
                          id: 's1567567567',
                          color: 'deep-purple lighten-1',
                          text: '10',
                          title: 'Number of Sources',
                        },
                        {
                          id: 's134534',
                          color: 'deep-purple lighten-1',
                          text: '50Tb',
                          title: 'Data Volume',
                        },
                        {
                          id: 's1234324',
                          color: 'deep-purple lighten-1',
                          text: '90%',
                          title: 'Training Progress',
                        },
                      ]"
                      :key="message.id"
                      :color="message.color"
                      small
                    >
                      <div>
                        <div class="font-weight-normal">
                          <strong>{{ message.title }}</strong>
                          <v-btn
                            text
                            v-if="message.title == 'Number of Sources'"
                            rounded
                            small
                            @click="getNumberOfSources(10, 50, 'Standard Data')"
                          >
                            <v-icon>mdi-eye</v-icon>
                          </v-btn>
                        </div>
                        <div>{{ message.text }}</div>
                      </div>
                    </v-timeline-item>
                  </v-timeline>
                </v-col>
                <v-col
                  cols="6"
                  sm="12"
                  md="6"
                  lg="6"
                  xl="6"
                  xxl="6"
                  style="padding: 0px 0px 0px 0px"
                >
                  <div
                    class="font-weight-bold ml-8 mb-2"
                    style="text-align: left"
                  >
                    Alternative Data
                  </div>

                  <v-timeline align-top dense>
                    <v-timeline-item
                      v-for="message in [
                        {
                          id: 's111',
                          color: 'deep-purple lighten-1',
                          text: '30',
                          title: 'Number of Sources',
                        },
                        {
                          id: 's1112',
                          color: 'deep-purple lighten-1',
                          text: '25Tb',
                          title: 'Data Volume',
                        },

                        {
                          id: 's1113',
                          color: 'deep-purple lighten-1',
                          text: '90%',
                          title: 'Training Progress',
                        },
                      ]"
                      :key="message.id"
                      :color="message.color"
                      small
                    >
                      <div>
                        <div class="font-weight-normal">
                          <strong>{{ message.title }}</strong>
                          <v-btn
                            text
                            v-if="message.title == 'Number of Sources'"
                            rounded
                            small
                            @click="
                              getNumberOfSources(30, 25, 'Alternative Data')
                            "
                          >
                            <v-icon>mdi-eye</v-icon>
                          </v-btn>
                        </div>
                        <div>{{ message.text }}</div>
                      </div>
                    </v-timeline-item>
                  </v-timeline>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-slide-group multiple show-arrows>
                <v-slide-item style="margin: 7px">
                  <v-btn
                    color="green"
                    text
                    @click="
                      () => {
                        data = [];
                        title = 'Public Data';
                        tabs.headers = [
                          {
                            tab: 'Standard Data',
                            id: 1,
                            sourceCount: 10,
                            size: 50,
                            uploads: [],
                          },
                          {
                            tab: 'Alternative Data',
                            id: 2,
                            sourceCount: 30,
                            size: 25,
                            uploads: [],
                          },
                        ];
                        dialog = true;
                        dialogType = 1;
                      }
                    "
                    >View</v-btn
                  >
                </v-slide-item>
                <v-slide-item style="margin: 7px">
                  <v-btn
                    color="primary"
                    text
                    @click="
                      () => {
                        data = [];
                        title = 'Upload Public Data';
                        tabs.headers = [
                          {
                            tab: 'Standard Data',
                            id: 1,
                            sourceCount: 10,
                            size: 50,
                            uploads: [],
                          },
                          {
                            tab: 'Alternative Data',
                            id: 2,
                            sourceCount: 30,
                            size: 25,
                            uploads: [],
                          },
                        ];

                        dialog = true;
                        dialogType = 0;
                      }
                    "
                    ><v-icon color="primary">mdi-plus</v-icon>Upload</v-btn
                  >
                </v-slide-item>
              </v-slide-group>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="6" xl="4" xxl="4">
          <v-card style="height: 100%">
            <v-app-bar flat color="rgba(0, 0, 0, 0)">
              <v-toolbar-title class="text-h6 pl-0">
                Proprietary Data (20Tb)
              </v-toolbar-title>
            </v-app-bar>

            <v-card-text>
              <v-row>
                <v-col
                  cols="6"
                  sm="12"
                  md="6"
                  lg="6"
                  xl="6"
                  xxl="6"
                  style="padding: 0px 0px 0px 0px; height: 100%"
                >
                  <div
                    class="font-weight-bold ml-8 mb-2"
                    style="text-align: left"
                  >
                    Internal Sources
                  </div>
                  <v-timeline align-top dense>
                    <v-timeline-item
                      v-for="message in [
                        {
                          id: 's1112',
                          color: 'deep-purple lighten-1',
                          text: '15',
                          title: 'Number of Sources',
                        },
                        {
                          id: 's11122',
                          color: 'deep-purple lighten-1',
                          text: '8Tb',
                          title: 'Data Volume',
                        },
                        {
                          id: 's11123',
                          color: 'deep-purple lighten-1',
                          text: '60%',
                          title: 'Training Progress',
                        },
                      ]"
                      :key="message.id"
                      :color="message.color"
                      small
                    >
                      <div>
                        <div class="font-weight-normal">
                          <strong>{{ message.title }}</strong>
                          <v-btn
                            text
                            v-if="message.title == 'Number of Sources'"
                            rounded
                            small
                            @click="
                              getNumberOfSources(15, 8, 'Internal Sources')
                            "
                          >
                            <v-icon>mdi-eye</v-icon>
                          </v-btn>
                        </div>
                        <div>{{ message.text }}</div>
                      </div>
                    </v-timeline-item>
                  </v-timeline>
                </v-col>
                <v-col
                  cols="6"
                  sm="12"
                  md="6"
                  lg="6"
                  xl="6"
                  xxl="6"
                  style="padding: 0px 0px 0px 0px"
                >
                  <div
                    class="font-weight-bold ml-8 mb-2"
                    style="text-align: left"
                  >
                    PortCo Sources
                  </div>
                  <v-timeline align-top dense>
                    <v-timeline-item
                      v-for="message in [
                        {
                          id: 's1112',
                          color: 'deep-purple lighten-1',
                          text: '30',
                          title: 'Number of Sources',
                        },
                        {
                          id: 's11122',
                          color: 'deep-purple lighten-1',
                          text: '12Tb',
                          title: 'Data Volume',
                        },
                        {
                          id: 's1',
                          color: 'deep-purple lighten-1',
                          text: '90%',
                          title: 'Training Progress',
                        },
                      ]"
                      :key="message.id"
                      :color="message.color"
                      small
                    >
                      <div>
                        <div class="font-weight-normal">
                          <strong>{{ message.title }}</strong>
                          <v-btn
                            text
                            v-if="message.title == 'Number of Sources'"
                            rounded
                            small
                            @click="
                              getNumberOfSources(30, 12, 'PortCo Sources')
                            "
                          >
                            <v-icon>mdi-eye</v-icon>
                          </v-btn>
                        </div>
                        <div>{{ message.text }}</div>
                      </div>
                    </v-timeline-item>
                  </v-timeline>
                </v-col>
              </v-row>
            </v-card-text>

            <v-card-actions>
              <v-slide-group multiple show-arrows>
                <v-slide-item style="margin: 7px">
                  <v-btn
                    color="green"
                    text
                    @click="
                      () => {
                        data = [];
                        title = 'Proprietary Data';
                        tabs.headers = [
                          {
                            tab: 'Internal Sources',
                            id: 1,
                            sourceCount: 15,
                            size: 8,
                            uploads: [],
                          },
                          {
                            tab: 'PortCo Sources',
                            id: 2,
                            sourceCount: 30,
                            size: 12,
                            uploads: [],
                          },
                        ];

                        dialog = true;
                        dialogType = 1;
                      }
                    "
                    >View</v-btn
                  >
                </v-slide-item>
                <v-slide-item style="margin: 7px">
                  <v-btn
                    color="primary"
                    text
                    @click="
                      () => {
                        data = [];
                        title = 'Upload Proprietary Data';
                        tabs.headers = [
                          {
                            tab: 'Internal Sources',
                            id: 1,
                            sourceCount: 15,
                            size: 8,
                            uploads: [],
                          },
                          {
                            tab: 'PortCo Sources',
                            id: 2,
                            sourceCount: 30,
                            size: 12,
                            uploads: [],
                          },
                        ];
                        dialog = true;
                        dialogType = 0;
                      }
                    "
                    ><v-icon color="primary">mdi-plus</v-icon>Upload</v-btn
                  >
                </v-slide-item>
              </v-slide-group>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="6" xl="4" xxl="4">
          <v-card style="height: 100%">
            <v-app-bar flat color="rgba(0, 0, 0, 0)">
              <v-toolbar-title class="text-h6 pl-0">
                Target Assets (5Tb)
              </v-toolbar-title>
            </v-app-bar>
            <v-card-text>
              <v-row>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  lg="12"
                  xl="12"
                  xxl="12"
                  style="padding: 0px 0px 0px 0px; height: 100%"
                >
                  <v-timeline align-top dense style="height: 100%">
                    <v-timeline-item
                      v-for="message in [
                        {
                          id: 's1112',
                          color: 'deep-purple lighten-1',
                          text: `${allData.companies.length}`,
                          title: 'Number of Companies',
                        },
                        {
                          id: 's11122',
                          color: 'deep-purple lighten-1',
                          text: '5Tb',
                          title: 'Data Volume',
                        },
                        {
                          id: 's1',
                          color: 'deep-purple lighten-1',
                          text: '60%',
                          title: 'Training Progress',
                        },
                      ]"
                      :key="message.id"
                      :color="message.color"
                      small
                    >
                      <div>
                        <div class="font-weight-normal">
                          <strong
                            >{{ message.title }}
                            <v-btn
                              v-if="message.title == 'Number of Companies'"
                              text
                              rounded
                              small
                              @click="getNumberOfCompanies"
                            >
                              <v-icon>mdi-eye</v-icon>
                            </v-btn>
                          </strong>
                        </div>
                        <div>{{ message.text }}</div>
                      </div>
                    </v-timeline-item>
                  </v-timeline>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-slide-group multiple show-arrows>
                <v-slide-item style="margin: 7px">
                  <v-btn
                    color="green"
                    text
                    @click="
                      () => {
                        data = [];
                        title = 'Target Assets Data';
                        tabs.headers = [
                          {
                            tab: 'Target Assets',
                            id: 1,
                            sourceCount: 7,
                            size: 5,
                            uploads: [],
                          },
                        ];

                        dialog = true;
                        dialogType = 1;
                      }
                    "
                    >View</v-btn
                  >
                </v-slide-item>
                <v-slide-item style="margin: 7px">
                  <v-btn
                    color="primary"
                    text
                    @click="
                      () => {
                        data = [];
                        title = 'Upload Target Assets Data';
                        tabs.headers = [
                          {
                            tab: 'Target Assets',
                            id: 1,
                            sourceCount: 7,
                            size: 5,
                            uploads: [],
                          },
                        ];
                        dialog = true;
                        dialogType = 0;
                      }
                    "
                    ><v-icon color="primary">mdi-plus</v-icon>Upload</v-btn
                  ></v-slide-item
                >
              </v-slide-group>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import api from "@/components/API";

export default {
  name: "dataCollector",
  head() {
    return {
      title: "Data",
    };
  },
  data() {
    return {
      dialog: false,
      dialogType: 0,
      tab: null,
      data: [],
      tabs: {
        headers: [
          { tab: "One", id: 0 },
          { tab: "Two", id: 1 },
          { tab: "Three", id: 2 },
        ],
        files: [
          { name: "file1.pdf", size: "1Tb" },
          { name: "file2.pdf", size: "1Tb" },
          { name: "file3.pdf", size: "1Tb" },
          { name: "file4.pdf", size: "1Tb" },
          { name: "file5.pdf", size: "1Tb" },
          { name: "file6.pdf", size: "1Tb" },
          { name: "file7.pdf", size: "1Tb" },
          { name: "file8.pdf", size: "1Tb" },
        ],
      },
      files: [],
      title: "",
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
      viewDataModal: {
        type: 0,
        title: "",
        isOpen: "",
        dataList: [],
      },
      allData: { companies: [] },
      snackbar: {
        isOpen: false,
        text: "",
      },
    };
  },

  methods: {
    init() {
      this.allData = api.getFullUserData();
    },
    getRandomCompanyName() {
      return this.allData.companies[
        Math.floor(Math.random() * this.allData.companies.length)
      ];
    },
    getNumberOfCompanies() {
      this.allData = api.getFullUserData();
      this.viewDataModal.type = 0;
      this.viewDataModal.title = "Companies";
      this.viewDataModal.dataList = this.allData.companies;
      this.viewDataModal.isOpen = true;
    },
    getNumberOfSources(sourceCount, volume, title) {
      this.allData = api.getFullUserData();
      this.viewDataModal.type = 1;
      this.viewDataModal.title = title;
      this.viewDataModal.dataList = [];
      for (let index = 0; index < sourceCount; index++) {
        this.viewDataModal.dataList.push({
          name: `${title}-${index}`,
          volume: `${parseFloat(volume / sourceCount).toFixed(2)}Tb`,
        });
      }
      this.viewDataModal.isOpen = true;
    },
    fireSnack(text) {
      this.snackbar.text = text;
      this.snackbar.isOpen = true;
    },
    hideItem(i) {
      this.$refs.myUploadItems[i].style["display"] = "none";
      this.fireSnack("item removed successfully");
    },
  },
  mounted() {
    if (!api.getAuth()) window.location.href = "/login";

    this.init();
  },
  watch: {
    tab(newVal) {
      console.log(newVal);
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
.cart-track {
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
  text-align: center;
  display: block;
  width: 100%;
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

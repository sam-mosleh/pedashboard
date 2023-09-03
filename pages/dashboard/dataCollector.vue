<template>
  <div>
    <v-row
      class="ps-3 pt-8 pb-6 mb-3"
      style="font-weight: 600; font-size: 28px; background: black; color: white"
      >Data</v-row
    >
    <!-- =================Uploader================== -->
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          {{ title }}
        </v-card-title>

        <v-card-text>
          <v-file-input
            v-model="data"
            color="deep-purple accent-4"
            counter
            label="File input"
            multiple
            placeholder="Select your files"
            prepend-icon="mdi-paperclip"
            outlined
            :show-size="1000"
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
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            Upload all
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- =================Uploader================== -->
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-card class="cart-data" min-width="100%">
            <v-card-text class="text--primary">
              <v-row>
                <p
                  class="text-center"
                  style="
                    font-size: 2rem;
                    line-height: 2.75rem;
                    font-weight: 700;
                    color: white;
                    text-align: center;
                    width: 100%;
                    display: block;
                  "
                >
                  100Tb of Data
                </p>
              </v-row>
              <v-row>
                <v-col cols="4" class="item-border">
                  <v-row>
                    <p class="item-text-show-position">75Tb of Public Data</p>
                  </v-row>
                  <v-row>
                    <p class="item-text-show-position">95% Trained</p>
                  </v-row>
                </v-col>
                <v-col cols="4" class="item-border">
                  <v-row>
                    <p class="item-text-show-position">
                      25Tb of Proprietary Data
                    </p>
                  </v-row>
                  <v-row>
                    <p class="item-text-show-position">75% Trained</p>
                  </v-row>
                </v-col>
                <v-col
                  cols="4"
                  class="item-border"
                  style="border-right: 0px!important; border-right-style: none:  !important;"
                >
                  <v-row>
                    <p class="item-text-show-position">5Tb of Target Data</p>
                  </v-row>
                  <v-row>
                    <p class="item-text-show-position">97% Trained</p>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" md="6" lg="4" xl="4" xxl="4">
          <v-card>
            <v-app-bar flat color="rgba(0, 0, 0, 0)">
              <v-toolbar-title class="text-h6 pl-0">
                Public Data (75Tb)
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn
                color="black"
                elevation="8"
                outlined
                plain
                rounded
                @click="
                  () => {
                    data = [];
                    title = 'Upload Public Data';
                    dialog = true;
                  }
                "
                ><v-icon color="black">mdi-plus</v-icon>Upload</v-btn
              >
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
                          id: 's1',
                          color: 'deep-purple lighten-1',
                          text: '10 (50Tb)',
                          title: 'Data Servers',
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
                          id: 's1',
                          color: 'deep-purple lighten-1',
                          text: '30 (25Tb)',
                          title: 'Data Servers',
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
                        </div>
                        <div>{{ message.text }}</div>
                      </div>
                    </v-timeline-item>
                  </v-timeline>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="4" xl="4" xxl="4">
          <v-card style="height: 100%">
            <v-app-bar flat color="rgba(0, 0, 0, 0)">
              <v-toolbar-title class="text-h6 pl-0">
                Proprietary Data (20Tb)
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn
                color="black"
                elevation="8"
                outlined
                plain
                rounded
                @click="
                  () => {
                    data = [];
                    title = 'Upload Proprietary Data';
                    dialog = true;
                  }
                "
                ><v-icon color="black">mdi-plus</v-icon>Upload</v-btn
              >
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
                  <v-timeline align-top dense>
                    <v-timeline-item
                      v-for="message in [
                        {
                          id: 's1',
                          color: 'deep-purple lighten-1',
                          text: '15 (8Tb)',
                          title: 'Internal Sources',
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
                          <strong>{{ message.title }}</strong>
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
                  <v-timeline align-top dense>
                    <v-timeline-item
                      v-for="message in [
                        {
                          id: 's1',
                          color: 'deep-purple lighten-1',
                          text: '30 (12Tb)',
                          title: 'PortCo Sources',
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
                        </div>
                        <div>{{ message.text }}</div>
                      </div>
                    </v-timeline-item>
                  </v-timeline>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="4" xl="4" xxl="4">
          <v-card style="height: 100%">
            <v-app-bar flat color="rgba(0, 0, 0, 0)">
              <v-toolbar-title class="text-h6 pl-0">
                Target Assets (5Tb)
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn
                color="black"
                elevation="8"
                outlined
                plain
                rounded
                @click="
                  () => {
                    data = [];
                    title = 'Upload Target Assets Data';
                    dialog = true;
                  }
                "
                ><v-icon color="black">mdi-plus</v-icon>Upload</v-btn
              >
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
                          id: 's1',
                          color: 'deep-purple lighten-1',
                          text: '7 (5Tb)',
                          title: 'Companies Number',
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
                          <strong>{{ message.title }}</strong>
                        </div>
                        <div>{{ message.text }}</div>
                      </div>
                    </v-timeline-item>
                  </v-timeline>
                </v-col>
              </v-row>
            </v-card-text>
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
      data: [],
      files: [],
      title: "",
    };
  },

  methods: {
    init() {},
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
.item-border {
  border-right: 2px;
  border-right-style: dashed;
}
</style>

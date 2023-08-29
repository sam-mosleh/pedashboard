<template>
  <div>
    <v-row class="py-6 px-3 justify-end align-center">
      <v-col cols="auto">
        <v-dialog
          transition="dialog-top-transition"
          max-width="600"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="white"
              v-bind="attrs"
              v-on="on"
              rounded
              style="color: black"
            >Show saved searches</v-btn>
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <v-toolbar
                color="black"
                dark
                class="mb-8"
              >Your previous searches</v-toolbar>
              <v-card-text v-for="(searchedItem, index) in searchedItems"
                           :key="index">
                <div class="d-flex flex-row">
                  <div :style="{ backgroundColor: getRandomColor(['#264653', '#F94144', '#FF6B6B', '#00A9A5', '#343F56']) }" class="circleStyle">{{ searchedItem.label }}</div>
                  <div class="text-12 align-center">{{ searchedItem.value }}</div>
                </div>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn
                  text
                  @click="dialog.value = false"
                >Close</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
      <v-btn
        class="my-auto"
        @click="dialogAddCompany = true"
        rounded
        color="black"
        style="color: white;"
      >
        <v-icon>mdi-plus</v-icon>
        Add company
      </v-btn>
      <v-dialog
        v-model="dialogAddCompany"
        max-width="500px"
      >
        <v-card>
          <v-card-title>
            <span class="text-h5 pe-3">Please enter company details</span>
          </v-card-title>

          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    outlined
                    label="Name"
                    v-model="newTrackCompany.name"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    outlined
                    label="Score"
                    v-model="newTrackCompany.score"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    outlined
                    label="HQ Location"
                    v-model="newTrackCompany.hqLocation"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="6"
                >
                  <v-text-field
                    outlined
                    label="Revenue Size"
                    v-model="newTrackCompany.revenueSize"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    outlined
                    label="Industry"
                    v-model="newTrackCompany.industry"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    outlined
                    label="Sell Chance"
                    v-model="newTrackCompany.sellChance"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                >
                  <v-textarea
                    outlined
                    label="Insight"
                    v-model="newTrackCompany.insight"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="dialogAddCompany = false"
            >
              Cancel
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="setStartForTracking"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-data-table
      v-if="companies"
      :search="search"
      :headers="headers"
      :items="companies"
      :expanded.sync="expanded"
      item-key="name"
      show-expand
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Track companies</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
      </template>
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">
          <v-col class="py-10">
            <apexchart
              type="line"
              :options="chartOptions(item)"
              :series="chartSeries(item)"
              width="100%"
              height="300"
            ></apexchart>
          </v-col>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import utils from "@/components/utils";
import Vue from 'vue';
import VueApexCharts from 'vue-apexcharts';

Vue.component('apexchart', VueApexCharts);
export default {
  name: 'Track Page',
  data () {
    return {
      newTrackCompany: {
        companyId: null,
        name: null,
        score: null,
        hqLocation: null,
        revenueSize: null,
        industry: null,
        insight: null,
        sellChance: null,
        time: null,
        kpi1: null,
        kpi2: null,
        kpi3: null,
        kpi4: null
      },
      expanded: [],
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Score', value: 'score' },
        { text: 'HQ Location', value: 'hqLocation' },
        { text: 'Sell Chance', value: 'sellChance' },
        { text: 'Industry', value: 'industry' },
        { text: 'KPI', value: 'data-table-expand' },
      ],
      allCompanies: [],
      companies: null,
      search: '',
      searchedItems: [],
      dialogAddCompany: false,
    }
  },
  methods: {
    getRandomColor(colorArray) {
      const randomIndex = Math.floor(Math.random() * colorArray.length);
      return colorArray[randomIndex];
    },
    setStartForTracking() {
      let startedForTracking
      const companyIdValue = this.allCompanies.filter((companyClone) => companyClone.name === this.newTrackCompany.name)
      if (!companyIdValue || !companyIdValue.length) return
      this.newTrackCompany["companyId"] = companyIdValue[0].companyId
      this.newTrackCompany["time"] = [
        '12am',
        '3am',
        '6am',
        '9am',
        '12pm',
        '3pm',
        '6pm',
        '9pm',
      ]
      this.newTrackCompany["kpi1"] = [
        700,
        675,
        710,
        990,
        910,
        760,
        750,
        740,
      ]
      this.newTrackCompany["kpi2"] = [
        520,
        655,
        730,
        670,
        960,
        580,
        760,
        750,
      ]
      this.newTrackCompany["kpi3"] = [
        660,
        735,
        720,
        780,
        980,
        540,
        590,
        530,
      ]
      this.newTrackCompany["kpi4"] = [
        760,
        685,
        540,
        780,
        990,
        720,
        510,
        770,
      ]
      if (localStorage.getItem("startedForTracking")) {
        startedForTracking = JSON.parse(localStorage.getItem("startedForTracking"))
        if (!startedForTracking.filter((itemClone) => itemClone === this.newTrackCompany).length) {
          startedForTracking.push(this.newTrackCompany)
          localStorage.setItem("startedForTracking", JSON.stringify(startedForTracking))
          this.companies = startedForTracking
        }
      } else {
        startedForTracking = [this.newTrackCompany]
        localStorage.setItem("startedForTracking", JSON.stringify(startedForTracking))
        this.companies = startedForTracking
      }
      this.newTrackCompany = {
        companyId: null,
        name: null,
        score: null,
        hqLocation: null,
        revenueSize: null,
        industry: null,
        insight: null,
        sellChance: null,
        time: null,
        kpi1: null,
        kpi2: null,
        kpi3: null,
        kpi4: null
      }
      this.dialogAddCompany = false
    },
    chartOptions(item) {
      // Customize chart options here
      return {
        chart: {
          id: 'line-chart',
        },
        xaxis: {
          categories: item.time, // assuming item.time is an array of time labels
        },
      };
    },
    chartSeries(item) {
      // Customize chart series data here
      return [
        {
          name: 'KPI1',
          data: item.kpi1, // assuming item.kpi1 is an array of values
        },
        {
          name: 'KPI2',
          data: item.kpi2, // assuming item.kpi2 is an array of values
        },
        {
          name: 'KPI3',
          data: item.kpi3, // assuming item.kpi3 is an array of values
        },
      ];
    },
  },
  mounted() {
    this.allCompanies = utils.getCompanies()
    this.companies = JSON.parse(localStorage.getItem("startedForTracking"))

    this.searchedItems = JSON.parse(localStorage.getItem('search'))
    this.searchedItems = this.searchedItems ? this.searchedItems : []
  },
  watch: {
  }
}
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
</style>

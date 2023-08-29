<template>
  <div>
    <v-row class="pt-6 px-3 justify-space-between align-center">
    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Search"
      single-line
      hide-details
      class="pe-5"
      outlined
    ></v-text-field>
      <v-btn
        @click="saveSearchedText"
        rounded
        color="black"
        style="color: white; height: 40px"
      >
        Save what you searched
      </v-btn>
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

    </v-row>
    <v-row class="pt-5 justify-space-between">
      <v-select
        v-model="selectedHqLocation"
        :items="hqLocations"
        label="HQ locations"
        class="px-3"
        outlined
      ></v-select>
      <v-select
        v-model="selectedRevenueSizes"
        :items="revenueSizes"
        label="Revenue Sizes"
        style="width: 30vw"
        outlined
      ></v-select>
      <v-select
        v-model="selectedIndustries"
        :items="industries"
        label="Industries"
        class="px-3"
        outlined
      ></v-select>
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
        <v-toolbar-title>Recommendations</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
    </template>
    <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="headers.length">
          <v-col class="py-10">
            <v-row>{{ item.insight }}</v-row>
            <v-row class="pt-5 justify-end align-center">
              <v-btn
                @click="setSelectForInsight(item)"
                rounded
                color="black"
                style="color: white; height: 40px"
              >
                Select for Insight
              </v-btn>
              <v-btn
                @click="setStartForTracking(item)"
                rounded
                color="white"
                class="ms-4"
                style="color: black; height: 40px;"
              >
                Start for Tracking
              </v-btn>
          </v-row>
        </v-col>
      </td>
    </template>
  </v-data-table>
  </div>
</template>

<script>
import utils from "@/components/utils";
export default {
  name: 'Recommendation Page',
  data () {
    return {
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
        { text: 'Revenue Size', value: 'revenueSize' },
        { text: 'Industry', value: 'industry' },
        { text: 'Insight', value: 'data-table-expand' },
      ],
      allCompanies: [],
      companies: null,
      selectedHqLocation: null,
      hqLocations: [],

      selectedRevenueSizes: null,
      revenueSizes: [],

      selectedIndustries: null,
      industries: [],

      search: '',
      searchedItems: [],
    }
  },
  methods: {
    getUniqueSelectionItems(inputArray, key) {
      const uniqueItems = [];
      const uniqueSet = new Set();

      for (const item of inputArray) {
        if (!uniqueSet.has(item[key])) {
          uniqueSet.add(item[key]);
          uniqueItems.push(item[key]);
        }
      }

      return uniqueItems.map((location, index) => location);
    },
    saveSearchedText() {
      let searchedItemsClone
      if (localStorage.getItem("search")) {
        searchedItemsClone = JSON.parse(localStorage.getItem("search"))
        if (!searchedItemsClone.filter((itemClone) => itemClone.value === this.search).length) {
          searchedItemsClone.push({
            label: searchedItemsClone.length,
            value: this.search
          })
        }
      } else {
        searchedItemsClone = [
          {
            label: 0,
            value: this.search
          }
        ]
      }
      localStorage.setItem("search", JSON.stringify(searchedItemsClone))
      this.searchedItems = searchedItemsClone
    },
    getRandomColor(colorArray) {
      const randomIndex = Math.floor(Math.random() * colorArray.length);
      return colorArray[randomIndex];
    },
    setSelectForInsight(item) {
      let selectedForInsights
      if (localStorage.getItem("selectedForInsights")) {
        selectedForInsights = JSON.parse(localStorage.getItem("selectedForInsights"))
        if (!selectedForInsights.filter((itemClone) => itemClone === item).length) {
          selectedForInsights.push(item)
        }
      } else {
        selectedForInsights = [item]
      }
      localStorage.setItem("selectedForInsights", JSON.stringify(selectedForInsights))
    },
    setStartForTracking(item) {
      let startedForTracking
      if (localStorage.getItem("startedForTracking")) {
        startedForTracking = JSON.parse(localStorage.getItem("startedForTracking"))
        if (!startedForTracking.filter((itemClone) => itemClone === item).length) {
          startedForTracking.push(item)
          localStorage.setItem("startedForTracking", JSON.stringify(startedForTracking))
        }
      } else {
        startedForTracking = [item]
        localStorage.setItem("startedForTracking", JSON.stringify(startedForTracking))
      }
    },
  },
  mounted() {
    this.allCompanies = utils.getCompanies()
    this.companies = this.allCompanies

    this.hqLocations = this.getUniqueSelectionItems(this.allCompanies, "hqLocation")
    this.hqLocations.unshift("All Head Quarters")

    this.revenueSizes = this.getUniqueSelectionItems(this.allCompanies, "revenueSize")
    this.revenueSizes.unshift("All Revenue Sizes")

    this.industries = this.getUniqueSelectionItems(this.allCompanies, "industry")
    this.industries.unshift("All Industries")

    this.searchedItems = JSON.parse(localStorage.getItem('search'))
  },
  watch: {
    selectedHqLocation(val) {
      if (val === "All Head Quarters") this.companies = this.allCompanies
      else this.companies = this.allCompanies.filter((company) => company.hqLocation === val)
    },
    selectedRevenueSizes(val) {
      if (val === "All Revenue Sizes") this.companies = this.allCompanies
      else this.companies = this.allCompanies.filter((company) => company.revenueSize === val)
    },
    selectedIndustries(val) {
      if (val === "All Industries") this.companies = this.allCompanies
      else this.companies = this.allCompanies.filter((company) => company.industry === val)
    },
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

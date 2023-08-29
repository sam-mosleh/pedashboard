<template>
  <v-container fluid>
    <v-card style="padding: 50px">
      <!-- Top search panel -->
      <v-row justify="center" align="center">
        <v-text-field label="Company name"></v-text-field>
        <v-btn>
          Search
        </v-btn>
        <v-btn>
          Add
        </v-btn>
      </v-row>
      <v-expansion-panels style="margin-top: 15px">
        <v-expansion-panel>
          <v-expansion-panel-header>Existing companies</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row v-for="(c, i) in existingCompanies" :key="i">
              <v-col cols="3">
                <p>{{ c }}</p>
              </v-col>
              <v-col cols="3">
                <v-btn>
                  Show
                </v-btn>
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <!-- Top search panel -->
      <v-spacer></v-spacer>
      <v-row justify="center" align="center" style="margin: 50px 0 50px 0">
        <h2>Company information</h2>
      </v-row>
      <v-row justify="center">
        <v-col
          lg="6" class="text-center"
          style="border-right: 1px solid"
        >
          <h3>Due Diligence</h3>
          <v-file-input
            show-size
            label="File input"
          ></v-file-input>
          <v-row justify="start" v-for="(f, i) in files" :key="i">
            <v-col>
              <v-btn>
                <v-icon>mdi-file-pdf-box</v-icon>
                {{ f.name }}
              </v-btn>
            </v-col>
            <v-col>
              <p :style="{color: (f.status === 'Training') ? 'blue' : 'green'}">{{f.status}}</p>
            </v-col>
          </v-row>
          <v-tabs
            style="margin-top: 30px"
            align-with-title
          >
            <v-tabs-slider color="yellow"></v-tabs-slider>
            <v-tab
              v-for="item in tabs"
              :key="item"
            >
              {{ item }}
            </v-tab>
          </v-tabs>
        </v-col>
        <!-- Right panel -->
        <v-col
          lg="6">
            <v-row style="top: 0">
              <v-chip
                color="blue"
                class="ma-2"
                label
                text-color="white"
              >
                <v-icon left>
                  mdi-star
                </v-icon>
                87.99
              </v-chip>
              <v-chip
                color="green"
                class="ma-2"
                label
                text-color="white"
              >
                <v-icon left>
                  mdi-map-marker
                </v-icon>
                New York, US
              </v-chip>
              <v-chip
                color="#C4BBA7"
                class="ma-2"
                label
                text-color="black"
              >
                <v-icon left>
                  mdi-information-outline
                </v-icon>
                Technology, Medicare, Wearable devices
              </v-chip>
              <v-chip
                color="#434039"
                class="ma-2"
                label
                text-color="white"
              >
                <v-icon left>
                  mdi-puzzle
                </v-icon>
                BioTech
              </v-chip>
            </v-row>
          <v-spacer/>
          <v-row>
            <h3 class="ma-2">Key assessment features:</h3>
          </v-row>
          <v-row>
            <h3 class="ma-2">Key upsides:</h3>
          </v-row>
          <v-row>
            <h3 class="ma-2">Key risks:</h3>
          </v-row>
          <v-row>
            <h3 class="ma-2">Similar companies:</h3>
            <v-btn
              style="margin-left: 10px"
              v-for="(c, i) in ['Apple', 'Google']" :key="i">
              {{c}}
            </v-btn>
          </v-row>
          <v-row>
            <v-btn class="ma-2">
              <v-icon>
                mdi-robot
              </v-icon>
              Chat with Robot
            </v-btn>
          </v-row>
        </v-col>
        <!-- Right panel -->
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "insight",
  data() {
    return {
      existingCompanies: ['Apple', 'Amazon'],
      files: [
        {name: 'HR.pdf', status: 'Training'},
        {name: '2023 reviews.pdf', status: 'Training'},
        {name: 'Company profit.pdf', status: 'Trained'}
      ],
      tabs: ['General Information', 'Competitors', 'Customers', 'Legal'],
    }
  }
}
</script>

<style scoped>

</style>

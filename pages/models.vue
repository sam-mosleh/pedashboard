<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="allModels"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:item.actions="{item}">
        <v-row>
          <v-icon color="green" :style="{opacity: (item.status === 'Ready to use') ? 1 : 0.5}">
            mdi-robot
          </v-icon>
          <v-icon>
            mdi-delete-forever
          </v-icon>
        </v-row>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  name: "models",
  data() {
    return {
      headers: [
        {text: 'Base Model', value: 'base'},
        {text: 'Date Created', value: 'date_created'},
        {text: 'Company', value: 'company'},
        {text: 'Size of Data', value: 'data_size'},
        {text: 'Status', value: 'status'},
        {text: 'Actions', value: 'actions'}
      ],
      allModels: [
        {
          base: 'Falcon 40B',
          date_created: 'Aug 13 2023',
          company: 'Toast',
          data_size: '1876 words',
          status: 'Ready to use',
        },
        {
          base: 'Falcon 40B',
          date_created: 'Aug 13 2023',
          company: 'Aethir',
          data_size: '2233 words',
          status: 'Training'
        },
        {
          base: 'Falcon 40B',
          date_created: 'Aug 13 2023',
          company: 'QuoIntelligence',
          data_size: '1477 words',
          status: 'Training'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>

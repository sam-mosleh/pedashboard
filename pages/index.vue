<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          Welcome to AI investment dashboard
        </v-card-title>
        <v-card-text>
          AI investment is a cutting-edge service powered by artificial
          intelligence (AI) that revolutionizes the way investors make informed
          decisions. It is designed to support investors by providing a
          comprehensive suite of AI tools, including due diligence analysis and
          deal sourcing capabilities. <br />
          One of the key features of the service is its due diligence analysis
          tool. This tool utilizes AI algorithms to conduct in-depth research on
          potential investment opportunities. It scours vast amounts of
          structured and unstructured data, including financial reports, news
          articles, social media sentiments, and market trends. By analyzing
          this information, the service can quickly identify the strengths,
          weaknesses, risks, and growth potential of a particular investment
          opportunity.
        </v-card-text>
        <v-card-actions>
          <v-btn to="dd"> AI-Based Due Diligence Service </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "IndexPage",
  mounted() {
    window.location.href = "/login";
  },
};
</script>

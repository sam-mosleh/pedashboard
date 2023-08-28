<template>
  <v-container>
    <v-card style="padding: 40px">
      <v-card-title>
        AI Due Diligence - Find Competitors
      </v-card-title>
      <v-row align="center" justify="center" style="padding: 20px;">
        <v-text-field v-model="company_name"
                      placeholder="Company name"
                      label="Company name"
        />
        <v-btn
          @click="search"
          :disabled="isSearching"
        >
          Start
        </v-btn>
      </v-row>
      <v-progress-linear
        indeterminate
        v-if="isSearching"
        style="margin-bottom: 20px"
      ></v-progress-linear>
      <v-spacer />
      <v-card
        v-for="(item, i) in history"
        :key="i"
        style="padding: 20px; margin-bottom: 20px"
        elevation="5"
      >
        <h3>{{item.name}}</h3>
        <h5 v-for="t in item.text">{{t}}</h5>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "customers",
  data() {
    return {
      history: [
        {
          name: 'Dream Sport',
          text: '1. PlaySimple Games:\\nPlaySimple Games is a mobile game development company that focuses on creating fun and engaging word puzzle games. Like Dream Sports, they operate in the gaming industry, specifically in the mobile gaming market. Both companies aim to provide entertainment to their users through their respective platforms. While Dream Sports focuses on fantasy sports, PlaySimple Games focuses on casual word puzzle games. However, their target audience may overlap, and they compete for users\' time and attention in the mobile gaming space.\\n\\n2. MyTeam11:\\nMyTeam11 is a fantasy sports platform that allows users to create their teams and participate in various fantasy sports leagues. Similar to Dream Sports, MyTeam11 offers various fantasy sports such as cricket, football, basketball, and kabaddi. Both companies target sports enthusiasts and provide a platform for users to engage with their favorite sports. They compete in terms of user acquisition, retention, and maintaining an engaging user experience. MyTeam11 can be considered a direct competitor of Dream Sports in the fantasy sports industry.\\n\\n3. HalaPlay:\\nHalaPlay is another fantasy sports platform that offers users an opportunity to participate in fantasy cricket, football, and basketball leagues. It operates on a similar model as Dream Sports, allowing users to create their teams, join leagues, and compete for prizes based on real-life sports events. HalaPlay competes directly with Dream Sports in terms of attracting sports fans, providing a competitive gaming experience, and offering a range of sports options. Both companies seek to dominate the fantasy sports market and target similar user demographics.'.split("\\n")
        },
        {
          name: 'Main Event',
          text: '1. Dream11: Dream11 is a direct competitor to Dream Sports as it operates in the same industry sector and offers a similar service. Both companies provide fantasy sports platforms where users can create virtual teams and participate in online gaming leagues. Dream11 is one of the largest and most popular fantasy sports platforms in India, making it a significant competitor for Dream Sports.\\n\\n2. MPL (Mobile Premier League): MPL is another strong competitor for Dream Sports. It also operates in the fantasy gaming industry and offers a platform where users can play a variety of skill-based mobile games and compete with others for cash prizes. Similar to Dream Sports, MPL has gained significant traction and has a large user base, making it a direct competitor in terms of services and market size.\\n\\n3. MyTeam11: MyTeam11 is another fantasy sports platform that competes directly with Dream Sports. It offers users the opportunity to create virtual teams and participate in various online sports leagues, including cricket, football, basketball, and more. With a similar business model and target market, MyTeam11 poses a competitive threat to Dream Sports in terms of market size and service offerings.\\n\\nOverall, Dream11, MPL, and MyTeam11 are strong competitors for Dream Sports as they operate in the same industry sector, offer similar services, and have a comparable market size. These companies pose a challenge for Dream Sports in terms of acquiring and retaining users in the highly competitive fantasy gaming market.'.split("\\n")
        }
      ],
      company_name: '',
      isSearching: false
    }
  },
  methods: {
    search() {
      this.isSearching = true
      this.$axios("https://b49ebf7lsb.execute-api.us-west-1.amazonaws.com/stage/chatbot/pe/dd/competitor/" + this.company_name).then(res => {
        this.history = [{
          name: this.company_name,
          description: res.data.choices[0].message["content"]
        }, ...this.history]
        this.isSearching = false
        this.company_name = ''
      })
    }
  }
}
</script>

<style scoped>

</style>

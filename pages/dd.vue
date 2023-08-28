<template>
  <v-container>
    <v-card style="padding: 40px">
      <v-card-title>
        AI-Based Due Diligence
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
      <h3>Previous selected companies</h3>
      <v-autocomplete
        :items="companies"
        v-model="selected_company"
        placeholder="Company name"/>
      <v-progress-linear
        :value="progressValue"
        v-if="isSearching"
        style="margin-bottom: 20px"
      ></v-progress-linear>
      <v-spacer/>
      <v-textarea
        outlined
        :disabled="isSearching"
        v-model="company_info"
        label="Please write any information for due diligence, no need to be structured"
      />
      <v-tabs
        v-model="tab"
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
      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in tabs"
          :key="item"
        >
          <v-card
            style="padding: 20px; margin-bottom: 20px"
            elevation="5"
          >
            <div v-if="tab === 0">
              <h3 v-for="txt in tabText.general_info">{{ txt }}</h3>
            </div>
            <div v-if="tab === 1">
              <h3 v-for="txt in tabText.competitors">{{ txt }}</h3>
            </div>
            <div v-if="tab === 2">
              <h3 v-for="txt in tabText.customers">{{ txt }}</h3>
            </div>
            <div v-if="tab === 3">
              <h3 v-for="txt in tabText.legal">{{ txt }}</h3>
            </div>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "dd",
  watch: {
    selected_company(val) {
      this.tabText = this.history.filter(t => t.name === val)[0]
    }
  },
  data() {
    return {
      companies: ['Toast'],
      tabText: '',
      company_name: '',
      company_info: '',
      selected_company: '',
      history: [
        // TODO: add more companies
        {
          name: 'Toast',
          general_info: 'Toast is a technology company that provides a comprehensive suite of restaurant management software solutions. Founded in 2013 by Steve Fredette, Aman Narang, and Jonathan Grimm, Toast offers point-of-sale (POS) systems, kitchen management systems, and various other tools to help restaurants streamline their operations and improve overall efficiency.\n In terms of financial history, Toast has been quite successful. The company has seen substantial growth and secured significant funding since its inception. As of late 2020, Toast was valued at over $8 billion. Notable investors include Tiger Global Management, TPG, Bessemer Venture Partners, and T. Rowe Price.\nToast primarily caters to the restaurant industry, providing software solutions for different types of establishments ranging from small cafes to larger, multi-location restaurants. Their POS systems help automate the order-taking process, manage inventory, track sales, and enable seamless payment transactions.\n In addition to its core restaurant management offerings, Toast also offers integrations with third-party applications. This allows restaurants to enhance their POS capabilities with features like online ordering, delivery management, loyalty programs, and more.\n While Toast has not yet gone public, there has been speculation about a potential initial public offering (IPO) in the future. As with any company, it is important to stay up to date with the latest news and official announcements to get the most accurate and current information about its financials and stock-related activities.\nPlease note that my information is based on available general knowledge, and for more specific and up-to-date information about Toast, I recommend conducting detailed research or consulting official sources.'.split('\n'),
          competitors: 'Here are three potential competitors for "Toast" based on market size, services, and industry sector:\n1. Upserve: Upserve is a company that provides a restaurant management platform offering point of sale (POS), inventory management, and analytics solutions. Similar to Toast, Upserve focuses on enabling seamless operations and enhancing guest experiences for restaurants of all sizes. Both companies target the hospitality industry, specifically restaurants, and aim to streamline processes and optimize performance.\n2. Square for Restaurants: Square for Restaurants is a division of Square, a well-known payment processing company. Square for Restaurants offers a comprehensive point of sale system tailored specifically for the food and beverage industry. With features such as table layout management, order taking, and integrated payment processing, Square for Restaurants competes with Toast by providing similar services for restaurants seeking to improve efficiency and customer experience.\n 3. TouchBistro: TouchBistro is a restaurant management software designed for iPad-based point of sale. Like Toast, TouchBistro provides a range of features including tableside ordering, menu management, staff scheduling, and inventory tracking. It caters to the needs of restaurants and helps them streamline operations, enhance customer engagement, and make informed business decisions.\nThese companies can be considered competitors to "Toast" because they offer similar services in the same industry sector (hospitality and restaurant management), and aim to serve businesses of similar market size - from small cafes and food trucks to larger restaurant chains.'.split("\n"),
          customers: 'Toast is a software company that provides a restaurant management platform. While I don\'t have access to specific customer information for Toast, I can provide some general insights on the potential customer base for such a service.\n1. Gender: The restaurant industry typically has a diverse customer base, so both male and female customers are likely to use the services provided by Toast.\n2. Age: Restaurants cater to customers of various age groups. However, it is worth noting that millennials and Gen Z tend to be more technologically savvy, so they are likely to be a significant customer segment for Toast\'s services.\n3. Career: Any individual or business involved in the foodservice industry, including restaurants, cafes, bars, and food trucks, can be potential customers for Toast. This includes both small independently-owned establishments as well as larger restaurant chains.\n4. Geography: Toast\'s services are available in the United States and are primarily targeted towards the restaurant industry in North America. However, they have expanded to some international markets as well.\n5. General Information: Toast\'s software offers a range of features catering to restaurant operations, including point of sale (POS) systems, inventory management, online ordering, employee management, and reporting. Therefore, potential customers may include restaurant owners, managers, and employees who are seeking more efficient and streamlined ways to run their operations.\nIn summary, the potential customers for Toast\'s services are likely to include individuals and businesses in the foodservice industry, ranging from small independent restaurants to larger chains. The customer base can be diverse in terms of gender, age, and geography, and it primarily consists of those seeking software solutions to improve operations and streamline processes within their establishments.'.split("\n"),
          legal: 'Toast Inc. is a cloud-based restaurant software company based in Boston, Massachusetts. The company provides a restaurant management and point of sale (POS) system that is built on Android technology and is capable of handling the entire operation of the restaurant.\\n\\nBased on my available data, here\'s a due diligence summary:\\n\\n1. Company Registration: The company is listed and registered in line with federal and state laws.\\n\\n2. Legal Issues and Litigations: There is no legal issue or litigation that could potentially hurt the company\'s reputation or operation. However, detailed information required thorough legal due diligence.\\n\\n3. Intellectual Property: Toast Inc. has several registered patents and trademarks which enhance its competitive advantage in the restaurant software industry.\\n\\n4. Regulatory Compliance: As a service provider to the food industry, Toast Inc. seems to be in compliance with Health Department and FDA guidelines.\\n\\n5. Contracts and Agreements: Toast Inc. has numerous partnerships and agreements with other firms for technological collaboration, which seems to be legally binding.\\n\\n6. Employment Law: Toast Inc. appears to adhere to labor law requirements, providing fair working conditions and abiding by diversity and inclusion laws.\\n\\nRemember that the most accurate information is acquired through exhaustive legal due diligence, including a review of all company contracts, thorough patent searches, a complete study of all historical legal issues, and full compliance auditing. It is recommended to work with a legal professional to get a comprehensive due diligence report.'.split("\n")
        },
      ],
      isSearching: false,
      progressValue: 0,
      tab: '',
      tabs: ['General Information', 'Competitors', 'Customers', 'Legal']
    }
  },
  methods: {
    search() {
      this.isSearching = true
      let newHist = {name: this.company_name}
      const path = "https://b49ebf7lsb.execute-api.us-west-1.amazonaws.com/stage/"
      // const path = "http://localhost:4300/"
      this.$axios(path + "chatbot/pe_dd/" + this.company_name).then(res => {
        newHist.general_info = res.data.choices[0].message["content"].split('\\n')
        this.progressValue = 25
        this.$axios.post(path + "chatbot/pe/customers", {company_name: this.company_name, text: this.company_info}).then(res1 => {
          newHist.customers = res1.data.choices[0].message["content"].split('\\n')
          this.progressValue = 50
          this.$axios.post(path + "chatbot/pe/competitor", {company_name: this.company_name, text: this.company_info}).then(res2 => {
            newHist.competitors = res2.data.choices[0].message["content"].split('\\n')
            this.progressValue = 75
            this.$axios.post(path + "chatbot/pe/dd_legal", {company_name: this.company_name, text: this.company_info}).then(res3 => {
              this.progressValue = 100
              newHist.legal = res3.data.choices[0].message["content"].split('\\n')
              this.history.push(newHist)
              this.companies.push(this.company_name)
              this.isSearching = false
              this.company_name = ''
            })
          })
        })
      })
    }
  }
}
</script>

<style scoped>

</style>

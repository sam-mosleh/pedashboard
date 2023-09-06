<template>
  <div></div>
</template>

<script>
import api from "@/components/API";
export default {
  name: "TrackPage",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    const allData = api.getFullUserData();
    api.saveAiRobots(allData.robots);
    api.saveCompanies(allData.companies);
    api.saveTrackingKPIs(allData.trackingCompaniesKPIs);
    api.saveTrackingKPIKeys(allData.trackingKpiKeys);
    api.saveTrackingAlternativeKPIKeys(allData.trackingAlternativeKpiKeys);
    api.saveInsightCompanies(allData.insights);
    console.log(JSON.stringify(allData));
  },
  watch: {},
};
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

<template>
  <div>
    <v-row
      class="ps-3 pt-8 pb-6 mb-3"
      style="font-weight: 600; font-size: 28px; background: black; color: white"
      >Deal Insights</v-row
    >

    <v-container fluid>
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

      <!-- ==================================NEW Header START================================== -->
      <v-row class="cart-insights">
        <v-col cols="12" sm="6" md="3" lg="3" xl="3" xxl="3">
          <v-card class="cart-insights" style="">
            <v-btn
              class="d-flex flex-row ms-auto me-2 mt-2"
              style="
                background: black;
                color: white;
                border-radius: 30px;
                text-transform: capitalize;
              "
              @click="() => (addNewInsightCompanyDialog.isOpen = true)"
            >
              + Add
            </v-btn>
            <v-col class="justify-space-between align-center h-100">
              <p
                class="text-center"
                style="font-size: 2rem; line-height: 2.75rem; font-weight: 700"
              >
                {{ summaryInsights.count }}
              </p>
              <p
                class="text-center"
                style="font-size: 1.2rem; line-height: 1.5rem; font-weight: 700"
              >
                Company insights
              </p>
              <div style="height: 2px; background: red"></div>
              <div class="candlestick" v-if="summaryInsights.min < 100">
                <div class="wick"></div>
                <div
                  class="body"
                  :style="{
                    width: `${summaryInsights.max - summaryInsights.min}%`,
                    left: `${summaryInsights.min}%`,
                  }"
                ></div>
                <div
                  class="shadow-left"
                  :style="{ width: `${summaryInsights.min}%` }"
                ></div>
                <div
                  class="shadow-right"
                  :style="{ width: `${summaryInsights.max}%` }"
                ></div>
              </div>
              <v-row
                class="justify-space-between mt-1 px-2"
                v-if="summaryInsights.min < 100"
              >
                <p style="font-size: 10px">min: {{ summaryInsights.min }}%</p>
                <p style="font-size: 10px">max: {{ summaryInsights.max }}%</p>
              </v-row>
              <v-row
                class="justify-space-between mt-1 px-2"
                v-if="summaryInsights.min >= 100"
              >
                <p style="font-size: 10px; width: 100%; text-align: center">
                  All insights are completed!
                </p>
              </v-row>
            </v-col>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="9" lg="9" xl="9" xxl="9">
          <v-data-table
            :headers="insightTable.headers"
            :items="insightTable.items"
            hide-default-footer
            disable-sort
            class="elevation-1"
          ></v-data-table>
        </v-col>
      </v-row>
      <!-- ==================================NEW Header End================================== -->

      <v-row>
        <!-- ==================================NEW START================================== -->
        <v-col cols="12">
          <v-card>
            <v-tabs v-model="tab" dark grow center>
              <v-tab
                v-for="item in [
                  { tab: 'Phase Zero' },
                  { tab: 'Phase One' },
                  { tab: 'Phase Two' },
                ]"
                :key="item.tab"
              >
                {{ item.tab }}
              </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
              <v-tab-item
                v-for="item in [
                  { tab: 'One', id: 0 },
                  { tab: 'Two', id: 1 },
                  { tab: 'Three', id: 2 },
                ]"
                :key="item.tab"
              >
                <v-row style="margin: 10px 10px 10px 10px">
                  <v-col
                    cols="12"
                    xs="12"
                    sm="6"
                    md="4"
                    lg="3"
                    xl="3"
                    xxl="3"
                    v-for="company in getAllAvailableCompaniesInItem(
                      allInsightCompanies,
                      item.id
                    )"
                    v-bind:key="company.companyId"
                  >
                    <v-card
                      class="mx-auto"
                      v-if="checkIsCompanyAvailable(company)"
                    >
                      <v-card-text>
                        <p class="text-h4 text--primary">{{ company.name }}</p>
                        <div class="text--primary">
                          <v-chip-group active-class="primary--text" column>
                            <v-chip>score: {{ company.score }}</v-chip>

                            <v-chip
                              >Sell Chance: {{ company.sellChance }}</v-chip
                            >

                            <v-chip
                              >Documents:
                              {{ company.uploadedFiles.length }}</v-chip
                            >
                            <v-chip
                              >Insight Completeness:
                              {{ company.completeness }}%</v-chip
                            >
                          </v-chip-group>
                        </div>
                      </v-card-text>
                      <v-card-actions>
                        <v-slide-group multiple show-arrows>
                          <v-slide-item>
                            <v-btn
                              text
                              color="green"
                              @click="
                                () => {
                                  dialogViewAssetDetail.isOpen = true;
                                  dialogViewAssetDetail.company = company;
                                  dialogViewAssetDetail.selectedPhase =
                                    company.assetPhase;
                                }
                              "
                            >
                              view
                            </v-btn>
                          </v-slide-item>
                          <v-slide-item>
                            <v-btn
                              text
                              color="green"
                              @click="
                                () => {
                                  chatModal.isOpen = true;
                                  chatModal.situation = 0;
                                  chatModal.userCommand = '';
                                  chatModal.messages = [
                                    {
                                      time: new Date(),
                                      from: 'robot',
                                      message:
                                        'Hello im your AI assistant, please describe me what kind of information do you want about this company',
                                      hasBTN: false,
                                    },
                                  ];
                                }
                              "
                            >
                              <v-icon color="green">mdi-robot-excited</v-icon>
                            </v-btn>
                          </v-slide-item>
                          <v-slide-item>
                            <v-btn
                              text
                              color="red"
                              @click="
                                () => {
                                  deleteInsightDialog.isOpen = true;
                                  deleteInsightDialog.companyId =
                                    company.companyId;
                                }
                              "
                            >
                              delete
                            </v-btn></v-slide-item
                          >
                          <v-slide-item>
                            <v-btn
                              small
                              @click="
                                () => {
                                  fireSnack(
                                    'your review submitted successfully!'
                                  );
                                }
                              "
                              rounded
                              color="green"
                              style="margin: 0 auto; display: block"
                            >
                              <v-icon>mdi-thumb-up</v-icon>
                            </v-btn>
                          </v-slide-item>
                          <v-slide-item>
                            <v-btn
                              small
                              @click="
                                () => {
                                  fireSnack(
                                    'your review submitted successfully!'
                                  );
                                }
                              "
                              rounded
                              color="red"
                              style="margin: 0 auto; display: block"
                            >
                              <v-icon>mdi-thumb-down</v-icon>
                            </v-btn>
                          </v-slide-item>
                        </v-slide-group>

                        <!-- TODO: must be added -->
                      </v-card-actions>
                    </v-card>
                  </v-col>
                  <v-card
                    v-if="
                      getAllAvailableCompaniesInItem(
                        allInsightCompanies,
                        item.id
                      ).length == 0
                    "
                    style="width: 100%; margin-top: 10px; margin-bottom: 10px"
                  >
                    <v-card-text style="width: 100%; text-align: center">
                      There is No Assets in this phase.
                    </v-card-text>
                  </v-card>
                </v-row>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
        </v-col>
        <!-- ==================================NEW END================================== -->
      </v-row>
      <v-row> </v-row>

      <!-- View Asset Detail Dialog START -->
      <v-dialog v-model="dialogViewAssetDetail.isOpen" max-width="90vw">
        <v-card class="mt-5">
          <v-card-text>
            <v-container>
              <v-col>
                <v-row style="border-bottom: 1px solid gray; display: flex">
                  <v-col cols="12" sm="12" md="6" lg="6" xl="6" xxl="6">
                    <v-card
                      style="padding: 10px; background: #f0f0f0; color: black"
                    >
                      <v-col class="justify-space-between align-center h-100">
                        <p
                          class="text-center"
                          style="
                            font-size: 2rem;
                            line-height: 2.75rem;
                            font-weight: 700;
                          "
                        >
                          {{ dialogViewAssetDetail.company?.name }}
                        </p>
                        <v-chip-group column>
                          <v-chip
                            >Phase
                            {{
                              dialogViewAssetDetail.company?.assetPhase == 0
                                ? "Zero"
                                : dialogViewAssetDetail.company?.assetPhase == 1
                                ? "One"
                                : "Two"
                            }}</v-chip
                          >
                          <v-chip>
                            Insight Completeness:
                            {{ dialogViewAssetDetail.company?.completeness }}%
                          </v-chip>

                          <v-chip>
                            score:
                            {{ dialogViewAssetDetail.company?.score }}</v-chip
                          >
                          <v-chip
                            >Sell Chance:
                            {{
                              dialogViewAssetDetail.company?.sellChance
                            }}</v-chip
                          >

                          <v-chip
                            >Documents:
                            {{
                              dialogViewAssetDetail.company?.uploadedFiles
                                .length
                            }}</v-chip
                          >
                          <v-chip
                            class="ma-2"
                            color="#F0F0F0"
                            label
                            text-color="black"
                          >
                            <v-icon left> mdi-puzzle </v-icon>
                            {{ dialogViewAssetDetail.company?.industry }}
                          </v-chip>
                        </v-chip-group>
                      </v-col>
                    </v-card>
                    <v-row class="justify-space-between mt-3">
                      <v-col cols="12">
                        <v-btn
                          v-if="!dialogViewAssetDetail.isEditPhase"
                          @click="
                            () => (dialogViewAssetDetail.isEditPhase = true)
                          "
                        >
                          Current Phase:{{
                            dialogViewAssetDetail.selectedPhase == 0
                              ? "One"
                              : dialogViewAssetDetail.selectedPhase == 1
                              ? "One"
                              : "Two"
                          }}
                          (Edit Company Phase)</v-btn
                        >
                        <v-combobox
                          v-if="dialogViewAssetDetail.isEditPhase"
                          v-model="dialogViewAssetDetail.selectedPhase"
                          :items="[
                            { text: 'Phase Zero', value: 0 },
                            { text: 'Phase One', value: 1 },
                            { text: 'Phase Two', value: 2 },
                          ]"
                          @change="changePhaseOfCompany"
                          label="Change Company Phase"
                          prepend-icon="mdi-filter-variant"
                          solo
                        ></v-combobox>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="6"
                    lg="6"
                    xl="6"
                    xxl="6"
                    style="height: 300px; overflow: scroll; margin-bottom: 15px"
                  >
                    <!-- ==============++++UPLOADFILE+++=============== -->
                    <v-dialog v-model="uploadFileDialog.isOpen" width="500">
                      <v-card>
                        <v-card-title class="text-h5 grey lighten-2">
                          Upload document for
                          {{ dialogViewAssetDetail.company?.name }}
                        </v-card-title>

                        <v-card-text style="margin-top: 25px">
                          <v-row>
                            <v-select
                              v-model="uploadFileDialog.selectedFileCat"
                              :items="uploadFileDialog.allFilesCat"
                              label="Outlined style"
                              outlined
                            ></v-select>
                          </v-row>
                          <v-row>
                            <v-file-input
                              v-model="uploadFileDialog.uploadedFiles"
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
                                  color="deep-purple accent-4"
                                  dark
                                  label
                                  small
                                >
                                  {{ text }}
                                </v-chip>

                                <!-- <span
                                  v-else-if="index === 2"
                                  class="text-overline grey--text text--darken-3 mx-2"
                                >
                                  +{{
                                    uploadFileDialog.uploadedFiles.length - 2
                                  }}
                                  File(s)
                                </span> -->
                              </template>
                            </v-file-input>
                          </v-row>
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions>
                          <v-btn
                            color="primary"
                            text
                            @click="
                              () => {
                                uploadFileDialog.isOpen = false;
                                (uploadFileDialog.selectedFileCat = ''),
                                  (uploadFileDialog.uploadedFiles = []);
                              }
                            "
                          >
                            close
                          </v-btn>
                          <v-spacer></v-spacer>
                          <v-btn
                            v-if="uploadFileDialog.uploadedFiles.length > 0"
                            color="primary"
                            text
                            @click="saveUploadedFiles"
                          >
                            save
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                    <!-- ==============++++UPLOADFILE+++=============== -->
                    <v-btn
                      block
                      color="primary"
                      elevation="8"
                      outlined
                      plain
                      rounded
                      text
                      @click="
                        () => {
                          uploadFileDialog.isOpen = true;
                        }
                      "
                    >
                      Upload File
                    </v-btn>
                    <v-row
                      max-height="400"
                      v-for="(file, i) in dialogViewAssetDetail.company
                        ?.uploadedFiles"
                      class="w-100 px-3 pt-3 mt-8 justify-space-between"
                      style="background: lightgray; border-radius: 5px"
                    >
                      <v-col cols="4">
                        {{ file.name }}
                      </v-col>
                      <v-col cols="2">
                        {{ file.size }}
                      </v-col>
                      <v-col cols="4">
                        {{ file.title }}
                      </v-col>
                      <v-col cols="2">
                        <v-btn
                          text
                          color="red"
                          @click="deleteFileFromCompany(i)"
                        >
                          <v-icon class="mt-0 mb-auto" style="color: red">
                            mdi-delete
                          </v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
                <v-row class="my-5 justify-center">
                  <v-tabs dark grow center>
                    <v-tab style="text-transform: capitalize"
                      >Standard Due Diligence</v-tab
                    >
                    <v-tab style="text-transform: capitalize"
                      >Alternative Insights</v-tab
                    >
                    <v-tab-item v-for="n in 2" :key="n">
                      <v-container fluid v-if="n === 1">
                        <v-tabs color="black accent-4" grow center>
                          <v-tab style="text-transform: capitalize"
                            >Commercial</v-tab
                          >
                          <v-tab style="text-transform: capitalize"
                            >Finance</v-tab
                          >
                          <v-tab style="text-transform: capitalize"
                            >Legal</v-tab
                          >
                          <v-tab style="text-transform: capitalize">IT</v-tab>
                          <v-tab-item v-for="n in [3, 4, 5, 6]" :key="n">
                            <v-container fluid v-if="n === 3">
                              <p>
                                {{
                                  dialogViewAssetDetail.company?.insight
                                    .standardDueDiligence.commercial
                                }}
                              </p>
                              <v-expansion-panels>
                                <v-expansion-panel
                                  v-for="(item, i) in 5"
                                  :key="i"
                                >
                                  <v-expansion-panel-header>
                                    Question No.{{ i }}
                                  </v-expansion-panel-header>
                                  <v-expansion-panel-content>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                  </v-expansion-panel-content>
                                </v-expansion-panel>
                              </v-expansion-panels>
                            </v-container>
                            <v-container fluid v-if="n === 4">
                              <p>
                                {{
                                  dialogViewAssetDetail.company?.insight
                                    .standardDueDiligence.financial
                                }}
                              </p>
                              <v-expansion-panels>
                                <v-expansion-panel
                                  v-for="(item, i) in 5"
                                  :key="i"
                                >
                                  <v-expansion-panel-header>
                                    Question No.{{ i }}
                                  </v-expansion-panel-header>
                                  <v-expansion-panel-content>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                  </v-expansion-panel-content>
                                </v-expansion-panel>
                              </v-expansion-panels>
                            </v-container>
                            <v-container fluid v-if="n === 5">
                              <p>
                                {{
                                  dialogViewAssetDetail.company?.insight
                                    .standardDueDiligence.legal
                                }}
                              </p>
                              <v-expansion-panels>
                                <v-expansion-panel
                                  v-for="(item, i) in 5"
                                  :key="i"
                                >
                                  <v-expansion-panel-header>
                                    Question No.{{ i }}
                                  </v-expansion-panel-header>
                                  <v-expansion-panel-content>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                  </v-expansion-panel-content>
                                </v-expansion-panel>
                              </v-expansion-panels>
                            </v-container>
                            <v-container fluid v-if="n === 6">
                              <p>
                                {{
                                  dialogViewAssetDetail.company?.insight
                                    .standardDueDiligence.it
                                }}
                              </p>
                              <v-expansion-panels>
                                <v-expansion-panel
                                  v-for="(item, i) in 5"
                                  :key="i"
                                >
                                  <v-expansion-panel-header>
                                    Question No.{{ i }}
                                  </v-expansion-panel-header>
                                  <v-expansion-panel-content>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                  </v-expansion-panel-content>
                                </v-expansion-panel>
                              </v-expansion-panels>
                            </v-container>
                          </v-tab-item>
                        </v-tabs>
                        <v-row class="mb-5 justify-center"> </v-row>
                      </v-container>
                      <v-container fluid v-if="n === 2">
                        <v-tabs color="black accent-4" grow center>
                          <v-tab style="text-transform: capitalize"
                            >Key Features</v-tab
                          >
                          <v-tab style="text-transform: capitalize"
                            >Key Risks</v-tab
                          >
                          <v-tab style="text-transform: capitalize"
                            >Key Upsides</v-tab
                          >

                          <v-tab-item v-for="n in [7, 8, 9]" :key="n">
                            <v-container fluid v-if="n === 7">
                              <p>
                                {{
                                  dialogViewAssetDetail.company?.insight
                                    .alternativeInsights.keyFeaters
                                }}
                              </p>
                              <v-expansion-panels>
                                <v-expansion-panel
                                  v-for="(item, i) in 5"
                                  :key="i"
                                >
                                  <v-expansion-panel-header>
                                    Question No.{{ i }}
                                  </v-expansion-panel-header>
                                  <v-expansion-panel-content>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                  </v-expansion-panel-content>
                                </v-expansion-panel>
                              </v-expansion-panels>
                            </v-container>
                            <v-container fluid v-if="n === 8">
                              <p>
                                {{
                                  dialogViewAssetDetail.company?.insight
                                    .alternativeInsights.keyRisks
                                }}
                              </p>
                              <v-expansion-panels>
                                <v-expansion-panel
                                  v-for="(item, i) in 5"
                                  :key="i"
                                >
                                  <v-expansion-panel-header>
                                    Question No.{{ i }}
                                  </v-expansion-panel-header>
                                  <v-expansion-panel-content>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                  </v-expansion-panel-content>
                                </v-expansion-panel>
                              </v-expansion-panels>
                            </v-container>
                            <v-container fluid v-if="n === 9">
                              <p>
                                {{
                                  dialogViewAssetDetail.company?.insight
                                    .alternativeInsights.keyUpsides
                                }}
                              </p>
                              <v-expansion-panels>
                                <v-expansion-panel
                                  v-for="(item, i) in 5"
                                  :key="i"
                                >
                                  <v-expansion-panel-header>
                                    Question No.{{ i }}
                                  </v-expansion-panel-header>
                                  <v-expansion-panel-content>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                  </v-expansion-panel-content>
                                </v-expansion-panel>
                              </v-expansion-panels>
                            </v-container>
                          </v-tab-item>
                        </v-tabs>
                      </v-container>
                    </v-tab-item>
                  </v-tabs>
                </v-row>
              </v-col>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="red darken-1"
              text
              @click="
                () => {
                  dialogViewAssetDetail.isOpen = false;
                  init();
                }
              "
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- View Asset Detail Dialog END -->

      <!-- View Asset Detail Dialog START -->
      <v-dialog v-model="dialogMonitoring.isOpen" max-width="90vw">
        <v-card>
          <v-card-text>
            <v-container>
              <v-col class="py-10">
                <v-row class="px-3">
                  <p style="font-size: 20px; font-weight: 600" class="my-3">
                    Insight
                  </p>
                  <div class="d-flex flex-row ms-auto me-0 my-3">
                    <v-row>
                      <v-btn
                        @click="dialogAddReview = true"
                        rounded
                        color="gray"
                        class="mt-4 mx-3"
                        style="color: black"
                      >
                        <v-icon>mdi-plus</v-icon>
                        Add a review
                      </v-btn>
                    </v-row>
                  </div>
                </v-row>
                <p style="font-size: 14px; font-weight: 400" class="mt-10">
                  {{ dialogMonitoring.company?.insight.aiDescription }}
                </p>
                <v-row class="d-flex justify-space-between mt-10">
                  <p
                    style="font-size: 14px; font-weight: 400"
                    class="mt-4 ps-3"
                  >
                    There is
                    {{
                      showDataSize(dialogMonitoring.company?.totalDataGathered)
                    }}
                    of data gathered for this company
                  </p>
                </v-row>
                <v-card
                  v-for="gatheringChannels in dialogMonitoring.company
                    ?.recommendation.gatheringChannels"
                  class="mt-10"
                  style="background: #f0f0f0"
                >
                  <v-row style="justify-content: center; align-items: center">
                    <v-img
                      contain
                      alt="logo"
                      class="ps-4"
                      max-width="100"
                      :src="gatheringChannels.imgSRC"
                    ></v-img>
                    <v-col>
                      <v-chip-group active-class="primary--text" column>
                        <v-chip
                          class="ma-2"
                          color="green"
                          text-color="white"
                          style="justify-content: center; align-items: center"
                        >
                          {{
                            `Status: ${
                              gatheringChannels.isDataGatheringFinished
                                ? gatheringChannels.isDataLearningFinished
                                  ? "Finished"
                                  : "Learning Data"
                                : "Gathering Data"
                            }`
                          }}
                        </v-chip>
                        <v-chip class="ma-2" color="#87CEEB" text-color="white">
                          {{ `Last Update: ${gatheringChannels.lastUpdate}` }}
                        </v-chip>
                        <v-chip class="ma-2" color="#87CEEB" text-color="white">
                          {{
                            `Gathered Data: ${showDataSize(
                              gatheringChannels.getteredData
                            )}`
                          }}
                        </v-chip>
                        <v-chip class="ma-2" color="#87CEEB" text-color="white">
                          {{
                            `AI Model: ${showAIModelByAiId(
                              gatheringChannels.aiModelsID
                            )}`
                          }}
                        </v-chip>

                        <v-chip class="ma-2" color="cyan" text-color="white">
                          {{
                            `Data Gathering Process: ${gatheringChannels.dataGatheringProcessingPercentage}%`
                          }}
                        </v-chip>

                        <v-chip class="ma-2" color="orange" text-color="white">
                          {{
                            `AI Learning Process: ${gatheringChannels.dataLearningProcessingPercentage}%`
                          }}
                        </v-chip>
                      </v-chip-group>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              text
              @click="
                () => {
                  dialogMonitoring.isOpen = false;
                  dialogMonitoring.company = null;
                }
              "
            >
              close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- View Asset Detail Dialog END -->
      <!-- Chat Dialog START -->
      <v-dialog v-model="chatModal.isOpen" max-width="90vw">
        <v-card>
          <v-card-text>
            <v-container>
              <v-row justify="space-around d-flex flex-column">
                <v-card
                  v-for="message in chatModal.messages"
                  :key="message.time"
                  flat
                >
                  <v-list-item
                    :key="message.time"
                    v-if="message.from != 'You'"
                    class=""
                  >
                    <v-list-item-avatar class="align-self-start mr-2">
                      <v-avatar size="40">
                        <v-img src="https://via.placeholder.com/50"></v-img>
                      </v-avatar>
                    </v-list-item-avatar>
                    <v-list-item-content class="received-message">
                      <v-card color="green darken-1" class="flex-none">
                        <v-card-text
                          class="white--text pa-2 d-flex flex-column"
                        >
                          <span class="text-caption">{{ message.from }} </span>
                          <span class="align-self-start text-subtitle-1">{{
                            message.message
                          }}</span>
                          <span
                            class="text-caption font-italic align-self-end"
                            >{{ message.time }}</span
                          >

                          <span
                            v-if="message.hasBTN"
                            style="width: 100%; margin-top: 20px"
                            class="align-self-start text-subtitle-1"
                            ><hr />
                            Did you satisfied out of this answer?</span
                          >
                        </v-card-text>
                        <v-card-actions v-if="message.hasBTN">
                          <v-spacer></v-spacer>
                          <v-btn
                            color="red"
                            @click="
                              () => {
                                chatModal.situation = -1;
                                chatWithAIBtnSubmitted();
                              }
                            "
                          >
                            No
                          </v-btn>
                          <v-btn
                            color="green"
                            @click="
                              () => {
                                chatModal.situation = 1;
                                chatWithAIBtnSubmitted();
                              }
                            "
                          >
                            Yes
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item v-else :key="message.time + '1'">
                    <v-list-item-content class="sent-message justify-end">
                      <v-card color="primary" class="flex-none">
                        <v-card-text
                          class="white--text pa-2 d-flex flex-column"
                        >
                          <span class="text-subtitle-1 chat-message">{{
                            message.message
                          }}</span>
                          <span
                            class="text-caption font-italic align-self-start"
                            >{{ message.time.toUTCString() }}</span
                          >
                        </v-card-text>
                      </v-card>
                    </v-list-item-content>
                    <v-list-item-avatar class="align-self-start ml-2">
                      <v-img src="https://via.placeholder.com/50"></v-img>
                    </v-list-item-avatar>
                  </v-list-item>
                </v-card>
              </v-row>
              <v-row>
                <v-text-field
                  v-model="chatModal.userCommand"
                  :disabled="chatModal.isCommandInputDisabled"
                  :messages="[
                    'write your command for your KPI and AI machine will have a conversation with you.',
                  ]"
                >
                  <v-btn
                    slot="append"
                    text
                    @click="chatWithAIBtnSubmitted"
                    :disabled="chatModal.isCommandInputDisabled"
                  >
                    <v-icon color="primary"> mdi-send </v-icon>
                  </v-btn>
                </v-text-field>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              text
              @click="
                () => {
                  chatModal.isOpen = false;
                  chatModal.situation = 0;
                  chatModal.userCommand = '';
                  chatModal.messages = [
                    {
                      time: new Date(),
                      from: 'robot',
                      message:
                        'Hello im your AI assistant, please describe me what kind of information do you want about this company',
                      hasBTN: false,
                    },
                  ];
                }
              "
            >
              close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- Chat Asset Detail Dialog END -->

      <!-- Add a review Dialog START -->
      <v-dialog v-model="dialogAddReview" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="px-3" style="font-size: 18px; font-weight: 500"
              >Please leave your review about the trained data</span
            >
          </v-card-title>

          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="12" md="12">
                  <v-textarea
                    outlined
                    label="type your review here"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" text @click="dialogAddReview = false">
              Cancel
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="
                () => {
                  dialogAddReview = false;
                  fireSnack('review submitted successfully');
                }
              "
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- Add a review Dialog END -->
      <!-- -------------------------Tracking Add new DIALOG START------------------------- -->
      <v-dialog v-model="addNewInsightCompanyDialog.isOpen">
        <v-card>
          <v-card-title class="text-h5">
            Select Your Favorite Companies to Place in Insights
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-text-field
                  label="Search your target company"
                  :messages="[
                    'this search input uses AI, feel free to talk with it and it will filter the companies based on your search command',
                  ]"
                  v-model="companyInsightSearchInput"
                ></v-text-field>
              </v-row>
              <v-row>
                <v-card
                  v-for="company in addNewInsightCompanyDialog.allCompanies"
                  class="mx-auto mt-5"
                  max-width="300"
                >
                  <v-card-text>
                    <p class="text-h4 text--primary">{{ company.name }}</p>
                    <div class="text--primary">
                      <v-chip-group active-class="primary--text" column>
                        <v-chip
                          >totalDataGathered:
                          {{ showDataSize(company.totalDataGathered) }}
                        </v-chip>
                        <v-chip
                          >totalDataLearned:
                          {{ showDataSize(company.totalDataLearned) }}
                        </v-chip>
                      </v-chip-group>
                    </div>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      v-if="!company.isSelectedAttr"
                      text
                      color="green"
                      @click="
                        () => {
                          company.isSelectedAttr = true;
                          addCompanyToInsightSystem();
                        }
                      "
                    >
                      Add to insights
                    </v-btn>
                    <v-btn
                      v-else
                      text
                      color="red"
                      @click="
                        () => {
                          company.isSelectedAttr = false;
                        }
                      "
                    >
                      De-Select this company
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="red darken-1"
              text
              @click="
                () => {
                  addNewInsightCompanyDialog.isOpen = false;
                }
              "
            >
              close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- -------------------------Add New DIALOG   END------------------------- -->
      <!-- -------------------------    DELETE DIALOG   Start------------------------- -->
      <v-dialog v-model="deleteInsightDialog.isOpen" max-width="600">
        <v-card>
          <v-card-title class="text-h5">
            are you sure to delete this Company from insight's list?
          </v-card-title>

          <v-card-actions>
            <v-btn
              color="red darken-1"
              text
              @click="deleteInsightCompany(deleteInsightDialog.companyId)"
            >
              Yes
            </v-btn>
            <v-spacer></v-spacer>

            <v-btn
              color="green darken-1"
              text
              @click="
                () => {
                  deleteInsightDialog.isOpen = false;
                  deleteInsightDialog.companyId = '';
                }
              "
            >
              No
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- -------------------------    DELETE DIALOG   END------------------------- -->
    </v-container>
  </div>
</template>

<script>
import api from "@/components/API";

export default {
  name: "Deal Insights page",
  data() {
    return {
      tab: null,
      companyInsightSearchInput: "",

      uploadFileDialog: {
        isOpen: false,
        selectedFileCat: "",
        uploadedFiles: "",
        allFilesCat: [
          "Legal due diligence",
          "Financial due diligence",
          "Operational due diligence",
          "IT due diligence",
        ],
      },
      insightTable: {
        headers: [
          {
            text: "",
            align: "start",
            value: "name",
          },
          { text: "P0", value: "p0" },
          { text: "P1", value: "p1" },
          { text: "P2", value: "p2" },
        ],
        items: [],
      },
      allInsightCompanies: [],
      summaryInsights: {
        count: 0,
        min: 1990,
        max: -10,
      },
      snackbar: {
        isOpen: false,
        text: "",
      },
      addNewInsightCompanyDialog: {
        isOpen: false,
        allCompanies: [],
      },
      allAiModels: [],
      deleteInsightDialog: {
        isOpen: false,
        companyId: "",
      },
      //===================
      expanded: [],
      dialogViewAssetDetail: {
        isEditPhase: false,
        isOpen: false,
        company: null,
        selectedPhase: null,
      },
      dialogMonitoring: {
        isOpen: false,
        company: null,
      },
      dialogAddReview: false,
      chatModal: {
        isOpen: false,
        messages: [
          {
            time: new Date(),
            from: "robot",
            message:
              "Hello im your AI assistant, please describe me what kind of information do you want about this company",
            hasBTN: false,
          },
        ],
        userCommand: "",
        situation: 0,
        isCommandInputDisabled: false,
      },
    };
  },
  methods: {
    checkIsCompanyAvailable(company) {
      return true;
    },
    getAllAvailableCompaniesInItem(companies, i) {
      return companies.filter((x) => x.assetPhase == i);
    },
    deleteFileFromCompany(fileIndex) {
      const index = this.allInsightCompanies.findIndex(
        (x) => x.companyId == this.dialogViewAssetDetail.company.companyId
      );
      this.allInsightCompanies[index].uploadedFiles.splice(fileIndex, 1);
      this.dialogViewAssetDetail.company.uploadedFiles.splice(fileIndex, 1);
      api.saveInsightCompanies(this.allInsightCompanies);
      this.fireSnack("file removed successfully");
    },
    saveUploadedFiles() {
      //allInsightCompanies
      if (!this.uploadFileDialog.selectedFileCat) {
        this.fireSnack(
          "please make sure that you selected the right file category"
        );
        return;
      }
      const index = this.allInsightCompanies.findIndex(
        (x) => x.companyId == this.dialogViewAssetDetail.company.companyId
      );
      for (let i = 0; i < this.uploadFileDialog.uploadedFiles.length; i++) {
        const file = this.uploadFileDialog.uploadedFiles[i];
        const fileObject = {
          name: file.name,
          title: this.uploadFileDialog.selectedFileCat,
          size: `${parseFloat(file.size / 1000000).toFixed(2)}Mb`,
        };
        this.allInsightCompanies[index].uploadedFiles.push(fileObject);
        this.dialogViewAssetDetail.company.uploadedFiles.push(fileObject);
      }
      api.saveInsightCompanies(this.allInsightCompanies);
      this.fireSnack("all files saved successfully");
      this.uploadFileDialog = {
        isOpen: false,
        selectedFileCat: "",
        uploadedFiles: "",
        allFilesCat: [
          "Legal due diligence",
          "Financial due diligence",
          "Operational due diligence",
          "IT due diligence",
        ],
      };
    },
    chatWithAIBtnSubmitted() {
      if (!this.chatModal.userCommand) {
        this.fireSnack("please write your command first.");
        return;
      }
      this.chatModal.messages.push({
        time: new Date(),
        from: "You",
        message: this.chatModal.userCommand,
        hasBTN: false,
      });
      this.chatModal.messages.push({
        time: new Date(),
        from: "robot",
        message:
          "Mauris luctus eleifend libero at finibus. Morbi et justo varius, convallis risus ut, rutrum nulla. Morbi suscipit facilisis egestas. Nunc sollicitudin accumsan massa et rutrum. Sed bibendum elit vel vulputate lacinia. Phasellus vel fringilla urna. Morbi rhoncus quis mauris quis sodales.",
        hasBTN: false,
      });

      this.chatModal.userCommand = "";
    },
    fillInsightTableItems() {
      const assetPhases = api.getAllAssetPhases();
      const totalAssets = {
        name: "Total Assets",
        p0: this.allInsightCompanies.filter((x) => x.assetPhase == 0).length,
        p1: this.allInsightCompanies.filter((x) => x.assetPhase == 1).length,
        p2: this.allInsightCompanies.filter((x) => x.assetPhase == 2).length,
      };
      const avgCompleteness = {
        name: "Avg Insight Completeness",
        p0: 0,
        p1: 0,
        p2: 0,
      };
      const avgPast = {
        name: "Avg Assets Completed in last 30 days",
        p0: assetPhases[0],
        p1: assetPhases[1],
        p2: assetPhases[2],
      };
      for (let index = 0; index < this.allInsightCompanies.length; index++) {
        const company = this.allInsightCompanies[index];
        if (company.assetPhase == 0)
          avgCompleteness.p0 += parseFloat(company.totalProcessingPercentage);
        if (company.assetPhase == 1)
          avgCompleteness.p1 += parseFloat(company.totalProcessingPercentage);
        if (company.assetPhase == 2)
          avgCompleteness.p2 += parseFloat(company.totalProcessingPercentage);
      }
      if (avgCompleteness.p0 != 0)
        avgCompleteness.p0 = `${parseFloat(
          avgCompleteness.p0 / totalAssets.p0
        ).toFixed(2)}%`;
      else avgCompleteness.p0 = "0%";
      if (avgCompleteness.p1 != 0)
        avgCompleteness.p1 = `${parseFloat(
          avgCompleteness.p1 / totalAssets.p1
        ).toFixed(2)}%`;
      else avgCompleteness.p1 = "0%";
      if (avgCompleteness.p2 != 0)
        avgCompleteness.p2 = `${parseFloat(
          avgCompleteness.p2 / totalAssets.p2
        ).toFixed(2)}%`;
      else avgCompleteness.p2 = "0%";
      this.insightTable.items = [totalAssets, avgCompleteness, avgPast];
    },
    showAIModelByAiId(aiId) {
      return this.allAiModels.filter((x) => x.id == aiId)[0].name;
    },
    fireSnack(text) {
      this.snackbar.text = text;
      this.snackbar.isOpen = true;
    },
    showDataSize(dataSize) {
      return api.dataSizeSerializer(dataSize);
    },
    deleteInsightCompany(companyId) {
      const index = this.allInsightCompanies.findIndex(
        (x) => x.companyId == companyId
      );
      this.allInsightCompanies.splice(index, 1);
      api.saveInsightCompanies(this.allInsightCompanies);
      this.fireSnack("Company removed from insight system!");
      this.init();
    },
    addCompanyToInsightSystem() {
      this.addNewInsightCompanyDialog.allCompanies.map((company) => {
        if (company.isSelectedAttr) {
          this.allInsightCompanies.push(company);
        }
      });
      api.saveInsightCompanies(this.allInsightCompanies);
      this.fireSnack("Companies added successfully!");
      this.init();
    },
    changePhaseOfCompany() {
      //dialogViewAssetDetail.company
      if (!this.dialogViewAssetDetail.selectedPhase) return;
      const newVal = this.dialogViewAssetDetail.selectedPhase.value;
      console.log(newVal);
      const index = this.allInsightCompanies.findIndex(
        (x) => x.companyId == this.dialogViewAssetDetail.company.companyId
      );
      this.allInsightCompanies[index].assetPhase = newVal;
      this.allInsightCompanies[index].completeness = 0;
      api.saveInsightCompanies(this.allInsightCompanies);

      this.fireSnack(
        `Company insight phase changed to ${
          newVal == 0 ? "Zero" : newVal == 1 ? "One" : "Two"
        }`
      );
    },
    init() {
      this.deleteInsightDialog = {
        isOpen: false,
        companyId: "",
      };
      this.allAiModels = api.getAiRobots();
      this.addNewInsightCompanyDialog.isOpen = false;
      let allAiRobots = api.getAiRobots();
      this.addNewInsightCompanyDialog.allCompanies = api
        .getStandardCompanyList(api.getCompanies(), allAiRobots)
        .filter(
          (z) =>
            this.allInsightCompanies.findIndex(
              (k) => k.companyId == z.companyId
            ) == -1
        );

      this.allInsightCompanies = api.getAllInsightCompanies();
      this.summaryInsights.count = this.allInsightCompanies.length;
      console.log(this.allInsightCompanies);
      this.allInsightCompanies.map((company) => {
        console.log(company.completeness);
        this.summaryInsights.min =
          parseFloat(company.completeness) < this.summaryInsights.min
            ? parseFloat(company.completeness)
            : this.summaryInsights.min;
        this.summaryInsights.max =
          parseFloat(company.completeness) > this.summaryInsights.max
            ? parseFloat(company.completeness)
            : this.summaryInsights.max;
      });
      this.fillInsightTableItems();
    },
  },
  head() {
    return {
      title: "Insights",
    };
  },
  mounted() {
    if (!api.getAuth()) window.location.href = "/login";
    this.init();
  },
  watch: {
    companyInsightSearchInput(newVal) {
      if (newVal) {
        this.addNewInsightCompanyDialog.allCompanies =
          this.addNewInsightCompanyDialog.allCompanies.filter((x) =>
            x.name.toLowerCase().includes(newVal)
          );
      } else {
        this.addNewInsightCompanyDialog.allCompanies = api
          .getStandardCompanyList(api.getCompanies(), api.getAiRobots())
          .filter(
            (z) =>
              this.allTrackingSelectedCompanies.findIndex(
                (k) => k.companyId == z.companyId
              ) == -1
          );
      }
    },
  },
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
.cart-insights {
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
</style>

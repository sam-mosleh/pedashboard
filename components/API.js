export default {
  deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
  },
  getCompanies() {
    return [
      {
        companyId: "apple-lwkr234h34u8743754q3fg1",
        name: "Apple",
        score: "94",
        hqLocation: "Cupertino, USA",
        revenueSize: "$300M",
        industry: "Technology",
        insight: {
          aiDescription:
            "Apple, known for its innovative products like the iPhone, iPad, and Mac, has played a pivotal role in shaping the tech industry. Its design-driven approach and ecosystem of devices and services have garnered a massive global following.",
          standardDueDiligence: {
            commercial:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, nunc nec euismod iaculis, magna magna mollis dui, in euismod ipsum libero ornare mauris. Aliquam vestibulum est at ipsum eleifend, nec auctor ante sagittis. Ut ultricies consectetur ipsum, et dapibus velit. Phasellus sapien risus, venenatis eget leo ut, aliquet tempus lectus. Integer luctus placerat porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin nec purus lobortis neque ornare cursus vitae bibendum nisi. Vestibulum commodo, purus bibendum volutpat sollicitudin, mi eros placerat odio, vel molestie augue tellus id tellus. Mauris vel semper arcu, id imperdiet libero. Phasellus euismod arcu nec ex consequat, ultrices aliquet purus gravida. Donec porta vestibulum euismod. In eu tellus facilisis, iaculis diam ultricies, malesuada tellus. Nulla faucibus mi tortor, pharetra auctor nulla tempor sit amet. Maecenas mattis ut erat eget rhoncus. Mauris ante felis, semper quis tellus at, convallis rhoncus lorem. ",
            financial:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
            legal:
              "Praesent tincidunt ipsum dui, et posuere dolor pretium finibus. Vivamus in tristique sapien, sed dictum sem. Ut lacinia ullamcorper elit volutpat faucibus. Duis at metus quis magna tempor porta quis quis quam. Cras finibus facilisis est, sit amet eleifend libero vulputate ac. Pellentesque sagittis tempor dui sed placerat. Pellentesque viverra molestie fringilla. Donec iaculis dictum eleifend. Donec nec est fermentum, posuere justo eget, suscipit nibh. ",
            it: "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
          },
          alternativeInsights: {
            keyFeaters:
              "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
            keyRisks:
              "Nullam in tellus aliquam, semper risus ac, pharetra est. Sed blandit elit varius ipsum porttitor molestie. Curabitur sollicitudin luctus mauris, ac commodo dolor molestie at. Curabitur rutrum massa nisi, eget auctor turpis semper vitae. Nullam in justo non nisl viverra auctor. Nam posuere consequat ante at vestibulum. In hac habitasse platea dictumst. Mauris tristique dui eget est pharetra mollis. Proin sodales ipsum quis vestibulum tincidunt. Nunc sem eros, vestibulum vitae interdum nec, bibendum vel mauris. ",
            keyUpsides:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
          },
        },
        sellChance: "0.3",
        recommendation: {
          gatheringChannels: [
            {
              id: "twitter_h43u3049857",
              name: "Twitter (X)",
              imgSRC: "",
              lastUpdate: "2023-08-31T02:56:43.064Z",
              getteredData: 728,
              aiModelsID: "falcon_3424fcw3f",
              totalDataToGather: 843,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 0,
              aiLearningDataSizePerMinutes: 2,
            },
            {
              id: "news_h43u3049857",
              name: "Google",
              imgSRC: "",
              lastUpdate: "2023-08-29",
              getteredData: 2500,
              aiModelsID: "gpt4_5_3424fcw3f",
              totalDataToGather: 2500,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 1867,
              aiLearningDataSizePerMinutes: 2,
            },
          ],
        },
        objectRefrence: "company",
      },
      {
        companyId: "Coca_lwkr234h34u8743754q3fg2",
        name: "The Coca-Cola Company",
        score: "76",
        hqLocation: "Atlanta, USA",
        revenueSize: "$35M",
        industry: "Beverages",
        insight: {
          aiDescription:
            "Apple, known for its innovative products like the iPhone, iPad, and Mac, has played a pivotal role in shaping the tech industry. Its design-driven approach and ecosystem of devices and services have garnered a massive global following.",
          standardDueDiligence: {
            commercial:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, nunc nec euismod iaculis, magna magna mollis dui, in euismod ipsum libero ornare mauris. Aliquam vestibulum est at ipsum eleifend, nec auctor ante sagittis. Ut ultricies consectetur ipsum, et dapibus velit. Phasellus sapien risus, venenatis eget leo ut, aliquet tempus lectus. Integer luctus placerat porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin nec purus lobortis neque ornare cursus vitae bibendum nisi. Vestibulum commodo, purus bibendum volutpat sollicitudin, mi eros placerat odio, vel molestie augue tellus id tellus. Mauris vel semper arcu, id imperdiet libero. Phasellus euismod arcu nec ex consequat, ultrices aliquet purus gravida. Donec porta vestibulum euismod. In eu tellus facilisis, iaculis diam ultricies, malesuada tellus. Nulla faucibus mi tortor, pharetra auctor nulla tempor sit amet. Maecenas mattis ut erat eget rhoncus. Mauris ante felis, semper quis tellus at, convallis rhoncus lorem. ",
            financial:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
            legal:
              "Praesent tincidunt ipsum dui, et posuere dolor pretium finibus. Vivamus in tristique sapien, sed dictum sem. Ut lacinia ullamcorper elit volutpat faucibus. Duis at metus quis magna tempor porta quis quis quam. Cras finibus facilisis est, sit amet eleifend libero vulputate ac. Pellentesque sagittis tempor dui sed placerat. Pellentesque viverra molestie fringilla. Donec iaculis dictum eleifend. Donec nec est fermentum, posuere justo eget, suscipit nibh. ",
            it: "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
          },
          alternativeInsights: {
            keyFeaters:
              "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
            keyRisks:
              "Nullam in tellus aliquam, semper risus ac, pharetra est. Sed blandit elit varius ipsum porttitor molestie. Curabitur sollicitudin luctus mauris, ac commodo dolor molestie at. Curabitur rutrum massa nisi, eget auctor turpis semper vitae. Nullam in justo non nisl viverra auctor. Nam posuere consequat ante at vestibulum. In hac habitasse platea dictumst. Mauris tristique dui eget est pharetra mollis. Proin sodales ipsum quis vestibulum tincidunt. Nunc sem eros, vestibulum vitae interdum nec, bibendum vel mauris. ",
            keyUpsides:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
          },
        },
        sellChance: "0.3",
        recommendation: {
          gatheringChannels: [
            {
              id: "twitter_h43u3049857",
              name: "Twitter (X)",
              imgSRC: "",
              lastUpdate: "2023-08-31T02:56:43.064Z",
              getteredData: 435,
              aiModelsID: "falcon_3424fcw3f",
              totalDataToGather: 861,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 0,
              aiLearningDataSizePerMinutes: 2,
            },
            {
              id: "news_h43u3049857",
              name: "Google",
              imgSRC: "",
              lastUpdate: "2023-08-29",
              getteredData: 14500,
              aiModelsID: "gpt4_5_3424fcw3f",
              totalDataToGather: 14500,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 6955,
              aiLearningDataSizePerMinutes: 2,
            },
          ],
        },
        objectRefrence: "company",
      },
      {
        companyId: "Johnson_lwkr234h34u8743754q3fg2",
        name: "Johnson & Johnson",
        score: "88",
        hqLocation: "New Brunswick, USA",
        revenueSize: "$180M",
        industry: "Healthcare",
        insight: {
          aiDescription:
            "Apple, known for its innovative products like the iPhone, iPad, and Mac, has played a pivotal role in shaping the tech industry. Its design-driven approach and ecosystem of devices and services have garnered a massive global following.",
          standardDueDiligence: {
            commercial:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, nunc nec euismod iaculis, magna magna mollis dui, in euismod ipsum libero ornare mauris. Aliquam vestibulum est at ipsum eleifend, nec auctor ante sagittis. Ut ultricies consectetur ipsum, et dapibus velit. Phasellus sapien risus, venenatis eget leo ut, aliquet tempus lectus. Integer luctus placerat porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin nec purus lobortis neque ornare cursus vitae bibendum nisi. Vestibulum commodo, purus bibendum volutpat sollicitudin, mi eros placerat odio, vel molestie augue tellus id tellus. Mauris vel semper arcu, id imperdiet libero. Phasellus euismod arcu nec ex consequat, ultrices aliquet purus gravida. Donec porta vestibulum euismod. In eu tellus facilisis, iaculis diam ultricies, malesuada tellus. Nulla faucibus mi tortor, pharetra auctor nulla tempor sit amet. Maecenas mattis ut erat eget rhoncus. Mauris ante felis, semper quis tellus at, convallis rhoncus lorem. ",
            financial:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
            legal:
              "Praesent tincidunt ipsum dui, et posuere dolor pretium finibus. Vivamus in tristique sapien, sed dictum sem. Ut lacinia ullamcorper elit volutpat faucibus. Duis at metus quis magna tempor porta quis quis quam. Cras finibus facilisis est, sit amet eleifend libero vulputate ac. Pellentesque sagittis tempor dui sed placerat. Pellentesque viverra molestie fringilla. Donec iaculis dictum eleifend. Donec nec est fermentum, posuere justo eget, suscipit nibh. ",
            it: "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
          },
          alternativeInsights: {
            keyFeaters:
              "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
            keyRisks:
              "Nullam in tellus aliquam, semper risus ac, pharetra est. Sed blandit elit varius ipsum porttitor molestie. Curabitur sollicitudin luctus mauris, ac commodo dolor molestie at. Curabitur rutrum massa nisi, eget auctor turpis semper vitae. Nullam in justo non nisl viverra auctor. Nam posuere consequat ante at vestibulum. In hac habitasse platea dictumst. Mauris tristique dui eget est pharetra mollis. Proin sodales ipsum quis vestibulum tincidunt. Nunc sem eros, vestibulum vitae interdum nec, bibendum vel mauris. ",
            keyUpsides:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
          },
        },
        sellChance: "0.3",
        recommendation: {
          gatheringChannels: [
            {
              id: "twitter_h43u3049857",
              name: "Twitter (X)",
              imgSRC: "",
              lastUpdate: "2023-08-31T02:56:43.064Z",
              getteredData: 540,
              aiModelsID: "falcon_3424fcw3f",
              totalDataToGather: 850,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 0,
              aiLearningDataSizePerMinutes: 2,
            },
            {
              id: "news_h43u3049857",
              name: "Google",
              imgSRC: "",
              lastUpdate: "2023-08-29",
              getteredData: 8500,
              aiModelsID: "gpt4_5_3424fcw3f",
              totalDataToGather: 8500,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 3686,
              aiLearningDataSizePerMinutes: 2,
            },
          ],
        },
        objectRefrence: "company",
      },
      {
        companyId: "Tesla_lwkr234h34u8743754q3fg2",
        name: "Tesla",
        score: "95",
        hqLocation: "Palo Alto, USA",
        revenueSize: "$20M",
        industry: "Electric Car",
        insight: {
          aiDescription:
            "Apple, known for its innovative products like the iPhone, iPad, and Mac, has played a pivotal role in shaping the tech industry. Its design-driven approach and ecosystem of devices and services have garnered a massive global following.",
          standardDueDiligence: {
            commercial:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, nunc nec euismod iaculis, magna magna mollis dui, in euismod ipsum libero ornare mauris. Aliquam vestibulum est at ipsum eleifend, nec auctor ante sagittis. Ut ultricies consectetur ipsum, et dapibus velit. Phasellus sapien risus, venenatis eget leo ut, aliquet tempus lectus. Integer luctus placerat porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin nec purus lobortis neque ornare cursus vitae bibendum nisi. Vestibulum commodo, purus bibendum volutpat sollicitudin, mi eros placerat odio, vel molestie augue tellus id tellus. Mauris vel semper arcu, id imperdiet libero. Phasellus euismod arcu nec ex consequat, ultrices aliquet purus gravida. Donec porta vestibulum euismod. In eu tellus facilisis, iaculis diam ultricies, malesuada tellus. Nulla faucibus mi tortor, pharetra auctor nulla tempor sit amet. Maecenas mattis ut erat eget rhoncus. Mauris ante felis, semper quis tellus at, convallis rhoncus lorem. ",
            financial:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
            legal:
              "Praesent tincidunt ipsum dui, et posuere dolor pretium finibus. Vivamus in tristique sapien, sed dictum sem. Ut lacinia ullamcorper elit volutpat faucibus. Duis at metus quis magna tempor porta quis quis quam. Cras finibus facilisis est, sit amet eleifend libero vulputate ac. Pellentesque sagittis tempor dui sed placerat. Pellentesque viverra molestie fringilla. Donec iaculis dictum eleifend. Donec nec est fermentum, posuere justo eget, suscipit nibh. ",
            it: "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
          },
          alternativeInsights: {
            keyFeaters:
              "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
            keyRisks:
              "Nullam in tellus aliquam, semper risus ac, pharetra est. Sed blandit elit varius ipsum porttitor molestie. Curabitur sollicitudin luctus mauris, ac commodo dolor molestie at. Curabitur rutrum massa nisi, eget auctor turpis semper vitae. Nullam in justo non nisl viverra auctor. Nam posuere consequat ante at vestibulum. In hac habitasse platea dictumst. Mauris tristique dui eget est pharetra mollis. Proin sodales ipsum quis vestibulum tincidunt. Nunc sem eros, vestibulum vitae interdum nec, bibendum vel mauris. ",
            keyUpsides:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
          },
        },
        sellChance: "0.3",
        recommendation: {
          gatheringChannels: [
            {
              id: "twitter_h43u3049857",
              name: "Twitter (X)",
              imgSRC: "",
              lastUpdate: "2023-08-31T02:56:43.064Z",
              getteredData: 489,
              aiModelsID: "falcon_3424fcw3f",
              totalDataToGather: 883,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 0,
              aiLearningDataSizePerMinutes: 2,
            },
            {
              id: "news_h43u3049857",
              name: "Google",
              imgSRC: "",
              lastUpdate: "2023-08-29",
              getteredData: 12500,
              aiModelsID: "gpt4_5_3424fcw3f",
              totalDataToGather: 12500,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 4822,
              aiLearningDataSizePerMinutes: 2,
            },
          ],
        },
        objectRefrence: "company",
      },
      {
        companyId: "BMW_lwkr234h34u8743754q3fg2",
        name: "BMW",
        score: "88",
        hqLocation: "Munich, Germany",
        revenueSize: "$16M",
        industry: "Car",
        insight: {
          aiDescription:
            "Apple, known for its innovative products like the iPhone, iPad, and Mac, has played a pivotal role in shaping the tech industry. Its design-driven approach and ecosystem of devices and services have garnered a massive global following.",
          standardDueDiligence: {
            commercial:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, nunc nec euismod iaculis, magna magna mollis dui, in euismod ipsum libero ornare mauris. Aliquam vestibulum est at ipsum eleifend, nec auctor ante sagittis. Ut ultricies consectetur ipsum, et dapibus velit. Phasellus sapien risus, venenatis eget leo ut, aliquet tempus lectus. Integer luctus placerat porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin nec purus lobortis neque ornare cursus vitae bibendum nisi. Vestibulum commodo, purus bibendum volutpat sollicitudin, mi eros placerat odio, vel molestie augue tellus id tellus. Mauris vel semper arcu, id imperdiet libero. Phasellus euismod arcu nec ex consequat, ultrices aliquet purus gravida. Donec porta vestibulum euismod. In eu tellus facilisis, iaculis diam ultricies, malesuada tellus. Nulla faucibus mi tortor, pharetra auctor nulla tempor sit amet. Maecenas mattis ut erat eget rhoncus. Mauris ante felis, semper quis tellus at, convallis rhoncus lorem. ",
            financial:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
            legal:
              "Praesent tincidunt ipsum dui, et posuere dolor pretium finibus. Vivamus in tristique sapien, sed dictum sem. Ut lacinia ullamcorper elit volutpat faucibus. Duis at metus quis magna tempor porta quis quis quam. Cras finibus facilisis est, sit amet eleifend libero vulputate ac. Pellentesque sagittis tempor dui sed placerat. Pellentesque viverra molestie fringilla. Donec iaculis dictum eleifend. Donec nec est fermentum, posuere justo eget, suscipit nibh. ",
            it: "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
          },
          alternativeInsights: {
            keyFeaters:
              "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
            keyRisks:
              "Nullam in tellus aliquam, semper risus ac, pharetra est. Sed blandit elit varius ipsum porttitor molestie. Curabitur sollicitudin luctus mauris, ac commodo dolor molestie at. Curabitur rutrum massa nisi, eget auctor turpis semper vitae. Nullam in justo non nisl viverra auctor. Nam posuere consequat ante at vestibulum. In hac habitasse platea dictumst. Mauris tristique dui eget est pharetra mollis. Proin sodales ipsum quis vestibulum tincidunt. Nunc sem eros, vestibulum vitae interdum nec, bibendum vel mauris. ",
            keyUpsides:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
          },
        },
        sellChance: "0.3",
        recommendation: {
          gatheringChannels: [
            {
              id: "twitter_h43u3049857",
              name: "Twitter (X)",
              imgSRC: "",
              lastUpdate: "2023-08-31T02:56:43.064Z",
              getteredData: 5,
              aiModelsID: "falcon_3424fcw3f",
              totalDataToGather: 635,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 0,
              aiLearningDataSizePerMinutes: 2,
            },
            {
              id: "news_h43u3049857",
              name: "Google",
              imgSRC: "",
              lastUpdate: "2023-08-29",
              getteredData: 11500,
              aiModelsID: "gpt4_5_3424fcw3f",
              totalDataToGather: 11500,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 3782,
              aiLearningDataSizePerMinutes: 2,
            },
          ],
        },
        objectRefrence: "company",
      },
      {
        companyId: "Volkswagen_lwkr234h34u8743754q3fg2",
        name: "Volkswagen",
        score: "80",
        hqLocation: "Wolfsburg, Germany",
        revenueSize: "$14M",
        industry: "Car",
        insight: {
          aiDescription:
            "Apple, known for its innovative products like the iPhone, iPad, and Mac, has played a pivotal role in shaping the tech industry. Its design-driven approach and ecosystem of devices and services have garnered a massive global following.",
          standardDueDiligence: {
            commercial:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, nunc nec euismod iaculis, magna magna mollis dui, in euismod ipsum libero ornare mauris. Aliquam vestibulum est at ipsum eleifend, nec auctor ante sagittis. Ut ultricies consectetur ipsum, et dapibus velit. Phasellus sapien risus, venenatis eget leo ut, aliquet tempus lectus. Integer luctus placerat porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin nec purus lobortis neque ornare cursus vitae bibendum nisi. Vestibulum commodo, purus bibendum volutpat sollicitudin, mi eros placerat odio, vel molestie augue tellus id tellus. Mauris vel semper arcu, id imperdiet libero. Phasellus euismod arcu nec ex consequat, ultrices aliquet purus gravida. Donec porta vestibulum euismod. In eu tellus facilisis, iaculis diam ultricies, malesuada tellus. Nulla faucibus mi tortor, pharetra auctor nulla tempor sit amet. Maecenas mattis ut erat eget rhoncus. Mauris ante felis, semper quis tellus at, convallis rhoncus lorem. ",
            financial:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
            legal:
              "Praesent tincidunt ipsum dui, et posuere dolor pretium finibus. Vivamus in tristique sapien, sed dictum sem. Ut lacinia ullamcorper elit volutpat faucibus. Duis at metus quis magna tempor porta quis quis quam. Cras finibus facilisis est, sit amet eleifend libero vulputate ac. Pellentesque sagittis tempor dui sed placerat. Pellentesque viverra molestie fringilla. Donec iaculis dictum eleifend. Donec nec est fermentum, posuere justo eget, suscipit nibh. ",
            it: "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
          },
          alternativeInsights: {
            keyFeaters:
              "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
            keyRisks:
              "Nullam in tellus aliquam, semper risus ac, pharetra est. Sed blandit elit varius ipsum porttitor molestie. Curabitur sollicitudin luctus mauris, ac commodo dolor molestie at. Curabitur rutrum massa nisi, eget auctor turpis semper vitae. Nullam in justo non nisl viverra auctor. Nam posuere consequat ante at vestibulum. In hac habitasse platea dictumst. Mauris tristique dui eget est pharetra mollis. Proin sodales ipsum quis vestibulum tincidunt. Nunc sem eros, vestibulum vitae interdum nec, bibendum vel mauris. ",
            keyUpsides:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
          },
        },
        sellChance: "0.3",
        recommendation: {
          gatheringChannels: [
            {
              id: "twitter_h43u3049857",
              name: "Twitter (X)",
              imgSRC: "",
              lastUpdate: "2023-08-31T02:56:43.064Z",
              getteredData: 476,
              aiModelsID: "falcon_3424fcw3f",
              totalDataToGather: 760,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 0,
              aiLearningDataSizePerMinutes: 2,
            },
            {
              id: "news_h43u3049857",
              name: "Google",
              imgSRC: "",
              lastUpdate: "2023-08-29",
              getteredData: 14500,
              aiModelsID: "gpt4_5_3424fcw3f",
              totalDataToGather: 14500,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 8101,
              aiLearningDataSizePerMinutes: 2,
            },
          ],
        },
        objectRefrence: "company",
      },
      {
        companyId: "Hyundai_lwkr234h34u8743754q3fg2",
        name: "Hyundai",
        score: "79",
        hqLocation: "Seoul, South Korea",
        revenueSize: "$9M",
        industry: "Car",
        insight: {
          aiDescription:
            "Apple, known for its innovative products like the iPhone, iPad, and Mac, has played a pivotal role in shaping the tech industry. Its design-driven approach and ecosystem of devices and services have garnered a massive global following.",
          standardDueDiligence: {
            commercial:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, nunc nec euismod iaculis, magna magna mollis dui, in euismod ipsum libero ornare mauris. Aliquam vestibulum est at ipsum eleifend, nec auctor ante sagittis. Ut ultricies consectetur ipsum, et dapibus velit. Phasellus sapien risus, venenatis eget leo ut, aliquet tempus lectus. Integer luctus placerat porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin nec purus lobortis neque ornare cursus vitae bibendum nisi. Vestibulum commodo, purus bibendum volutpat sollicitudin, mi eros placerat odio, vel molestie augue tellus id tellus. Mauris vel semper arcu, id imperdiet libero. Phasellus euismod arcu nec ex consequat, ultrices aliquet purus gravida. Donec porta vestibulum euismod. In eu tellus facilisis, iaculis diam ultricies, malesuada tellus. Nulla faucibus mi tortor, pharetra auctor nulla tempor sit amet. Maecenas mattis ut erat eget rhoncus. Mauris ante felis, semper quis tellus at, convallis rhoncus lorem. ",
            financial:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
            legal:
              "Praesent tincidunt ipsum dui, et posuere dolor pretium finibus. Vivamus in tristique sapien, sed dictum sem. Ut lacinia ullamcorper elit volutpat faucibus. Duis at metus quis magna tempor porta quis quis quam. Cras finibus facilisis est, sit amet eleifend libero vulputate ac. Pellentesque sagittis tempor dui sed placerat. Pellentesque viverra molestie fringilla. Donec iaculis dictum eleifend. Donec nec est fermentum, posuere justo eget, suscipit nibh. ",
            it: "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
          },
          alternativeInsights: {
            keyFeaters:
              "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
            keyRisks:
              "Nullam in tellus aliquam, semper risus ac, pharetra est. Sed blandit elit varius ipsum porttitor molestie. Curabitur sollicitudin luctus mauris, ac commodo dolor molestie at. Curabitur rutrum massa nisi, eget auctor turpis semper vitae. Nullam in justo non nisl viverra auctor. Nam posuere consequat ante at vestibulum. In hac habitasse platea dictumst. Mauris tristique dui eget est pharetra mollis. Proin sodales ipsum quis vestibulum tincidunt. Nunc sem eros, vestibulum vitae interdum nec, bibendum vel mauris. ",
            keyUpsides:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
          },
        },
        sellChance: "0.3",
        recommendation: {
          gatheringChannels: [
            {
              id: "twitter_h43u3049857",
              name: "Twitter (X)",
              imgSRC: "",
              lastUpdate: "2023-08-31T02:56:43.064Z",
              getteredData: 579,
              aiModelsID: "falcon_3424fcw3f",
              totalDataToGather: 622,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 0,
              aiLearningDataSizePerMinutes: 2,
            },
            {
              id: "news_h43u3049857",
              name: "Google",
              imgSRC: "",
              lastUpdate: "2023-08-29",
              getteredData: 10500,
              aiModelsID: "gpt4_5_3424fcw3f",
              totalDataToGather: 10500,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 3504,
              aiLearningDataSizePerMinutes: 2,
            },
          ],
        },
        objectRefrence: "company",
      },
      {
        companyId: "Microsoft_lwkr234h34u8743754q3fg2",
        name: "Microsoft",
        score: "90",
        hqLocation: "Redmond, USA",
        revenueSize: "$270M",
        industry: "Technology",
        insight: {
          aiDescription:
            "Apple, known for its innovative products like the iPhone, iPad, and Mac, has played a pivotal role in shaping the tech industry. Its design-driven approach and ecosystem of devices and services have garnered a massive global following.",
          standardDueDiligence: {
            commercial:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, nunc nec euismod iaculis, magna magna mollis dui, in euismod ipsum libero ornare mauris. Aliquam vestibulum est at ipsum eleifend, nec auctor ante sagittis. Ut ultricies consectetur ipsum, et dapibus velit. Phasellus sapien risus, venenatis eget leo ut, aliquet tempus lectus. Integer luctus placerat porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin nec purus lobortis neque ornare cursus vitae bibendum nisi. Vestibulum commodo, purus bibendum volutpat sollicitudin, mi eros placerat odio, vel molestie augue tellus id tellus. Mauris vel semper arcu, id imperdiet libero. Phasellus euismod arcu nec ex consequat, ultrices aliquet purus gravida. Donec porta vestibulum euismod. In eu tellus facilisis, iaculis diam ultricies, malesuada tellus. Nulla faucibus mi tortor, pharetra auctor nulla tempor sit amet. Maecenas mattis ut erat eget rhoncus. Mauris ante felis, semper quis tellus at, convallis rhoncus lorem. ",
            financial:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
            legal:
              "Praesent tincidunt ipsum dui, et posuere dolor pretium finibus. Vivamus in tristique sapien, sed dictum sem. Ut lacinia ullamcorper elit volutpat faucibus. Duis at metus quis magna tempor porta quis quis quam. Cras finibus facilisis est, sit amet eleifend libero vulputate ac. Pellentesque sagittis tempor dui sed placerat. Pellentesque viverra molestie fringilla. Donec iaculis dictum eleifend. Donec nec est fermentum, posuere justo eget, suscipit nibh. ",
            it: "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
          },
          alternativeInsights: {
            keyFeaters:
              "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
            keyRisks:
              "Nullam in tellus aliquam, semper risus ac, pharetra est. Sed blandit elit varius ipsum porttitor molestie. Curabitur sollicitudin luctus mauris, ac commodo dolor molestie at. Curabitur rutrum massa nisi, eget auctor turpis semper vitae. Nullam in justo non nisl viverra auctor. Nam posuere consequat ante at vestibulum. In hac habitasse platea dictumst. Mauris tristique dui eget est pharetra mollis. Proin sodales ipsum quis vestibulum tincidunt. Nunc sem eros, vestibulum vitae interdum nec, bibendum vel mauris. ",
            keyUpsides:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
          },
        },
        sellChance: "0.3",
        recommendation: {
          gatheringChannels: [
            {
              id: "twitter_h43u3049857",
              name: "Twitter (X)",
              imgSRC: "",
              lastUpdate: "2023-08-31T02:56:43.064Z",
              getteredData: 204,
              aiModelsID: "falcon_3424fcw3f",
              totalDataToGather: 501,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 0,
              aiLearningDataSizePerMinutes: 2,
            },
            {
              id: "news_h43u3049857",
              name: "Google",
              imgSRC: "",
              lastUpdate: "2023-08-29",
              getteredData: 13500,
              aiModelsID: "gpt4_5_3424fcw3f",
              totalDataToGather: 13500,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 13460,
              aiLearningDataSizePerMinutes: 2,
            },
          ],
        },
        objectRefrence: "company",
      },
      {
        companyId: "Procter_lwkr234h34u8743754q3fg2",
        name: "Procter & Gamble",
        score: "82",
        hqLocation: "Cincinnati, USA",
        revenueSize: "$150M",
        industry: "Consumer Goods",
        insight: {
          aiDescription:
            "Apple, known for its innovative products like the iPhone, iPad, and Mac, has played a pivotal role in shaping the tech industry. Its design-driven approach and ecosystem of devices and services have garnered a massive global following.",
          standardDueDiligence: {
            commercial:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, nunc nec euismod iaculis, magna magna mollis dui, in euismod ipsum libero ornare mauris. Aliquam vestibulum est at ipsum eleifend, nec auctor ante sagittis. Ut ultricies consectetur ipsum, et dapibus velit. Phasellus sapien risus, venenatis eget leo ut, aliquet tempus lectus. Integer luctus placerat porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin nec purus lobortis neque ornare cursus vitae bibendum nisi. Vestibulum commodo, purus bibendum volutpat sollicitudin, mi eros placerat odio, vel molestie augue tellus id tellus. Mauris vel semper arcu, id imperdiet libero. Phasellus euismod arcu nec ex consequat, ultrices aliquet purus gravida. Donec porta vestibulum euismod. In eu tellus facilisis, iaculis diam ultricies, malesuada tellus. Nulla faucibus mi tortor, pharetra auctor nulla tempor sit amet. Maecenas mattis ut erat eget rhoncus. Mauris ante felis, semper quis tellus at, convallis rhoncus lorem. ",
            financial:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
            legal:
              "Praesent tincidunt ipsum dui, et posuere dolor pretium finibus. Vivamus in tristique sapien, sed dictum sem. Ut lacinia ullamcorper elit volutpat faucibus. Duis at metus quis magna tempor porta quis quis quam. Cras finibus facilisis est, sit amet eleifend libero vulputate ac. Pellentesque sagittis tempor dui sed placerat. Pellentesque viverra molestie fringilla. Donec iaculis dictum eleifend. Donec nec est fermentum, posuere justo eget, suscipit nibh. ",
            it: "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
          },
          alternativeInsights: {
            keyFeaters:
              "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
            keyRisks:
              "Nullam in tellus aliquam, semper risus ac, pharetra est. Sed blandit elit varius ipsum porttitor molestie. Curabitur sollicitudin luctus mauris, ac commodo dolor molestie at. Curabitur rutrum massa nisi, eget auctor turpis semper vitae. Nullam in justo non nisl viverra auctor. Nam posuere consequat ante at vestibulum. In hac habitasse platea dictumst. Mauris tristique dui eget est pharetra mollis. Proin sodales ipsum quis vestibulum tincidunt. Nunc sem eros, vestibulum vitae interdum nec, bibendum vel mauris. ",
            keyUpsides:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
          },
        },
        sellChance: "0.3",
        recommendation: {
          gatheringChannels: [
            {
              id: "twitter_h43u3049857",
              name: "Twitter (X)",
              imgSRC: "",
              lastUpdate: "2023-08-31T02:56:43.064Z",
              getteredData: 174,
              aiModelsID: "falcon_3424fcw3f",
              totalDataToGather: 605,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 0,
              aiLearningDataSizePerMinutes: 2,
            },
            {
              id: "news_h43u3049857",
              name: "Google",
              imgSRC: "",
              lastUpdate: "2023-08-29",
              getteredData: 14500,
              aiModelsID: "gpt4_5_3424fcw3f",
              totalDataToGather: 14500,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 1642,
              aiLearningDataSizePerMinutes: 2,
            },
          ],
        },
        objectRefrence: "company",
      },
      {
        companyId: "Nissan_lwkr234h34u8743754q3fg2",
        name: "Nissan",
        score: "72",
        hqLocation: "Yokohama, Japan",
        revenueSize: "$11M",
        industry: "Car",
        insight: {
          aiDescription:
            "Apple, known for its innovative products like the iPhone, iPad, and Mac, has played a pivotal role in shaping the tech industry. Its design-driven approach and ecosystem of devices and services have garnered a massive global following.",
          standardDueDiligence: {
            commercial:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, nunc nec euismod iaculis, magna magna mollis dui, in euismod ipsum libero ornare mauris. Aliquam vestibulum est at ipsum eleifend, nec auctor ante sagittis. Ut ultricies consectetur ipsum, et dapibus velit. Phasellus sapien risus, venenatis eget leo ut, aliquet tempus lectus. Integer luctus placerat porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin nec purus lobortis neque ornare cursus vitae bibendum nisi. Vestibulum commodo, purus bibendum volutpat sollicitudin, mi eros placerat odio, vel molestie augue tellus id tellus. Mauris vel semper arcu, id imperdiet libero. Phasellus euismod arcu nec ex consequat, ultrices aliquet purus gravida. Donec porta vestibulum euismod. In eu tellus facilisis, iaculis diam ultricies, malesuada tellus. Nulla faucibus mi tortor, pharetra auctor nulla tempor sit amet. Maecenas mattis ut erat eget rhoncus. Mauris ante felis, semper quis tellus at, convallis rhoncus lorem. ",
            financial:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
            legal:
              "Praesent tincidunt ipsum dui, et posuere dolor pretium finibus. Vivamus in tristique sapien, sed dictum sem. Ut lacinia ullamcorper elit volutpat faucibus. Duis at metus quis magna tempor porta quis quis quam. Cras finibus facilisis est, sit amet eleifend libero vulputate ac. Pellentesque sagittis tempor dui sed placerat. Pellentesque viverra molestie fringilla. Donec iaculis dictum eleifend. Donec nec est fermentum, posuere justo eget, suscipit nibh. ",
            it: "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
          },
          alternativeInsights: {
            keyFeaters:
              "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
            keyRisks:
              "Nullam in tellus aliquam, semper risus ac, pharetra est. Sed blandit elit varius ipsum porttitor molestie. Curabitur sollicitudin luctus mauris, ac commodo dolor molestie at. Curabitur rutrum massa nisi, eget auctor turpis semper vitae. Nullam in justo non nisl viverra auctor. Nam posuere consequat ante at vestibulum. In hac habitasse platea dictumst. Mauris tristique dui eget est pharetra mollis. Proin sodales ipsum quis vestibulum tincidunt. Nunc sem eros, vestibulum vitae interdum nec, bibendum vel mauris. ",
            keyUpsides:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
          },
        },
        sellChance: "0.3",
        recommendation: {
          gatheringChannels: [
            {
              id: "twitter_h43u3049857",
              name: "Twitter (X)",
              imgSRC: "",
              lastUpdate: "2023-08-31T02:56:43.064Z",
              getteredData: 220,
              aiModelsID: "falcon_3424fcw3f",
              totalDataToGather: 594,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 0,
              aiLearningDataSizePerMinutes: 2,
            },
            {
              id: "news_h43u3049857",
              name: "Google",
              imgSRC: "",
              lastUpdate: "2023-08-29",
              getteredData: 14500,
              aiModelsID: "gpt4_5_3424fcw3f",
              totalDataToGather: 14500,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 802,
              aiLearningDataSizePerMinutes: 2,
            },
          ],
        },
        objectRefrence: "company",
      },
      {
        companyId: "Walmart_lwkr234h34u8743754q3fg2",
        name: "Walmart",
        score: "78",
        hqLocation: "Bentonville, USA",
        revenueSize: "$250M",
        industry: "Retail",
        insight: {
          aiDescription:
            "Apple, known for its innovative products like the iPhone, iPad, and Mac, has played a pivotal role in shaping the tech industry. Its design-driven approach and ecosystem of devices and services have garnered a massive global following.",
          standardDueDiligence: {
            commercial:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, nunc nec euismod iaculis, magna magna mollis dui, in euismod ipsum libero ornare mauris. Aliquam vestibulum est at ipsum eleifend, nec auctor ante sagittis. Ut ultricies consectetur ipsum, et dapibus velit. Phasellus sapien risus, venenatis eget leo ut, aliquet tempus lectus. Integer luctus placerat porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin nec purus lobortis neque ornare cursus vitae bibendum nisi. Vestibulum commodo, purus bibendum volutpat sollicitudin, mi eros placerat odio, vel molestie augue tellus id tellus. Mauris vel semper arcu, id imperdiet libero. Phasellus euismod arcu nec ex consequat, ultrices aliquet purus gravida. Donec porta vestibulum euismod. In eu tellus facilisis, iaculis diam ultricies, malesuada tellus. Nulla faucibus mi tortor, pharetra auctor nulla tempor sit amet. Maecenas mattis ut erat eget rhoncus. Mauris ante felis, semper quis tellus at, convallis rhoncus lorem. ",
            financial:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
            legal:
              "Praesent tincidunt ipsum dui, et posuere dolor pretium finibus. Vivamus in tristique sapien, sed dictum sem. Ut lacinia ullamcorper elit volutpat faucibus. Duis at metus quis magna tempor porta quis quis quam. Cras finibus facilisis est, sit amet eleifend libero vulputate ac. Pellentesque sagittis tempor dui sed placerat. Pellentesque viverra molestie fringilla. Donec iaculis dictum eleifend. Donec nec est fermentum, posuere justo eget, suscipit nibh. ",
            it: "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
          },
          alternativeInsights: {
            keyFeaters:
              "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
            keyRisks:
              "Nullam in tellus aliquam, semper risus ac, pharetra est. Sed blandit elit varius ipsum porttitor molestie. Curabitur sollicitudin luctus mauris, ac commodo dolor molestie at. Curabitur rutrum massa nisi, eget auctor turpis semper vitae. Nullam in justo non nisl viverra auctor. Nam posuere consequat ante at vestibulum. In hac habitasse platea dictumst. Mauris tristique dui eget est pharetra mollis. Proin sodales ipsum quis vestibulum tincidunt. Nunc sem eros, vestibulum vitae interdum nec, bibendum vel mauris. ",
            keyUpsides:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
          },
        },
        sellChance: "0.3",
        recommendation: {
          gatheringChannels: [
            {
              id: "twitter_h43u3049857",
              name: "Twitter (X)",
              imgSRC: "",
              lastUpdate: "2023-08-31T02:56:43.064Z",
              getteredData: 213,
              aiModelsID: "falcon_3424fcw3f",
              totalDataToGather: 639,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 0,
              aiLearningDataSizePerMinutes: 2,
            },
            {
              id: "news_h43u3049857",
              name: "Google",
              imgSRC: "",
              lastUpdate: "2023-08-29",
              getteredData: 19500,
              aiModelsID: "gpt4_5_3424fcw3f",
              totalDataToGather: 19500,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 6342,
              aiLearningDataSizePerMinutes: 2,
            },
          ],
        },
        objectRefrence: "company",
      },
      {
        companyId: "Amazon_lwkr234h34u8743754q3fg2",
        name: "Amazon",
        score: "88",
        hqLocation: "Seattle, USA",
        revenueSize: "$280M",
        industry: "E-commerce",
        insight: {
          aiDescription:
            "Apple, known for its innovative products like the iPhone, iPad, and Mac, has played a pivotal role in shaping the tech industry. Its design-driven approach and ecosystem of devices and services have garnered a massive global following.",
          standardDueDiligence: {
            commercial:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, nunc nec euismod iaculis, magna magna mollis dui, in euismod ipsum libero ornare mauris. Aliquam vestibulum est at ipsum eleifend, nec auctor ante sagittis. Ut ultricies consectetur ipsum, et dapibus velit. Phasellus sapien risus, venenatis eget leo ut, aliquet tempus lectus. Integer luctus placerat porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin nec purus lobortis neque ornare cursus vitae bibendum nisi. Vestibulum commodo, purus bibendum volutpat sollicitudin, mi eros placerat odio, vel molestie augue tellus id tellus. Mauris vel semper arcu, id imperdiet libero. Phasellus euismod arcu nec ex consequat, ultrices aliquet purus gravida. Donec porta vestibulum euismod. In eu tellus facilisis, iaculis diam ultricies, malesuada tellus. Nulla faucibus mi tortor, pharetra auctor nulla tempor sit amet. Maecenas mattis ut erat eget rhoncus. Mauris ante felis, semper quis tellus at, convallis rhoncus lorem. ",
            financial:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
            legal:
              "Praesent tincidunt ipsum dui, et posuere dolor pretium finibus. Vivamus in tristique sapien, sed dictum sem. Ut lacinia ullamcorper elit volutpat faucibus. Duis at metus quis magna tempor porta quis quis quam. Cras finibus facilisis est, sit amet eleifend libero vulputate ac. Pellentesque sagittis tempor dui sed placerat. Pellentesque viverra molestie fringilla. Donec iaculis dictum eleifend. Donec nec est fermentum, posuere justo eget, suscipit nibh. ",
            it: "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
          },
          alternativeInsights: {
            keyFeaters:
              "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
            keyRisks:
              "Nullam in tellus aliquam, semper risus ac, pharetra est. Sed blandit elit varius ipsum porttitor molestie. Curabitur sollicitudin luctus mauris, ac commodo dolor molestie at. Curabitur rutrum massa nisi, eget auctor turpis semper vitae. Nullam in justo non nisl viverra auctor. Nam posuere consequat ante at vestibulum. In hac habitasse platea dictumst. Mauris tristique dui eget est pharetra mollis. Proin sodales ipsum quis vestibulum tincidunt. Nunc sem eros, vestibulum vitae interdum nec, bibendum vel mauris. ",
            keyUpsides:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
          },
        },
        sellChance: "0.3",
        recommendation: {
          gatheringChannels: [
            {
              id: "twitter_h43u3049857",
              name: "Twitter (X)",
              imgSRC: "",
              lastUpdate: "2023-08-31T02:56:43.064Z",
              getteredData: 149,
              aiModelsID: "falcon_3424fcw3f",
              totalDataToGather: 718,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 0,
              aiLearningDataSizePerMinutes: 2,
            },
            {
              id: "news_h43u3049857",
              name: "Google",
              imgSRC: "",
              lastUpdate: "2023-08-29",
              getteredData: 14500,
              aiModelsID: "gpt4_5_3424fcw3f",
              totalDataToGather: 14500,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 837,
              aiLearningDataSizePerMinutes: 2,
            },
          ],
        },
        objectRefrence: "company",
      },
      {
        companyId: "Netflix_lwkr234h34u8743754q3fg2",
        name: "Netflix",
        score: "89",
        hqLocation: "Los Gatos, USA",
        revenueSize: "$25M",
        industry: "Entertainment",
        insight: {
          aiDescription:
            "Apple, known for its innovative products like the iPhone, iPad, and Mac, has played a pivotal role in shaping the tech industry. Its design-driven approach and ecosystem of devices and services have garnered a massive global following.",
          standardDueDiligence: {
            commercial:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, nunc nec euismod iaculis, magna magna mollis dui, in euismod ipsum libero ornare mauris. Aliquam vestibulum est at ipsum eleifend, nec auctor ante sagittis. Ut ultricies consectetur ipsum, et dapibus velit. Phasellus sapien risus, venenatis eget leo ut, aliquet tempus lectus. Integer luctus placerat porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin nec purus lobortis neque ornare cursus vitae bibendum nisi. Vestibulum commodo, purus bibendum volutpat sollicitudin, mi eros placerat odio, vel molestie augue tellus id tellus. Mauris vel semper arcu, id imperdiet libero. Phasellus euismod arcu nec ex consequat, ultrices aliquet purus gravida. Donec porta vestibulum euismod. In eu tellus facilisis, iaculis diam ultricies, malesuada tellus. Nulla faucibus mi tortor, pharetra auctor nulla tempor sit amet. Maecenas mattis ut erat eget rhoncus. Mauris ante felis, semper quis tellus at, convallis rhoncus lorem. ",
            financial:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
            legal:
              "Praesent tincidunt ipsum dui, et posuere dolor pretium finibus. Vivamus in tristique sapien, sed dictum sem. Ut lacinia ullamcorper elit volutpat faucibus. Duis at metus quis magna tempor porta quis quis quam. Cras finibus facilisis est, sit amet eleifend libero vulputate ac. Pellentesque sagittis tempor dui sed placerat. Pellentesque viverra molestie fringilla. Donec iaculis dictum eleifend. Donec nec est fermentum, posuere justo eget, suscipit nibh. ",
            it: "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
          },
          alternativeInsights: {
            keyFeaters:
              "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
            keyRisks:
              "Nullam in tellus aliquam, semper risus ac, pharetra est. Sed blandit elit varius ipsum porttitor molestie. Curabitur sollicitudin luctus mauris, ac commodo dolor molestie at. Curabitur rutrum massa nisi, eget auctor turpis semper vitae. Nullam in justo non nisl viverra auctor. Nam posuere consequat ante at vestibulum. In hac habitasse platea dictumst. Mauris tristique dui eget est pharetra mollis. Proin sodales ipsum quis vestibulum tincidunt. Nunc sem eros, vestibulum vitae interdum nec, bibendum vel mauris. ",
            keyUpsides:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
          },
        },
        sellChance: "0.3",
        recommendation: {
          gatheringChannels: [
            {
              id: "twitter_h43u3049857",
              name: "Twitter (X)",
              imgSRC: "",
              lastUpdate: "2023-08-31T02:56:43.064Z",
              getteredData: 397,
              aiModelsID: "falcon_3424fcw3f",
              totalDataToGather: 599,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 0,
              aiLearningDataSizePerMinutes: 2,
            },
            {
              id: "news_h43u3049857",
              name: "Google",
              imgSRC: "",
              lastUpdate: "2023-08-29",
              getteredData: 14500,
              aiModelsID: "gpt4_5_3424fcw3f",
              totalDataToGather: 14500,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 9879,
              aiLearningDataSizePerMinutes: 2,
            },
          ],
        },
        objectRefrence: "company",
      },
      {
        companyId: "Google_lwkr234h34u8743754q3fg2",
        name: "Google",
        score: "96",
        hqLocation: "Mountain View, USA",
        revenueSize: "$320M",
        industry: "Technology",
        insight: {
          aiDescription:
            "Apple, known for its innovative products like the iPhone, iPad, and Mac, has played a pivotal role in shaping the tech industry. Its design-driven approach and ecosystem of devices and services have garnered a massive global following.",
          standardDueDiligence: {
            commercial:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, nunc nec euismod iaculis, magna magna mollis dui, in euismod ipsum libero ornare mauris. Aliquam vestibulum est at ipsum eleifend, nec auctor ante sagittis. Ut ultricies consectetur ipsum, et dapibus velit. Phasellus sapien risus, venenatis eget leo ut, aliquet tempus lectus. Integer luctus placerat porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin nec purus lobortis neque ornare cursus vitae bibendum nisi. Vestibulum commodo, purus bibendum volutpat sollicitudin, mi eros placerat odio, vel molestie augue tellus id tellus. Mauris vel semper arcu, id imperdiet libero. Phasellus euismod arcu nec ex consequat, ultrices aliquet purus gravida. Donec porta vestibulum euismod. In eu tellus facilisis, iaculis diam ultricies, malesuada tellus. Nulla faucibus mi tortor, pharetra auctor nulla tempor sit amet. Maecenas mattis ut erat eget rhoncus. Mauris ante felis, semper quis tellus at, convallis rhoncus lorem. ",
            financial:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
            legal:
              "Praesent tincidunt ipsum dui, et posuere dolor pretium finibus. Vivamus in tristique sapien, sed dictum sem. Ut lacinia ullamcorper elit volutpat faucibus. Duis at metus quis magna tempor porta quis quis quam. Cras finibus facilisis est, sit amet eleifend libero vulputate ac. Pellentesque sagittis tempor dui sed placerat. Pellentesque viverra molestie fringilla. Donec iaculis dictum eleifend. Donec nec est fermentum, posuere justo eget, suscipit nibh. ",
            it: "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
          },
          alternativeInsights: {
            keyFeaters:
              "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
            keyRisks:
              "Nullam in tellus aliquam, semper risus ac, pharetra est. Sed blandit elit varius ipsum porttitor molestie. Curabitur sollicitudin luctus mauris, ac commodo dolor molestie at. Curabitur rutrum massa nisi, eget auctor turpis semper vitae. Nullam in justo non nisl viverra auctor. Nam posuere consequat ante at vestibulum. In hac habitasse platea dictumst. Mauris tristique dui eget est pharetra mollis. Proin sodales ipsum quis vestibulum tincidunt. Nunc sem eros, vestibulum vitae interdum nec, bibendum vel mauris. ",
            keyUpsides:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
          },
        },
        sellChance: "0.3",
        recommendation: {
          gatheringChannels: [
            {
              id: "twitter_h43u3049857",
              name: "Twitter (X)",
              imgSRC: "",
              lastUpdate: "2023-08-31T02:56:43.064Z",
              getteredData: 275,
              aiModelsID: "falcon_3424fcw3f",
              totalDataToGather: 594,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 0,
              aiLearningDataSizePerMinutes: 2,
            },
            {
              id: "news_h43u3049857",
              name: "Google",
              imgSRC: "",
              lastUpdate: "2023-08-29",
              getteredData: 3500,
              aiModelsID: "gpt4_5_3424fcw3f",
              totalDataToGather: 3500,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 2639,
              aiLearningDataSizePerMinutes: 2,
            },
          ],
        },
        objectRefrence: "company",
      },
      {
        companyId: "Facebook_lwkr234h34u8743754q3fg2",
        name: "Facebook",
        score: "84",
        hqLocation: "Menlo Park, USA",
        revenueSize: "$150M",
        industry: "Technology",
        insight: {
          aiDescription:
            "Apple, known for its innovative products like the iPhone, iPad, and Mac, has played a pivotal role in shaping the tech industry. Its design-driven approach and ecosystem of devices and services have garnered a massive global following.",
          standardDueDiligence: {
            commercial:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, nunc nec euismod iaculis, magna magna mollis dui, in euismod ipsum libero ornare mauris. Aliquam vestibulum est at ipsum eleifend, nec auctor ante sagittis. Ut ultricies consectetur ipsum, et dapibus velit. Phasellus sapien risus, venenatis eget leo ut, aliquet tempus lectus. Integer luctus placerat porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin nec purus lobortis neque ornare cursus vitae bibendum nisi. Vestibulum commodo, purus bibendum volutpat sollicitudin, mi eros placerat odio, vel molestie augue tellus id tellus. Mauris vel semper arcu, id imperdiet libero. Phasellus euismod arcu nec ex consequat, ultrices aliquet purus gravida. Donec porta vestibulum euismod. In eu tellus facilisis, iaculis diam ultricies, malesuada tellus. Nulla faucibus mi tortor, pharetra auctor nulla tempor sit amet. Maecenas mattis ut erat eget rhoncus. Mauris ante felis, semper quis tellus at, convallis rhoncus lorem. ",
            financial:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
            legal:
              "Praesent tincidunt ipsum dui, et posuere dolor pretium finibus. Vivamus in tristique sapien, sed dictum sem. Ut lacinia ullamcorper elit volutpat faucibus. Duis at metus quis magna tempor porta quis quis quam. Cras finibus facilisis est, sit amet eleifend libero vulputate ac. Pellentesque sagittis tempor dui sed placerat. Pellentesque viverra molestie fringilla. Donec iaculis dictum eleifend. Donec nec est fermentum, posuere justo eget, suscipit nibh. ",
            it: "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
          },
          alternativeInsights: {
            keyFeaters:
              "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
            keyRisks:
              "Nullam in tellus aliquam, semper risus ac, pharetra est. Sed blandit elit varius ipsum porttitor molestie. Curabitur sollicitudin luctus mauris, ac commodo dolor molestie at. Curabitur rutrum massa nisi, eget auctor turpis semper vitae. Nullam in justo non nisl viverra auctor. Nam posuere consequat ante at vestibulum. In hac habitasse platea dictumst. Mauris tristique dui eget est pharetra mollis. Proin sodales ipsum quis vestibulum tincidunt. Nunc sem eros, vestibulum vitae interdum nec, bibendum vel mauris. ",
            keyUpsides:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
          },
        },
        sellChance: "0.3",
        recommendation: {
          gatheringChannels: [
            {
              id: "twitter_h43u3049857",
              name: "Twitter (X)",
              imgSRC: "",
              lastUpdate: "2023-08-31T02:56:43.064Z",
              getteredData: 234,
              aiModelsID: "falcon_3424fcw3f",
              totalDataToGather: 770,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 0,
              aiLearningDataSizePerMinutes: 2,
            },
            {
              id: "news_h43u3049857",
              name: "Google",
              imgSRC: "",
              lastUpdate: "2023-08-29",
              getteredData: 16500,
              aiModelsID: "gpt4_5_3424fcw3f",
              totalDataToGather: 16500,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 5495,
              aiLearningDataSizePerMinutes: 2,
            },
          ],
        },
        objectRefrence: "company",
      },
      {
        companyId: "Toyota_lwkr234h34u8743754q3fg2",
        name: "Toyota",
        score: "82",
        hqLocation: "Toyota City, Japan",
        revenueSize: "$15M",
        industry: "Car",
        insight: {
          aiDescription:
            "Apple, known for its innovative products like the iPhone, iPad, and Mac, has played a pivotal role in shaping the tech industry. Its design-driven approach and ecosystem of devices and services have garnered a massive global following.",
          standardDueDiligence: {
            commercial:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, nunc nec euismod iaculis, magna magna mollis dui, in euismod ipsum libero ornare mauris. Aliquam vestibulum est at ipsum eleifend, nec auctor ante sagittis. Ut ultricies consectetur ipsum, et dapibus velit. Phasellus sapien risus, venenatis eget leo ut, aliquet tempus lectus. Integer luctus placerat porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin nec purus lobortis neque ornare cursus vitae bibendum nisi. Vestibulum commodo, purus bibendum volutpat sollicitudin, mi eros placerat odio, vel molestie augue tellus id tellus. Mauris vel semper arcu, id imperdiet libero. Phasellus euismod arcu nec ex consequat, ultrices aliquet purus gravida. Donec porta vestibulum euismod. In eu tellus facilisis, iaculis diam ultricies, malesuada tellus. Nulla faucibus mi tortor, pharetra auctor nulla tempor sit amet. Maecenas mattis ut erat eget rhoncus. Mauris ante felis, semper quis tellus at, convallis rhoncus lorem. ",
            financial:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
            legal:
              "Praesent tincidunt ipsum dui, et posuere dolor pretium finibus. Vivamus in tristique sapien, sed dictum sem. Ut lacinia ullamcorper elit volutpat faucibus. Duis at metus quis magna tempor porta quis quis quam. Cras finibus facilisis est, sit amet eleifend libero vulputate ac. Pellentesque sagittis tempor dui sed placerat. Pellentesque viverra molestie fringilla. Donec iaculis dictum eleifend. Donec nec est fermentum, posuere justo eget, suscipit nibh. ",
            it: "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
          },
          alternativeInsights: {
            keyFeaters:
              "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
            keyRisks:
              "Nullam in tellus aliquam, semper risus ac, pharetra est. Sed blandit elit varius ipsum porttitor molestie. Curabitur sollicitudin luctus mauris, ac commodo dolor molestie at. Curabitur rutrum massa nisi, eget auctor turpis semper vitae. Nullam in justo non nisl viverra auctor. Nam posuere consequat ante at vestibulum. In hac habitasse platea dictumst. Mauris tristique dui eget est pharetra mollis. Proin sodales ipsum quis vestibulum tincidunt. Nunc sem eros, vestibulum vitae interdum nec, bibendum vel mauris. ",
            keyUpsides:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
          },
        },
        sellChance: "0.3",
        recommendation: {
          gatheringChannels: [
            {
              id: "twitter_h43u3049857",
              name: "Twitter (X)",
              imgSRC: "",
              lastUpdate: "2023-08-31T02:56:43.064Z",
              getteredData: 2,
              aiModelsID: "falcon_3424fcw3f",
              totalDataToGather: 729,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 0,
              aiLearningDataSizePerMinutes: 2,
            },
            {
              id: "news_h43u3049857",
              name: "Google",
              imgSRC: "",
              lastUpdate: "2023-08-29",
              getteredData: 10500,
              aiModelsID: "gpt4_5_3424fcw3f",
              totalDataToGather: 10500,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 5039,
              aiLearningDataSizePerMinutes: 2,
            },
          ],
        },
        objectRefrence: "company",
      },
      {
        companyId: "Mercedes_lwkr234h34u8743754q3fg2",
        name: "Mercedes-Benz",
        score: "86",
        hqLocation: "Stuttgart, Germany",
        revenueSize: "$17M",
        industry: "Car",
        insight: {
          aiDescription:
            "Apple, known for its innovative products like the iPhone, iPad, and Mac, has played a pivotal role in shaping the tech industry. Its design-driven approach and ecosystem of devices and services have garnered a massive global following.",
          standardDueDiligence: {
            commercial:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, nunc nec euismod iaculis, magna magna mollis dui, in euismod ipsum libero ornare mauris. Aliquam vestibulum est at ipsum eleifend, nec auctor ante sagittis. Ut ultricies consectetur ipsum, et dapibus velit. Phasellus sapien risus, venenatis eget leo ut, aliquet tempus lectus. Integer luctus placerat porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin nec purus lobortis neque ornare cursus vitae bibendum nisi. Vestibulum commodo, purus bibendum volutpat sollicitudin, mi eros placerat odio, vel molestie augue tellus id tellus. Mauris vel semper arcu, id imperdiet libero. Phasellus euismod arcu nec ex consequat, ultrices aliquet purus gravida. Donec porta vestibulum euismod. In eu tellus facilisis, iaculis diam ultricies, malesuada tellus. Nulla faucibus mi tortor, pharetra auctor nulla tempor sit amet. Maecenas mattis ut erat eget rhoncus. Mauris ante felis, semper quis tellus at, convallis rhoncus lorem. ",
            financial:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
            legal:
              "Praesent tincidunt ipsum dui, et posuere dolor pretium finibus. Vivamus in tristique sapien, sed dictum sem. Ut lacinia ullamcorper elit volutpat faucibus. Duis at metus quis magna tempor porta quis quis quam. Cras finibus facilisis est, sit amet eleifend libero vulputate ac. Pellentesque sagittis tempor dui sed placerat. Pellentesque viverra molestie fringilla. Donec iaculis dictum eleifend. Donec nec est fermentum, posuere justo eget, suscipit nibh. ",
            it: "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
          },
          alternativeInsights: {
            keyFeaters:
              "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
            keyRisks:
              "Nullam in tellus aliquam, semper risus ac, pharetra est. Sed blandit elit varius ipsum porttitor molestie. Curabitur sollicitudin luctus mauris, ac commodo dolor molestie at. Curabitur rutrum massa nisi, eget auctor turpis semper vitae. Nullam in justo non nisl viverra auctor. Nam posuere consequat ante at vestibulum. In hac habitasse platea dictumst. Mauris tristique dui eget est pharetra mollis. Proin sodales ipsum quis vestibulum tincidunt. Nunc sem eros, vestibulum vitae interdum nec, bibendum vel mauris. ",
            keyUpsides:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
          },
        },
        sellChance: "0.3",
        recommendation: {
          gatheringChannels: [
            {
              id: "twitter_h43u3049857",
              name: "Twitter (X)",
              imgSRC: "",
              lastUpdate: "2023-08-31T02:56:43.064Z",
              getteredData: 198,
              aiModelsID: "falcon_3424fcw3f",
              totalDataToGather: 555,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 0,
              aiLearningDataSizePerMinutes: 2,
            },
            {
              id: "news_h43u3049857",
              name: "Google",
              imgSRC: "",
              lastUpdate: "2023-08-29",
              getteredData: 7500,
              aiModelsID: "gpt4_5_3424fcw3f",
              totalDataToGather: 7500,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 2718,
              aiLearningDataSizePerMinutes: 2,
            },
          ],
        },
        objectRefrence: "company",
      },
      {
        companyId: "Honda_lwkr234h34u8743754q3fg2",
        name: "Honda",
        score: "76",
        hqLocation: "Tokyo, Japan",
        revenueSize: "$12M",
        industry: "Car",
        insight: {
          aiDescription:
            "Apple, known for its innovative products like the iPhone, iPad, and Mac, has played a pivotal role in shaping the tech industry. Its design-driven approach and ecosystem of devices and services have garnered a massive global following.",
          standardDueDiligence: {
            commercial:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, nunc nec euismod iaculis, magna magna mollis dui, in euismod ipsum libero ornare mauris. Aliquam vestibulum est at ipsum eleifend, nec auctor ante sagittis. Ut ultricies consectetur ipsum, et dapibus velit. Phasellus sapien risus, venenatis eget leo ut, aliquet tempus lectus. Integer luctus placerat porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin nec purus lobortis neque ornare cursus vitae bibendum nisi. Vestibulum commodo, purus bibendum volutpat sollicitudin, mi eros placerat odio, vel molestie augue tellus id tellus. Mauris vel semper arcu, id imperdiet libero. Phasellus euismod arcu nec ex consequat, ultrices aliquet purus gravida. Donec porta vestibulum euismod. In eu tellus facilisis, iaculis diam ultricies, malesuada tellus. Nulla faucibus mi tortor, pharetra auctor nulla tempor sit amet. Maecenas mattis ut erat eget rhoncus. Mauris ante felis, semper quis tellus at, convallis rhoncus lorem. ",
            financial:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
            legal:
              "Praesent tincidunt ipsum dui, et posuere dolor pretium finibus. Vivamus in tristique sapien, sed dictum sem. Ut lacinia ullamcorper elit volutpat faucibus. Duis at metus quis magna tempor porta quis quis quam. Cras finibus facilisis est, sit amet eleifend libero vulputate ac. Pellentesque sagittis tempor dui sed placerat. Pellentesque viverra molestie fringilla. Donec iaculis dictum eleifend. Donec nec est fermentum, posuere justo eget, suscipit nibh. ",
            it: "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
          },
          alternativeInsights: {
            keyFeaters:
              "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
            keyRisks:
              "Nullam in tellus aliquam, semper risus ac, pharetra est. Sed blandit elit varius ipsum porttitor molestie. Curabitur sollicitudin luctus mauris, ac commodo dolor molestie at. Curabitur rutrum massa nisi, eget auctor turpis semper vitae. Nullam in justo non nisl viverra auctor. Nam posuere consequat ante at vestibulum. In hac habitasse platea dictumst. Mauris tristique dui eget est pharetra mollis. Proin sodales ipsum quis vestibulum tincidunt. Nunc sem eros, vestibulum vitae interdum nec, bibendum vel mauris. ",
            keyUpsides:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
          },
        },
        sellChance: "0.3",
        recommendation: {
          gatheringChannels: [
            {
              id: "twitter_h43u3049857",
              name: "Twitter (X)",
              imgSRC: "",
              lastUpdate: "2023-08-31T02:56:43.064Z",
              getteredData: 668,
              aiModelsID: "falcon_3424fcw3f",
              totalDataToGather: 682,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 0,
              aiLearningDataSizePerMinutes: 2,
            },
            {
              id: "news_h43u3049857",
              name: "Google",
              imgSRC: "",
              lastUpdate: "2023-08-29",
              getteredData: 15500,
              aiModelsID: "gpt4_5_3424fcw3f",
              totalDataToGather: 15500,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 4286,
              aiLearningDataSizePerMinutes: 2,
            },
          ],
        },
        objectRefrence: "company",
      },
      {
        companyId: "General_lwkr234h34u8743754q3fg2",
        name: "General Motors",
        score: "78",
        hqLocation: "Detroit, USA",
        revenueSize: "$13M",
        industry: "Car",
        insight: {
          aiDescription:
            "Apple, known for its innovative products like the iPhone, iPad, and Mac, has played a pivotal role in shaping the tech industry. Its design-driven approach and ecosystem of devices and services have garnered a massive global following.",
          standardDueDiligence: {
            commercial:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, nunc nec euismod iaculis, magna magna mollis dui, in euismod ipsum libero ornare mauris. Aliquam vestibulum est at ipsum eleifend, nec auctor ante sagittis. Ut ultricies consectetur ipsum, et dapibus velit. Phasellus sapien risus, venenatis eget leo ut, aliquet tempus lectus. Integer luctus placerat porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin nec purus lobortis neque ornare cursus vitae bibendum nisi. Vestibulum commodo, purus bibendum volutpat sollicitudin, mi eros placerat odio, vel molestie augue tellus id tellus. Mauris vel semper arcu, id imperdiet libero. Phasellus euismod arcu nec ex consequat, ultrices aliquet purus gravida. Donec porta vestibulum euismod. In eu tellus facilisis, iaculis diam ultricies, malesuada tellus. Nulla faucibus mi tortor, pharetra auctor nulla tempor sit amet. Maecenas mattis ut erat eget rhoncus. Mauris ante felis, semper quis tellus at, convallis rhoncus lorem. ",
            financial:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
            legal:
              "Praesent tincidunt ipsum dui, et posuere dolor pretium finibus. Vivamus in tristique sapien, sed dictum sem. Ut lacinia ullamcorper elit volutpat faucibus. Duis at metus quis magna tempor porta quis quis quam. Cras finibus facilisis est, sit amet eleifend libero vulputate ac. Pellentesque sagittis tempor dui sed placerat. Pellentesque viverra molestie fringilla. Donec iaculis dictum eleifend. Donec nec est fermentum, posuere justo eget, suscipit nibh. ",
            it: "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
          },
          alternativeInsights: {
            keyFeaters:
              "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
            keyRisks:
              "Nullam in tellus aliquam, semper risus ac, pharetra est. Sed blandit elit varius ipsum porttitor molestie. Curabitur sollicitudin luctus mauris, ac commodo dolor molestie at. Curabitur rutrum massa nisi, eget auctor turpis semper vitae. Nullam in justo non nisl viverra auctor. Nam posuere consequat ante at vestibulum. In hac habitasse platea dictumst. Mauris tristique dui eget est pharetra mollis. Proin sodales ipsum quis vestibulum tincidunt. Nunc sem eros, vestibulum vitae interdum nec, bibendum vel mauris. ",
            keyUpsides:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
          },
        },
        sellChance: "0.3",
        recommendation: {
          gatheringChannels: [
            {
              id: "twitter_h43u3049857",
              name: "Twitter (X)",
              imgSRC: "",
              lastUpdate: "2023-08-31T02:56:43.064Z",
              getteredData: 465,
              aiModelsID: "falcon_3424fcw3f",
              totalDataToGather: 648,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 0,
              aiLearningDataSizePerMinutes: 2,
            },
            {
              id: "news_h43u3049857",
              name: "Google",
              imgSRC: "",
              lastUpdate: "2023-08-29",
              getteredData: 13500,
              aiModelsID: "gpt4_5_3424fcw3f",
              totalDataToGather: 13500,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 6279,
              aiLearningDataSizePerMinutes: 2,
            },
          ],
        },
        objectRefrence: "company",
      },
      {
        companyId: "Nissan_lwkr234h34u8743754q3fg2",
        name: "Nissan",
        score: "72",
        hqLocation: "Yokohama, Japan",
        revenueSize: "$11M",
        industry: "Car",
        insight: {
          aiDescription:
            "Apple, known for its innovative products like the iPhone, iPad, and Mac, has played a pivotal role in shaping the tech industry. Its design-driven approach and ecosystem of devices and services have garnered a massive global following.",
          standardDueDiligence: {
            commercial:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, nunc nec euismod iaculis, magna magna mollis dui, in euismod ipsum libero ornare mauris. Aliquam vestibulum est at ipsum eleifend, nec auctor ante sagittis. Ut ultricies consectetur ipsum, et dapibus velit. Phasellus sapien risus, venenatis eget leo ut, aliquet tempus lectus. Integer luctus placerat porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin nec purus lobortis neque ornare cursus vitae bibendum nisi. Vestibulum commodo, purus bibendum volutpat sollicitudin, mi eros placerat odio, vel molestie augue tellus id tellus. Mauris vel semper arcu, id imperdiet libero. Phasellus euismod arcu nec ex consequat, ultrices aliquet purus gravida. Donec porta vestibulum euismod. In eu tellus facilisis, iaculis diam ultricies, malesuada tellus. Nulla faucibus mi tortor, pharetra auctor nulla tempor sit amet. Maecenas mattis ut erat eget rhoncus. Mauris ante felis, semper quis tellus at, convallis rhoncus lorem. ",
            financial:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
            legal:
              "Praesent tincidunt ipsum dui, et posuere dolor pretium finibus. Vivamus in tristique sapien, sed dictum sem. Ut lacinia ullamcorper elit volutpat faucibus. Duis at metus quis magna tempor porta quis quis quam. Cras finibus facilisis est, sit amet eleifend libero vulputate ac. Pellentesque sagittis tempor dui sed placerat. Pellentesque viverra molestie fringilla. Donec iaculis dictum eleifend. Donec nec est fermentum, posuere justo eget, suscipit nibh. ",
            it: "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
          },
          alternativeInsights: {
            keyFeaters:
              "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
            keyRisks:
              "Nullam in tellus aliquam, semper risus ac, pharetra est. Sed blandit elit varius ipsum porttitor molestie. Curabitur sollicitudin luctus mauris, ac commodo dolor molestie at. Curabitur rutrum massa nisi, eget auctor turpis semper vitae. Nullam in justo non nisl viverra auctor. Nam posuere consequat ante at vestibulum. In hac habitasse platea dictumst. Mauris tristique dui eget est pharetra mollis. Proin sodales ipsum quis vestibulum tincidunt. Nunc sem eros, vestibulum vitae interdum nec, bibendum vel mauris. ",
            keyUpsides:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
          },
        },
        sellChance: "0.3",
        recommendation: {
          gatheringChannels: [
            {
              id: "twitter_h43u3049857",
              name: "Twitter (X)",
              imgSRC: "",
              lastUpdate: "2023-08-31T02:56:43.064Z",
              getteredData: 218,
              aiModelsID: "falcon_3424fcw3f",
              totalDataToGather: 583,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 0,
              aiLearningDataSizePerMinutes: 2,
            },
            {
              id: "news_h43u3049857",
              name: "Google",
              imgSRC: "",
              lastUpdate: "2023-08-29",
              getteredData: 6500,
              aiModelsID: "gpt4_5_3424fcw3f",
              totalDataToGather: 6500,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 3713,
              aiLearningDataSizePerMinutes: 2,
            },
          ],
        },
        objectRefrence: "company",
      },
      {
        companyId: "SpaceX_lwkr234h34u8743754q3fg2",
        name: "SpaceX",
        score: "92",
        hqLocation: "Hawthorne, USA",
        revenueSize: "$150M",
        industry: "Space",
        insight: {
          aiDescription:
            "Apple, known for its innovative products like the iPhone, iPad, and Mac, has played a pivotal role in shaping the tech industry. Its design-driven approach and ecosystem of devices and services have garnered a massive global following.",
          standardDueDiligence: {
            commercial:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, nunc nec euismod iaculis, magna magna mollis dui, in euismod ipsum libero ornare mauris. Aliquam vestibulum est at ipsum eleifend, nec auctor ante sagittis. Ut ultricies consectetur ipsum, et dapibus velit. Phasellus sapien risus, venenatis eget leo ut, aliquet tempus lectus. Integer luctus placerat porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin nec purus lobortis neque ornare cursus vitae bibendum nisi. Vestibulum commodo, purus bibendum volutpat sollicitudin, mi eros placerat odio, vel molestie augue tellus id tellus. Mauris vel semper arcu, id imperdiet libero. Phasellus euismod arcu nec ex consequat, ultrices aliquet purus gravida. Donec porta vestibulum euismod. In eu tellus facilisis, iaculis diam ultricies, malesuada tellus. Nulla faucibus mi tortor, pharetra auctor nulla tempor sit amet. Maecenas mattis ut erat eget rhoncus. Mauris ante felis, semper quis tellus at, convallis rhoncus lorem. ",
            financial:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
            legal:
              "Praesent tincidunt ipsum dui, et posuere dolor pretium finibus. Vivamus in tristique sapien, sed dictum sem. Ut lacinia ullamcorper elit volutpat faucibus. Duis at metus quis magna tempor porta quis quis quam. Cras finibus facilisis est, sit amet eleifend libero vulputate ac. Pellentesque sagittis tempor dui sed placerat. Pellentesque viverra molestie fringilla. Donec iaculis dictum eleifend. Donec nec est fermentum, posuere justo eget, suscipit nibh. ",
            it: "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
          },
          alternativeInsights: {
            keyFeaters:
              "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
            keyRisks:
              "Nullam in tellus aliquam, semper risus ac, pharetra est. Sed blandit elit varius ipsum porttitor molestie. Curabitur sollicitudin luctus mauris, ac commodo dolor molestie at. Curabitur rutrum massa nisi, eget auctor turpis semper vitae. Nullam in justo non nisl viverra auctor. Nam posuere consequat ante at vestibulum. In hac habitasse platea dictumst. Mauris tristique dui eget est pharetra mollis. Proin sodales ipsum quis vestibulum tincidunt. Nunc sem eros, vestibulum vitae interdum nec, bibendum vel mauris. ",
            keyUpsides:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
          },
        },
        sellChance: "0.3",
        recommendation: {
          gatheringChannels: [
            {
              id: "twitter_h43u3049857",
              name: "Twitter (X)",
              imgSRC: "",
              lastUpdate: "2023-08-31T02:56:43.064Z",
              getteredData: 274,
              aiModelsID: "falcon_3424fcw3f",
              totalDataToGather: 640,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 0,
              aiLearningDataSizePerMinutes: 2,
            },
            {
              id: "news_h43u3049857",
              name: "Google",
              imgSRC: "",
              lastUpdate: "2023-08-29",
              getteredData: 15500,
              aiModelsID: "gpt4_5_3424fcw3f",
              totalDataToGather: 15500,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 6130,
              aiLearningDataSizePerMinutes: 2,
            },
          ],
        },
        objectRefrence: "company",
      },
      {
        companyId: "Nike_lwkr234h34u8743754q3fg2",
        name: "Nike",
        score: "87",
        hqLocation: "Beaverton, USA",
        revenueSize: "$36M",
        industry: "Sportswear",
        insight: {
          aiDescription:
            "Apple, known for its innovative products like the iPhone, iPad, and Mac, has played a pivotal role in shaping the tech industry. Its design-driven approach and ecosystem of devices and services have garnered a massive global following.",
          standardDueDiligence: {
            commercial:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, nunc nec euismod iaculis, magna magna mollis dui, in euismod ipsum libero ornare mauris. Aliquam vestibulum est at ipsum eleifend, nec auctor ante sagittis. Ut ultricies consectetur ipsum, et dapibus velit. Phasellus sapien risus, venenatis eget leo ut, aliquet tempus lectus. Integer luctus placerat porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin nec purus lobortis neque ornare cursus vitae bibendum nisi. Vestibulum commodo, purus bibendum volutpat sollicitudin, mi eros placerat odio, vel molestie augue tellus id tellus. Mauris vel semper arcu, id imperdiet libero. Phasellus euismod arcu nec ex consequat, ultrices aliquet purus gravida. Donec porta vestibulum euismod. In eu tellus facilisis, iaculis diam ultricies, malesuada tellus. Nulla faucibus mi tortor, pharetra auctor nulla tempor sit amet. Maecenas mattis ut erat eget rhoncus. Mauris ante felis, semper quis tellus at, convallis rhoncus lorem. ",
            financial:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
            legal:
              "Praesent tincidunt ipsum dui, et posuere dolor pretium finibus. Vivamus in tristique sapien, sed dictum sem. Ut lacinia ullamcorper elit volutpat faucibus. Duis at metus quis magna tempor porta quis quis quam. Cras finibus facilisis est, sit amet eleifend libero vulputate ac. Pellentesque sagittis tempor dui sed placerat. Pellentesque viverra molestie fringilla. Donec iaculis dictum eleifend. Donec nec est fermentum, posuere justo eget, suscipit nibh. ",
            it: "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
          },
          alternativeInsights: {
            keyFeaters:
              "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
            keyRisks:
              "Nullam in tellus aliquam, semper risus ac, pharetra est. Sed blandit elit varius ipsum porttitor molestie. Curabitur sollicitudin luctus mauris, ac commodo dolor molestie at. Curabitur rutrum massa nisi, eget auctor turpis semper vitae. Nullam in justo non nisl viverra auctor. Nam posuere consequat ante at vestibulum. In hac habitasse platea dictumst. Mauris tristique dui eget est pharetra mollis. Proin sodales ipsum quis vestibulum tincidunt. Nunc sem eros, vestibulum vitae interdum nec, bibendum vel mauris. ",
            keyUpsides:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
          },
        },
        sellChance: "0.3",
        recommendation: {
          gatheringChannels: [
            {
              id: "twitter_h43u3049857",
              name: "Twitter (X)",
              imgSRC: "",
              lastUpdate: "2023-08-31T02:56:43.064Z",
              getteredData: 228,
              aiModelsID: "falcon_3424fcw3f",
              totalDataToGather: 544,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 0,
              aiLearningDataSizePerMinutes: 2,
            },
            {
              id: "news_h43u3049857",
              name: "Google",
              imgSRC: "",
              lastUpdate: "2023-08-29",
              getteredData: 12500,
              aiModelsID: "gpt4_5_3424fcw3f",
              totalDataToGather: 12500,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 12184,
              aiLearningDataSizePerMinutes: 2,
            },
          ],
        },
        objectRefrence: "company",
      },
      {
        companyId: "Starbucks_lwkr234h34u8743754q3fg2",
        name: "Starbucks",
        score: "85",
        hqLocation: "Seattle, USA",
        revenueSize: "$26M",
        industry: "Coffee",
        insight: {
          aiDescription:
            "Apple, known for its innovative products like the iPhone, iPad, and Mac, has played a pivotal role in shaping the tech industry. Its design-driven approach and ecosystem of devices and services have garnered a massive global following.",
          standardDueDiligence: {
            commercial:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, nunc nec euismod iaculis, magna magna mollis dui, in euismod ipsum libero ornare mauris. Aliquam vestibulum est at ipsum eleifend, nec auctor ante sagittis. Ut ultricies consectetur ipsum, et dapibus velit. Phasellus sapien risus, venenatis eget leo ut, aliquet tempus lectus. Integer luctus placerat porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin nec purus lobortis neque ornare cursus vitae bibendum nisi. Vestibulum commodo, purus bibendum volutpat sollicitudin, mi eros placerat odio, vel molestie augue tellus id tellus. Mauris vel semper arcu, id imperdiet libero. Phasellus euismod arcu nec ex consequat, ultrices aliquet purus gravida. Donec porta vestibulum euismod. In eu tellus facilisis, iaculis diam ultricies, malesuada tellus. Nulla faucibus mi tortor, pharetra auctor nulla tempor sit amet. Maecenas mattis ut erat eget rhoncus. Mauris ante felis, semper quis tellus at, convallis rhoncus lorem. ",
            financial:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
            legal:
              "Praesent tincidunt ipsum dui, et posuere dolor pretium finibus. Vivamus in tristique sapien, sed dictum sem. Ut lacinia ullamcorper elit volutpat faucibus. Duis at metus quis magna tempor porta quis quis quam. Cras finibus facilisis est, sit amet eleifend libero vulputate ac. Pellentesque sagittis tempor dui sed placerat. Pellentesque viverra molestie fringilla. Donec iaculis dictum eleifend. Donec nec est fermentum, posuere justo eget, suscipit nibh. ",
            it: "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
          },
          alternativeInsights: {
            keyFeaters:
              "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
            keyRisks:
              "Nullam in tellus aliquam, semper risus ac, pharetra est. Sed blandit elit varius ipsum porttitor molestie. Curabitur sollicitudin luctus mauris, ac commodo dolor molestie at. Curabitur rutrum massa nisi, eget auctor turpis semper vitae. Nullam in justo non nisl viverra auctor. Nam posuere consequat ante at vestibulum. In hac habitasse platea dictumst. Mauris tristique dui eget est pharetra mollis. Proin sodales ipsum quis vestibulum tincidunt. Nunc sem eros, vestibulum vitae interdum nec, bibendum vel mauris. ",
            keyUpsides:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
          },
        },
        sellChance: "0.3",
        recommendation: {
          gatheringChannels: [
            {
              id: "twitter_h43u3049857",
              name: "Twitter (X)",
              imgSRC: "",
              lastUpdate: "2023-08-31T02:56:43.064Z",
              getteredData: 381,
              aiModelsID: "falcon_3424fcw3f",
              totalDataToGather: 608,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 0,
              aiLearningDataSizePerMinutes: 2,
            },
            {
              id: "news_h43u3049857",
              name: "Google",
              imgSRC: "",
              lastUpdate: "2023-08-29",
              getteredData: 3500,
              aiModelsID: "gpt4_5_3424fcw3f",
              totalDataToGather: 3500,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 67,
              aiLearningDataSizePerMinutes: 2,
            },
          ],
        },
        objectRefrence: "company",
      },
      {
        companyId: "Boeing_lwkr234h34u8743754q3fg2",
        name: "Boeing",
        score: "80",
        hqLocation: "Chicago, USA",
        revenueSize: "$95M",
        industry: "Aerospace",
        insight: {
          aiDescription:
            "Apple, known for its innovative products like the iPhone, iPad, and Mac, has played a pivotal role in shaping the tech industry. Its design-driven approach and ecosystem of devices and services have garnered a massive global following.",
          standardDueDiligence: {
            commercial:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, nunc nec euismod iaculis, magna magna mollis dui, in euismod ipsum libero ornare mauris. Aliquam vestibulum est at ipsum eleifend, nec auctor ante sagittis. Ut ultricies consectetur ipsum, et dapibus velit. Phasellus sapien risus, venenatis eget leo ut, aliquet tempus lectus. Integer luctus placerat porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin nec purus lobortis neque ornare cursus vitae bibendum nisi. Vestibulum commodo, purus bibendum volutpat sollicitudin, mi eros placerat odio, vel molestie augue tellus id tellus. Mauris vel semper arcu, id imperdiet libero. Phasellus euismod arcu nec ex consequat, ultrices aliquet purus gravida. Donec porta vestibulum euismod. In eu tellus facilisis, iaculis diam ultricies, malesuada tellus. Nulla faucibus mi tortor, pharetra auctor nulla tempor sit amet. Maecenas mattis ut erat eget rhoncus. Mauris ante felis, semper quis tellus at, convallis rhoncus lorem. ",
            financial:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
            legal:
              "Praesent tincidunt ipsum dui, et posuere dolor pretium finibus. Vivamus in tristique sapien, sed dictum sem. Ut lacinia ullamcorper elit volutpat faucibus. Duis at metus quis magna tempor porta quis quis quam. Cras finibus facilisis est, sit amet eleifend libero vulputate ac. Pellentesque sagittis tempor dui sed placerat. Pellentesque viverra molestie fringilla. Donec iaculis dictum eleifend. Donec nec est fermentum, posuere justo eget, suscipit nibh. ",
            it: "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
          },
          alternativeInsights: {
            keyFeaters:
              "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
            keyRisks:
              "Nullam in tellus aliquam, semper risus ac, pharetra est. Sed blandit elit varius ipsum porttitor molestie. Curabitur sollicitudin luctus mauris, ac commodo dolor molestie at. Curabitur rutrum massa nisi, eget auctor turpis semper vitae. Nullam in justo non nisl viverra auctor. Nam posuere consequat ante at vestibulum. In hac habitasse platea dictumst. Mauris tristique dui eget est pharetra mollis. Proin sodales ipsum quis vestibulum tincidunt. Nunc sem eros, vestibulum vitae interdum nec, bibendum vel mauris. ",
            keyUpsides:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
          },
        },
        sellChance: "0.3",
        recommendation: {
          gatheringChannels: [
            {
              id: "twitter_h43u3049857",
              name: "Twitter (X)",
              imgSRC: "",
              lastUpdate: "2023-08-31T02:56:43.064Z",
              getteredData: 285,
              aiModelsID: "falcon_3424fcw3f",
              totalDataToGather: 605,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 0,
              aiLearningDataSizePerMinutes: 2,
            },
            {
              id: "news_h43u3049857",
              name: "Google",
              imgSRC: "",
              lastUpdate: "2023-08-29",
              getteredData: 2500,
              aiModelsID: "gpt4_5_3424fcw3f",
              totalDataToGather: 2500,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 2216,
              aiLearningDataSizePerMinutes: 2,
            },
          ],
        },
        objectRefrence: "company",
      },
      {
        companyId: "McDonald_lwkr234h34u8743754q3fg2",
        name: "McDonald's",
        score: "76",
        hqLocation: "Chicago, USA",
        revenueSize: "$37M",
        industry: "Fast Food",
        insight: {
          aiDescription:
            "Apple, known for its innovative products like the iPhone, iPad, and Mac, has played a pivotal role in shaping the tech industry. Its design-driven approach and ecosystem of devices and services have garnered a massive global following.",
          standardDueDiligence: {
            commercial:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, nunc nec euismod iaculis, magna magna mollis dui, in euismod ipsum libero ornare mauris. Aliquam vestibulum est at ipsum eleifend, nec auctor ante sagittis. Ut ultricies consectetur ipsum, et dapibus velit. Phasellus sapien risus, venenatis eget leo ut, aliquet tempus lectus. Integer luctus placerat porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin nec purus lobortis neque ornare cursus vitae bibendum nisi. Vestibulum commodo, purus bibendum volutpat sollicitudin, mi eros placerat odio, vel molestie augue tellus id tellus. Mauris vel semper arcu, id imperdiet libero. Phasellus euismod arcu nec ex consequat, ultrices aliquet purus gravida. Donec porta vestibulum euismod. In eu tellus facilisis, iaculis diam ultricies, malesuada tellus. Nulla faucibus mi tortor, pharetra auctor nulla tempor sit amet. Maecenas mattis ut erat eget rhoncus. Mauris ante felis, semper quis tellus at, convallis rhoncus lorem. ",
            financial:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
            legal:
              "Praesent tincidunt ipsum dui, et posuere dolor pretium finibus. Vivamus in tristique sapien, sed dictum sem. Ut lacinia ullamcorper elit volutpat faucibus. Duis at metus quis magna tempor porta quis quis quam. Cras finibus facilisis est, sit amet eleifend libero vulputate ac. Pellentesque sagittis tempor dui sed placerat. Pellentesque viverra molestie fringilla. Donec iaculis dictum eleifend. Donec nec est fermentum, posuere justo eget, suscipit nibh. ",
            it: "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
          },
          alternativeInsights: {
            keyFeaters:
              "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
            keyRisks:
              "Nullam in tellus aliquam, semper risus ac, pharetra est. Sed blandit elit varius ipsum porttitor molestie. Curabitur sollicitudin luctus mauris, ac commodo dolor molestie at. Curabitur rutrum massa nisi, eget auctor turpis semper vitae. Nullam in justo non nisl viverra auctor. Nam posuere consequat ante at vestibulum. In hac habitasse platea dictumst. Mauris tristique dui eget est pharetra mollis. Proin sodales ipsum quis vestibulum tincidunt. Nunc sem eros, vestibulum vitae interdum nec, bibendum vel mauris. ",
            keyUpsides:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
          },
        },
        sellChance: "0.3",
        recommendation: {
          gatheringChannels: [
            {
              id: "twitter_h43u3049857",
              name: "Twitter (X)",
              imgSRC: "",
              lastUpdate: "2023-08-31T02:56:43.064Z",
              getteredData: 143,
              aiModelsID: "falcon_3424fcw3f",
              totalDataToGather: 836,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 0,
              aiLearningDataSizePerMinutes: 2,
            },
            {
              id: "news_h43u3049857",
              name: "Google",
              imgSRC: "",
              lastUpdate: "2023-08-29",
              getteredData: 5500,
              aiModelsID: "gpt4_5_3424fcw3f",
              totalDataToGather: 5500,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 2493,
              aiLearningDataSizePerMinutes: 2,
            },
          ],
        },
        objectRefrence: "company",
      },
      {
        companyId: "Adobe_lwkr234h34u8743754q3fg2",
        name: "Adobe",
        score: "88",
        hqLocation: "San Jose, USA",
        revenueSize: "$13M",
        industry: "Software",
        insight: {
          aiDescription:
            "Apple, known for its innovative products like the iPhone, iPad, and Mac, has played a pivotal role in shaping the tech industry. Its design-driven approach and ecosystem of devices and services have garnered a massive global following.",
          standardDueDiligence: {
            commercial:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, nunc nec euismod iaculis, magna magna mollis dui, in euismod ipsum libero ornare mauris. Aliquam vestibulum est at ipsum eleifend, nec auctor ante sagittis. Ut ultricies consectetur ipsum, et dapibus velit. Phasellus sapien risus, venenatis eget leo ut, aliquet tempus lectus. Integer luctus placerat porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin nec purus lobortis neque ornare cursus vitae bibendum nisi. Vestibulum commodo, purus bibendum volutpat sollicitudin, mi eros placerat odio, vel molestie augue tellus id tellus. Mauris vel semper arcu, id imperdiet libero. Phasellus euismod arcu nec ex consequat, ultrices aliquet purus gravida. Donec porta vestibulum euismod. In eu tellus facilisis, iaculis diam ultricies, malesuada tellus. Nulla faucibus mi tortor, pharetra auctor nulla tempor sit amet. Maecenas mattis ut erat eget rhoncus. Mauris ante felis, semper quis tellus at, convallis rhoncus lorem. ",
            financial:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
            legal:
              "Praesent tincidunt ipsum dui, et posuere dolor pretium finibus. Vivamus in tristique sapien, sed dictum sem. Ut lacinia ullamcorper elit volutpat faucibus. Duis at metus quis magna tempor porta quis quis quam. Cras finibus facilisis est, sit amet eleifend libero vulputate ac. Pellentesque sagittis tempor dui sed placerat. Pellentesque viverra molestie fringilla. Donec iaculis dictum eleifend. Donec nec est fermentum, posuere justo eget, suscipit nibh. ",
            it: "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
          },
          alternativeInsights: {
            keyFeaters:
              "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
            keyRisks:
              "Nullam in tellus aliquam, semper risus ac, pharetra est. Sed blandit elit varius ipsum porttitor molestie. Curabitur sollicitudin luctus mauris, ac commodo dolor molestie at. Curabitur rutrum massa nisi, eget auctor turpis semper vitae. Nullam in justo non nisl viverra auctor. Nam posuere consequat ante at vestibulum. In hac habitasse platea dictumst. Mauris tristique dui eget est pharetra mollis. Proin sodales ipsum quis vestibulum tincidunt. Nunc sem eros, vestibulum vitae interdum nec, bibendum vel mauris. ",
            keyUpsides:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
          },
        },
        sellChance: "0.3",
        recommendation: {
          gatheringChannels: [
            {
              id: "twitter_h43u3049857",
              name: "Twitter (X)",
              imgSRC: "",
              lastUpdate: "2023-08-31T02:56:43.064Z",
              getteredData: 584,
              aiModelsID: "falcon_3424fcw3f",
              totalDataToGather: 665,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 0,
              aiLearningDataSizePerMinutes: 2,
            },
            {
              id: "news_h43u3049857",
              name: "Google",
              imgSRC: "",
              lastUpdate: "2023-08-29",
              getteredData: 8500,
              aiModelsID: "gpt4_5_3424fcw3f",
              totalDataToGather: 8500,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 3236,
              aiLearningDataSizePerMinutes: 2,
            },
          ],
        },
        objectRefrence: "company",
      },
      {
        companyId: "Samsung_lwkr234h34u8743754q3fg2",
        name: "Samsung",
        score: "83",
        hqLocation: "Seoul, South Korea",
        revenueSize: "$320M",
        industry: "Electronics",
        insight: {
          aiDescription:
            "Apple, known for its innovative products like the iPhone, iPad, and Mac, has played a pivotal role in shaping the tech industry. Its design-driven approach and ecosystem of devices and services have garnered a massive global following.",
          standardDueDiligence: {
            commercial:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum, nunc nec euismod iaculis, magna magna mollis dui, in euismod ipsum libero ornare mauris. Aliquam vestibulum est at ipsum eleifend, nec auctor ante sagittis. Ut ultricies consectetur ipsum, et dapibus velit. Phasellus sapien risus, venenatis eget leo ut, aliquet tempus lectus. Integer luctus placerat porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin nec purus lobortis neque ornare cursus vitae bibendum nisi. Vestibulum commodo, purus bibendum volutpat sollicitudin, mi eros placerat odio, vel molestie augue tellus id tellus. Mauris vel semper arcu, id imperdiet libero. Phasellus euismod arcu nec ex consequat, ultrices aliquet purus gravida. Donec porta vestibulum euismod. In eu tellus facilisis, iaculis diam ultricies, malesuada tellus. Nulla faucibus mi tortor, pharetra auctor nulla tempor sit amet. Maecenas mattis ut erat eget rhoncus. Mauris ante felis, semper quis tellus at, convallis rhoncus lorem. ",
            financial:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
            legal:
              "Praesent tincidunt ipsum dui, et posuere dolor pretium finibus. Vivamus in tristique sapien, sed dictum sem. Ut lacinia ullamcorper elit volutpat faucibus. Duis at metus quis magna tempor porta quis quis quam. Cras finibus facilisis est, sit amet eleifend libero vulputate ac. Pellentesque sagittis tempor dui sed placerat. Pellentesque viverra molestie fringilla. Donec iaculis dictum eleifend. Donec nec est fermentum, posuere justo eget, suscipit nibh. ",
            it: "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
          },
          alternativeInsights: {
            keyFeaters:
              "Duis metus odio, lacinia a fermentum vitae, dignissim auctor urna. Aliquam malesuada congue sapien, vel condimentum orci tempor sed. Ut sit amet accumsan purus, et laoreet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in velit a ex iaculis malesuada. Praesent porttitor, ex et convallis pharetra, est lectus dapibus felis, maximus pellentesque orci nulla mollis quam. Vestibulum condimentum, est et aliquam pulvinar, turpis lectus commodo sapien, ac interdum eros est ac quam. Nunc fermentum mauris a blandit sollicitudin. ",
            keyRisks:
              "Nullam in tellus aliquam, semper risus ac, pharetra est. Sed blandit elit varius ipsum porttitor molestie. Curabitur sollicitudin luctus mauris, ac commodo dolor molestie at. Curabitur rutrum massa nisi, eget auctor turpis semper vitae. Nullam in justo non nisl viverra auctor. Nam posuere consequat ante at vestibulum. In hac habitasse platea dictumst. Mauris tristique dui eget est pharetra mollis. Proin sodales ipsum quis vestibulum tincidunt. Nunc sem eros, vestibulum vitae interdum nec, bibendum vel mauris. ",
            keyUpsides:
              "Sed ac efficitur sem. Aenean aliquet odio vitae tempor suscipit. Etiam ut sapien elementum, sollicitudin dui ut, euismod lectus. Cras dictum dui eu mi gravida fringilla. Nullam vitae magna et tortor tempus laoreet. Praesent imperdiet velit in cursus cursus. Nulla tristique imperdiet ligula quis malesuada. Curabitur laoreet sapien massa, a pharetra magna egestas a. Integer convallis vulputate sodales. Suspendisse ut interdum ante. Vivamus mattis a mi sit amet consequat. Vivamus imperdiet molestie consequat. Sed vel sapien felis. Vestibulum tempus viverra ipsum faucibus commodo. Phasellus nec ante vitae nunc aliquam eleifend. ",
          },
        },
        sellChance: "0.3",
        recommendation: {
          gatheringChannels: [
            {
              id: "twitter_h43u3049857",
              name: "Twitter (X)",
              imgSRC: "",
              lastUpdate: "2023-08-31T02:56:43.064Z",
              getteredData: 86,
              aiModelsID: "falcon_3424fcw3f",
              totalDataToGather: 684,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 0,
              aiLearningDataSizePerMinutes: 2,
            },
            {
              id: "news_h43u3049857",
              name: "Google",
              imgSRC: "",
              lastUpdate: "2023-08-29",
              getteredData: 5500,
              aiModelsID: "gpt4_5_3424fcw3f",
              totalDataToGather: 5500,
              dataGatheringPerMinutes: 1,
              aiLearnedDataSize: 4058,
              aiLearningDataSizePerMinutes: 2,
            },
          ],
        },
        objectRefrence: "company",
      },
    ];
  },
  getAiRobots() {
    return [
      {
        id: "falcon_3424fcw3f",
        name: "Falcon 40B",
        totalDataGatheredFromAllUsers: 200000,
        totalDataLearnedFromAllUsers: 120000,
        totalUsed: 2,
        totalTrainedAssetsFromAllUsers: 2000,
      },
      {
        id: "gpt4_5_3424fcw3f",
        name: "GPT4.5",
        totalDataGatheredFromAllUsers: 2000000,
        totalDataLearnedFromAllUsers: 147600,
        totalUsed: 2,
        totalTrainedAssetsFromAllUsers: 8149,
      },
    ];
  },
  filterCompaniesBasedOnID(selectedCompanies, idsList) {
    return selectedCompanies.filter((x) => idsList.includes(x.companyId));
  },
  calculateProcessing(allCompanies) {
    const minuteInMs = 1000 * 60;
    for (let index = 0; index < allCompanies.length; index++) {
      const company = allCompanies[index];
      company["totalProcessingPercentage"] = 0;
      company["totalAIProcessingPercentage"] = 0;
      company["totalDataGatheringProcessingPercentage"] = 0;
      let gatheringChannelsCount =
        company.recommendation.gatheringChannels.length;
      for (
        let gatheringChannelIndex = 0;
        gatheringChannelIndex < gatheringChannelsCount;
        gatheringChannelIndex++
      ) {
        const channel =
          company.recommendation.gatheringChannels[gatheringChannelIndex];
        let lastUpdateDate = +new Date(channel.lastUpdate);
        let spentTimeInMinutes = Math.floor(
          (+new Date() - lastUpdateDate) / minuteInMs
        );
        channel["isDataGatheringFinished"] = false;
        channel["isDataLearningFinished"] = false;
        channel.getteredData =
          channel.getteredData +
          spentTimeInMinutes * channel.dataGatheringPerMinutes;
        if (channel.getteredData >= channel.totalDataToGather) {
          channel.getteredData = channel.totalDataToGather;
          channel["isDataGatheringFinished"] = true;
          channel.aiLearnedDataSize =
            channel.aiLearnedDataSize +
            spentTimeInMinutes * channel.aiLearningDataSizePerMinutes;
          if (channel.aiLearnedDataSize >= channel.totalDataToGather) {
            channel.aiLearnedDataSize = channel.totalDataToGather;
            channel["isDataLearningFinished"] = true;
          }
        }
        channel["dataGatheringProcessingPercentage"] = parseFloat(
          ((channel.getteredData / channel.totalDataToGather) * 100).toFixed(2)
        );
        channel["dataLearningProcessingPercentage"] = parseFloat(
          (
            (channel.aiLearnedDataSize / channel.totalDataToGather) *
            100
          ).toFixed(2)
        );
        company["totalAIProcessingPercentage"] += parseFloat(
          (
            channel["dataLearningProcessingPercentage"] / gatheringChannelsCount
          ).toFixed(2)
        );
        company["totalDataGatheringProcessingPercentage"] += parseFloat(
          (
            channel["dataGatheringProcessingPercentage"] /
            gatheringChannelsCount
          ).toFixed(2)
        );
        company["totalProcessingPercentage"] =
          parseFloat((company["totalAIProcessingPercentage"] / 2).toFixed(2)) +
          parseFloat(
            (company["totalDataGatheringProcessingPercentage"] / 2).toFixed(2)
          );
        company.recommendation.gatheringChannels[gatheringChannelIndex] =
          channel;
      }
      allCompanies[index] = company;
    }
    return allCompanies;
  },
  generateUserInsightsData(selectedCompanies, selectedAiRobots) {
    const selectedCompaniesCount = selectedCompanies.length;
    for (
      let companyIndex = 0;
      companyIndex < selectedCompaniesCount;
      companyIndex++
    ) {
      const company = selectedCompanies[companyIndex];
      if (!company["uploadedFiles"])
        company["uploadedFiles"] = ["file1.pdf", "file2.docx", "file3.xls"];
      company["totalDataLearned"] = 0;
      company["totalDataGathered"] = 0;
      company["completeness"] = 0;
      let channelCounted = 0;
      for (
        let index = 0;
        index < company.recommendation.gatheringChannels.length;
        index++
      ) {
        const channel = company.recommendation.gatheringChannels[index];
        if (!selectedAiRobots.includes((x) => x.id == channel.aiModelsID))
          continue;
        channelCounted = channelCounted + 1;
        company["totalDataLearned"] =
          company["totalDataLearned"] + channel.aiLearnedDataSize;
        company["totalDataGathered"] =
          company["totalDataGathered"] + channel.getteredData;
        company["completeness"] =
          company["completeness"] +
          parseFloat(
            (
              (channel.dataGatheringProcessingPercentage +
                channel.dataLearningProcessingPercentage) /
              2
            ).toFixed(2)
          );
      }
      company["completeness"] = parseFloat(
        (company["completeness"] / channelCounted).toFixed(2)
      );
      company["chatBot"] = {};
      for (
        let aiRobotIndex = 0;
        aiRobotIndex < selectedAiRobots.length;
        aiRobotIndex++
      ) {
        const element = selectedAiRobots[aiRobotIndex].id;
        company["chatBot"][element] = [
          {
            isRobot: false,
            message:
              "Nullam in tellus aliquam, semper risus ac, pharetra est. Sed blandit elit varius ipsum porttitor molestie. Curabitur sollicitudin luctus mauris, ac commodo dolor molestie at. Curabitur rutrum massa nisi, eget auctor turpis semper vitae. ",
          },
          {
            isRobot: true,
            message:
              "Nullam in tellus aliquam, semper risus ac, pharetra est. Sed blandit elit varius ipsum porttitor molestie. Curabitur sollicitudin luctus mauris, ac commodo dolor molestie at. Curabitur rutrum massa nisi, eget auctor turpis semper vitae. ",
          },
        ];
      }
      selectedCompanies[companyIndex] = company;
    }
    return selectedCompanies;
  },
  generateUserTrackingData(selectedCompanies, newKPIs = null) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    for (let index = 0; index < selectedCompanies.length; index++) {
      const company = selectedCompanies[index];
      if (!company["userKPIs"]) company["userKPIs"] = [];
      if (company.userKPIs.length == 0) {
        company["userKPIs"].push({
          name: "A",
          data: [],
        });
        company["userKPIs"].push({
          name: "B",
          data: [],
        });
        company["userKPIs"].push({
          name: "C",
          data: [],
        });
      }
      if (newKPIs != null) {
        if (newKPIs.companyId == company.companyId) {
          for (
            let newKpiValueIndex = 0;
            newKpiValueIndex < newKPIs.values.length;
            newKpiValueIndex++
          ) {
            const newKpiValue = newKPIs.values[newKpiValueIndex];
            company["userKPIs"].push({
              name: newKpiValue.name,
              data: [],
            });
          }
        }
      }
      for (let kpiIndex = 0; kpiIndex < company.userKPIs.length; kpiIndex++) {
        const kpi = company.userKPIs[kpiIndex];
        for (let monthIndex = 0; monthIndex < months.length; monthIndex++) {
          const month = months[monthIndex];
          kpi.data.push({
            date: month,
            value: Math.floor(Math.random() * 100),
          });
        }
        company.userKPIs[kpiIndex] = kpi;
      }
      company["readyToBuy"] = Math.floor(Math.random() * 2) == 1 ? true : false;
      selectedCompanies[index] = company;
    }
    return selectedCompanies;
  },
  generateAiRobotsBasedOnUserData(aiRobots, selectedCompanies) {
    for (let robotIndex = 0; robotIndex < aiRobotIds.length; robotIndex++) {
      const robot = aiRobotIds[robotIndex];
      let companyCountInRobot = 0;
      robot["totalUploadedDocsFromUser"] = 0;
      robot["totalDataLearnedFromUser"] = 0;
      robot["totalDataGatheredFromUser"] = 0;
      robot["totalCompleteness"] = 0;
      for (
        let companyIndex = 0;
        companyIndex < selectedCompanies.length;
        companyIndex++
      ) {
        companyCountInRobot = companyCountInRobot + 1;
        const company = selectedCompanies[companyIndex];
        robot["totalUploadedDocsFromUser"] =
          robot["totalUploadedDocsFromUser"] + 3;
        company.recommendation.gatheringChannels.map((channel) => {
          if (channel.aiModelsID == robot.id) {
            companyCountInRobot = companyCountInRobot + 1;
            robot["totalDataLearnedFromUser"] =
              robot["totalDataLearnedFromUser"] + channel.aiLearnedDataSize;
            robot["totalDataGatheredFromUser"] =
              robot["totalDataGatheredFromUser"] + channel.getteredData;
            robot["totalCompleteness"] =
              robot["totalCompleteness"] +
              channel.dataLearningProcessingPercentage;
          }
        });
      }
      aiRobots[robotIndex] = robot;
    }
    return aiRobots;
  },
  getStandardCompanyList(selectedCompanies, selectedAiRobots) {
    selectedCompanies = this.calculateProcessing(selectedCompanies);
    selectedCompanies = this.generateUserInsightsData(
      selectedCompanies,
      selectedAiRobots
    );
    return this.generateUserTrackingData(selectedCompanies);
  },
  getFullUserData() {
    const allAiRobots = this.getAiRobots();
    const allCompanies = this.getStandardCompanyList(
      this.getCompanies(),
      allAiRobots
    );
    return {
      robots: allAiRobots,
      companies: allCompanies,
      trackingKPIs: [],
    };
  },
  getAllTrackingKPIs() {
    const data = localStorage.getItem("PED-KPIs");
    if (data) return JSON.parse(data);
    return [];
  },
  saveTrackingKPIs(allKPIs) {
    localStorage.setItem("PED-KPIs", JSON.stringify(allKPIs));
  },
  getAllAiRobots() {
    const data = localStorage.getItem("PED-AiRobots");
    if (data) return JSON.parse(data);
    return [];
  },
  saveAiRobots(selectedAiRobots) {
    localStorage.setItem("PED-AiRobots", JSON.stringify(selectedAiRobots));
  },
  getAllCompanies() {
    const data = localStorage.getItem("PED-allCompanies");
    if (data) return JSON.parse(data);
    return [];
  },
  saveCompanies(selectedCompanies) {
    localStorage.setItem("PED-allCompanies", JSON.stringify(selectedCompanies));
  },
};

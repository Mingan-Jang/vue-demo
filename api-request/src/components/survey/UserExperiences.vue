<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExp">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && error">{{  error }}</p>
      
      <p v-else-if="!isLoading && (!results || results.length === 0)">No stored experience</p>
      <ul v-else-if ="!isLoading && results && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null
    };
  },
  methods: {
    loadExp: function () {
      this.isLoading = true;
      this.error = null
      var self = this; // 保存 this 的引用
      fetch('https://vue-demo-707cd-default-rtdb.firebaseio.com/surveys.json', {
        method: 'GET',
      })
        .then(function (response) {
          if (!response.ok) {
            throw new Error('Network response was not ok.');
          }
          return response.json();
        })
        .then(function (data) {
          self.isLoading = false;

          console.log('Success:', data);
          var result = [];
          for (var id in data) {
            result.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }
          self.results = result; // 使用保存的引用來設置數據
        })
        .catch(function (error) {
          self.isLoading = false;
          self.error = 'Failed to fetch';
          console.error('Error:', error);
        });
    },
  },
  mounted() {
    this.loadExp();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>

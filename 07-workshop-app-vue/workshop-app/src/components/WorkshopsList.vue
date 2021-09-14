<template>
  <div>
    <h1>List of Workshops</h1>
    <hr />
    <AppSpinner v-if="status === 'LOADING'" size="large" theme="primary" />
    <div v-else-if="status === 'LOADED'">
      <div class="row">
        <div
          class="col-12 col-md-4"
          v-for="workshop in workshops"
          :key="workshop.id"
        >
          <WorkshopCard :workshop="workshop"> </WorkshopCard>
        </div>
      </div>
    </div>
    <!-- 
            <button @click="this.showDialog = true">Open</button>
            You could pass :showDialog="showDialog" to a AppDialog for example to have it open close based on this boolean
        -->
    <AppAlert v-else-if="status === 'ERROR'" theme="danger">
      <template v-slot:heading>
        <span>Error</span>
        <hr />
      </template>
      <template v-slot:body>
        {{ error.message }}
      </template>
    </AppAlert>
  </div>
</template>

<script>
import { getWorkshops } from "@/services/workshops";
import WorkshopCard from "./WorkshopCard.vue";
export default {
  name: "WorkshopsList",
  components: {
    WorkshopCard,
  },
  data() {
    return {
      // status = 'LOADING' | 'LOADED' | 'ERROR'
      status: "LOADING",
      workshops: [],
      error: null,
    };
  },
  // lifecycle method
  async created() {
    try {
      const data = await getWorkshops();
      console.log(data);
      this.status = "LOADED";
      this.workshops = data;
    } catch (error) {
      this.status = "ERROR";
      this.error = error;
    }
  },
};
</script>

<style scoped></style>

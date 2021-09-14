<template>
  <router-link
    class="card text-reset text-decoration-none my-3"
    :to="`/workshops/${workshop.id}`"
  >
    <div class="card-body">
      <div class="card-img-container">
        <img
          class="card-img-top w-50 d-block mx-auto"
          :src="workshop.imageUrl"
          :alt="workshop.name"
        />
      </div>
      <h4 class="card-title">{{ workshop.name }}</h4>
      <div class="card-text">
        <div>
          {{ workshop.startDate | date("local") }} -
          {{ workshop.endDate | date("local") }}
        </div>
        <div>
          <span>{{ workshop.time }}</span>
        </div>
        <div class="my-3" v-html="workshop.description" v-show="isShown"></div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "WorkshopCard",
  props: {
    workshop: {
      type: Object,
      required: true,
    },
    isShown: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    formatDate() {},
  },
};
</script>

<style scoped>
.card {
  cursor: pointer;
}
.card:hover {
  box-shadow: 0px 0px 4px 0px goldenrod;
  background-color: #fcfcfc;
}
.card-img-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 150px;
  margin: 10px 0;
}
</style>

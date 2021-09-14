<template>
  <div>
    <div class="row" v-if="status === 'LOADING'">
      <div class="col-12">
        <app-alert theme="info">
          <template v-slot:heading>Working...</template>
          <template v-slot:body>
            Workshop details are being loaded. Hang on!
          </template>
        </app-alert>
        <app-spinner theme="dark" />
      </div>
    </div>
    <div class="row" v-else-if="status === 'ERROR'">
      <div class="col-12">
        <app-alert theme="danger">
          <template v-slot:heading>Error!</template>
          <template v-slot:body>
            {{ error.message }}
          </template>
        </app-alert>
      </div>
    </div>
    <template v-else>
      <div class="row">
        <div class="col-12">
          <h1>{{ workshop.name }}</h1>
          <hr />
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <img
            class="img-fluid"
            :src="workshop.imageUrl"
            :alt="workshop.name"
          />
        </div>
        <div class="col-8">
          <div class="row">
            <div class="col-3">
              <p>
                <small>
                  {{ workshop.startDate | date }}
                  -
                  {{ workshop.endDate | date }}
                </small>
              </p>
              <p>
                <small class="text-muted">
                  {{ workshop.time }}
                </small>
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-12" v-html="workshop.description"></div>
          </div>
        </div>
      </div>
    </template>

    <SessionsList :sessions="workshop.sessions" />
  </div>
</template>

<script>
import { getWorkshopById } from "@/services/workshops";
import SessionsList from "@/components/SessionsList";
export default {
  name: "WorkshopDetails",
  components: {
    SessionsList,
  },
  props: {
    id: {
      type: [Number, String],
      default: 1,
    },
  },
  data() {
    return {
      status: "LOADING",
      workshop: {
        sessions: [],
      },
      error: null,
    };
  },
  created() {
    getWorkshopById(this.id)
      .then((workshop) => {
        this.workshop = workshop;
        this.status = "LOADED";
      })
      .catch((error) => {
        this.error = error;
        this.status = "ERROR";
      });
  },
};
</script>

<style scoped></style>

<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h3>
          Details of new session
        </h3>
        <hr />
      </div>
    </div>
    <div class="col-12">
      <form novalidate @submit.prevent="addSession">
        <div class="form-group row">
          <label htmlFor="sequenceId" class="col-sm-3 col-form-label"
            >Sequence ID</label
          >
          <div class="col-sm-9">
            <input
              class="form-control"
              type="text"
              name="sequenceId"
              id="sequenceId"
              placeholder=""
              aria-describedby="sequenceHelpId"
              v-model.number="sessionDetails.sequenceId"
            />
            <small id="sequenceHelpId" class="text-muted"
              >Sequence ID is the serial number of the session in the
              workshop</small
            >
          </div>
        </div>
        <div class="form-group row">
          <label htmlFor="name" class="col-sm-3 col-form-label">Name</label>
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              name="name"
              id="name"
              placeholder=""
              aria-describedby="NameHelpId"
              v-model="sessionDetails.name"
            />
            <small id="NameHelpId" class="text-muted"
              >The title of the session</small
            >
          </div>
        </div>
        <div class="form-group row">
          <label htmlFor="speaker" class="col-sm-3 col-form-label"
            >Speaker(s)</label
          >
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              name="speaker"
              id="speaker"
              placeholder=""
              aria-describedby="speakerHelpId"
              v-model="sessionDetails.speaker"
            />
            <small id="speakerHelpId" class="text-muted"
              >The name of the speaker(s) for this session. Separate speaker
              names by a comma. Example
              <strong>John Doe, Jane Doe</strong>.</small
            >
          </div>
        </div>
        <div class="form-group row">
          <label htmlFor="duration" class="col-sm-3 col-form-label"
            >Duration</label
          >
          <div class="col-sm-9">
            <input
              type="number"
              class="form-control"
              name="duration"
              id="duration"
              placeholder=""
              aria-describedby="durationHelpId"
              v-model.number="sessionDetails.duration"
            />
            <small id="durationHelpId" class="text-muted"
              >The length of the session in hours</small
            >
          </div>
        </div>
        <div class="form-group row">
          <label htmlFor="level" class="col-sm-3 col-form-label">Level</label>
          <div class="col-sm-9">
            <select
              class="form-control"
              name="level"
              id="level"
              v-model="sessionDetails.level"
            >
              <option value="">-- Select the level of the session --</option>
              <option value="Basic">Basic</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label htmlFor="duration" class="col-sm-3 col-form-label"
            >Abstract</label
          >
          <div class="col-sm-9">
            <textarea
              type="number"
              class="form-control"
              name="abstract"
              id="abstract"
              aria-describedby="abstractHelpId"
              v-model="sessionDetails.abstract"
            ></textarea>
            <small id="abstractHelpId" class="text-muted"
              >A brief description of the session topics</small
            >
          </div>
        </div>
        <div class="form-group row">
          <div class="offset-sm-3 col-sm-9">
            <button type="submit" class="btn btn-primary mr-2">
              Add session
            </button>
            <button type="button" class="btn btn-danger">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { addSession } from "@/services/sessions";
export default {
  name: "AddSession",
  data() {
    return {
      sessionDetails: {
        sequenceId: 0,
        name: "",
        speaker: "",
        duration: 0,
        level: "",
        abstract: "",
      },
    };
  },
  props: {
    workshopId: {
      type: Number,
      required: true,
    },
  },
  computed: {
    completeSessionDetails() {
      return {
        ...this.sessionDetails,
        workshopId: this.workshopId,
        upvoteCount: 0,
      };
    },
  },
  methods: {
    async addSession() {
      console.log(this.completeSessionDetails);
      try {
        const session = await addSession(this.completeSessionDetails);
        console.log(session);
        // refresh to show the workshop details page
        this.$router.push({
          name: "workshop details",
        });
      } catch (error) {
        alert(error.message);
      }
    },
  },
};
</script>

<style scoped></style>

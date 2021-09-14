<template>
  <div class="row">
    <div class="col-12">
      <h3>
        Sessions in this workshop
      </h3>
      <hr />
    </div>
    <div class="col-12">
      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="session in sessions"
          :key="session.id"
        >
          <div class="row">
            <div class="col-1">
              {{ session.upvoteCount }}
            </div>
            <div class="col-11">
              <div class="lead">{{ session.name }}</div>
              <div class="h6">by {{ session.speaker }}</div>
              <div>
                <span class="badge" :class="getBadgeClass(session.level)">{{
                  session.level
                }}</span>
              </div>
              <div class="my-2">{{ session.duration }} hours</div>
              <p>
                {{ session.abstract }}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SessionsList",
  props: {
    sessions: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    getBadgeClass(level) {
      console.log(level);
      return {
        "bg-primary": level === "Basic",
        "bg-info": level === "Intermediate",
        "bg-warning": level === "Advanced",
      };
    },
  },
};
</script>

<style scoped></style>

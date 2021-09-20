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
          v-for="(session, itemIndex) in sessions"
          :key="session.id"
        >
          <div class="row">
            <div class="col-1 d-flex flex-column text-center">
              <app-voting-widget
                :numVotes="session.upvoteCount"
                @upvote="vote('upvote', itemIndex, session.id)"
                @downvote="vote('downvote', itemIndex, session.id)"
              />
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
import { castVoteForASession } from "@/services/sessions";
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
    async vote(voteType, itemIndex, sessionId) {
      console.log(voteType, itemIndex, sessionId);
      try {
        const updatedSession = await castVoteForASession(sessionId, voteType);
        this.sessions.splice(itemIndex, 1, updatedSession);
        // this.sessions = [
        //     ...this.sessions.slice( 0, itemIndex ),
        //     updatedSession,
        //     ...this.sessions.slice( itemIndex + 1 )
        // ]
      } catch (error) {
        alert("There was some error\n" + error.message);
      }
    },
  },
};
</script>

<style scoped></style>

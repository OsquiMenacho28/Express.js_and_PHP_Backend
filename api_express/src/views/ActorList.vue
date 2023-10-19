<template>
  <div>
    <h5 class="fw-light">Click a record to Update or Delete it.</h5>
    <div class="container text-center table-responsive my-4">
      <table
        class="table table-light table-striped table-hover table-bordered border-primary align-middle caption-top shadow"
      >
        <caption
          class="text-center h3 text-white bg-success bg-opacity-50 rounded-3 fw-bold"
        >
          ACTORS LIST
        </caption>
        <thead class="table-primary">
          <tr>
            <th>actor_id</th>
            <th>first_name</th>
            <th>last_name</th>
            <th>last_update</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="actor in Actors"
            :key="actor.actor_id"
            @click="this.$router.push(`/actors/${actor.actor_id}`)"
          >
            <td>{{ actor.actor_id }}</td>
            <td>{{ actor.first_name }}</td>
            <td>{{ actor.last_name }}</td>
            <td>{{ actor.last_update }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { getActors } from "../API/ActorService";

export default {
  data() {
    return {
      Actors: [],
    };
  },
  methods: {
    async loadActorsList() {
      const res = await getActors();
      console.log(res);
      this.Actors = res;
    },
  },
  mounted() {
    this.loadActorsList();
  },
};
</script>
<style></style>

<template>
  <ul>
    <li
      v-for="actor in Actors"
      :key="actor.actor_id"
      @click="this.$router.push(`/actors/${actor.actor_id}`)"
    >
      {{ actor.first_name + " " + actor.last_name }}
    </li>
  </ul>
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

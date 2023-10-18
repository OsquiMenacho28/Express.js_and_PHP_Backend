<template>
  <div>
    <h1>Actor Detail</h1>
    <form @submit.prevent="handleUpdate()">
      <label for="actorFirstName">First Name:</label>
      <input
        type="text"
        name="actorFirstName"
        id="actorFirstName"
        placeholder="Enter your First Name"
        v-model="currentActor.first_name"
      />
      <label for="actorLastName">Last Name:</label>
      <input
        type="text"
        name="actorLastName"
        id="actorLastName"
        placeholder="Enter your Last Name"
        v-model="currentActor.last_name"
      />
      <button>UPDATE</button>
    </form>
    <button @click="handleDelete()">DELETE</button>
  </div>
</template>
<script>
import { deleteActor, getActorById, updateActor } from "../API/ActorService";
export default {
  data() {
    return {
      currentActor: {},
    };
  },
  methods: {
    async loadActorById(actor_id) {
      const res = await getActorById(actor_id);
      console.log(res);
      this.currentActor = res;
    },
    async handleUpdate() {
      const res = await updateActor(this.$route.params.id, this.currentActor);
      console.log(res);
      this.$router.push({ name: "actors" });
    },
    async handleDelete() {
      const res = await deleteActor(this.$route.params.id);
      console.log(res);
      this.$router.push({ name: "actors" });
    },
  },
  mounted() {
    this.loadActorById(this.$route.params.id);
  },
};
</script>
<style></style>

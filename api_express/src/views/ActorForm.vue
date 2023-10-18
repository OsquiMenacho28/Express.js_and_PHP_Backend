<template>
  <form @submit.prevent="saveActor()">
    <label for="actorFirstName">First Name:</label>
    <input
      type="text"
      name="actorFirstName"
      id="actorFirstName"
      placeholder="Enter your First Name"
      v-model="Actor.first_name"
    />
    <label for="actorLastName">Last Name:</label>
    <input
      type="text"
      name="actorLastName"
      id="actorLastName"
      placeholder="Enter your Last Name"
      v-model="Actor.last_name"
    />
    <button>SAVE</button>
  </form>
</template>

<script>
import { createActor } from "../API/ActorService";

export default {
  data() {
    return {
      Actor: {
        first_name: "",
        last_name: "",
      },
    };
  },
  methods: {
    async saveActor() {
      const res = await createActor(this.Actor);
      console.log(res);
    },
  },
};
</script>

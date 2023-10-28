<template>
  <div class="container w-75 pb-5">
    <h1 class="mb-2 py-2 fw-bold text-white bg-warning bg-opacity-25 rounded-5">
      ACTOR FORM
    </h1>
    <h5 class="mb-4 py-3 fw-bold text-white bg-info bg-opacity-50 rounded-5">
      Please fill in the blanks and register an Actor.
    </h5>
    <div class="bg-body-secondary text-start py-3 px-5 rounded-5 shadow">
      <form @submit.prevent="saveActor()" method="post">
        <div class="mb-3">
          <label for="actorFirstName" class="form-label">First Name:</label>
          <input
            type="text"
            name="actorFirstName"
            id="actorFirstName"
            placeholder="Enter your First Name"
            v-model="Actor.first_name"
            class="form-control"
            autofocus
          />
        </div>
        <div class="mb-3">
          <label for="actorLastName" class="form-label">Last Name:</label>
          <input
            type="text"
            name="actorLastName"
            id="actorLastName"
            placeholder="Enter your Last Name"
            v-model="Actor.last_name"
            class="form-control"
          />
        </div>
        <div class="text-center">
          <button class="btn btn-primary shadow">SAVE</button>
        </div>
      </form>
    </div>
  </div>
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
      const nameRegExp = /^[A-Za-záéíóúüÁÉÍÓÚÜñÑ\s]{3,}$/;
      if (this.Actor.first_name === "") {
        this.showMessage("Error", "Enter your first name please.", "error");
      } else if (!nameRegExp.test(this.Actor.first_name)) {
        this.showMessage("Error", "Please enter a valid first name.", "error");
      } else if (this.Actor.last_name === "") {
        this.showMessage("Error", "Enter your last name please", "error");
      } else if (!nameRegExp.test(this.Actor.last_name)) {
        this.showMessage("Error", "Please enter a valid last name.", "error");
      } else {
        const response = await createActor(this.Actor);
        console.log(response);
        this.showMessage("¡Success!", response.message, "success");
        this.$router.push({ name: "actors" });
      }
    },
    showMessage(messageTitle, messageText, messageIcon) {
      this.$swal({
        title: messageTitle,
        text: messageText,
        icon: messageIcon,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    },
  },
};
</script>

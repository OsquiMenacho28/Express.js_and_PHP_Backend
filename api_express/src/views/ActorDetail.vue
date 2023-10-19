<template>
  <div class="container w-75">
    <h1 class="mb-4 fw-light">ACTOR DETAIL</h1>
    <h5 class="mb-4 fw-light">
      Please fill in the blanks. <strong>Update</strong> or
      <strong>Delete</strong> an Actor.
    </h5>
    <div class="bg-body-secondary text-start py-3 px-5 rounded-5 shadow">
      <form @submit.prevent="handleUpdate()">
        <div class="mb-3">
          <label for="actorFirstName" class="form-label">First Name:</label>
          <input
            type="text"
            name="actorFirstName"
            id="actorFirstName"
            placeholder="Enter your First Name"
            v-model="currentActor.first_name"
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
            v-model="currentActor.last_name"
            class="form-control"
          />
        </div>
        <div class="text-center mb-3">
          <button class="btn btn-outline-success w-100 shadow">UPDATE</button>
        </div>
      </form>
      <div class="text-center">
        <button
          class="btn btn-outline-danger w-100 shadow"
          @click="handleDelete()"
        >
          DELETE
        </button>
      </div>
    </div>
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
      const nameRegExp = /^[A-Za-záéíóúüÁÉÍÓÚÜñÑ\s]{3,}$/;
      if (this.currentActor.first_name === "") {
        this.showMessage("Error", "Enter your first name please.", "error");
      } else if (!nameRegExp.test(this.currentActor.first_name)) {
        this.showMessage("Error", "Please enter a valid first name.", "error");
      } else if (this.currentActor.last_name === "") {
        this.showMessage("Error", "Enter your last name please.", "error");
      } else if (!nameRegExp.test(this.currentActor.last_name)) {
        this.showMessage("Error", "Please enter a valid last name.", "error");
      } else {
        const res = await updateActor(this.$route.params.id, this.currentActor);
        console.log(res);
        this.showMessage("¡Success!", res.message, "success");
        this.$router.push({ name: "actors" });
      }
    },
    handleDelete() {
      const swalWithBootstrapButtons = this.$swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });

      swalWithBootstrapButtons
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true,
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            const res = await deleteActor(this.$route.params.id);
            console.log(res);
            swalWithBootstrapButtons.fire("¡Success!", res.message, "success");
            this.$router.push({ name: "actors" });
          } else if (result.dismiss === this.$swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire(
              "Cancelled",
              "Registration deletion cancelled successfully.",
              "error"
            );
          }
        });
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
  mounted() {
    this.loadActorById(this.$route.params.id);
  },
};
</script>
<style></style>

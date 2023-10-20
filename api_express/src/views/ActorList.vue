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
            v-for="actor in displayedActors"
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
    <div class="mb-5">
      <button @click="previousPage()" class="btn btn-outline-secondary me-5">
        P&aacute;gina Anterior
      </button>
      <button
        @click="nextPage()"
        class="btn btn-outline-primary"
        :disabled="isNextPageDisabled"
      >
        Siguiente P&aacute;gina
      </button>
    </div>
  </div>
</template>

<script>
import { getActors } from "../API/ActorService";

export default {
  data() {
    return {
      Actors: [],
      page: 1,
      perPage: 10,
    };
  },
  methods: {
    async loadActorsList() {
      const res = await getActors();
      console.log(res);
      this.Actors = res;
    },
    nextPage() {
      if (!this.isNextPageDisabled) {
        this.page += 1;
        this.fetchPage();
      }
    },
    previousPage() {
      if (this.page > 1) {
        this.page -= 1;
        this.fetchPage();
      }
    },
    async fetchPage() {
      return fetch(`/actors/?page=${this.page}`).then(() => {
        this.loadActorsList();
      });
    },
    paginate(Actors) {
      var page = this.page;
      var perPage = this.perPage;
      var from = page * perPage - perPage;
      var to = page * perPage;
      return Actors.slice(from, to);
    },
  },
  computed: {
    displayedActors() {
      return this.paginate(this.Actors);
    },
    isNextPageDisabled() {
      const totalPages = Math.ceil(this.Actors.length / this.perPage);
      return this.page >= totalPages;
    },
  },
  mounted() {
    this.fetchPage();
  },
};
</script>
<style></style>

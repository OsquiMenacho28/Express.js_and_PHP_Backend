<template>
  <div>
    <h5 class="fw-bold text-white py-3 bg-info bg-opacity-50">
      Click a record to Update or Delete it.
    </h5>
    <div class="container text-center table-responsive my-4">
      <table
        class="table table-light table-striped table-hover table-bordered border-primary align-middle caption-top shadow"
      >
        <caption
          class="text-center h3 text-white bg-primary bg-opacity-75 rounded-3 fw-bold"
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
            v-for="actor in Actors.data"
            :key="actor.actor_id"
            @click="navigateToActor(actor.actor_id)"
          >
            <td>{{ actor.actor_id }}</td>
            <td>{{ actor.first_name }}</td>
            <td>{{ actor.last_name }}</td>
            <td>{{ actor.last_update }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination buttons -->
    <nav>
      <ul class="pagination pb-5 mb-0 justify-content-center">
        <li
          class="page-item"
          :class="{ disabled: Actors.meta.currentPage == 1 }"
        >
          <span
            class="page-link"
            @click="loadActorsList(--Actors.meta.currentPage)"
            >Previous page</span
          >
        </li>
        <li
          class="page-item"
          v-for="page in pageRange"
          :key="page"
          :class="{ active: Actors.meta.currentPage == page }"
        >
          <a class="page-link" @click="loadActorsList(page)">{{ page }}</a>
        </li>
        <li
          class="page-item"
          :class="{
            disabled: Actors.meta.currentPage == Actors.meta.totalPages,
          }"
        >
          <span
            class="page-link"
            @click="loadActorsList(++Actors.meta.currentPage)"
            >Next page</span
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { getActors } from "../API/ActorService";

export default {
  data() {
    return {
      Actors: {
        data: [],
        meta: {
          currentPage: 1,
          totalPages: 1,
        },
      },
    };
  },
  methods: {
    async loadActorsList(page) {
      const response = await getActors(page);
      this.Actors.data = response[0];
      console.log(this.Actors.data);
      this.Actors.meta.currentPage = response.currentPage;
      this.Actors.meta.totalPages = response.totalPages;
    },
    navigateToActor(actor_id) {
      this.$router.push(`/actors/${actor_id}`);
    },
  },
  computed: {
    pageRange() {
      const range = 3;
      const start = Math.max(1, this.Actors.meta.currentPage - range);
      const end = Math.min(
        this.Actors.meta.totalPages,
        this.Actors.meta.currentPage + range
      );
      const pageArray = [];
      for (let page = start; page <= end; page++) {
        pageArray.push(page);
      }
      return pageArray;
    },
  },
  mounted() {
    this.loadActorsList(this.Actors.meta.currentPage);
  },
};
</script>

<style></style>

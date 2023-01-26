<template>
  <div>
    <header>
      <h1>Admin</h1>
      <button @click="logout" id="logout">Logout</button>
    </header>

    <section>
      <!-- <h2>Shows Scheduler</h2> -->

      <SchedulerForm />

      <div class="table">
        <table>
          <thead>
            <th>Date</th>
            <th>Time</th>
            <th>Location</th>
            <th>Neighborhood</th>
          </thead>
          <tbody>
            <tr v-for="(show, i) in shows" :key="i">
              <td>{{ formatDate(show.date) }}</td>
              <td>{{ show.time }}</td>
              <td>{{ show.venue }}</td>
              <td>{{ show.neighborhood }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useCollection, useFirestore, useFirebaseAuth } from "vuefire";
import { collection, query, orderBy } from "firebase/firestore";
import { format } from "date-fns";

import SchedulerForm from "../components/SchedulerForm.vue";

const router = useRouter();
const auth = useFirebaseAuth();

function logout() {
  auth.signOut();
  router.push({ name: "home" });
}

const db = useFirestore();
// const shows = useCollection(collection(db, "shows"));
const shows = useCollection(
  query(collection(db, "shows"), orderBy("date", "desc")),
  {
    ssrKey: "watw",
  }
);

function formatDate(date) {
  const _date = date.toDate();
  if (_date == "Invalid Date") return date;
  const dayOfWeek = format(_date, "cccc");
  const month = format(_date, "MMMM");
  const dayOfMonth = format(_date, "d");
  const year = format(_date, "y");

  return `${dayOfWeek}, ${month} ${dayOfMonth}, ${year}`;
}
</script>

<style scoped>
section {
  max-width: 1000px;
  margin: 0 auto;
  padding: 24px 24px 140px;
}

header {
  padding: 12px 24px;
  background-color: rgba(0, 0, 0, 0.5);

  margin-bottom: 2rem;
}

#logout {
  position: absolute;
  top: 24px;
  right: 24px;
}

.table {
  /* max-width: 105%;
  margin-right: -10%;
  overflow-x: scroll; */
}

table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid black;
  margin: 20px 0px;

  min-width: 900px;
}

form table tr {
  display: grid;
}

th,
td {
  padding: 10px;
  border: 1px solid black;
}

th {
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.35);
}

td {
  background-color: rgba(0, 0, 0, 0.25);
}

th:nth-child(1),
td:nth-child(1) {
  width: 30%;
}

th:nth-child(2),
td:nth-child(2) {
  width: 15%;
}
</style>

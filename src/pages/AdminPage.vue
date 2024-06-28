<template>
  <div>
    <header>
      <h1>Admin</h1>
      <button @click="logout" id="logout">Logout</button>
    </header>

    <section>
      <!-- <h2>Shows Scheduler</h2> -->

      <Modal :is-open="isModalOpen" @close="isModalOpen = false">
        <SchedulerForm @submit="isModalOpen = false" />
      </Modal>

      <Modal :is-open="isEdit" @close="isEdit = false">
        <EditForm v-if="isEdit" @submit="isEdit = null" :show="isEdit" />
      </Modal>

      <button @click="isModalOpen = true" class="add-show">+ Add Show</button>

      <div class="table">
        <table>
          <thead>
            <th>Date</th>
            <th>Time</th>
            <th>Location</th>
            <th>Neighborhood</th>
            <th></th>
          </thead>
          <tbody>
            <tr
              v-for="(show, i) in shows"
              :key="i"
              :class="{ past: show.date.toDate() < new Date() }"
            >
              <td>{{ formatDate(show.date) }}</td>
              <td>{{ show.time }}</td>
              <td>{{ show.venue }}</td>
              <td>{{ show.neighborhood }}</td>
              <td>
                <fa-icon
                  icon="fa-solid fa-pen"
                  title="Edit show"
                  @click="editShow(show)"
                  class="action"
                />
                <fa-icon
                  icon="fa-solid fa-trash"
                  title="Delete show"
                  @click="deleteShow(show)"
                  class="action"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useCollection, useFirestore, useFirebaseAuth } from "vuefire";
import { collection, query, orderBy, doc, deleteDoc } from "firebase/firestore";
import { format } from "date-fns";

import SchedulerForm from "../components/SchedulerForm.vue";
import EditForm from "../components/EditForm.vue";
import Modal from "../components/Modal.vue";

const router = useRouter();
const auth = useFirebaseAuth();

function logout() {
  auth.signOut();
  router.push({ name: "home" });
}

const isModalOpen = ref(false);

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

function deleteShow(show) {
  if (
    window.confirm(`Are you sure you want to delete the ${show.venue} show?`)
  ) {
    deleteDoc(doc(db, "shows", show.id));
  }
}

const isEdit = ref();
function editShow(show) {
  isEdit.value = { id: show.id, ...show };
}
</script>

<style scoped>
section {
  max-width: 1000px;
  margin: 0 auto;
  padding: 24px 24px 140px;
  font-size: 16px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background-color: rgba(0, 0, 0, 0.5);

  margin-bottom: 2rem;
}

.table {
  overflow: scroll;
  margin-left: -24px;
  margin-right: -24px;
  padding-left: 24px;
  padding-right: 24px;
}

table {
  /* table-layout: fixed; */
  width: 100%;
  min-width: 900px;
  border-collapse: collapse;
  border: 3px solid black;
  margin: 20px 0px;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
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
  background-color: rgba(0, 0, 0, 0.9);
}

td {
  background-color: rgba(0, 0, 0, 0.85);
}

th:nth-child(1),
td:nth-child(1) {
  width: 30%;
}

th:nth-child(2),
td:nth-child(2) {
  width: 15%;
}

td:last-child {
  width: 10%;
  text-align: center;
}

td:last-child > * {
  padding: 0 7px;
}

.past {
  opacity: 0.75;
}

.action {
  cursor: pointer;
}

button.add-show {
  line-height: 32px;
  font-size: 16px;
  margin-top: 1rem;
  padding: 0 15px;
  box-sizing: inherit;
  background-color: green;
  border: 1px solid rgba(0, 0, 0, 0.25);
  color: white;
  border-radius: 5px;
  width: 100%;
  max-width: 450px;
  margin: auto;
  display: block;
}
</style>

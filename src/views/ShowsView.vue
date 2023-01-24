<script setup>
import { format, startOfDay } from "date-fns";
import { useCollection, useFirestore } from "vuefire";
import { query, collection, where, Timestamp } from "firebase/firestore";
// import { db } from "../firebase";

const date = Timestamp.fromDate(startOfDay(new Date()));
const db = useFirestore();
const shows = useCollection(
  query(collection(db, "shows"), where("date", ">=", date)),
  { ssrKey: "watw" }
);

function formatDate(date) {
  const _date = date.toDate();
  if (_date == "Invalid Date") return date;
  const dayOfWeek = format(_date, "cccc");
  const month = format(_date, "MMMM");
  const dayOfMonth = formatOrdinal(format(_date, "do"));

  return `${dayOfWeek}, <span class="nowrap">${month} ${dayOfMonth}</span>`;
}

function formatOrdinal(date) {
  return date.replace(/(\D+)/, "<sup>$1</sup>");
}
</script>

<template>
  <section>
    <h2>Shows</h2>

    <div v-for="(show, i) in shows" :key="i" class="show">
      <p><span v-html="formatDate(show.date)"></span></p>
      <p>{{ show.venue }}</p>
      <p>
        <small>{{ show.time }}</small>
      </p>
      <p>
        <small>{{ show.neighborhood }}</small>
      </p>
    </div>
  </section>

  <section>
    <h3>Booking</h3>

    <p class="center">
      <a href="mailto:wymanandthewolves@gmail.com">
        wymanandthewolves@gmail.com
      </a>
    </p>
  </section>
</template>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 1em;
}

h3 {
  text-align: center;
}

.show {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px 25px;
  margin-bottom: 40px;
}

.show p {
  line-height: 1.25;
}

.show p:nth-child(2n - 1) {
  text-align: right;
}

.nowrap {
  white-space: nowrap;
}

@media (max-width: 900px) {
  section {
    font-size: 20px;
  }
}
</style>

<template>
  <form @submit.prevent="handleSubmit">
    <table>
      <tbody>
        <tr>
          <td>
            <label> Date </label>
            <input type="date" v-model="date" placeholder="date" />
          </td>
          <td>
            <label> Time </label>
            <input type="text" v-model="time" placeholder="evening, e.g." />
          </td>
          <td>
            <label> Venue </label>
            <input type="text" v-model="venue" placeholder="venue" />
          </td>
          <td>
            <label> Neighborhood </label
            ><input
              type="text"
              v-model="neighborhood"
              placeholder="Silverlake, e.g."
            />
          </td>
          <td>
            <button type="submit">+ add show</button>
          </td>
        </tr>
      </tbody>
    </table>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { collection, addDoc } from "firebase/firestore";
import { useFirestore } from "vuefire";

const db = useFirestore();

const date = ref("");
const time = ref("");
const venue = ref("");
const neighborhood = ref("");

async function handleSubmit() {
  // adjust date to account for timezone shenanigans
  const adjustedDate = new Date(date.value);
  adjustedDate.setTime(adjustedDate.getTime() + 8 * 60 * 60 * 1000);

  console.log({
    date: adjustedDate,
    time: time.value,
    venue: venue.value,
    neighborhood: neighborhood.value,
  });

  // TODO: error handling
  await addDoc(collection(db, "shows"), {
    date: adjustedDate,
    time: time.value,
    venue: venue.value,
    neighborhood: neighborhood.value,
  });

  // clear form
  [date, time, venue, neighborhood].forEach((_ref) => (_ref.value = ""));
  //   date.value = "";
  //   time.value = "";
  //   venue.value = "";
  //   neighborhood.value = "";
}
</script>

<style scoped>
form {
}

table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 2px solid black;
  margin: 20px 0px;
}

form table tr {
  display: grid;
  grid-template-columns: 30% 15% 1fr 1fr;
}

@media (max-width: 900px) {
  form table tr {
    grid-template-columns: 1fr;
  }
}

td {
  /* padding: 10px; */
  border: 1px solid black;
  padding: 0;
  height: 100%;
}

td {
  position: relative;
  background-color: rgba(0, 0, 0, 0.25);
}

td:last-child {
  position: absolute;
  right: -10px;
  transform: translateX(100%);
  background-color: transparent;
  border: none;
  display: flex;
}

label {
  position: absolute;
  top: 0;
  transform: translateY(-100%);
  background-color: rgba(0, 0, 0, 0.25);
  border: 1px solid black;
  border-bottom: 0;
  width: 100%;
  left: 0;
  padding: 3px 10px;
  box-sizing: border-box;
  border-radius: 5px 5px 0 0;
}

input {
  width: 100%;
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.95);
  /* border: none; */
  /* border: 10px solid rgba(0, 0, 0, 0); */
  border-style: solid;
}

button {
  line-height: 32px;
  font-size: 16px;
  padding: 0 15px;
  box-sizing: inherit;
  background-color: green;
  border: 1px solid rgba(0, 0, 0, 0.25);
  color: white;
  border-radius: 10px;
}
</style>

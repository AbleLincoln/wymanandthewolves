<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label> Date </label>
      <input type="date" v-model="date" placeholder="date" />
    </div>
    <div>
      <label> Time </label>
      <input type="text" v-model="time" placeholder="evening, e.g." />
    </div>
    <div>
      <label> Venue </label>
      <input type="text" v-model="venue" placeholder="venue" />
    </div>
    <div>
      <label> Neighborhood </label
      ><input
        type="text"
        v-model="neighborhood"
        placeholder="Silverlake, e.g."
      />
    </div>
    <button type="submit">+ add show</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { collection, addDoc } from "firebase/firestore";
import { useFirestore } from "vuefire";

const emits = defineEmits(["submit"]);

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

  emits("submit");
}
</script>

<style scoped>
form > div {
  margin: 1rem 0;
}

form > div:first-child {
  margin-top: 0;
}

input {
  width: 900px;
  max-width: 100%;
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.95);
  border-style: solid;
  display: block;
}

button {
  line-height: 32px;
  font-size: 16px;
  margin-top: 1rem;
  padding: 0 15px;
  box-sizing: inherit;
  background-color: green;
  border: 1px solid rgba(0, 0, 0, 0.25);
  color: white;
  border-radius: 10px;
  width: 100%;
}
</style>

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
    <button type="submit">save</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { doc, updateDoc } from "firebase/firestore";
import { useFirestore } from "vuefire";
import { format } from "date-fns";

const props = defineProps({
  show: Object,
});

const emits = defineEmits(["submit"]);

const db = useFirestore();

const date = ref(format(props.show.date.toDate(), "yyyy-MM-dd"));
const time = ref(props.show.time);
const venue = ref(props.show.venue);
const neighborhood = ref(props.show.neighborhood);

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
  await updateDoc(doc(db, "shows", props.show.id), {
    date: adjustedDate,
    time: time.value,
    venue: venue.value,
    neighborhood: neighborhood.value,
  });

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

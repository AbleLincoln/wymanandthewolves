<script setup>
import { format } from "date-fns";
</script>

<script>
export default {
  data() {
    return {
      shows: [
        {
          date: "2022/10/16",
          time: "1pm",
          venue: "Mother's Tavern",
          location: "Sunset Beach",
        },
        {
          date: "2022/10/17",
          time: "9pm",
          venue: "Harvard and Stone",
          location: "East Hollywood",
        },
        {
          date: "2022/10/21",
          time: "nighttime",
          venue: "Silverlake Lounge",
          location: "Silverlake",
        },
        {
          date: "2022/10/22",
          time: "3pm",
          venue: "Salty Bear Brewing",
          location: "Costa Mesa",
        },
        {
          date: "2022/10/23",
          time: "7pm",
          venue: "Skip the Record",
          location: "secret location",
        },
        {
          date: "2022/10/24",
          time: "9pm",
          venue: "Harvard and Stone",
          location: "East Hollywood",
        },
        {
          date: "👻 Halloween 🎃",
          time: "9pm",
          venue: "Harvard and Stone",
          location: "East Hollywood",
        },
        {
          date: "2022/11/02",
          time: "9pm",
          venue: "Good Times at Davey Wayne's",
          location: "Hollywood",
        },
        {
          date: "2022/11/06",
          time: "8pm",
          venue: "Redwood Bar",
          location: "DTLA",
        },
      ],
    };
  },

  methods: {
    formatDate(date) {
      const _date = new Date(date);
      if (_date == "Invalid Date") return date;
      const dayOfWeek = format(_date, "cccc");
      const month = format(_date, "MMMM");
      const dayOfMonth = this.formatOrdinal(format(_date, "do"));

      return `${dayOfWeek}, <span class="nowrap">${month} ${dayOfMonth}</span>`;
    },
    formatOrdinal(date) {
      return date.replace(/(\D+)/, "<sup>$1</sup>");
    },
  },
};
</script>

<template>
  <section>
    <h2>Shows</h2>

    <div v-for="(show, i) in shows" :key="i" class="show">
      <p>
        <span v-html="formatDate(show.date)"></span><br /><small>{{
          show.time
        }}</small>
      </p>
      <p>
        {{ show.venue }} <br /><small>{{ show.location }}</small>
      </p>
    </div>
  </section>
</template>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 1em;
}

section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 16px 140px;
  font-size: 22px;
}

.show {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 25px;
  margin-bottom: 40px;
}

.show p {
  line-height: 1.25;
}

.show p:first-child {
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

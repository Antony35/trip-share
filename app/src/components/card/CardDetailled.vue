

<template>
<div class="flex flex-row md:flex-col gap-2 overflow-x-auto scrollbar-hide py-4">
  <div v-for="(activity) in apiData" :key="activity.id" class="flex flex-col md:flex-row md:justify-between md:items-center md:w-full gap-2 border-2 p-4 border-stone-200 rounded-xl flex-shrink-0 w-80">
    <div class="flex gap-2 items-center w-64 md:w-80">
      <img :src="activity.image" alt="Image" class="h-16 w-16 object-cover rounded-xl">
      <span class="h-14 w-[2px] bg-stone-300 rounded-full"></span>
      <div>
        <h4 class="text-wrap text-lg">{{ activity.title}}</h4>
        <p class="text-xs">dans {{ formatRelativeTime(activity.date) }}</p>
      </div>
    </div>
    <div class="flex flex-col justify-center h-full md:w-72">
      <div class="flex gap-2 items-center">
        <svg id="fi_3240587" enable-background="new 0 0 347.442 347.442" viewBox="0 0 347.442 347.442" width="16px" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m173.721 347.442c95.919 0 173.721-77.802 173.721-173.721s-77.802-173.721-173.721-173.721-173.721 77.802-173.721 173.721 77.802 173.721 173.721 173.721zm-12.409-272.99c0-6.825 5.584-12.409 12.409-12.409s12.409 5.584 12.409 12.409v93.313l57.39 45.912c5.336 4.281 6.204 12.098 1.923 17.434-2.42 3.04-6.018 4.653-9.679 4.653-2.73 0-5.46-.869-7.755-2.73l-62.043-49.634c-2.916-2.358-4.653-5.894-4.653-9.679v-99.269z"></path></g></g></svg>
        <p>{{ new Date(activity.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }} - {{ new Date(activity.endTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }}</p>
      </div>
      <div class="flex gap-2 items-center">
        <svg viewBox="0 0 64 64" width="16px" xmlns="http://www.w3.org/2000/svg" id="fi_3177361"><g id="Pin"><path d="m32 0a24.0319 24.0319 0 0 0 -24 24c0 17.23 22.36 38.81 23.31 39.72a.99.99 0 0 0 1.38 0c.95-.91 23.31-22.49 23.31-39.72a24.0319 24.0319 0 0 0 -24-24zm0 35a11 11 0 1 1 11-11 11.0066 11.0066 0 0 1 -11 11z"></path></g></svg>
        <p>{{ activity.location }}</p>
      </div>
    </div>
    <div class="flex justify-between items-center gap-2">
      <div class="flex gap-1 items-center">
        <span :class="`h-2 w-2 rounded-full ${activity.registered ? 'bg-green-500' : 'bg-stone-500'}`"></span>
        <p :class="`text-sm text-gray-500 ${activity.registered ? 'text-green-500' : 'text-stone-500'}`">{{ activity.registered ? 'Inscrit' : 'Non inscrit' }}</p>
      </div>
      <h5 class="text-xl">{{ activity.expense.toFixed(2) }}€</h5>
    </div>
  </div>
</div>
</template>


<script setup>
import { defineProps } from 'vue';
import formatRelativeTime from "@/utils/date/DateFormatUtils.ts";

defineProps({
  apiData: {
    type: Array,
    required: true,
    default: () => [],
  },
})

</script>

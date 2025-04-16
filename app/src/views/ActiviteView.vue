<script setup>
import SidebarComponent from "@/components/navbar/SidebarComponent.vue";
import CardWithImage from "@/components/card/CardWithImage.vue";
const activity = [
  {
    id: 1,
    title: "Visite maritime îles Athènes",
    expense: 14.05,
    date: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
    image: "https://images.unsplash.com/photo-1622500230863-94ebf0748181?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    registered : true,
  },
  {
    id: 3,
    title: "Visite musée d'Athènes",
    expense: 14.05,
    date: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
    image: "https://plus.unsplash.com/premium_photo-1668618252814-76fd5206f523?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    registered : true,
  },
  {
    id: 5,
    title: "Balade en bateau",
    expense: 14.05,
    date: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
    image: "https://plus.unsplash.com/premium_photo-1675802755792-a7cfd346b5be?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    registered : true,
  },

]

</script>

<template>
  <SidebarComponent>
    <CardWithImage title="Mes prochaines activités" :api-data="activity" categorie="activité"/>
  </SidebarComponent>
</template>

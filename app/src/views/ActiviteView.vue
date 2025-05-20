<script setup>
import SidebarComponent from "@/components/navbar/SidebarComponent.vue";
import CardWithImage from "@/components/card/CardWithImage.vue";
import CardDetailled from "@/components/card/CardDetailled.vue";
const activity = [
  {
    id: 1,
    title: "Visite maritime îles Athènes",
    expense: 14.05,
    date: new Date(Date.now() + 15 * 60 * 1000).toISOString(),
    startTime: new Date(new Date().setHours(18, 0, 0, 0)).toISOString(),
    endTime: new Date(new Date().setHours(19, 0, 0, 0)).toISOString(),
    location: "4 rue du Port, 18534 Le Pirée, Grèce",
    image: "https://images.unsplash.com/photo-1622500230863-94ebf0748181?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    registered: true,
  },
  {
    id: 3,
    title: "Visite musée d'Athènes",
    expense: 14.05,
    date: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
    startTime: new Date(new Date().setHours(18, 0, 0, 0)).toISOString(),
    endTime: new Date(new Date().setHours(19, 0, 0, 0)).toISOString(),
    location: "44 rue Patission, 10682 Athènes, Grèce",
    image: "https://plus.unsplash.com/premium_photo-1668618252814-76fd5206f523?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    registered: true,
  },
  {
    id: 5,
    title: "Balade en bateau",
    expense: 14.05,
    date: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    startTime: new Date(new Date().setHours(18, 0, 0, 0)).toISOString(),
    endTime: new Date(new Date().setHours(19, 0, 0, 0)).toISOString(),
    location: "12 avenue du Littoral, 17562 Phalère, Grèce",
    image: "https://plus.unsplash.com/premium_photo-1675802755792-a7cfd346b5be?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    registered: true,
  },
  {
    id: 6,
    title: "Dégustation de vins grecs",
    expense: 18.90,
    date: new Date(Date.now() + 36 * 60 * 60 * 1000).toISOString(), // dans 1 jour et demi
    startTime: new Date(new Date().setHours(18, 0, 0, 0)).toISOString(),
    endTime: new Date(new Date().setHours(19, 0, 0, 0)).toISOString(),
    location: "8 rue Dionysiou Areopagitou, 11742 Athènes, Grèce",
    image: "https://images.unsplash.com/photo-1617196034796-d48d90c5e9a6?q=80&w=2070&auto=format&fit=crop",
    registered: false,
  },
  {
    id: 7,
    title: "Atelier de cuisine grecque",
    expense: 22.50,
    date: new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString(), // dans 2 jours
    startTime: new Date(new Date().setHours(18, 0, 0, 0)).toISOString(),
    endTime: new Date(new Date().setHours(19, 0, 0, 0)).toISOString(),
    location: "21 rue Kolokotroni, 10562 Athènes, Grèce",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    registered: false,
  },
  {
    id: 8,
    title: "Projection cinéma en plein air",
    expense: 10.00,
    date: new Date(Date.now() + 60 * 60 * 60 * 1000).toISOString(), // dans 2,5 jours
    startTime: new Date(new Date().setHours(18, 0, 0, 0)).toISOString(),
    endTime: new Date(new Date().setHours(19, 0, 0, 0)).toISOString(),
    location: "3 rue Ippokratous, 10679 Athènes, Grèce",
    image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=2070&auto=format&fit=crop",
    registered: false,
  },
];



</script>

<template>
  <SidebarComponent>
    <div class="flex flex-col gap-4">
      <CardWithImage title="Mes prochaines activités" :api-data="activity" categorie="activity"/>
      <CardDetailled :api-data="activity"/>
    </div>
  </SidebarComponent>
</template>

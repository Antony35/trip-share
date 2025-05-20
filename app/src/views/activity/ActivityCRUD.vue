<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const data = ref({
  id: 8,
  title: "Projection cinéma en plein air",
  expense: 10.00,
  date: new Date(Date.now() + 60 * 60 * 60 * 1000).toISOString(),
  startTime: new Date(new Date().setHours(18, 0, 0, 0)).toISOString(),
  endTime: new Date(new Date().setHours(19, 0, 0, 0)).toISOString(),
  location: "3 rue Ippokratous, 10679 Athènes, Grèce",
  image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=2070&auto=format&fit=crop",
  country: '',
  region: '',
  city: '',
  description: '',
  registered: false,
})

const dateInput = ref('')
const previewImage = ref(data.value.image)
const showMobilePreview = ref(false)

const handleImage = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = () => {
      previewImage.value = reader.result
      data.value.image = reader.result
    }
    reader.readAsDataURL(file)
  }
}

const submitForm = () => {
  console.log('Activité enregistrée :', data.value)
  // Appel API pour enregistrer ici
}

const deleteActivity = () => {
  if (confirm("Es-tu sûr de vouloir supprimer cette activité ?")) {
    console.log(`Activité avec l'ID ${data.value.id} supprimée`)
    // Appel API pour supprimer ici
    router.back()
  }
}

const goBack = () => {
  router.back()
}

const toggleMobilePreview = () => {
  showMobilePreview.value = !showMobilePreview.value
}
</script>

<template>
  <div class="p-4 md:p-8 max-w-7xl mx-auto bg-white rounded-lg mt-4 md:mt-8">
    <!-- Flèche retour + titre -->
    <div class="flex items-center gap-2 mb-6">
      <button @click="goBack" class="text-gray-600 hover:text-black transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>
      <h1 class="text-3xl font-semibold text-gray-800">Ajout d’une activité</h1>
    </div>

    <div class="flex flex-col md:flex-row gap-8">
      <!-- Formulaire -->
      <form class="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-gray-700 font-medium mb-1">Titre *</label>
          <input type="text" v-model="data.title"
                 class="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-black" />
        </div>

        <div>
          <label class="block text-gray-700 font-medium mb-1">Date *</label>
          <input type="date" v-model="dateInput"
                 class="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-black" />
        </div>

        <div>
          <label class="block text-gray-700 font-medium mb-1">Prix *</label>
          <input type="number" step="0.01" v-model="data.expense"
                 class="w-full border border-gray-300 rounded px-3 py-2" />
        </div>

        <div>
          <label class="block text-gray-700 font-medium mb-1">Pays</label>
          <input type="text" v-model="data.country"
                 class="w-full border border-gray-300 rounded px-3 py-2" />
        </div>

        <div>
          <label class="block text-gray-700 font-medium mb-1">Région / État</label>
          <input type="text" v-model="data.region"
                 class="w-full border border-gray-300 rounded px-3 py-2" />
        </div>

        <div>
          <label class="block text-gray-700 font-medium mb-1">Ville</label>
          <input type="text" v-model="data.city"
                 class="w-full border border-gray-300 rounded px-3 py-2" />
        </div>

        <div class="md:col-span-2">
          <label class="block text-gray-700 font-medium mb-1">Adresse</label>
          <input type="text" v-model="data.location"
                 class="w-full border border-gray-300 rounded px-3 py-2" />
        </div>

        <div class="md:col-span-2">
          <label class="block text-gray-700 font-medium mb-1">Description</label>
          <textarea v-model="data.description" rows="4"
                    class="w-full border border-gray-300 rounded px-3 py-2"></textarea>
        </div>

        <div class="md:col-span-2">
          <label class="block text-gray-700 font-medium mb-1">Image *</label>
          <input type="file" @change="handleImage"
                 class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-gray-800" />
        </div>
      </form>

      <!-- Aperçu desktop -->
      <div class="hidden md:flex flex-col gap-3 w-80 shrink-0">
        <img :src="previewImage" alt="Aperçu" class="rounded-lg h-64 w-full object-cover border" />
        <div class="text-sm text-gray-700 space-y-1">
          <p class="font-semibold">{{ data.title || 'Titre de l’activité' }}</p>
          <p class="text-gray-500">{{ data.expense.toFixed(2) }} €</p>
          <p class="text-gray-500">📅 {{ dateInput || 'Date' }}</p>
          <p class="text-gray-500">📍 {{ data.location || 'Adresse' }}</p>
          <p class="text-gray-500">{{ data.description || 'Description...' }}</p>
        </div>
      </div>
    </div>

    <!-- Boutons Desktop -->
    <div class="hidden md:flex flex-col gap-4 mt-8">
      <button @click.prevent="submitForm"
              class="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
        Enregistrer
      </button>
      <button @click.prevent="deleteActivity"
              class="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">
        Supprimer l’activité
      </button>
    </div>
  </div>

  <!-- Modal mobile preview (glisse depuis le bas) -->
  <transition name="slide-up">
    <div v-if="showMobilePreview"
         class="fixed bottom-0 left-0 right-0 h-1/6 bg-white shadow-lg border-t z-50 md:hidden p-4 flex gap-4">
      <img :src="previewImage" alt="Aperçu mobile" class="w-24 h-full object-cover rounded border" />
      <div class="text-sm text-gray-700 space-y-1 overflow-hidden">
        <p class="font-semibold truncate">{{ data.title || 'Titre de l’activité' }}</p>
        <p class="text-gray-500">{{ data.expense.toFixed(2) }} €</p>
        <p class="text-gray-500 truncate">📍 {{ data.location || 'Lieu' }}</p>
      </div>
    </div>
  </transition>

  <!-- Footer mobile fixe avec boutons -->
  <div class="fixed bottom-0 left-0 right-0 bg-white border-t md:hidden p-4 z-50 space-y-2">
    <div class="flex gap-2">
      <button @click="toggleMobilePreview"
              class="w-1/3 text-black border border-black py-2 rounded-lg font-medium">
        {{ showMobilePreview ? 'Masquer' : 'Aperçu' }}
      </button>
      <button @click.prevent="submitForm"
              class="w-2/3 bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition">
        Enregistrer
      </button>
    </div>
    <button @click.prevent="deleteActivity"
            class="w-full bg-red-500 text-white py-2 rounded-lg font-medium hover:bg-red-600 transition">
      Supprimer l’activité
    </button>
  </div>
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
}
</style>

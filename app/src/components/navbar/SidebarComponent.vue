<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog class="relative z-50 lg:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
          enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
          leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-900/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full" enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
            leave-to="-translate-x-full">
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0"
                enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="size-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <!-- Sidebar component, swap this element with another sidebar if you like -->
              <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                <div class="flex h-16 shrink-0 items-center">
                  <LogoComponent />
                </div>
                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul class="-mx-2 space-y-1">
                        <TravelChoice />
                      </ul>
                    </li>
                    <li>
                      <ul class="-mx-2 space-y-1">
                        <a href="/expense/add" class=" flex gap-x-3 bg-stone-900 text-white p-2 px-4 rounded-md">Ajouter
                          une dépense</a>
                      </ul>
                    </li>
                    <li>
                      <ul role="list" class="-mx-2 space-y-1">
                        <h3 class="mb-2">Menu principal</h3>
                        <li v-for="item in navigation" :key="item.name">
  <a href="#" @click.prevent="goTo(item.to)"
    :class="[item.current ? 'bg-orange-50 border-2 border-orange-600 text-stone-950' : 'text-stone-800 hover:bg-orange-200 hover:text-stone-800', 'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold']">
    <component :is="item.icon"
      :class="[item.current ? 'text-stone-950' : 'text-stone-800 group-hover:text-stone-800', 'size-6 shrink-0']"
      aria-hidden="true" />
    {{ item.name }}
  </a>
</li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-stone-50 px-6">
        <div class="flex h-16 shrink-0 items-center">
          <LogoComponent />
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul class="-mx-2 space-y-1">
                <TravelChoice />
              </ul>
            </li>
            <li>
              <ul class="-mx-2 space-y-1">
                <a href="/expense/add"
                  class=" flex gap-x-3 bg-stone-900 text-white p-2 px-4 rounded-md hover:bg-orange-500">Ajouter une
                  dépense</a>
              </ul>
            </li>
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <h3>Menu principal</h3>
                <li v-for="item in navigation" :key="item.name">
                  <a  href="#" @click.prevent="goTo(item.to)"
                    :class="[item.current ? 'bg-orange-50 border-2 border-orange-600 text-stone-950' : 'text-stone-800 hover:bg-orange-200 hover:text-stone-800', 'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold']">
                    <component :is="item.icon"
                      :class="[item.current ? 'text-stone-950' : 'text-stone-800 group-hover:text-stone-800', 'size-6 shrink-0']"
                      aria-hidden="true" />
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </li>

            <li class="-mx-6 mt-auto">
              <div
                class="flex items-center justify-between px-6 py-3 hover:bg-orange-200 text-sm/6 font-semibold text-stone-800">
                <a href="#" class="flex items-center gap-x-4">
                  <img class="size-8 rounded-full bg-orange-700"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="" />
                  <span class="sr-only">Votre profile</span>
                  <span v-if="user?.pseudo" aria-hidden="true">{{ user.pseudo }}</span>
                </a>
                <button @click="logout" class="text-stone-600 hover:text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-9V5" />
                  </svg>
                </button>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="sticky top-0 z-40 flex items-center gap-x-6 bg-orange-600 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
      <button type="button" class="-m-2.5 p-2.5 text-orange-200 lg:hidden" @click="sidebarOpen = true">
        <span class="sr-only">Open sidebar</span>
        <Bars3Icon class="size-6" aria-hidden="true" />
      </button>
      <div class="flex-1 text-sm/6 font-semibold text-white">Dashboard</div>
      <a href="#">
        <span class="sr-only">Votre profile</span>
        <img class="size-8 rounded-full bg-orange-700"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="" />
      </a>
    </div>

    <main class="py-10 lg:pl-72">
      <div class="px-4 sm:px-6 lg:px-8">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import LogoComponent from "@/components/logoComponent.vue";
import TravelChoice from "@/components/navbar/TravelChoice.vue";
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'


const route = useRouter()
const store = useStore()

const navigation = [
  { name: 'Tableau de bord', to: { name: 'Dashboard' }, icon: HomeIcon, current: true },
  { name: 'Activités', to: { path: '/activity' }, icon: UsersIcon, current: false },
  { name: 'Dépenses', to: { path: '/expense' }, icon: FolderIcon, current: false },
  { name: 'Logements', to: { path: '/accommodation' }, icon: CalendarIcon, current: false },
  { name: 'Participants', to: { path: '/users' }, icon: ChartPieIcon, current: false },
]

const goTo = (destination) => {
  route.push(destination)
}

const logout = () => {
  route.push({name: 'Login'})
}

onMounted(async () => {
  await store.dispatch('user/fetchUser')
})

const user = computed(() => store.getters['user/user'])

const sidebarOpen = ref(false)
</script>

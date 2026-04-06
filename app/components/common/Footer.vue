<script setup>
import { Icon } from "@iconify/vue";
import { getContacts } from '~/services/contactsService';

// Use useAsyncData with a stable key and direct service call to prevent any hydration mismatch
const { data: contacts } = await useAsyncData('contacts-stable', () => {
  return Promise.resolve(getContacts())
});
</script>

<template>
  <footer class="bg-gray-800 text-white py-12" id="kontak">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div class="flex items-center mb-4">
            <img
                src="/azygos-logo.png"
                alt="Tim Bantuan Medis Azygos"
                class="h-10 w-auto mr-3"
            />
            <span class="text-lg font-bold">TBM Azygos</span>
          </div>
          <p class="text-gray-300 text-sm leading-relaxed">
            Tim Bantuan Medis Azygos Fakultas Kedokteran Universitas Mulawarman dideklarasikan pada 28 September 2005. TBM Azygos merupakan unit kegiatan mahasiswa yang bergerak di bidang kegawatdaruratan medis.
          </p>
        </div>

        <div v-if="contacts">
          <h4 class="text-lg font-semibold mb-4">Kontak</h4>
          <div class="space-y-2 text-sm text-gray-300">
            <div class="flex items-center">
              <Icon icon="material-symbols:mail-outline" class="w-5 h-5 mr-2" style="font-size: 24px;" />
              <a :href="'mailto:' + contacts.email">{{ contacts.email }}</a>
            </div>
            <div class="flex items-center">
              <Icon icon="ic:baseline-whatsapp" class="w-5 h-5 mr-2" style="font-size: 24px;" />
              <a :href="'https://wa.me/' + contacts.whatsapp.number" target="_blank">{{ contacts.whatsapp.display }}</a>
            </div>
            <a :href="contacts.address.link" class="flex items-center text-left" target="_blank">
              <Icon icon="mdi:company" class="w-5 h-5 mr-2" style="font-size: 24px;" />
              <p>{{ contacts.address.text }}</p>
            </a>
          </div>
        </div>

        <div v-if="contacts">
          <h4 class="text-lg font-semibold mb-4">Media Sosial</h4>
          <div>
            <a :href="contacts.socialMedia.instagram.link" class="flex items-center hover:text-white transition-colors" target="_blank">
              <Icon icon="mdi:instagram" class="w-6 h-6 mr-1" style="font-size: 12px;" />
              <p class="text-sm">{{ contacts.socialMedia.instagram.handle }}</p>
            </a>
            <a :href="contacts.socialMedia.facebook.link" class="flex items-center hover:text-white transition-colors mt-2" target="_blank">
              <Icon icon="mdi:facebook" class="w-6 h-6 mr-1" style="font-size: 12px;" />
              <p class="text-sm">{{ contacts.socialMedia.facebook.handle }}</p>
            </a>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
        <p>&copy; 2026 Tim Bantuan Medis Azygos - Fakultas Kedokteran Universitas Mulawarman. Hak cipta dilindungi.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>
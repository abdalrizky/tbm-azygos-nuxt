<script setup>
import { ref } from 'vue';
import timReaksiCepatImg from '/src/assets/images/program-kerja-tim-reaksi-cepat.jpg';
import baktiSosialImg from '/src/assets/images/program-kerja-bakti-sosial.jpeg';
import tendaTensiImg from '/src/assets/images/program-kerja-tenda-tensi.jpg';
import seminarWorkshopImg from '/src/assets/images/program-kerja-seminar-and-workshop.jpeg';
import jagaMedisImg from '/src/assets/images/program-kerja-jaga-medis-insidental.jpg';
import azygosGoesToSchoolImg from '/src/assets/images/program-kerja-azygos-goes-to-school.jpeg';

const workPrograms = ref([
  {
    title: 'Tim Reaksi Cepat',
    description: 'TRC merupakan kegiatan TBM Azygos sebagai tim bantuan medis yang selalu siap siaga ketika terjadi bencana. TBM Azygos akan selalu berusaha untuk menjadi lini terdepan dalam membantu korban bencana baik dalam bentuk tenaga medis maupun dalam bentuk lainnya.',
    imageUrl: timReaksiCepatImg
  },
  {
    title: 'Bakti Sosial',
    description: 'Merupakan program kerja TBM Azygos dalam hal pengabdian masyarakat. Diharapkan dalam kegiatan ini TBM Azygos dapat mengamalkan ilmu yang dimiliki serta membangun kepekaan dan kepedulian terhadap sesama, khususnya mengenai peningkatan kualitas kesehatan masyarakat.',
    imageUrl: baktiSosialImg
  },
  {
    title: 'Tenda Tensi',
    description: 'Tenda tensi adalah sebuah kegiatan TBM Azygos yang memberikan pemeriksaan tekanan darah gratis dan pemeriksaan GCU dengan tarif tertentu. Program kerja ini bertujuan untuk meningkatkan kesadaran masyarakat akan pentingnya pemeriksaan kesehatan secara rutin.',
    imageUrl: tendaTensiImg
  },
  {
    title: 'Seminar & Workshop',
    description: 'Merupakan program kerja untuk mengoptimalkan potensi dan meningkatkan keterampilan pengurus dalam hal penanganan medis. Beberapa tema telah diangkat, diantaranya adalah Basic Life Support dan Sirkumsisi, guna meningkatkan pengetahuan masyarakat seputar dunia medis.',
    imageUrl: seminarWorkshopImg
  },
  {
    title: 'Jaga Medis Insidental',
    description: 'Merupakan program kerja dimana TBM Azygos menjadi tim medis pada sebuah kegiatan instansi maupun lembaga luar yang telah bekerja sama. Terdapat dua macam jaga insidental, yaitu insidental profit dan insidental nonprofit.',
    imageUrl: jagaMedisImg
  },
  {
    title: 'Azygos Goes to School',
    description: 'Program kerja TBM Azygos untuk memberikan edukasi kesehatan dan penanganan medis dasar kepada siswa-siswi di sekolah. Tema yang diangkat seperti Basic Life Support dan P3K diharapkan dapat meningkatkan pengetahuan generasi muda seputar dunia medis.',
    imageUrl: azygosGoesToSchoolImg
  }
]);
</script>

<template>
  <section class="py-12 bg-white" id="program-kerja">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">Program Kerja</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Berbagai inisiatif dan kegiatan unggulan yang kami jalankan untuk melayani masyarakat dan mengembangkan keterampilan anggota.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div v-for="program in workPrograms" :key="program.title" class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300">

          <img :src="program.imageUrl" :alt="program.title" class="w-full h-48 object-cover">

          <div class="p-6 flex flex-col flex-grow">
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ program.title }}</h3>
            <p class="text-gray-600 leading-relaxed flex-grow">{{ program.description }}</p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>
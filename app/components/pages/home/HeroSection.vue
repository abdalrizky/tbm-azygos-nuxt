<script setup>
import TypingAnimation from "../../animation/TypingAnimation.vue";
import { Icon } from "@iconify/vue";

const scrollToAboutSection = () => {
  const aboutSection = document.getElementById("tentang-kami");
  if (aboutSection) {
    const rootStyles = getComputedStyle(document.documentElement);
    const sectionOffset = Number.parseFloat(
      rootStyles.getPropertyValue("--section-scroll-offset")
    );
    const targetTop =
      window.scrollY + aboutSection.getBoundingClientRect().top -
      (Number.isFinite(sectionOffset) ? sectionOffset : 96);

    window.scrollTo({
      top: Math.max(targetTop, 0),
      behavior: "smooth",
    });
  }
};

</script>

<template>
  <section class="container-custom relative from-blue-50 to-white min-h-screen flex items-center pt-20" id="beranda">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight shadow-custom">
            Selamat datang di <br><TypingAnimation />
          </h1>
          <p class="text-xl text-white mb-3 leading-relaxed">
            Tim bantuan medis unit Fakultas Kedokteran Universitas Mulawarman.
          </p>
          <div>
            <div class="flex justify-center lg:justify-start">
              <button
                  @click="scrollToAboutSection"
                  class="flex items-center text-white bg-transparent py-3 rounded-lg text-lg font-semibold transform hover:scale-105 transition-all duration-200">
                Lihat Selengkapnya
                <Icon
                    icon="mdi:arrow-down-circle"
                    class="text-white text-4xl animate-bounce ml-2 mt-2"
                />
              </button>
          </div>
          </div>
        </div>
        <div class="hidden lg:block">
          <img
              src="/azygos-logo.png"
              draggable="false"
              alt="Tim Bantuan Medis Azygos Logo"
              class="w-full max-w-md mx-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container-custom {
  background-image: linear-gradient(rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.7)), url("~/assets/images/hero-background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.shadow-custom {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
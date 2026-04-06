<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const displayText = ref('Tim Bantuan Medis');
const isDeleting = ref(false);
const loopNum = ref(0);
const typingSpeed = ref(150);

const toRotate = ["Tim Bantuan Medis", "Azygos"];
let timer;

const handleTyping = () => {
  const i = loopNum.value % toRotate.length;
  const fullText = toRotate[i];

  displayText.value = isDeleting.value
      ? fullText.substring(0, displayText.value.length - 1)
      : fullText.substring(0, displayText.value.length + 1);

  typingSpeed.value = isDeleting.value ? 75 : 150;

  if (!isDeleting.value && displayText.value === fullText) {
    isDeleting.value = true;
    timer = setTimeout(handleTyping, 2000);
  } else if (isDeleting.value && displayText.value === '') {
    isDeleting.value = false;
    loopNum.value++;
    timer = setTimeout(handleTyping, typingSpeed.value);
  } else {
    timer = setTimeout(handleTyping, typingSpeed.value);
  }
};

onMounted(() => {
  timer = setTimeout(handleTyping, typingSpeed.value);
});

onUnmounted(() => {
  clearTimeout(timer);
});
</script>

<template>
  <span class="text-sky-400 font-bold shadow-custom">
    {{ displayText }}
    <span class="animate-pulse">|</span>
  </span>
</template>

<style scoped>
  .shadow-custom {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
</style>
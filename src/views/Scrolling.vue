<template>
  <div id="scrolling">
    <h1>Scrolling Animations, yaaay</h1>
    <h2>Scroll down for animations...</h2>
    <div id="text-boxes">
      <p
          v-for="(text, index) in textArr"
          :key="index"
          :data-aos="text.animation"
          data-aos-delay="1000"
          data-aos-easing="ease-in-sine"
      >
        {{ text.lorem }}
      </p>
    </div>
  </div>
</template>

<script setup>
import {onMounted} from "vue";
import AOS from "aos";
import {useMeta} from "vue-meta";

useMeta({
  title: "Scrolling Animations",
  description: "A simple example of scrolling animations with AOS",
})

const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate deserunt impedit, ipsam maiores, neque nihil nostrum placeat provident qui rerum, sunt velit voluptatum! Corporis eaque eius fugiat odio rerum.";

const textArr = [
  {
    lorem,
    animation: "fade-up",
  },
  {
    lorem,
    animation: "fade-down",
  },
  {
    lorem,
    animation: "fade-right",
  },
  {
    lorem,
    animation: "fade-left",
  },
  {
    lorem,
    animation: "fade-up-right",
  },
  {
    lorem,
    animation: "fade-up-left",
  },
  {
    lorem,
    animation: "fade-down-right",
  },
  {
    lorem,
    animation: "fade-down-left",
  },
  {
    lorem,
    animation: "flip-left",
  },
  {
    lorem,
    animation: "flip-right",
  },
];

onMounted(() => {
  AOS.init();
});
</script>

<style scoped>
#scrolling {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#text-boxes {
  padding: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

p {
  width: 300px;
  padding: 10px;
  border-radius: 5px;
  background: var(--purple-900);
}

h2 {
  margin-bottom: 80vh;
}
</style>

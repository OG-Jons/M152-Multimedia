<template>
  <div id="video-view">
    <h1>The Backrooms - Minecraft Edition</h1>

    <iframe
      width="1008"
      height="576"
      src="https://www.youtube.com/embed/ZnYti6OrFzc"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>

    <div id="scrolldown-icon" class="floating">
      <i class="pi pi-arrow-down"></i>
    </div>

    <div id="storybook">
      <h1>Storybook</h1>
      <p>
        Wir stehen vor der Schule und laufen hinter eine Ecke, nachdem wir dort
        durch eine Türe gehen fallen wir durch den Boden und gelangen in die
        „Backrooms“. Verwirrt laufen wir durch diese Räume und treffen auf
        Confused Travolta, einige Zeit später entdeckt uns American Psycho. Er
        verfolgt uns bis wir auf mysteriöse Weise wieder auf dem Schulgelände
        erscheinen.
      </p>
    </div>
  </div>
</template>

<script setup>
import { useMeta } from "vue-meta";
import { onBeforeMount } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

onBeforeMount(() => {
  useMeta({
    title: route.name,
  });
});
</script>

<style scoped>
#scrolldown-icon {
  margin-top: 3rem;
  margin-bottom: 20vh;
}

#scrolldown-icon i {
  font-size: 2rem;
}

#video-view {
  display: flex;
  width: 60%;
  max-width: 100%;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  margin-bottom: 5vh;
}

#storybook {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#storybook p {
  width: 60%;
}

.floating {
  animation-name: floating;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  margin-left: 30px;
  margin-top: 5px;
}

@keyframes floating {
  0% {
    transform: translate(0, 0px);
  }
  50% {
    transform: translate(0, 8px);
  }
  100% {
    transform: translate(0, -0px);
  }
}
</style>

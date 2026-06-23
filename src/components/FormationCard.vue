<template>
  <article class="card formation-card h-100">
    <img
      :src="imgSrc"
      class="card-img-top"
      :alt="formation.titre"
      loading="lazy"
      width="400"
      height="250"
      @error="onError"
    >

    <div class="card-body d-flex flex-column">
      <h2 class="card-title">{{ formation.titre }}</h2>

      <p class="card-text flex-grow-1">{{ formation.description }}</p>

      <div class="formation-meta">
        <span>{{ formation.duree }}</span>
        <span>{{ formation.niveau }}</span>
      </div>

      <RouterLink
        :to="`/formation/${formation.id}`"
        class="btn btn-primary align-self-start"
      >
        Voir detail
      </RouterLink>
    </div>
  </article>
</template>

<script setup>
import { ref, watch } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  formation: {
    type: Object,
    required: true
  }
})

const imgSrc = ref(props.formation?.image || '/images/placeholder.svg')

function onError() {
  imgSrc.value = '/images/placeholder.svg'
}

watch(() => props.formation?.image, (val) => {
  imgSrc.value = val || '/images/placeholder.svg'
})
</script>

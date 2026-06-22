<template>
  <section v-if="formation" class="formation-detail">
    <img
      :src="formation.image"
      class="detail-image"
      :alt="formation.titre"
    >

    <div class="detail-content">
      <p class="section-kicker">Formation</p>
      <h1>{{ formation.titre }}</h1>
      <p class="lead">{{ formation.description }}</p>

      <dl class="detail-meta">
        <div>
          <dt>Duree</dt>
          <dd>{{ formation.duree }}</dd>
        </div>
        <div>
          <dt>Niveau</dt>
          <dd>{{ formation.niveau }}</dd>
        </div>
        <div>
          <dt>Prix</dt>
          <dd>{{ formation.prix }} EUR</dd>
        </div>
      </dl>

      <div class="detail-actions">
        <button class="btn btn-success" @click="store.ajouterFavori(formation)">
          Ajouter aux favoris
        </button>
        <RouterLink class="btn btn-outline-primary" to="/contact">
          Demander des informations
        </RouterLink>
      </div>
    </div>
  </section>

  <section v-else class="empty-state">
    <h1>Formation introuvable</h1>
    <p>Cette formation n'existe pas ou n'est plus disponible.</p>
    <RouterLink class="btn btn-primary" to="/catalogue">Retour au catalogue</RouterLink>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useFormationStore } from '../stores/formationStore'

const route = useRoute()
const store = useFormationStore()

const formation = computed(() =>
  store.formations.find(
    item => item.id === Number(route.params.id)
  )
)
</script>

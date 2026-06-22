<template>
  <section class="page-heading">
    <p class="section-kicker">Favoris</p>
    <h1>Mes formations favorites</h1>
    <p>Gardez de cote les formations qui vous interessent.</p>
  </section>

  <div v-if="store.favoris.length" class="favorites-list">
    <article
      v-for="formation in store.favoris"
      :key="formation.id"
      class="favorite-item"
    >
      <div>
        <h2>{{ formation.titre }}</h2>
        <p>{{ formation.description }}</p>
      </div>

      <div class="favorite-actions">
        <RouterLink class="btn btn-primary" :to="`/formation/${formation.id}`">
          Voir detail
        </RouterLink>
        <button class="btn btn-outline-danger" @click="store.supprimerFavori(formation.id)">
          Supprimer
        </button>
      </div>
    </article>
  </div>

  <section v-else class="empty-state">
    <h2>Aucun favori pour le moment</h2>
    <p>Explorez le catalogue et ajoutez les formations qui vous plaisent.</p>
    <RouterLink class="btn btn-primary" to="/catalogue">Voir le catalogue</RouterLink>
  </section>
</template>

<script setup>
import { useFormationStore } from '../stores/formationStore'

const store = useFormationStore()
</script>

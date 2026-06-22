<template>
  <section class="page-heading">
    <p class="section-kicker">Catalogue</p>
    <h1>Catalogue des formations</h1>
    <p>
      Retrouvez tous les parcours disponibles et consultez le detail de chaque
      formation avant de faire votre choix.
    </p>
  </section>

  <section class="page-heading">
    <p class="section-kicker">Notre offre</p>
    <h1>Des parcours pensés pour votre réussite.</h1>
    <p>
      Choisissez la formation qui correspond à votre profil et progressez à votre rythme avec des modules clairs et des objectifs métiers.
    </p>
  </section>

  <section class="row g-4">
    <div
      v-for="formation in store.formations"
      :key="formation.id"
      class="col-md-6 col-xl-4"
    >
      <FormationCard :formation="formation" />
    </div>
  </section>
</template>

<script setup>
import FormationCard from '../components/FormationCard.vue'
import { useFormationStore } from '../stores/formationStore'

const store = useFormationStore()
</script>

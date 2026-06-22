<template>
  <section
    class="home-hero"
    :style="{ backgroundImage: `linear-gradient(90deg, rgba(9, 34, 73, 0.35), rgba(9, 34, 73, 0.25)), url('${heroImage}')` }"
  >
    <div class="home-hero-content">
      <p class="hero-kicker">Formation numerique a Mayotte</p>
      <h1>DWWM Academy</h1>
      <p class="hero-lead">
        Developpez vos competences web avec des parcours concrets, progressifs
        et penses pour l'insertion professionnelle.
      </p>

      <div class="hero-actions">
        <RouterLink to="/catalogue" class="btn btn-primary btn-lg">
          Voir les formations
        </RouterLink>
        <RouterLink to="/contact" class="btn btn-outline-light btn-lg">
          Nous contacter
        </RouterLink>
      </div>
    </div>
  </section>

  <section class="stats-band" aria-label="Chiffres cles">
    <article>
      <strong>{{ store.formations.length }}</strong>
      <span>formations disponibles</span>
    </article>
    <article>
      <strong>100%</strong>
      <span>accompagnement personnalise</span>
    </article>
    <article>
      <strong>Projet</strong>
      <span>pratique a chaque parcours</span>
    </article>
  </section>

  <section class="intro-section">
    <div>
      <p class="section-kicker">Catalogue</p>
      <h2>Des formations pour apprendre, pratiquer et progresser.</h2>
    </div>
    <p>
      Choisissez un parcours adapte a votre niveau : developpement web, design,
      marketing digital, donnees ou gestion de communaute.
    </p>
  </section>

  <section class="featured-section">
    <div class="row g-4">
      <div
        v-for="formation in store.formations.slice(0, 3)"
        :key="formation.id"
        class="col-md-4"
      >
        <FormationCard :formation="formation" />
      </div>
    </div>
  </section>

  <section class="why-section">
    <div class="page-heading">
      <p class="section-kicker">Pourquoi choisir DWWM Academy ?</p>
      <h1>Une formation pratique, locale et tournée vers l’emploi.</h1>
      <p>
        Nous accompagnons chaque apprenant avec des projets concrets, un
        suivi personnalisé et une pédagogie adaptée au marché du travail.
      </p>
    </div>

    <div class="row g-4">
      <div class="col-md-4">
        <article class="card feature-card p-4 h-100">
          <h3>Projets réels</h3>
          <p>
            Travaillez sur des cas concrets pour maîtriser les compétences
            demandées par les employeurs.
          </p>
        </article>
      </div>
      <div class="col-md-4">
        <article class="card feature-card p-4 h-100">
          <h3>Accompagnement</h3>
          <p>
            Suivi personnalisé, conseils CV et mise en relation avec des
            opportunités locales.
          </p>
        </article>
      </div>
      <div class="col-md-4">
        <article class="card feature-card p-4 h-100">
          <h3>Compétences utiles</h3>
          <p>
            Développez des savoir-faire en web, data et marketing pour être
            opérationnel dès le premier jour.
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import heroImage from '@/assets/css/images/hero.jpg'
import FormationCard from '../components/FormationCard.vue'
import { useFormationStore } from '../stores/formationStore'

const store = useFormationStore()
</script>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <h2>DWWM Academy</h2>
          <p>
            Plateforme de formation dediee au developpement web, aux competences
            numeriques et a l'accompagnement vers l'emploi.
          </p>
        </div>

        <nav class="footer-links" aria-label="Navigation du pied de page">
          <h3>Navigation</h3>
          <RouterLink to="/">Accueil</RouterLink>
          <RouterLink to="/catalogue">Catalogue</RouterLink>
          <RouterLink to="/favoris">Favoris</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
        </nav>

        <nav class="footer-links" aria-label="Liens formations">
          <h3>Formations</h3>
          <RouterLink to="/catalogue">Developpement front-end</RouterLink>
          <RouterLink to="/catalogue">Developpement back-end</RouterLink>
          <RouterLink to="/catalogue">Developpement full-stack</RouterLink>
          <RouterLink to="/catalogue">Bases de donnees</RouterLink>
        </nav>

        <div class="footer-contact">
          <h3>Contact</h3>
          <p>2 rue de la Mosquee, Doujani 1</p>
          <p>97600 Mamoudzou</p>
          <RouterLink class="footer-cta" to="/contact">Nous contacter</RouterLink>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2026 DWWM Academy. Tous droits reserves.</p>
        <p>Formations web et numeriques a Mayotte.</p>
      </div>
    </div>
  </footer>
</template>

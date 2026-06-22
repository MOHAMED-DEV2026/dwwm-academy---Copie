<template>
  <section class="page-heading">
    <p class="section-kicker">Contact</p>
    <h1>Parlons de votre projet de formation</h1>
    <p>
      Une question sur un parcours, une inscription ou un accompagnement ?
      Envoyez-nous un message.
    </p>
  </section>

  <section class="contact-layout">
    <form class="contact-form" @submit.prevent="envoyer">
      <div class="mb-3">
        <label class="form-label" for="nom">Nom</label>
        <input id="nom" v-model="nom" type="text" class="form-control" required>
      </div>

      <div class="mb-3">
        <label class="form-label" for="email">Email</label>
        <input id="email" v-model="email" type="email" class="form-control" required>
      </div>

      <div class="mb-3">
        <label class="form-label" for="message">Message</label>
        <textarea id="message" v-model="message" class="form-control" rows="6" required></textarea>
      </div>

      <button class="btn btn-primary" type="submit">
        Envoyer le message
      </button>

      <p v-if="confirmation" class="form-confirmation">
        {{ confirmation }}
      </p>
    </form>

    <aside class="contact-info">
      <h2>DWWM Academy</h2>
      <p>2 rue de la Mosquee, Doujani 1</p>
      <p>97600 Mamoudzou</p>
      <p>contact@dwwmacademy.mg</p>
      <p>+262 269 00 00 00</p>
      <p>Accueil des apprenants, orientation et suivi des candidatures.</p>
      <p class="small-note">Réponse sous 48h ouvrées.</p>
    </aside>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const nom = ref('')
const email = ref('')
const message = ref('')
const confirmation = ref('')

function envoyer() {
  confirmation.value = `Merci ${nom.value}, votre message a bien ete envoye. Nous vous repondrons sous 48h.`
  nom.value = ''
  email.value = ''
  message.value = ''
}
</script>

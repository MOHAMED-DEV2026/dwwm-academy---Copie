<script setup>
import { RouterLink } from 'vue-router'
import LogoImage from '../assets/css/images/logo.png'
</script>

<template>
  <header class="site-header">
    <nav class="navbar navbar-expand-lg modern-navbar">
      <div class="container">
        <RouterLink class="navbar-brand d-flex align-items-center gap-3" to="/">
          <img :src="LogoImage" alt="Logo DWWM Academy" class="brand-logo">
          <span class="brand-name">DWWM Academy</span>
        </RouterLink>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Ouvrir le menu de navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="menu">
          <ul class="navbar-nav ms-lg-auto align-items-lg-center gap-lg-2">
            <li class="nav-item">
              <RouterLink class="nav-link" exact-active-class="active" to="/">Accueil</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" exact-active-class="active" to="/catalogue">Catalogue</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" exact-active-class="active" to="/favoris">Favoris</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" exact-active-class="active" to="/contact">Contact</RouterLink>
            </li>
          </ul>

          <div class="navbar-actions d-flex align-items-lg-center gap-2 ms-lg-3">
            <RouterLink class="btn btn-login" to="/contact">
              S'inscrire
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

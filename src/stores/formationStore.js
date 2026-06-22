import { defineStore } from 'pinia'
import { formations } from '../data/formations'

export const useFormationStore = defineStore('formation', {
  state: () => ({
    formations,
    favoris: []
  }),

  actions: {
    ajouterFavori(formation) {

      const existe = this.favoris.find(
        item => item.id === formation.id
      )

      if (!existe) {
        this.favoris.push(formation)
      }
    },

    supprimerFavori(id) {
      this.favoris = this.favoris.filter(
        formation => formation.id !== id
      )
    }
  }
})
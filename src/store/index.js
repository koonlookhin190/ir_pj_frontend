import { reactive } from 'vue'
export default reactive({
  currentUser: JSON.parse(localStorage.getItem('user')) || null,
  animeList: [],
  animeDetail: null,
  bookmarkList: null,
  animeTop: null
})

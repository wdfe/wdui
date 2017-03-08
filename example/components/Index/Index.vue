<template>
  <div class="wrap">
    <ul>
      <li>
        <router-link to="/toast">
          <i class="fa fa-check-square"></i>
          <span class="word">Toast</span>
          <i class="fa fa-angle-right right"></i>
        </router-link>
        <router-link to="/messagebox">
          <i class="fa fa-check-square"></i>
          <span class="word">MessageBox</span>
          <i class="fa fa-angle-right right"></i>
        </router-link>
        <router-link to="/dialog">
          <i class="fa fa-check-square"></i>
          <span class="word">Dialog</span>
          <i class="fa fa-angle-right right"></i>
        </router-link>
        <router-link to="/lazyload">
          <i class="fa fa-check-square"></i>
          <span class="word">Lazyload</span>
          <i class="fa fa-angle-right right"></i>
        </router-link>
        <router-link to="/button">
          <i class="fa fa-check-square"></i>
          <span class="word">Button</span>
          <i class="fa fa-angle-right right"></i>
        </router-link>
        <router-link to="/infinitescroll">
          <i class="fa fa-check-square"></i>
          <span class="word">InfinitesScroll</span>
          <i class="fa fa-angle-right right"></i>
        </router-link>
        <router-link to="/search">
          <i class="fa fa-check-square"></i>
          <span class="word">Search</span>
          <i class="fa fa-angle-right right"></i>
        </router-link>
        <router-link to="/picker">
          <i class="fa fa-check-square"></i>
          <span class="word">Picker</span>
          <i class="fa fa-angle-right right"></i>
        </router-link>
        <router-link to="/switch">
          <i class="fa fa-check-square"></i>
          <span class="word">Switch</span>
          <i class="fa fa-angle-right right"></i>
        </router-link>
        <router-link to="/checkbox">
          <i class="fa fa-check-square"></i>
          <span class="word">CheckBox</span>
          <i class="fa fa-angle-right right"></i>
        </router-link>
         <router-link to="/radio">
          <i class="fa fa-check-square"></i>
          <span class="word">Radio</span>
          <i class="fa fa-angle-right right"></i>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  computed: {
  },
  components: {},
  mounted() {
    this.$nextTick(() => {
    })
  },
  created: function(){},
  methods: {}
}
</script>
<style src="./Index.scss"></style>

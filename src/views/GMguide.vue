<template>
  <div class="gmGuide">
    <h1>Game Master's Guide</h1>
    <section>
      <component :is="guide.component"></component>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Weapons from "@/components/Weapons.vue";
import Armour from "@/components/Armour.vue";
import Spells from "@/components/Spells.vue";

export default {
  data: () => ({
    guide: {
      component: "Armour"
    }
  }),
  components: { Weapons, Armour, Spells }
};
</script>
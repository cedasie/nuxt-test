<template>
  <div class="container">
    <div class="salutation">
      <p>{{ $t("welcome") }}, {{ $t("dearCustomerTranslationKey") }}!</p>
      <p>{{ $t("test") }}</p>
    </div>
    <div class="links">
      <nuxt-link
        v-for="locale in $i18n.locales"
        v-if="locale.code !== $i18n.locale"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        >{{ locale.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  async fetch({ app }) {
    const currentLocale = app.i18n.locale;

    try {
      const result = await app.$axios.get("locales/" + currentLocale + ".json");
      if (result.status === 200) {
        app.i18n.mergeLocaleMessage(currentLocale, result.data);
      }
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<style>
.container {
  padding-top: 150px;
  align-items: center;
  text-align: center;
}

.container > .links {
  padding-top: 30px;
}
</style>

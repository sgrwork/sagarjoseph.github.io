<template>
  <section class="flex h-[calc(100vh-80px)] flex-col justify-center">
    <h1 class="text-title-hero mb-4">
      Sagar <br />
      Joseph
    </h1>

    <p class="my-4 max-w-2xl text-subtitle">
      <span class="text-secondary font-bold">Fullstack developer</span> with 4 years of experience
      delivering scalable intuitive web solutions, that streamline business operations and empower
      users across commerce, finance, and logistics.
    </p>

    <div class="flex flex-row items-center gap-10 mt-8">
      <a href="/Sagar Joseph - Resume.pdf" download>
        <UButton
          icon="material-symbols-download"
          size="xl"
          color="secondary"
          variant="soft"
          class="cursor-pointer font-bold"
        >
          Resume
        </UButton>
      </a>

      <UButton
        color="primary"
        trailing-icon="i-lucide-arrow-right"
        size="xl"
        class="cursor-pointer border border-black font-bold"
        @click="scrollToHomeSection('contacts')"
      >
        Let's Talk
      </UButton>
    </div>
  </section>
</template>

<script setup lang="ts">
const { scrollToHomeSection } = useHomeSectionScroll();
</script>

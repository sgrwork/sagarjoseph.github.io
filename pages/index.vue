<template>
  <Transition name="fade" appear>
    <main class="px-4 sm:px-8 lg:px-16">
      <div class="max-w-3xl">
        <PageHeader />
        <HomeLanding />
        <ProjectSection id="projects" />
        <AboutSection id="about" />
        <ContactSection id="contacts" />
      </div>
    </main>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active,
.fade-appear-active {
  transition: all 0.4s;
}
.fade-enter-from,
.fade-leave-to,
.fade-appear-from {
  opacity: 0;
  filter: blur(1rem);
}

html {
  scroll-behavior: smooth;
}
</style>

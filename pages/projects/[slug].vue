<script setup lang="ts">
const { params } = useRoute();
const { projects } = useProjects();

const project = projects.find((p) => p.slug === params.slug);

if (!project) {
  throw createError({ statusCode: 404, statusMessage: "Project not found" });
}

const nextProject = projects.find((p) => p.slug === project.nextProjectSlug);

const carousel = ref();
const currentSlide = ref(0);

function onSlideChanged(index: number) {
  carousel.value?.emblaApi.scrollTo(index);
  currentSlide.value = index;
}

function onSlideDrag(index: number) {
  currentSlide.value = index;
}
</script>

<template>
  <main class="px-4 sm:px-16">
    <div class="max-w-3xl">
      <PageHeader />

      <article v-if="project" class="flex flex-col justify-center">
        <p class="sm:text-heading font-bold mb-8">my projects</p>

        <p class="text-neutral-600 mb-4">{{ project.client }} | {{ project.years }}</p>

        <h1 class="text-heading sm:text-title-page mb-12 underline underline-offset-20 decoration-secondary">
          {{ project.title }}
        </h1>

        <div class="mt-4 mb-12 max-w-2xl 2xl:text-xl flex flex-col gap-y-4">
          <p v-for="(paragraph, index) in project.intro" :key="index">
            {{ paragraph }}
          </p>
        </div>

        <dl class="flex flex-col gap-y-8 sm:gap-y-0 sm:flex-row gap-x-10 my-8">
          <div>
            <dt class="underline font-bold text-sm mb-4">The Team</dt>
            <dd v-for="(member, index) in project.team" :key="index" :class="{ 'text-primary font-bold': member.includes('My Role') }">{{ member }}</dd>
          </div>
          <div>
            <dt class="underline font-bold text-sm mb-4">Tenure</dt>
            <dd>{{ project.tenure }}</dd>
          </div>
        </dl>

        <div class="flex flex-col my-8">
          <div class="flex flex-row gap-2 w-full mb-2">
            <UButton
              v-for="(img, idx) in project.screenshots"
              :key="idx"
              :class="[
                'cursor-pointer h-2  mb-2 w-6 transition-all duration-200',
                currentSlide === idx ? 'bg-primary w-12' : 'bg-secondary',
              ]"
              aria-label="Toggle project screenshots"
              @click="onSlideChanged(idx)"
            />
          </div>

          <div class="w-full bg-accent p-4 rounded-lg">
            <UCarousel
              ref="carousel"
              v-slot="{ item }"
              :items="project.screenshots"
              auto-height
              auto-play
              :ui="{ item: 'h-auto w-auto sm:h-[500px] sm:w-[500px]' }"
              class="w-full mx-auto h-full"
              @select="onSlideDrag"
            >
              <img :src="item" class="w-full h-full rounded-lg" draggable="false" />
            </UCarousel>
          </div>
        </div>

        <div class="my-12">
          <h2 class="text-subheading sm:text-heading mb-8 sm:mb-12">Project Goals</h2>
          <div class="flex flex-col gap-y-4 text-body">
            <p v-for="(paragraph, index) in project.goals" :key="index">
              {{ paragraph }}
            </p>
          </div>
        </div>

        <div class="my-12 flex flex-col gap-y-4 sm:gap-y-0 sm:flex-row items-center">
          <div class="flex flex-col gap-y-4 items-center justify-center w-[250px] h-[480px] pr-8">
            <div
              v-for="(tech, index) in project.stack.tech"
              :key="index"
              :class="[
                tech.color,
                'p-4 bg-accent rounded-xl flex flex-row items-center justify-center w-full h[72px]',
              ]"
            >
              <UIcon :name="tech.icon" class="size-10 mr-4" />
              <p>{{ tech.name }}</p>
            </div>
          </div>
          <div class="flex-1">
            <h2 class="text-subheading sm:text-heading mb-8 sm:mb-12">Web Stack</h2>
            <div class="flex flex-col gap-y-4 text-body">
              <p v-for="(paragraph, index) in project.stack.description" :key="index">
                {{ paragraph }}
              </p>
            </div>
          </div>
        </div>

        <div class="my-12">
          <h2 class="text-subheading sm:text-heading mb-8 sm:mb-12">Project Summary</h2>
          <div class="flex flex-col gap-y-4 text-body">
            <p v-for="(paragraph, index) in project.summary" :key="index">
              {{ paragraph }}
            </p>
          </div>
        </div>

        <div class="my-12 flex flex-row w-full items-center justify-between">
          <NuxtLink to="/#projects">
            <UIcon
              name="i-lucide-arrow-left"
              class="text-2xl sm:text-[80px] cursor-pointer transition-shadow hover:shadow-2xl hover:shadow-neutral transform hover:scale-105"
            />
          </NuxtLink>

          <NuxtLink
            v-if="nextProject"
            :to="`/projects/${nextProject.slug}`"
            class="sm:p-4 sm:rounded-xl underline cursor-pointer underline-offset-20 decoration-secondary group relative overflow-hidden"
          >
            <p class="text-neutral-600 text-body relative z-10 group-hover:text-accent transition-colors duration-300">
              {{ nextProject.id }} / {{ nextProject.client }} - {{ nextProject.title }}
            </p>
            <div class="flex flex-row items-center justify-between">
              <p class="text-subheading sm:text-title-page font-bold m-12 relative z-10 group-hover:text-accent transition-colors duration-300">
                {{ nextProject.title }}
              </p>
              <UIcon
                name="i-lucide-arrow-right"
                class="text-2xl sm:text-[80px] relative z-10 group-hover:text-accent transition-colors duration-300"
              />
            </div>

            <span
              class="absolute inset-0 left-0 w-0 group-hover:w-full h-full bg-primary transition-all duration-500 ease-out z-0"
              style="transition-property: width"
            ></span>
          </NuxtLink>
        </div>
      </article>
    </div>
  </main>
</template>

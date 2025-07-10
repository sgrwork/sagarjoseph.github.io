<script lang="ts" setup>
const { projects } = useProjects();

const $router = useRouter();
</script>

<template>
  <section class="flex min-h-screen py-8 2xl:h-auto flex-col justify-center">
    <h2 class="text-heading mb-8">work</h2>

    <ul class="flex flex-col gap-y-8 lg:flex-row lg:gap-x-12 lg:gap-y-0">
      <li v-for="project in projects" :key="project.id">
        <UCard
          variant="soft"
          :class="[
            project.bgColor,
            'lg:min-w-sm max-w-md cursor-pointer transition-shadow hover:shadow-2xl hover:shadow-neutral transform hover:scale-105',
          ]"
          @click="$router.push(`/projects/${project.slug}`)"
        >
          <template #header> {{ project.id }} </template>

          <p class="text-title-page mb-4">{{ project.cardTitle }}</p>

          <template #footer>
            <div class="flex flex-row items-center justify-between">
              <div class="flex flex-col">
                <p class="font-bold">{{ project.cardDescription }}</p>
                <p class="text-neutral-600">{{ project.client }} | {{ project.years }}</p>
              </div>

              <UIcon name="mingcute:arrow-right-fill" class="text-4xl sm:text-[80px]" />
            </div>
          </template>
        </UCard>
      </li>
    </ul>
  </section>
</template>

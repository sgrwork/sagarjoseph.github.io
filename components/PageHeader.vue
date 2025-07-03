<script setup lang="ts">
const { scrollToHomeSection } = useHomeSectionScroll();

const navLinks = [
  {
    label: "Projects",
    icon: "i-lucide-briefcase",
    section: "projects",
    bgColor: "bg-[#F2657E]",
    borderRadius: "rounded-b-none rounded-tr-none rounded-tl-xl",
  },
  {
    label: "About",
    icon: "i-lucide-user",
    section: "about",
    bgColor: "bg-[#F39676]",
    borderRadius: "rounded-none",
  },
  {
    label: "Contacts",
    icon: "i-lucide-mail",
    section: "contacts",
    bgColor: "bg-[#8283DA]",
    borderRadius: "rounded-none",
  },
];

const items = navLinks.map((link) => ({
  label: link.label,
  icon: link.icon,
  onClick: () => scrollToHomeSection(link.section),
}));
</script>

<template>
  <header class="w-full h-[80px] flex flex-col justify-center">
    <nav
      class="mx-auto py-4 sm:py-0 flex flex-row w-full justify-between items-center justify-right border-neutral border-b-4 sm:border-b-8"
    >
      <NuxtLink to="/"> portfolio 2025 </NuxtLink>

      <ul class="hidden md:flex flex-row text-accent">
        <li v-for="link in navLinks" :key="link.label">
          <UButton
            active
            color="neutral"
            :class="[
              link.bgColor,
              link.borderRadius,
              'py-2 px-12 font-bold hover:bg-accent hover:text-neutral-500 cursor-pointer',
            ]"
            variant="solid"
            @click="scrollToHomeSection(link.section)"
          >
            {{ link.label }}
          </UButton>
        </li>
        <li>
          <UButton
            icon="mingcute:home-1-fill"
            size="lg"
            variant="solid"
            :ui="{
              leadingIcon: 'text-xl',
            }"
            active
            color="neutral"
            class="text-accent hover:bg-accent hover:text-neutral-500 text-base cursor-pointer px-4 rounded-b-none rounded-tl-none rounded-tr-xl"
            to="/"
          />
        </li>
      </ul>

      <div class="md:hidden">
        <UDropdownMenu
          :items="items"
          :ui="{
            content: 'w-48 border-b-2 border-neutral',
            item: 'border-b-1 border-secondary',
          }"
        >
          <UButton icon="i-lucide-menu" color="neutral" variant="outline" />
        </UDropdownMenu>
      </div>
    </nav>
  </header>
</template>
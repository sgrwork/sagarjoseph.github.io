<script setup lang="ts">
const contactLinks = [
  {
    name: "email",
    value: "sagarjoseph.work@gmail.com",
    href: "mailto:sagarjoseph.work@gmail.com",
  },
  { name: "bluesky", value: "@sgrwork", href: "https://bsky.app/profile/sgrwork.bsky.social" },
  { name: "github", value: "@sgrwork", href: "https://github.com/sgrwork" },
  { name: "whatsapp", value: "+91 8848675951", href: "https://wa.me/918848675951" },
];
</script>

<template>
  <section class="flex h-screen 2xl:h-auto flex-col justify-center relative">
    <h2 class="text-heading mb-4">let's talk</h2>

    <p class="my-4 max-w-2xl text-subtitle leading-[30px]">
      Open to remote-friendly work and idle chats.
    </p>

    <ul class="flex flex-col gap-y-4 text-xl mt-4">
      <li
        v-for="link in contactLinks"
        :key="link.name"
        class="flex flex-row justify-between w-[350px] sm:w-120 items-center text-body"
      >
        <div>{{ link.name }}</div>
        <div class="relative">
          <a :href="link.href" target="_blank" rel="noopener noreferrer">
            <UButton
              trailing-icon="solar:arrow-right-up-broken"
              size="xl"
              color="neutral"
              variant="ghost"
              class="group underline underline-offset-4 text-base sm:text-xl decoration-secondary px-4 cursor-pointer relative z-10 transition-colors duration-300 hover:text-accent hover:bg-transparent"
            >
              <span class="relative z-10">{{ link.value }}</span>
              <span
                class="absolute inset-0 left-0 w-0 rounded-md group-hover:w-full h-full bg-primary transition-all duration-500 ease-out z-0"
                style="transition-property: width"
              ></span>
            </UButton>
          </a>
        </div>
      </li>
    </ul>

    <footer class="my-12">© 2025 Sagar Joseph</footer>
  </section>
</template>

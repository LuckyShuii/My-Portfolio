<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Button from './layout/components/Button.vue';
const { t } = useI18n();
</script>

<template>
    <div class="w-full rounded-[25px] bg-white my-10 px-[44px] py-[100px] max-[1300px]:px-0 max-[1300px]:py-0 ">
        <div class="flex items-center justify-between max-w-[1300px] mx-auto max-[1300px]:flex-col max-[1300px]:items-center">
            <div class="flex flex-col max-[1300px]:mb-[5rem]">
                <h2 class="font-weight-light text-[28px] mb-2">LUCAS BOILLOT</h2>
                <h3 class="text-[40px] font-bold font-weight-bold uppercase" v-html="t('home.hero.title')"></h3>
                <img src="/src/assets/icons/normal_separator.svg" alt="hero" class="mt-2 mb-3 max-w-[230px]">
                <p v-html="t('home.hero.paragraph')" class="font-weight-medium mt-5 text-[#4B4B4B]"></p>
                <a href="#contact"><Button :label="t('nav.contact')" :is-home-data="true" class="mt-[40px] max-[1300px]:mx-auto" :loading="false" :disabled="false" /></a>
            </div>
            <img src="/src/assets/icons/hero_photo.svg" alt="hero picture of Lucas" class="max-[1300px]:max-w-full" />
        </div>
    </div>
</template>

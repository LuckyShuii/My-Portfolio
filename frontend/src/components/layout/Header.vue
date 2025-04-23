<script lang="ts" setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const items = ref([
    { title: 'Project 1' },
    { title: 'Project 2' },
    { title: 'Project 3' },
    { title: 'Project 4' },
    { title: 'Project 5' },
    { title: 'Project 6' },
    { title: 'Project 7' },
]);

const toggleLanguage = (): void => {
    locale.value = locale.value === 'fr' ? 'en' : 'fr';
}
</script>

<template>
    <header class="flex justify-between items-center">
        <img src="/src/assets/icons/lb_w.svg" alt="main logo lucas boillot website" />

        <div class="flex">
            <ul class="flex justify-between items-center w-[500px]">
                <li>
                    <a href="#home" class="no-underline uppercase text-[18px] font-weight-bold text-white hover:border-b">
                        {{ $t("nav.home") }}
                    </a>
                </li>
                <li>
                    <a href="#cv" class="no-underline uppercase text-[18px] font-weight-bold text-white hover:border-b">
                        {{ $t("nav.cv") }}
                    </a>
                </li>
                <li>
                    <v-menu open-on-hover>
                        <template v-slot:activator="{ props }">
                            <v-btn class="no-underline uppercase font-weight-bold text-white hover:border-b bg-transparent !shadow-none" v-bind="props" append-icon="mdi-chevron-down">
                                {{ $t("nav.projects") }}
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item
                                v-for="(item, index) in items"
                                :key="index"
                                :value="index"
                            >
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </li>
                <li>
                    <a href="#contact" class="no-underline uppercase text-[18px] font-weight-bold text-white hover:border-b">
                        {{ $t("nav.contact") }}
                    </a>
                </li>
            </ul>

            <div class="flex justify-center items-center w-[250px] h-[80px] rounded-[25px] ml-[46px] bg-white">
                <a class="flex items-center justify-center" href="https://github.com/LuckyShuii" target="_blank">
                    <img src="/src/assets/icons/github.svg" alt="GitHub logo" />
                </a>
                <a class="flex items-center justify-center" href="https://www.linkedin.com/in/lucas-boillot/" target="_blank">
                    <img class="mx-[31px]" src="/src/assets/icons/linkedin.svg" alt="LinkedIn logo" />
                </a>

                <button @click="toggleLanguage" class="flex items-center justify-center cursor-pointer">
                    <img 
                        :src="locale === 'fr' ? '/src/assets/icons/france.svg' : '/src/assets/icons/english.svg'" 
                        alt="Language switcher" 
                    />
                </button>
            </div>
        </div>
    </header>
</template>

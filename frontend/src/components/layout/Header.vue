<script lang="ts" setup>
</script>

<template>
    <header class="flex justify-between items-center">
        <img src="/src/assets/icons/lb_w.svg" alt="main logo lucas boillot website" />

        <div class="flex">
            <ul class="flex justify-between items-center w-[500px]">
                <li>
                    <a href="#home" class="no-underline uppercase text-[18px] font-weight-bold text-white hover:border-b">{{ $t("nav.home") }}</a>
                </li>
                <li>
                    <a href="" class="no-underline uppercase text-[18px] font-weight-bold text-white hover:border-b">{{ $t("nav.cv") }}</a>
                </li>
                <li>
                    <a href="#projects" class="no-underline uppercase text-[18px] font-weight-bold text-white hover:border-b">{{ $t("nav.projects") }}</a>
                </li>
                <li>
                    <a href="#contact" class="no-underline uppercase text-[18px] font-weight-bold text-white hover:border-b">{{ $t("nav.contact") }}</a>
                </li>
            </ul>

            <div class="flex justify-center items-center w-[250px] h-[80px] rounded-[25px] ml-[46px] bg-white">
                <a class="flex items-center justify-center" href=""><img src="/src/assets/icons/github.svg" alt="linkedin blue logo" /></a>
                <a class="flex items-center justify-center" href=""><img class="mx-[31px]" src="/src/assets/icons/linkedin.svg" alt="linkedin blue logo" /></a>
                <a class="flex items-center justify-center" href=""><img src="/src/assets/icons/france.svg" alt="linkedin blue logo" /></a>
            </div>
        </div>
    </header>
</template>
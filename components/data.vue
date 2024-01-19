<script setup lang="ts">
import { profile } from '@/types/mock.js';
</script>

<template>
    <div>
        <h1>{{ profile.name }}</h1>
        <h1>{{ profile.color.red }}</h1>
        <h1>{{ profile.color.green.color1 }}</h1>
    </div>
</template>

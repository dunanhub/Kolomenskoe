<script setup lang="ts"></script>

<template>
  <div class="splash">
    <div class="splash-card">
      <div class="splash-title">
        <!-- пути к public/ всегда абсолютные -->
        <img class="splash-logo-img" src="/logo(kolominsky).png" alt="Company Logo" />
      </div>

      <div class="splash-sub" aria-live="polite">
        Загрузка<span class="dots" aria-hidden="true"></span>
      </div>

      <div class="progress" role="progressbar" aria-label="Загрузка" aria-valuemin="0" aria-valuemax="100">
        <div class="progress__bar"></div>
      </div>
    </div>
  </div>
</template>

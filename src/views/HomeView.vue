<script setup>
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";
import MainBody from "@/components/MainBody.vue";
</script>

<template>
  <div class="wrapper">
    <Sidebar />
    <main>
      <div class="main-content">
        <div class="main-header">
          <Header />
        </div>
        <div class="main-body">
          <MainBody />
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
main {
  width: calc(100% - 292px);
}
.main-content,
.main-body {
  width: 100%;
}
.main-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.main-body {
  height: 100%;
  min-height: 616px;
}
.wrapper {
  display: flex;
  gap: 24px;
  width: 100vw;
  height: 100vh;
  padding: 22px;
  overflow-x: hidden;
}
.main-body {
  padding-top: 24px;
}
</style>

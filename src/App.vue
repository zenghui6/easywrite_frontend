<template>
<div>
   <div class="mb-5">
      <Header></Header>
    </div>

    <div class="container">
      <router-view></router-view>
  </div>

      <Footer></Footer>

</div>
  
</template>

<script>
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default {
   components: { Header, Footer },
   
}
</script>
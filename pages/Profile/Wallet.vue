<template>
  <div class="position-relative background-pattern">

    <div class="row py-5 text-center justify-content-center">
      <div class="col-12 h4 text-dark">
        Ashvini Jangid's <br>
        <div class="py-3">
          <strong>
            Wallet Balance
          </strong>
        </div>
      </div>
      <div class="col-12 fw-bold text-dark py-5" style="font-size: 100px">
        ₹100
      </div>
      <div class="col-4">
        <button class="btn btn-success">Add Money</button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Wallet"
}
</script>

<style>
.background-pattern {
  height: 100vh;
  background-image: radial-gradient(#77be27 1.5px, transparent 1.5px);
  background-size: 52px 52px;
  background-color: #ffffff;
}

</style>

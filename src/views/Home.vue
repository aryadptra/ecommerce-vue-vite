<template>
  <section class="page-content hero-section">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-3">
          <div class="card card-categories shadow rounded">
            <div class="card-body">
              <h5 class="title">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-bag-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z"
                  /></svg
                >Kategori
              </h5>
              <hr />
              <ul class="list-group">
                <a href="#" class="list-group-item shadow-sm"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-laptop"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"
                    /></svg
                  >Kategori 1</a
                >
                <a href="#" class="list-group-item shadow-sm"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-laptop"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"
                    /></svg
                  >Kategori 1</a
                >
                <a href="#" class="list-group-item shadow-sm"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-laptop"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"
                    /></svg
                  >Kategori 1</a
                >
                <a href="#" class="list-group-item shadow-sm"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-laptop"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"
                    /></svg
                  >Kategori 1</a
                >
                <a href="#" class="list-group-item shadow-sm"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-laptop"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"
                    /></svg
                  >Kategori 1</a
                >
              </ul>
              <div class="d-grid gap-2">
                <router-link class="btn btn-primary" :to="{ name: 'category' }"
                  >Semua Kategori</router-link
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-9">
          <Sliders />
        </div>
      </div>

      <!-- New Products Section -->
      <section class="page-content our-products-section">
        <div class="container">
          <h4 class="section-title text-primary">Produk</h4>
          <h3 class="section-subtitle">Jelajahi Produk Kami</h3>
          <div class="mt-3">
            <div class="row">
              <div class="col-6 col-md-2">
                <div class="card card-products">
                  <div class="photo">
                    <img src="../assets/images/photo-products.png" alt="" />
                  </div>
                  <div class="card-body">
                    <h5 class="card-product-title">Erigo Coat XXV</h5>
                    <p class="card-product-price">Rp.500.000</p>
                    <div class="d-grid gap-2">
                      <router-link class="btn btn-primary" :to="{ name: 'detail' }"
                        >Lihat Produk</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-2">
                <div class="card card-products">
                  <div class="photo">
                    <img src="../assets/images/photo-products.png" alt="" />
                  </div>
                  <div class="card-body">
                    <h5 class="card-product-title">Erigo Coat XXV</h5>
                    <p class="card-product-price">Rp.500.000</p>
                    <div class="d-grid gap-2">
                      <router-link class="btn btn-primary" :to="{ name: 'detail' }"
                        >Lihat Produk</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-2">
                <div class="card card-products">
                  <div class="photo">
                    <img src="../assets/images/photo-products.png" alt="" />
                  </div>
                  <div class="card-body">
                    <h5 class="card-product-title">Erigo Coat XXV</h5>
                    <p class="card-product-price">Rp.500.000</p>
                    <div class="d-grid gap-2">
                      <router-link class="btn btn-primary" :to="{ name: 'detail' }"
                        >Lihat Produk</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-2">
                <div class="card card-products">
                  <div class="photo">
                    <img src="../assets/images/photo-products.png" alt="" />
                  </div>
                  <div class="card-body">
                    <h5 class="card-product-title">Erigo Coat XXV</h5>
                    <p class="card-product-price">Rp.500.000</p>
                    <div class="d-grid gap-2">
                      <router-link class="btn btn-primary" :to="{ name: 'detail' }"
                        >Lihat Produk</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-2">
                <div class="card card-products">
                  <div class="photo">
                    <img src="../assets/images/photo-products.png" alt="" />
                  </div>
                  <div class="card-body">
                    <h5 class="card-product-title">Erigo Coat XXV</h5>
                    <p class="card-product-price">Rp.500.000</p>
                    <div class="d-grid gap-2">
                      <router-link class="btn btn-primary" :to="{ name: 'detail' }"
                        >Lihat Produk</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-2">
                <div class="card card-products">
                  <div class="photo">
                    <img src="../assets/images/photo-products.png" alt="" />
                  </div>
                  <div class="card-body">
                    <h5 class="card-product-title">Erigo Coat XXV</h5>
                    <p class="card-product-price">Rp.500.000</p>
                    <div class="d-grid gap-2">
                      <router-link class="btn btn-primary" :to="{ name: 'detail' }"
                        >Lihat Produk</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import Sliders from '@/components/Sliders.vue'

export default {
  components: {
    Sliders
  }
}
</script>

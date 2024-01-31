<template>
  <!-- Detail Products Section -->
  <section class="page-content product-detail-section">
    <div class="container">
      <!-- Breadcrumb -->
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Product</a></li>
          <li class="breadcrumb-item active" aria-current="page">
            Nike Air Jordan XXIV
          </li>
        </ol>
      </nav>

      <!-- Detail -->
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="product-gallery">
            <div class="image-card-detail">
              <img src="../assets/images/photo-product-detail.png" alt="" />
            </div>
            <div class="image-gallery">
              <div class="row">
                <div class="col-3 col-md-3">
                  <div class="image-card-gallery">
                    <a href="">
                      <img
                        src="../assets/images/photo-product-detail.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div class="col-3 col-md-3">
                  <div class="image-card-gallery">
                    <a href="">
                      <img
                        src="../assets/images/photo-product-detail.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div class="col-3 col-md-3">
                  <div class="image-card-gallery">
                    <a href="">
                      <img
                        src="../assets/images/photo-product-detail.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div class="col-3 col-md-3">
                  <div class="image-card-gallery">
                    <a href="">
                      <img
                        src="../assets/images/photo-product-detail.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 mt-3 mt-md-0">
          <div class="product-item">
            <h3 class="product-title">Nike Air Jordan XXIV</h3>
            <h4 class="product-price">Rp. 7.500.000</h4>
            <p class="product-description">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>
            <hr class="divider" />
            <div class="colors">
              <p>Warna :</p>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label class="form-check-label" for="inlineRadio1">Merah</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label class="form-check-label" for="inlineRadio2">Biru</label>
              </div>
            </div>
            <div class="sizes">
              <p>Ukuran :</p>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label class="form-check-label" for="inlineRadio1">S</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label class="form-check-label" for="inlineRadio2">M</label>
              </div>
            </div>
            <div class="transactions">
              <div class="row">
                <div class="col-12 col-md-4">
                  <div class="input-quantity input-group">
                    <button class="btn btn-outline-secondary" type="button">
                      -
                    </button>
                    <input
                      type="text"
                      class="form-control quantity-input text-center"
                      placeholder="Quantity"
                      aria-label="Quantity"
                      value="1"
                    />
                    <button class="btn btn-primary" type="button">+</button>
                  </div>
                </div>
                <div class="col-12 mt-3 mt-md-0 col-md-4">
                  <div class="d-grid gap-2">
                    <button class="btn btn-primary">Beli Sekarang</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="page-content product-offers-section">
    <div class="container">
      <h4 class="section-title text-primary">Produk Terkait</h4>
      <h3 class="section-subtitle">Jelajahi Produk Terkait</h3>
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
</template>

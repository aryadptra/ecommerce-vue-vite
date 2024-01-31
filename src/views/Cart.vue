<template>
  <!-- Detail Products Section -->
  <section class="page-content product-detail-section">
    <div class="container">
      <!-- Breadcrumb -->
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Beranda</a></li>
          <li class="breadcrumb-item active" aria-current="page">Keranjang</li>
        </ol>
      </nav>

      <!-- Detail -->
      <div class="row">
        <div class="col-12 col-md-8 product table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Gambar</th>
                <th>Produk</th>
                <th>Harga</th>
                <th>Kuantitas</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <button class="btn btn-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash3"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"
                      />
                    </svg>
                  </button>
                </td>
                <td>
                  <img
                    src="../assets/images/photo-product-detail.png"
                    width="120px"
                    alt=""
                  />
                </td>
                <td>Wireless Stick PS5</td>
                <td>Rp. 750.000</td>
                <td width="80px">
                  <input
                    class="form-control text-center"
                    type="number"
                    value="1"
                  />
                </td>
                <td>Rp. 1.500.000</td>
              </tr>
            </tbody>
          </table>

          <!-- Tombol Lanjutkan Belanja dan Checkout di ujung kiri dan kanan -->
          <!-- <div class="d-flex justify-content-between mt-3">
                <a href="" class="btn btn-outline-black">Lanjutkan Belanja</a>
                <a href="" class="btn btn-outline-black">Update Keranjang</a>
              </div> -->
        </div>

        <div class="col-12 col-md-4">
          <div class="card card-total">
            <div class="card-body">
              <h5 class="card-title">Ringkasan Total</h5>
              <div class="d-flex justify-content-between mt-3">
                <p>Total Belanja :</p>
                <p>2 Barang</p>
              </div>
              <hr />
              <div class="d-flex justify-content-between mt-3">
                <p>Total Harga :</p>
                <p>Rp. 3.500.000</p>
              </div>
              <div class="text-center mt-3">
                <div class="d-grid gap-2">
                  <div class="btn btn-primary px-4">Beli Sekarang</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<template>
  <footer class="pt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-5 mb-4">
          <h4 class="font-weight-bold">Tentang</h4>
          <hr
            style="
              border-top: 3px solid rgb(226, 232, 240);
              border-radius: 0.5rem;
            "
          />
          <p>
            Toko Online Shopping/Store Terpercaya di Indonesia. Jual Beli Aman
            &amp; Harga Termurah! Belanja sekarang.
          </p>
          <div class="social">
            <a href="#" class="mr-4"><i class="fab fa-facebook fa-2x"></i></a
            ><a href="#" class="mr-4" style="color: rgb(0, 196, 255)"
              ><i class="fab fa-twitter fa-2x"></i></a
            ><a href="#" class="mr-4" style="color: rgb(222, 47, 184)"
              ><i class="fab fa-instagram fa-2x"></i></a
            ><a href="#" style="color: red"
              ><i class="fab fa-youtube fa-2x"></i
            ></a>
          </div>
        </div>
        <div class="col-md-3 mb-4">
          <h4 class="font-weight-bold">Pembayaran</h4>
          <hr
            style="
              border-top: 3px solid rgb(226, 232, 240);
              border-radius: 0.5rem;
            "
          />
          <div class="row">
            <div class="col-md-4 col-4 mb-3">
              <div class="card h-100 border-0 rounded shadow">
                <div class="card-body p-2 text-center">
                  <img src="../assets/images/BCA.png" style="width: 50px" />
                </div>
              </div>
            </div>
            <div class="col-md-4 col-4 mb-3">
              <div class="card h-100 border-0 rounded shadow">
                <div class="card-body p-2 text-center">
                  <img src="../assets/images/BNI.png" style="width: 45px" />
                </div>
              </div>
            </div>
            <div class="col-md-4 col-4 mb-3">
              <div class="card h-100 border-0 rounded shadow">
                <div class="card-body p-2 text-center">
                  <img
                    src="data:image/png;base64,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"
                    style="width: 60px"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-4 col-4 mb-3">
              <div class="card h-100 border-0 rounded shadow">
                <div class="card-body p-2 text-center">
                  <img src="../assets/images/GOPAY.png" style="width: 60px" />
                </div>
              </div>
            </div>
            <div class="col-md-4 col-4 mb-3">
              <div class="card h-100 border-0 rounded shadow">
                <div class="card-body p-2 text-center">
                  <img
                    src="../assets/images/INDOMARET.png"
                    style="width: 60px"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-4 col-4 mb-3">
              <div class="card h-100 border-0 rounded shadow">
                <div class="card-body p-2 text-center">
                  <img
                    src="../assets/images/SHOPEEPAY.png"
                    style="width: 60px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <h4 class="font-weight-bold">Kontak</h4>
          <hr
            style="
              border-top: 3px solid rgb(226, 232, 240);
              border-radius: 0.5rem;
            "
          />
          <p>
            <i class="fa fa-clock"></i> Toko Buka Setiap Hari : <br />
            Senin - Minggu ( 07.00 s/d 16.00 )
          </p>
          <p>
            <i class="fa fa-map-marker"></i> De Paris Residence Blok C24 No. 5,
            Kalisuren, Tajurhalang, Kab. Bogor, Jawa Barat 16320
          </p>
        </div>
      </div>
      <div class="row text-center mt-3 pb-3">
        <div class="col-md-12">
          <hr />
          © <strong>Walmart</strong> 2024 • Hak Cipta Dilindungi
        </div>
      </div>
    </div>
  </footer>
</template>

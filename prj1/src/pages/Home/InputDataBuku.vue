<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page padding class="items-center-justify-center bg-grey-3">
    <q-card flat class="bg-white q-pa-md">
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Tambah Data Buku</span>
      </span>
      <div class="q-pa-md">
        <q-form
          class="q-gutter-md"
        >
          <q-input
            label="Kode Buku"
            lazy-rules
            color="teal"
            v-model="kodebuku"
            :rules="[
           val => val !== null && val !== '' || 'Kode Buku Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="dns"/>
            </template>
          </q-input>

          <q-input
            label="Judul Buku"
            lazy-rules
            color="teal"
            v-model="judulbuku"
            :rules="[
           val => val !== null && val !== '' || 'Judul Buku Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="title"/>
            </template>
          </q-input>

          <q-input
            label="Penerbit"
            lazy-rules
            color="teal"
            v-model="penerbit"
            :rules="[
           val => val !== null && val !== '' || 'Penerbit Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="menu_book"/>
            </template>
          </q-input>

          <q-input
            label="Pengarang"
            lazy-rules
            color="teal"
            v-model="pengarang"
            :rules="[
           val => val !== null && val !== '' || 'Pengarang Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="person"/>
            </template>
          </q-input>

          <q-input
            label="Tahun Terbit"
            lazy-rules
            color="teal"
            v-model="tahunterbit"
            :rules="[
           val => val !== null && val !== '' || 'Tahun Terbit Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="calendar_today"/>
            </template>
          </q-input>

          <q-input
            label="Harga Buku"
            lazy-rules
            color="teal"
            v-model="hargabuku"
            :rules="[
           val => val !== null && val !== '' || 'Harga Buku Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="attach_money"/>
            </template>
          </q-input>

          <div>
            <q-btn
              unelevated
              icon="add"
              label="Tambah Data Buku"
              style="height: 50px"
              color="teal-6"/>
          </div>
        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      kodebuku: null,
      judulbuku: null,
      penerbit: null,
      pengarang: null,
      tahunterbit: null,
      hargabuku: null
    }
  }
}
</script>

<style scoped>

</style>

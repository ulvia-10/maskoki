'use strict';

exports.seed = function (knex) {

    // Deletes ALL existing entries
    return knex('recipes').insert([
        {
            id: 1,
            title: 'Martabak Telor Rumahan',
            description: 'Bahannya gampang dicari',
            image: 'https://img-global.cpcdn.com/recipes/edc3acd4a1b061a0/1502x1064cq70/martabak-telor-rumahan%F0%9F%98%8A-foto-resep-utama.jpg',
            ingredients: `
1 bungkus lumpia sudah jadi
4-5 butir telor ayam/bebek lebih enak pake telor bebek
1 batang Daun bawang
Penyedap rasa
Ladaku bubuk
Sedikit Terigu untuk perekat
                    `,
            instructions: `
Kocok telur sampai lepas,masukan Penyedap Rasa,ladaku+ Daun bawang.
Buat perekatnya Dari campuran terigu+sedikit air.
Siapkan lumpianya, lepas satu2 biar ga ribet. Masukan kocokan telor ditengah2.
Lipat kedua sisi lumpianya agar telor tidak meluber.
Lipat lagi kedua ujungnya, sambil dikasih perekat terigu.
Goreng lumpia diatas wajan yg apinya sedang, Karena cepat gosong jangan lupa dibolak Balik.
Martabak telor siap dihidangkan.
                    `
        }
    ]);
};

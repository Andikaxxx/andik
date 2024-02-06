alert("Selamat datang di Ticket App \n Yang bisa hanya umur 13 tahun keatas");

const umur = prompt("Masukkan umur anda");

if (umur >= 13) {
    const studio = prompt("Masukkan studio yang ingin anda pesan \n A : Studio A \n B : Studio B \n C : Studio C");
   
    if (studio == "A" || studio == "B" || studio == "C") {
       const film = prompt("Pilih film \n 1 : Avengers \n 2 : Star Wars \n 3 : Ancika");
       
       let namafilm
       if (film == "1") {
        namafilm = "Avengers";
       } else if (film == "2") {
        namafilm = "Star Wars";
       } else if (film == "3") {
        namafilm = "Ancika";
       }

       if (film == "1" || film == "2" || film == "3") {
        const nama = prompt ("Masukkan Nama Anda");

        alert(`Berikut Tiket Anda \n Nama : ${nama} \n Umur : ${umur} \n Studio : ${studio} \n Film : ${namafilm}`);
         } else {
            alert("maaf film yang anda pilih tidak tersedia");
         }
    } else {
       alert("Anda harus memilih Studio");
    }
} else {
    alert("maaf tidak bisa masuk, umur anda dibawah 13 tahun")
}
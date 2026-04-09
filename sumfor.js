document.getElementById('daftar').onclick = function(){
    var nama = document.getElementById('name').value.trim();
    if (nama === ""){
        nama = "(Nama harus diisi)";
    }

    var kelas = document.getElementById('class').value.trim();
    if (kelas === ""){
        kelas = "(Kelas belum diisi)";
    }
    var ekstra = [];
    var checkboxes = document.getElementsByName('ekstra');
    for (var i=0; i<checkboxes.length; i++){
        if (checkboxes[i].checked){
            ekstra.push(checkboxes[i].value);
        }
    }
    if (ekstra.length === 0){
        ekstra = ["(Belum memilih ekstrakurikuler)"];
    }
    var jadwal = "";
    var radios = document.getElementsByName('jadwal');
    for (var i=0; i<radios.length; i++){
        if (radios[i].checked){
            jadwal = radios[i].value;
            break;
        }
    }
    if (jadwal === ""){
        jadwal = "(Jadwal belum dipilih)";
    }
    var show = "Pendaftaran Berhasil!\n\n" +
               "Nama: " + nama + 
               "\nKelas: " + kelas + 
               "\nEkstrakurikuler: " + ekstra.join(", ") + 
               "\nJadwal Belajar: " + jadwal +
               "\n\nTerima kasih telah mendaftar. data anda sudah tercatat.";

document.getElementById('hasil').innerText = show;
};
document.getElementById('reset').onclick = function(){
document.getElementById('name').value = "";
document.getElementById('class').value = "";
    var checkboxes = document.getElementsByName('ekstra');
    for (var i=0; i<checkboxes.length; i++){
        checkboxes[i].checked = false;
    }
    var radios = document.getElementsByName('jadwal');
    for (var i=0; i<radios.length; i++){
        radios[i].checked = false;
    }
document.getElementById('hasil').innerText = "Form telah direset. Silakan isi ulang data pendaftaran.";
};

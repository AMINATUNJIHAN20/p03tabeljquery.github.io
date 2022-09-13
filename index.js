$(document).ready(function () {
    $("#nama_1").click(function () {
        confirm("Kamu Memilih Aliyah, Apakah Kamu Ingin Mengubahnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Aliyah");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Belum Masukan Nama......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("nama_1").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#nama_2").click(function () {
        confirm("Kamu Memilih Kiki, Apakah Kamu Ingin Mengubahnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Dina");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Belum Masukan Nama......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("nama_2").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#nama_3").click(function () {
        confirm("Kamu Memilih Arya, Apakah Kamu Ingin Mengubahnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Annisa");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Belum Masukan Nama......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("nama_3").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#nama_4").click(function () {
        confirm("Kamu Memilih Alva, Apakah Kamu Ingin Mengubahnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Devita");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Belum Masukan Nama......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("nama_4").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#nama_5").click(function () {
        confirm("Kamu Memilih Adam, Apakah Kamu Ingin Mengubahnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Anggita");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Belum Masukan Nama......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("nama_5").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#alamat_1").click(function () {
        confirm("Apakah Kamu Ingin Merubah Alamatnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Suranenggala");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Tidak Merubah Apapun......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("alamat_1").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#alamat_2").click(function () {
        confirm("Apakah Kamu Ingin Merubah Alamatnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Evakuasi");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Tidak Merubah Apapun......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("alamat_2").innerHTML = nama;
        }
    });
});


$(document).ready(function () {
    $("#alamat_3").click(function () {
        confirm("Apakah Kamu Ingin Merubah Alamatnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Kejaksan");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Tidak Merubah Apapun......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("alamat_3").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#alamat_4").click(function () {
        confirm("Apakah Kamu Ingin Merubah Alamatnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Arjawinangun");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Tidak Merubah Apapun......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("alamat_4").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#alamat_5").click(function () {
        confirm("Apakah Kamu Ingin Merubah Alamatnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Ciledug");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Tidak Merubah Apapun......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("alamat_5").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#button").click(function () {
        alert('Sorry Kamu Tidak Bisa Mengapus My Best Friend')
    });
});
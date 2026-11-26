const destinations = {
    bali: {
        name: "Bali",
        location: "Bali",
        image: "assets/images/bali-monument.jpg",
        duration: "3 Hari 2 Malam",
        itinerary: [
            {
                title: "Hari 1: KEDATANGAN – PESONA BALI SELATAN – JIMBARAN",
                description: `Setibanya di Bandara Internasional I Gusti Ngurah Rai, Anda akan disambut dengan kalungan bunga dan langsung diantar menjelajahi pesona Bali bagian selatan. Destinasi pertama adalah Pantai Melasti atau Pantai Pandawa yang terkenal dengan tebing kapur menjulang dan air lautnya yang jernih. Menjelang sore, perjalanan berlanjut menuju Pura Luhur Uluwatu yang berdiri kokoh di atas tebing curam menghadap Samudra Hindia, tempat Anda dapat menyaksikan pertunjukan Tari Kecak dan Api dengan latar matahari terbenam yang memukau. Malam harinya, Anda diajak menikmati makan malam hidangan laut (seafood) di tepi Pantai Jimbaran sebelum diantar menuju hotel di kawasan Kuta atau Seminyak untuk check-in dan bermalam.`,
            },
            {
                title: "Hari 2: KINTAMANI – TEGALALANG – PUSAT SENI UBUD",
                description: `Setelah sarapan di hotel, Anda diajak bergerak menuju dataran tinggi Kintamani untuk menikmati udara sejuk sambil makan siang dengan panorama langsung menghadap Gunung Batur dan Danau Batur yang tenang. Perjalanan turun melewati kawasan Tegalalang untuk melihat keindahan terasering sawah hijau yang ikonik. Memasuki kawasan Ubud, Anda diajak berjalan-jalan santai melewati Puri Saren Agung (Istana Ubud) dan menikmati waktu bebas di Pasar Seni Ubud untuk berburu kerajinan tangan, lukisan, maupun kain khas Bali. Menjelang malam, Anda diantar kembali ke hotel untuk beristirahat.`,
            },
            {
                title: "Hari 3: BELANJA OLEH-OLEH – KEPULANGAN",
                description: `Setelah sarapan dan proses check-out dari hotel, Anda diajak singgah ke pusat oleh-oleh terbesar di Bali seperti Krisna atau The Keranjang untuk membeli camilan khas seperti Pie Susu, Kacang Disco, hingga kopi Bali. Jika waktu masih mencukupi, Anda dapat berjalan-jalan sejenak di sekitar kawasan pantai Kuta sebelum akhirnya diantar menuju Bandara Ngurah Rai untuk penerbangan kembali ke kota asal.`,
            },
        ],
        includes: [
            "Transportasi pribadi ber-AC selama 3 hari (termasuk BBM dan biaya parkir).",
            "Penjemputan dan pengantaran dari/ke Bandara Internasional I Gusti Ngurah Rai.",
            "Akomodasi hotel pilihan selama 2 malam di kawasan Kuta/Seminyak/Legian.",
            "Tiket masuk objek wisata sesuai jadwal (Pantai Melasti/Pandawa, Pura Uluwatu, dan Tegalalang).",
            "Tiket menonton pertunjukan Tari Kecak dan Api Uluwatu.",
            "Konsumsi sesuai jadwal (2x sarapan di hotel, 1x makan siang di Kintamani, 1x makan malam seafood di Jimbaran).",
            "Air mineral harian selama perjalanan dan driver ramah yang membantu dokumentasi.",
        ],
    },
    "raja-ampat": {
        name: "Raja Ampat",
        location: "Papua Barat Daya",
        image: "assets/images/raja-ampat-beach.jpg",
        duration: "2 Hari 1 Malam",
        itinerary: [
            {
                title: "Hari 1: SORONG – WAISAI – PIAYNEMO – YENBUBA",
                description: `Perjalanan dimulai pada pagi hari dengan penjemputan di Bandara Domine Eduard Osok Sorong menuju Pelabuhan Rakyat untuk menyeberang menggunakan kapal cepat menuju Waisai, ibu kota Kabupaten Raja Ampat. Setibanya di Waisai, Anda langsung diajak island hopping menuju Piaynemo, ikon utama Raja Ampat, di mana Anda akan mendaki anak tangga kayu untuk menyaksikan gugusan pulau karst di atas lautan biru toska. Tak jauh dari sana, Anda singgah di Telaga Bintang yang membentuk bintang alami bila dilihat dari puncak bukit. Setelah makan siang di Desa Wisata Sauwandarek sambil berinteraksi dengan warga lokal, Anda diajak snorkeling di Dermaga Yenbuba yang terkenal dengan taman karang dan ribuan ikan warna-warni. Menjelang malam, Anda diantar menuju resor atau homestay tepi pantai untuk makan malam dan bermalam.`,
            },
            {
                title: "Hari 2: PASIR TIMBUL – WAISAI – SORONG",
                image: "assets/images/day-2-raja-ampat.jfif",
                description: `Setelah sarapan dengan pemandangan laut yang tenang, Anda diajak mengunjungi Pasir Timbul Mansuar, hamparan pasir putih halus yang hanya muncul di tengah lautan saat air sedang surut, menjadi lokasi sempurna untuk berfoto dan berenang santai. Perjalanan dilanjutkan kembali menuju Waisai untuk makan siang, berbelanja suvenir khas Papua, dan bersiap-siap. Pada sore hari, Anda akan menaiki kapal cepat kembali menuju Pelabuhan Sorong dan langsung diantar menuju Bandara Sorong atau hotel setempat untuk mengakhiri rangkaian perjalanan.`,
            },
        ],
        includes: [
            "Penjemputan dan pengantaran dari/ke Bandara Domine Eduard Osok, Sorong.",
            "Tiket kapal cepat (fast boat) pulang-pergi rute Sorong – Waisai.",
            "Sewa speedboat pribadi selama kegiatan island hopping.",
            "Akomodasi homestay atau resor tepi pantai selama 1 malam di area Waisai/sekitarnya.",
            "Konsumsi lengkap selama tur (sarapan, makan siang, dan makan malam).",
            "Peralatan snorkeling lengkap dan pelampung (life jacket).",
            "Pemandu wisata lokal, dokumentasi foto/video, serta air mineral selama perjalanan.",
        ],
        includesNote: "Biasanya tidak termasuk PIN/Tarif Layanan Pemeliharaan Lingkungan Raja Ampat bagi wisatawan domestik/mancanegara, yang dapat dibayarkan langsung di lokasi.",
    },
    bromo: {
        name: "Bromo",
        location: "Jawa Timur",
        image: "assets/images/bromo-sunrise.jpg",
        duration: "4 Hari 3 Malam",
        itinerary: [
            {
                title: "Hari 1: KEDATANGAN – KOTA WISATA BATU",
                image: "assets/images/day-1-bromo.jfif",
                description: `Setibanya Anda di titik penjemputan (Bandara Abdulrachman Saleh atau Stasiun Malang/Surabaya), Anda akan langsung disambut oleh tim kami dan diantar menuju kawasan dataran tinggi Kota Batu yang sejuk. Perjalanan dimulai dengan mengunjungi Coban Rondo, air terjun legendaris yang dikelilingi hutan pinus asri, serta berfoto di Taman Langit Gunung Banyak yang menawarkan panorama Kota Batu dari ketinggian. Menjelang sore, Anda diajak singgah di Alun-Alun Kota Batu untuk mencicipi jajanan hangat khas setempat sebelum diantar menuju hotel di kawasan Batu atau Malang untuk check-in dan bermalam.`,
            },
            {
                title: "Hari 2: PETUALANGAN BROMO – SUNRISE PENANJAKAN",
                image: "assets/images/day-2-bromo.jfif",
                description: `Dini hari sekitar pukul 00.30, Anda akan dijemput menggunakan kendaraan Jeep 4WD menuju kawasan Taman Nasional Bromo Tengger Semeru. Destinasi pertama adalah Penanjakan 1 atau Bukit Kingkong untuk menantikan momen matahari terbit (sunrise) dengan latar jajaran Gunung Bromo, Batok, dan Semeru yang megah. Setelah puas mengabadikan momen, perjalanan turun menuju Lautan Pasir untuk mendaki anak tangga menuju bibir Kawah Bromo. Petualangan dilanjutkan melintasi Pasir Berbisik yang eksotis dan singgah di Bukit Teletubbies (Padang Sabana) yang hijau membentang. Menjelang siang, Anda diantar kembali menuju penginapan untuk bersih-bersih dan beristirahat.`,
            },
            {
                title: "Hari 3: EKSPEDISI AIR TERJUN TUMPAK SEWU – WISATA KULINER MALANG",
                image: "assets/images/day-3-bromo.jfif",
                description: `Setelah sarapan di hotel, Anda diajak bergerak menuju wilayah selatan untuk menyaksikan kemegahan Air Terjun Tumpak Sewu yang dijuluki sebagai \"Niagara-nya Indonesia\" karena tirai airnya yang melebar di tebing melingkar. Anda dapat menikmati keindahan dari titik pandang atas maupun turun ke dasar lembah untuk merasakan kesegaran percikan airnya secara langsung. Pada sore hari, perjalanan kembali ke pusat Kota Malang untuk menikmati kuliner ikonik seperti Bakso President atau Rawon Rampal, dilanjutkan waktu bebas berbelanja oleh-oleh keripik buah dan Pia Cap Mangkok sebelum kembali ke hotel untuk bermalam.`,
            },
            {
                title: "Hari 4: SANTAI PAGI – KEPULANGAN",
                image: "assets/images/day-4-bromo.jfif",
                description: `Setelah sarapan pagi di hotel, Anda memiliki waktu bebas untuk menikmati udara segar pagi hari atau sekadar bersantai di area penginapan. Setelah proses check-out, Anda akan diantar kembali menuju Bandara atau Stasiun Malang/Surabaya sesuai dengan jadwal keberangkatan Anda. Perjalanan bersama kami pun berakhir dengan membawa pulang kenangan indah dari Jawa Timur.`,
            },
        ],
        includes: [
            "Transportasi darat ber-AC selama tur berlangsung (termasuk BBM, parkir, dan tol).",
            "Penjemputan dan pengantaran dari/ke Bandara atau Stasiun (Malang/Surabaya).",
            "Akomodasi hotel/penginapan selama 3 malam (sekamar berdua atau bertiga).",
            "Sewa Jeep 4WD khusus untuk eksplorasi kawasan Taman Nasional Bromo.",
            "Tiket masuk seluruh objek wisata sesuai jadwal (Bromo, Coban Rondo, Taman Langit, Tumpak Sewu).",
            "Konsumsi sesuai program (3x sarapan di hotel).",
            "Air mineral selama perjalanan dan driver sekaligus pemandu lokal yang berpengalaman.",
        ],
    },
    "labuan-bajo": {
        name: "Labuan Bajo",
        location: "Nusa Tenggara Timur",
        image: "assets/images/labuan-bajo-beach.jpg",
        duration: "3 Hari 2 Malam",
        itinerary: [
            {
                title: "Hari 1: PULAU KELOR – MANJARITE – PULAU KALONG",
                image: "assets/images/day-1-labuan-bajo.jfif",
                description: `Setibanya di Bandara Komodo Labuan Bajo pada pagi hari, Anda langsung diantar menuju pelabuhan untuk memulai pengalaman berlayar (sailing trip) menggunakan kapal pinisi. Pelayaran pertama menuju Pulau Kelor, di mana Anda diajak trekking ringan menuju puncak bukit untuk melihat hamparan laut biru yang dikelilingi pulau-pulau kecil. Perjalanan berlanjut ke Pulau Manjarite untuk snorkeling perdana di perairan dangkal yang tenang dengan terumbu karang terjaga. Menjelang senja, kapal akan bersandar di dekat Pulau Kalong agar Anda dapat menyaksikan ribuan kelelawar terbang keluar dari hutan bakau dengan latar langit jingga matahari terbenam, dilanjutkan makan malam dan bermalam di atas kapal.`,
            },
            {
                title: "Hari 2: PULAU PADAR – PINK BEACH – PULAU KOMODO – MANTA POINT",
                image: "assets/images/day-2-labuan-bajo.jfif",
                description: `Pagi-pagi sekali, Anda diajak merapat ke Pulau Padar untuk mendaki menuju puncak tertinggi demi menyaksikan panorama tiga teluk ikonik dengan warna pasir yang berbeda. Setelah turun dari bukit, pelayaran berlanjut ke Pink Beach untuk bersantai di atas pasir merah muda yang langka dan berenang di airnya yang jernih. Siang harinya, Anda tiba di Pulau Komodo untuk melakukan trekking didampingi pemandu lokal (ranger) guna melihat langsung kehidupan komodo di habitat aslinya. Sore hari ditutup dengan berhenti di Taka Makassar, pulau pasir timbul berbentuk bulan sabit, serta snorkeling di Manta Point untuk berkesempatan berenang bersama ikan pari manta sebelum kapal kembali bersandar untuk makan malam dan bermalam.`,
            },
            {
                title: "Hari 3: PULAU KANAWA – LABUAN BAJO – KEPULANGAN",
                image: "assets/images/day-3-labuan-bajo.jfif",
                description: `Setelah sarapan di atas kapal dengan suasana laut pagi yang damai, Anda diajak menuju Pulau Kanawa sebagai destinasi terakhir untuk snorkeling santai di dermaga yang dikelilingi bintang laut dan ikan-ikan kecil. Menjelang siang, kapal berlayar kembali menuju Pelabuhan Labuan Bajo. Setibanya di daratan, Anda memiliki waktu untuk singgah di pusat oleh-oleh khas Nusa Tenggara Timur seperti kain tenun songke dan kopi manggarai sebelum diantar menuju Bandara Komodo untuk penerbangan pulang.`,
            },
        ],
        includes: [
            "Penjemputan dan pengantaran dari/ke Bandara Komodo atau hotel area Labuan Bajo.",
            "Sewa kapal pinisi/kapal wisata selama 3 hari 2 malam (kabin ber-AC sesuai pilihan).",
            "Konsumsi lengkap selama berlayar di atas kapal (sarapan, makan siang, makan malam, serta snack sore, kopi, dan teh).",
            "Peralatan snorkeling, pelampung (life jacket), dan perlengkapan keselamatan kapal.",
            "Pemandu wisata lokal bersertifikat dan kru kapal yang berpengalaman.",
            "Dokumentasi perjalanan (kamera underwater, mirrorless, dan drone).",
        ],
        includesNote: "Umumnya belum termasuk tiket masuk Taman Nasional Komodo dan retribusi ranger yang dibayarkan langsung sesuai kategori wisatawan.",
    },
};

const destinationKey = new URLSearchParams(window.location.search).get("destinasi");
const destination = destinations[destinationKey];
const detailCard = document.querySelector(".detail-kartu");
const otherDestinations = document.querySelector(".detail-lainnya");

if (!destination) {
    detailCard.hidden = true;
    otherDestinations.hidden = true;
    document.querySelector(".detail-error").hidden = false;
} else {
    document.title = `${destination.name} | Jelajah Nusa`;
    const image = document.querySelector(".detail-gambar");
    image.src = destination.image;
    image.alt = destination.name;
    document.querySelector(".detail-lokasi").textContent = destination.location;
    document.querySelector(".detail-judul").textContent = destination.name;
    document.querySelector(".detail-durasi").textContent = destination.duration;
    const itineraryList = document.querySelector(".detail-itinerary");
    itineraryList.hidden = false;
    destination.itinerary.forEach((day) => {
        const item = document.createElement("li");
        item.className = "detail-itinerary-item";

        const image = document.createElement("img");
        image.className = "detail-itinerary-image";
        image.src = day.image || destination.image;
        image.alt = day.image ? day.title : "";
        image.loading = "lazy";
        image.decoding = "async";

        const copy = document.createElement("div");
        copy.className = "detail-itinerary-copy";

        const heading = document.createElement("h2");
        heading.className = "detail-itinerary-day";
        day.title.split(" – ").forEach((part, index) => {
            if (index > 0) {
                const separator = document.createElement("i");
                separator.className = "fa-solid fa-angle-right detail-itinerary-separator";
                separator.setAttribute("aria-hidden", "true");
                heading.append(separator, document.createTextNode(" "));
            }

            const text = document.createElement("span");
            text.textContent = part;
            heading.append(text);
        });

        const text = document.createElement("p");
        text.className = "detail-itinerary-description";
        text.textContent = day.description;

        copy.append(heading, text);
        item.append(image, copy);
        itineraryList.append(item);
    });

    const includedSection = document.querySelector(".detail-fasilitas");
    const includedList = document.querySelector(".detail-fasilitas-list");
    destination.includes.forEach((facility) => {
        const item = document.createElement("li");
        item.className = "detail-fasilitas-item";
        item.textContent = facility;
        includedList.append(item);
    });

    if (destination.includesNote) {
        const note = document.querySelector(".detail-fasilitas-note");
        note.textContent = `Catatan: ${destination.includesNote}`;
        note.hidden = false;
    }

    includedSection.hidden = false;

    const destinationGrid = document.querySelector(".detail-lainnya-grid");
    for (const [key, other] of Object.entries(destinations)) {
        if (key === destinationKey) continue;

        const link = document.createElement("a");
        link.className = "detail-lainnya-link";
        link.href = `?destinasi=${key}`;

        const otherImage = document.createElement("img");
        otherImage.className = "detail-lainnya-gambar";
        otherImage.src = other.image;
        otherImage.alt = "";

        const name = document.createElement("span");
        name.className = "detail-lainnya-nama";
        name.textContent = other.name;

        link.append(otherImage, name);
        destinationGrid.append(link);
    }

    otherDestinations.hidden = false;
}

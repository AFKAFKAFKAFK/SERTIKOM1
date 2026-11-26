const navbar = document.querySelector(".container-nav");

function updateNavbarPosition() {
    navbar.classList.toggle("is-sticky", window.scrollY > -1);
}

window.addEventListener("scroll", updateNavbarPosition, { passive: true });
updateNavbarPosition();

AOS.init({
    duration: 800,
    once: true,
    });

    new Swiper(".destSwiper", {
    loop: true,
    spaceBetween: 24,
    grabCursor: true,
    watchSlidesProgress: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: ".dest-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
        slidesPerView: 1,
        },
        768: {
        slidesPerView: 2,
        },
        1024: {
        slidesPerView: 3,
        },
    },
});

const packages = {
    bali: { name: "Bali", duration: "3 Hari 2 Malam", price: 2450000, image: "assets/images/bali-monument.jpg" },
    "raja-ampat": { name: "Raja Ampat", duration: "2 Hari 1 Malam", price: 1350000, image: "assets/images/raja-ampat-beach.jpg" },
    bromo: { name: "Bromo", duration: "4 Hari 3 Malam", price: 5750000, image: "assets/images/bromo-sunrise.jpg" },
    "labuan-bajo": { name: "Labuan Bajo", duration: "3 Hari 2 Malam", price: 3950000, image: "assets/images/labuan-bajo-beach.jpg" },
};

const bookingModalElement = document.querySelector("#paket");
const bookingModal = new bootstrap.Modal(bookingModalElement);
const invoiceModal = new bootstrap.Modal(document.querySelector("#invoice"));
const navbarCollapseElement = document.querySelector("#navbarNav");
const chooser = document.querySelector("#package-chooser");
const packageOptions = document.querySelector("#package-options");
const bookingDetails = document.querySelector("#booking-details");
const changePackageButton = document.querySelector("#change-package-button");
const bookingForm = document.querySelector("#booking-form");
const travelDate = document.querySelector("#travel-date");
const nameInput = document.querySelector("#customer-name");
const peopleInput = document.querySelector("#traveler-count");
const contactForm = document.querySelector("#contact-form");
const contactStatus = document.querySelector("#contact-status");
const currency = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
});
let selectedPackage = null;
let bookingSubmitted = false;
let contactSubmitted = false;
let packageSwiper = null;

const bookingFields = [
    {
        input: nameInput,
        feedback: document.querySelector("#customer-name-error"),
        getError() {
            const name = nameInput.value.trim();
            if (!name) return "Nama pemesan wajib diisi.";
            if (name.length < 3) return "Nama pemesan minimal 3 karakter.";
            return "";
        },
    },
    {
        input: peopleInput,
        feedback: document.querySelector("#traveler-count-error"),
        getError() {
            if (!peopleInput.value) return "Jumlah orang wajib diisi.";
            const people = Number(peopleInput.value);
            if (!Number.isInteger(people)) return "Jumlah orang harus berupa bilangan bulat.";
            if (people < 1) return "Jumlah orang minimal 1 orang.";
            if (people > 20) return "Jumlah orang maksimal 20 orang.";
            return "";
        },
    },
    {
        input: travelDate,
        feedback: document.querySelector("#travel-date-error"),
        getError() {
            if (!travelDate.value) return "Tanggal perjalanan wajib diisi.";
            if (travelDate.value < travelDate.min) return "Tanggal perjalanan minimal hari ini.";
            return "";
        },
    },
];

const contactFields = [
    {
        input: document.querySelector("#contact-name"),
        feedback: document.querySelector("#contact-name-error"),
        getError() {
            return this.input.value.trim() ? "" : "Nama lengkap wajib diisi.";
        },
    },
    {
        input: document.querySelector("#contact-email"),
        feedback: document.querySelector("#contact-email-error"),
        getError() {
            if (!this.input.value.trim()) return "Email wajib diisi.";
            if (!this.input.validity.valid) return "Masukkan alamat email yang valid.";
            return "";
        },
    },
    {
        input: document.querySelector("#contact-subject"),
        feedback: document.querySelector("#contact-subject-error"),
        getError() {
            return this.input.value.trim() ? "" : "Subjek wajib diisi.";
        },
    },
    {
        input: document.querySelector("#contact-message"),
        feedback: document.querySelector("#contact-message-error"),
        getError() {
            return this.input.value.trim() ? "" : "Pesan wajib diisi.";
        },
    },
];

function validateBookingField(field) {
    const error = field.getError();
    field.input.classList.toggle("is-invalid", Boolean(error));
    if (error) {
        field.input.setAttribute("aria-invalid", "true");
    } else {
        field.input.removeAttribute("aria-invalid");
    }
    field.feedback.textContent = error;
    return !error;
}

bookingFields.forEach((field) => {
    field.input.addEventListener("blur", () => validateBookingField(field));
    field.input.addEventListener("input", () => {
        if (bookingSubmitted || field.input.classList.contains("is-invalid")) {
            validateBookingField(field);
        }
    });
});

function validateContactField(field) {
    const error = field.getError();
    field.input.classList.toggle("is-invalid", Boolean(error));
    if (error) {
        field.input.setAttribute("aria-invalid", "true");
    } else {
        field.input.removeAttribute("aria-invalid");
    }
    field.feedback.textContent = error;
    return !error;
}

contactFields.forEach((field) => {
    field.input.addEventListener("blur", () => validateContactField(field));
    field.input.addEventListener("input", () => {
        if (contactSubmitted || field.input.classList.contains("is-invalid")) {
            validateContactField(field);
        }
        contactStatus.hidden = true;
        contactStatus.textContent = "";
    });
});

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    contactSubmitted = true;
    const fieldsAreValid = contactFields.map(validateContactField).every(Boolean);
    if (!fieldsAreValid) {
        contactFields.find((field) => field.input.classList.contains("is-invalid")).input.focus();
        return;
    }

    contactStatus.textContent = "Pesan telah diterima oleh JelajahNusa. Mohon tunggu balasan dari konsultan perjalanan kami.";
    contactStatus.hidden = false;
});

function setMinimumTravelDate() {
    const now = new Date();
    const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
        .toISOString()
        .slice(0, 10);
    travelDate.min = localDate;
}

function showPackageDetails(packageKey) {
    selectedPackage = packages[packageKey];
    if (!selectedPackage) {
        return;
    }

    document.querySelector("#paketLabel").textContent = `Paket ${selectedPackage.name}`;
    document.querySelector("#selected-package").textContent =
        `${selectedPackage.name} - ${selectedPackage.duration} - ${currency.format(selectedPackage.price)} / orang`;
    chooser.hidden = true;
    bookingDetails.hidden = false;
    setMinimumTravelDate();
    bookingModal.show();
}

function showPackageChooser() {
    selectedPackage = null;
    document.querySelector("#paketLabel").textContent = "Pilih paket Anda";
    chooser.hidden = false;
    bookingDetails.hidden = true;
}

Object.entries(packages).forEach(([key, packageInfo]) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";

    const card = document.createElement("article");
    card.className = "kartu-paket-modal";

    const image = document.createElement("img");
    image.className = "gambar-paket-modal";
    image.src = packageInfo.image;
    image.alt = packageInfo.name;

    const content = document.createElement("div");
    content.className = "isi-paket-modal";

    const name = document.createElement("h3");
    name.className = "nama-paket-modal";
    name.textContent = packageInfo.name;

    const duration = document.createElement("p");
    duration.className = "durasi-paket-modal";
    duration.textContent = packageInfo.duration;

    const price = document.createElement("p");
    price.className = "harga-paket-modal";
    price.textContent = `${currency.format(packageInfo.price)} / orang`;

    const selectButton = document.createElement("button");
    selectButton.type = "button";
    selectButton.className = "btn btn-primary pilih-paket-modal";
    selectButton.dataset.packageOption = key;
    selectButton.textContent = "Pilih paket";

    content.append(name, duration, price, selectButton);
    card.append(image, content);
    slide.append(card);
    packageOptions.append(slide);
});

function initializePackageSwiper() {
    if (!packageSwiper) {
        packageSwiper = new Swiper(".paket-swiper", {
            slidesPerView: 1,
            spaceBetween: 16,
            pagination: {
                el: ".paket-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".paket-next",
                prevEl: ".paket-prev",
            },
        });
    } else {
        packageSwiper.update();
    }

    packageSwiper.slideTo(0, 0);
}

bookingModalElement.addEventListener("shown.bs.modal", () => {
    if (chooser.hidden) return;
    initializePackageSwiper();
});

changePackageButton.addEventListener("click", () => {
    showPackageChooser();
    initializePackageSwiper();
});

    function closeMobileNavbar() {
        if (!window.matchMedia("(max-width: 991.98px)").matches) return;
        if (!navbarCollapseElement.classList.contains("show")) return;

        const navbarCollapse = bootstrap.Collapse.getInstance(navbarCollapseElement);
        if (navbarCollapse) {
            navbarCollapse.hide();
        }
    }

bookingModalElement.addEventListener("show.bs.modal", () => {
        closeMobileNavbar();
    });

const navbarLinks = Array.from(document.querySelectorAll(".navbar-nav .nav-link"));
const navbarSections = navbarLinks
    .map((link) => document.querySelector(link.hash))
    .filter(Boolean);

function setActiveNavbarLink(hash) {
    navbarLinks.forEach((link) => {
        const isActive = link.hash === hash;
        link.classList.toggle("active", isActive);
        if (isActive) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}

function updateActiveNavbarLink() {
    const activationPoint = window.innerHeight * 0.35;
    const activeSection = [...navbarSections].reverse().find(
        (section) => section.getBoundingClientRect().top <= activationPoint,
    ) || navbarSections[0];

    if (activeSection) {
        setActiveNavbarLink(`#${activeSection.id}`);
    }
}

navbarLinks.forEach((link) => {
    link.addEventListener("click", () => {
        setActiveNavbarLink(link.hash);
        closeMobileNavbar();
    });
});

window.addEventListener("scroll", updateActiveNavbarLink, { passive: true });
window.addEventListener("resize", updateActiveNavbarLink);
updateActiveNavbarLink();

document.querySelectorAll(".button-hero-2").forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();
        showPackageChooser();
        bookingModal.show();
    });
});

document.querySelectorAll(".dest-button[data-package]").forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();
        showPackageDetails(button.dataset.package);
    });
});

packageOptions.addEventListener("click", (event) => {
    const option = event.target.closest("[data-package-option]");
    if (option) {
        showPackageDetails(option.dataset.packageOption);
    }
});

bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    setMinimumTravelDate();
    bookingSubmitted = true;
    const fieldsAreValid = bookingFields.map(validateBookingField).every(Boolean);
    if (!fieldsAreValid || !selectedPackage) {
        return;
    }

    const people = Number(peopleInput.value);
    const total = selectedPackage.price * people;
    document.querySelector("#invoice-name").textContent = nameInput.value.trim();
    document.querySelector("#invoice-package").textContent =
        `${selectedPackage.name} - ${selectedPackage.duration}`;
    document.querySelector("#invoice-people").textContent = String(people);
    document.querySelector("#invoice-date").textContent = new Date(`${travelDate.value}T00:00:00`)
        .toLocaleDateString("id-ID", { dateStyle: "long" });
    document.querySelector("#invoice-unit-price").textContent = currency.format(selectedPackage.price);
    document.querySelector("#invoice-total").textContent = currency.format(total);

    bookingModalElement.addEventListener("hidden.bs.modal", () => invoiceModal.show(), { once: true });
    bookingModal.hide();
});

bookingModalElement.addEventListener("hidden.bs.modal", () => {
    bookingForm.reset();
    bookingSubmitted = false;
    bookingFields.forEach((field) => {
        field.input.classList.remove("is-invalid");
        field.input.removeAttribute("aria-invalid");
        field.feedback.textContent = "";
    });
    chooser.hidden = false;
    bookingDetails.hidden = true;
    selectedPackage = null;
    document.querySelector("#paketLabel").textContent = "Pilih paket Anda";
});
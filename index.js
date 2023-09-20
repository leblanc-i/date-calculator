// convertir la date au format de l'input
// La date du moment
let today = new Date().toISOString().split("T")[0];
start_date.value = today;
// Pour empecher de reserver au passé on fait :
start_date.min = today;

// avoir la date du lendemain
let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
// Convertir la date du lendemain au format de l'input
let tomorrowFormat = tomorrow.toISOString().split("T")[0]
end_date.value = tomorrowFormat;
end_date.min = tomorrowFormat;

// mettre automatiquement à jour la date du lendemain
start_date.addEventListener("change", (e) => {
    let day = new Date(e.target.value);

    if (end_date.value <= start_date.value) {
        day.setDate(day.getDate() + 1);
        end_date.value = day.toISOString().split("T")[0];
    }
});

end_date.addEventListener("change", (e) => {
    let day = new Date(e.target.value);

    if (end_date.value <= start_date.value) {
        day.setDate(day.getDate() -1);
        start_date.value = day.toISOString().split("T")[0];    
    }
});

// Calcul du montant
const bookingCalc = () => {
    let diffTime = Math.abs(
        new Date(end_date.value) - new Date(start_date.value)
    );
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    total.textContent = diffDays * nightPrice.textContent;
}
start_date.addEventListener("change", bookingCalc);
end_date.addEventListener("change", bookingCalc);

bookingCalc();

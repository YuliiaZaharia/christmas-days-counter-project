function christmasCountdown() {
    const christmasDate = new Date("December 25, 2023 00:00");
    const now = new Date();
    const diff = christmasDate - now;
    console.log(diff);
}

christmasCountdown();

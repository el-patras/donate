function copyMpesanumber() {
    navigator.clipboard.writeText("+254794387871")
        .then(() => {
            alert("M-Pesa number copied to clipboard!");
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });
}

function copyPaypalEmail() {
    navigator.clipboard.writeText("wairumbipatrick@gmail.com")
        .then(() => {
            alert("PayPal email copied to clipboard!");
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });
}

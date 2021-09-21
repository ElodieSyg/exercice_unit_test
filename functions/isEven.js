function isEven(num) {
    // Si le paramètre reçu est un nombre pair retourner true
    // Si le paramètre reçu est un nombre imper retourner false

    if (num % 2) {
        return true
    } else {
        return false
    };
};

module.exports = isEven;
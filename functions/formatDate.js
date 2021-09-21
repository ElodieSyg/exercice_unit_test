function formatDate(string) {
    // Si le paramètre est une date au format `yyyy-mm-dd` 
    // il retourne un string au format `dd/mm/yyyy`

    const date = new Date(string);

    return date.toLocaleDateString();
};

module.exports = formatDate;
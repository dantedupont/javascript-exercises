const findTheOldest = function(people) {
    const currentYear = (new Date()).getFullYear();
    const ages = people.sort(function(a,b) {
        if (!a.yearOfDeath) a.yearOfDeath = currentYear;
        if (!b.yearOfDeath) b.yearOfDeath = currentYear;
        const lastPersonAge = a.yearOfDeath - a.yearOfBirth;
        const nextPersonAge = b.yearOfDeath - b.yearOfBirth;
        return lastPersonAge > nextPersonAge ? -1 : 1;
    });
    return ages[0];
};

// Do not edit below this line
module.exports = findTheOldest;

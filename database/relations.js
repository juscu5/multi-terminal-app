

module.exports = (sequelize) => {

    const {models} = sequelize;
    

    return [
        () => {
            const {itemfile, itemclassfile} = models;

            itemfile.hasOne(itemclassfile, {
                allowNull: true,
                constraints: false,
                foreignKey: "itmclacde",
                sourceKey: "itmclacde",
            });
        },
        () => {
            const {posfile, itemfile} = models;

            posfile.hasOne(itemfile, {
                allowNull: true,
                constraints: false,
                foreignKey: "itmcde",
                sourceKey: "itmcde",
            });
        },
    ];



}
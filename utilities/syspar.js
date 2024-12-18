const {models} = require('../database');

const getSysparDocnum = async (field) => {
  const syspar = await models.syspar.findOne({});
  const docnum = syspar[field];

  // Extract the number from the docnum
  const number = parseInt(docnum.match(/\d+/)[0], 10);
  const incrNumber = number + 1;
  // Pad the number with leading zeros
  const paddedNumber = String(incrNumber).padStart(10, '0');
  // save the new docnum to the syspar
  syspar[field] = syspar[field].replace(/\d+/, paddedNumber);
  await syspar.save();

  return docnum;
}

module.exports = {
  getSysparDocnum
}
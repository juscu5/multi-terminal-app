const {format, sub, subDays} = require("date-fns");

const dateFormatter = (date, _format) => {
    const formattedDate = new Date(date);
  
    // format only if valid date
    if (isNaN(formattedDate.getTime())) {
      return null;
    }
  
    return format(formattedDate, _format || "yyyy-MM-dd");
}

const dateSubtractionFormatter = (date, days) => {
    if (date === '')
      return date;
  
    return format(sub(new Date(date), {days: days}), "yyyy-MM-dd");
}


module.exports = {
    dateFormatter,
    dateSubtractionFormatter
}

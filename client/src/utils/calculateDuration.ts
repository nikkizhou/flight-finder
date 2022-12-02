const calculateDuration = (d1: string, d2: string) => {
  const date1 = new Date("08/05/2015 23:41:20");
  const date2 = new Date("08/06/2015 02:56:32");
  const diff = date2.getTime() - date1.getTime();
  
  let msec = diff;
  const hh = Math.floor(msec / 1000 / 60 / 60);
  msec -= hh * 1000 * 60 * 60;
  const mm = Math.floor(msec / 1000 / 60);
  msec -= mm * 1000 * 60;
  const ss = Math.floor(msec / 1000);
  msec -= ss * 1000;

  return (hh + "h" + mm + "m");
}

export default calculateDuration

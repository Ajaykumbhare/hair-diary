export const getYearCalendar = (year) => {
  const months = [
    {
      key: 1,
      val: 31,
    },
    {
      key: 2,
      val: year % 4 === 0 ? 29 : 28,
    },
    {
      key: 3,
      val: 31,
    },
    {
      key: 4,
      val: 30,
    },
    {
      key: 5,
      val: 31,
    },
    {
      key: 6,
      val: 30,
    },
    {
      key: 7,
      val: 31,
    },
    {
      key: 8,
      val: 31,
    },
    {
      key: 9,
      val: 30,
    },
    {
      key: 10,
      val: 31,
    },
    {
      key: 11,
      val: 30,
    },
    {
      key: 12,
      val: 31,
    },
  ];
  return months.map((m) =>
    [...Array(m.val).keys()].map((y) => ({
      [`${y + 1}`]: new Date(`${m.key},${y + 1},${year}`).getDay(),
    }))
  );
};

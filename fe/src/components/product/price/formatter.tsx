const decimalZeroOrEmpty = (value: string) => value === '00' ? '' : value;

const formatAmount = (value: number | string) => {
  const amount = Number(value).toLocaleString("es-ES", { maximumFractionDigits: 2, minimumFractionDigits: 2 });
  const decimal = decimalZeroOrEmpty(amount.split(",")[1] || "00");
  const formattedAmount = amount.split(",")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return { amount: formattedAmount, decimal };
};

export default formatAmount;

function maskPhone(value) {
  value = value.replace(/\D/g, '');

  value = value
    .replace(/(\d{4})/, '$1 ')
    .replace(/(\d{4}) (\d{4})/, '$1 $2 ')
    .replace(/(\d{4}) (\d{4}) (\d{4})/, '$1 $2 $3 ');

  return value;
}

function maskCurrency(value) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d)(\d{2})$/, '$1.$2')
    .replace(/(?=(\d{3})+(\D))\B/g, ' ');
}

export { maskPhone, maskCurrency };

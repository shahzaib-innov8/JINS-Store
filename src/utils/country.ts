const validCountryCodes = new Set(["us", "mn"]);

export const isValidCountryCode = (code: string): boolean => {
  if (validCountryCodes.has(code)) return true;

  console.warn("Invalid country code:", code);
  return false;
};


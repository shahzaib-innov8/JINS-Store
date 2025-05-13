export const jsonParser = (json: string) => {
    try {
      const parsed = JSON.parse(json);
      return parsed;
    } catch (error) {
      console.error("JSON parsing error:", error);
      return null;
    }
  };

  export const isMissingKeyInJSON = (data: string, key: string): boolean => {
    const parsedData = jsonParser(data);
    if (!parsedData) return true;
  
    return !Object.hasOwn(parsedData, key);
  };
export const getTokenLogoURL = (address: string, tokenList?: any) => {
  const logoExtensions = ['.png', '.webp', '.jpeg', '.jpg', '.svg'];
  return logoExtensions.map((ext) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const image = require(`../assets/tokenLogo/${address.toLowerCase()}${ext}`);
      return image;
    } catch (e) {
      if (!tokenList) {
        return 'Error';
      }
      return tokenList[address]?.tokenInfo?.logoURI;
    }
  });
};

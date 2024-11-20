export interface ConstructionServiceData {
  homePageContent: {
    title: string;
    highlightedCountries: string[];
  };
  subtitle: string;
  contactNumber: string;
  socialLinks: {
    name: string;
    url: string;
    image: {
      _type: string;  
      asset: {
        _ref: string;  
        _type: string; 
      };
    };
  }[];
  stats: {
    value: string; 
    label: string;
  }[];
}

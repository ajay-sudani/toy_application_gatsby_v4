export interface IToyDetails {
  id: string;
  image: {
    file: {
      url: string;
    };
  };
  name: string;
  description: {
    raw: string;
  };
  price: number;
  rating: number;
}

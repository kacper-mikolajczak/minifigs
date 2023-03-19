declare global {
  namespace Domain {
    type Minifig = {
      setId: string;
      name: string;
      img: string | null;
    };

    type MinifigPart = {
      id: string;
      name: string;
      img: string | null;
    };

    type Address = {
      street: string;
      city: string;
      state: string;
      zipCode: string;
    };

    type User = {
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      dateOfBirth: Date;
    };

    type UserShippingInfo = User & Address;
  }
}
export {};

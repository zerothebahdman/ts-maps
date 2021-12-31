import faker from "faker";
import { Mappable } from "./CustomMapClass";

export class User implements Mappable {
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  name: string;
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string {
    return `User name is ${this.name}`;
  }
}

declare module "*/example.json" {
  export declare namespace Workers {
    type Person = {
      name: string;
      age: number;
      state: string;
    };

    interface DevData extends Person {
      techs: string[];
    }

    interface SkilledData extends Person {
      skills: string[];
    }

    interface ChefData extends Person {
      specialty: string[];
    }
  }

  const data: (Worker.DevData | Worker.SkilledData | Worker.ChefData)[];
  export default data;
}

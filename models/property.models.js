import { Schema } from "mongoose";

const propertySchema = new Schema(
    {
        code: "",
        title: "",
        description: "",
        type: "",
        transaction: "",
        state: "",
        city: "",
        neighborhood: "",
        address: "",
        area: 0,
        bedrooms: 0,
        bathrooms: 0,
        price: 0,
        amenities: {
          swimming: false,
          concierge: false,
          gourmet: false,
          parking: false,
        },
        photos: [],
      }
    }
);

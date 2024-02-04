import { Access, CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
  slug: "users",
  auth: {
    verify: {
      generateEmailHTML: ({token}) => {
        return `<p>Hello please Verify your email</p>`
      }
    }
  },
  access: {
    create: () => true,
    read: () => true,
    delete: ({req: {user}}) => {
      return user?.collection === 'users'
    }
  },
  fields: [
    {
      name: "role",
      required: true,

      defaultValue: 'user',
      type: "select",
      options: [
        { label: "Admin", value: "admin" },
        { label: "User", value: "user" },
      ],
    },
  ],
};

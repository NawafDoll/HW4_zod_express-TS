import { z, TypeOf } from 'zod';

export const parkSchema = z.object({
  body: z.object({
    ID: z.string({ required_error: 'ID is required !' }),
    Name: z
      .string({ required_error: 'name is required !' })
      .min(4, 'You name must be more than 3 char'),
    Type: z.enum(["rollercoaster","thriller","water"],{ required_error: 'major is required !' }),
      
    Tickets: z.number({ required_error: 'salary is required !' }),

        Price: z.number({ required_error: 'position is required !' }),
  }),
});

export type parkSchemaType = TypeOf<typeof parkSchema>['body'];
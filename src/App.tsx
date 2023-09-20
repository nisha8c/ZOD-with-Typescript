import React from 'react';
import './App.css';
import { z } from 'zod';

function App() {
  enum Movie {
    abc = "abc",
    pqr = "pqr",
    xyz = "xyz"
  }

  const books = ["BFG", "Famous Five", "Millionaire Boy", "Saga"] as const;

  const UserSchema = z.object({
    username: z.string().min(3),
    email: z.string().email(),
    age: z.number().gt(0),
    birthday: z.date(),
    isProgrammer: z.boolean(),
    hobby: z.enum(["Programming", "Weight Lifting", "Guitar"]),
    movie: z.nativeEnum(Movie),
    book: z.enum(books),
    friends: z.array(z.string()),
    coordinates: z.tuple([z.number(), z.number(), z.number().gt(4).int()]),
    //isProgrammer: z.boolean().optional(),
    // nullish : allows to use undefined and null
    // nullable : allows only null
    // default() : lets you define default value
    // literal : has to be same value as provided in literal
  })
      .strict()

  type User = z.infer<typeof UserSchema>  //No need to define type separately it wil take from UserSchema

  const user = {
    username: "nisha",
    email: "nisha@abc.com",
    age: 35,
    birthday: new Date(),
    isProgrammer: true,
    hobby: "Programming",
    movie: "abc",
    book: "BFG",
    friends: ["Bjarne", "Tim"],
    coordinates: [1, 2, 5.5],
  }

  console.log(UserSchema.safeParse(user));
  return (
    <div className="App">

    </div>
  );
}

export default App;

//https://www.youtube.com/watch?v=L6BE-U3oy80
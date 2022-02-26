exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('question').del()
  await knex('question').insert([
    {id: 1, 
    product_id: 1,
    question: "Why do you wanna sell this shoe?",
    answer: "because I want somebody else having fun with it",
    status: "answered"
    },
    {id: 2, 
    product_id: 1,
    question: "For how long did you wear the shoe?",
      answer: "roughly 2 years",
      status: "answered"
      },
    {id: 3, 
    product_id: 1,
    question: "Is this real Jordans?",
      answer: "",
      status: "unanswered"
    },
    {id: 4, 
      product_id: 2,
      question: "Is this really the lowest price. This is so expensive!",
        answer: "You are welcome to make an offer, buddy",
        status: "answered"
      },
    {id: 5, 
      product_id: 2,
      question: "Are there any other colours?",
        answer: "",
        status: "unanswered"
    },
    {id: 6, 
      product_id: 3,
      question: "Is this american or NZ size?",
        answer: "",
        status: "unanswered"
    },
    {id: 7, 
      product_id: 3,
      question: "What is the make of this shoe?",
      answer: "",
      status: "unanswered"
    },
    {id: 8, 
      product_id: 3,
      question: "Cash is king! Do you accept cash deals?",
      answer: "",
      status: "unanswered"
    },

  ]);
};
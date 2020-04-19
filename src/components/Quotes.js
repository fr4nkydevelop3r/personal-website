import React, { useState, useEffect } from "react"
import { css } from "@emotion/core"
import axios from "axios"
import QuoteCategory from "./QuoteCategory"

const Quotes = () => {
  const [categories, setCategories] = useState([])
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    try {
      const fetchCategories = async () => {
        const categories = await axios(
          "https://quotes-rest-api-by-fr4nky.herokuapp.com/api/list-quotes"
        )
        setCategories(categories.data.list)
      }
      const fetchQuotes = async () => {
        const quotes = await axios(
          "https://quotes-rest-api-by-fr4nky.herokuapp.com/api/quote"
        )
        setQuotes(quotes.data.quotes)
      }
      fetchCategories()
      fetchQuotes()
    } catch (e) {
      console.log("Error fetching quotes")
      console.error(e)
    }
  }, [])

  //console.log(categories)
  //console.log(quotes)
  return (
    <div
      css={css`
        margin-top: 4rem;
      `}
    >
      <h3>Do you like inspirational quotes? Choose a topic and get one</h3>
      <div
        css={css`
          margin-top: 1rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          padding: 1rem;
        `}
      >
        {categories.map(category => (
          <QuoteCategory category={category} key={category._id} />
        ))}
      </div>
    </div>
  )
}

export default Quotes

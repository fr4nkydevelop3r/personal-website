import React, { useState, useEffect } from "react"
import { css } from "@emotion/core"
import axios from "axios"
import QuoteCategory from "./QuoteCategory"
import Quote from "./Quote"

const Quotes = () => {
  const [categories, setCategories] = useState([])
  const [quotes, setQuotes] = useState([])
  const [quote, setQuote] = useState({})

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

  const handleShowQuote = quote => {
    setQuote(quote)
  }

  const getQuotes = idCategory => {
    const quotesResult = quotes.filter(quote => quote.list === idCategory)
    return quotesResult
  }

  //console.log(categories)
  //console.log(quotes)
  return (
    <div
      css={css`
        margin-top: 4rem;
      `}
    >
      <h3>Choose a topic and get a powerful quote</h3>
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
          <QuoteCategory
            category={category}
            key={category._id}
            quotes={getQuotes(category._id)}
            handleShowQuote={handleShowQuote}
          />
        ))}
      </div>
      <div>
        <Quote quote={quote} />
      </div>
    </div>
  )
}

export default Quotes

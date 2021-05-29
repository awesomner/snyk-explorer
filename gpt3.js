const fetch = require('node-fetch')
const OpenAI = require('openai-api')
const OPEN_AI_API_KEY = 'sk-VULQZ74n7xFx8csBp2l57vkp5svUB5U3qONMyCwU'
const openai = new OpenAI(OPEN_AI_API_KEY)


;(async () => {
  console.log('hello world, here comes the magic')

const gptResponse = await openai.answers({
      "documents": ["myresponse.json"],
      "question": "which puppy is happy?",
      "search_model": "ada",
      "model": "curie",
      "examples_context": "In 2017, U.S. life expectancy was 78.6 years.",
      "examples": [["What is human life expectancy in the United States?", "78 years."]],
      "max_tokens": 5,
      "stop": ["\n", "<|endoftext|>"],
    });
  

  console.log(gptResponse.data)
})()
;(async () => {
  const gptResponse = await openai({
    engine: 'davinci',
    documents: ['myresponse.json'],
    query: 'the president',
  })

  console.log(gptResponse.data)
})()

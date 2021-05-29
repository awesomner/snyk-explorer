const fetch = require('node-fetch')
const OpenAI = require('openai-api')
const OPEN_AI_API_KEY = 'sk-VULQZ74n7xFx8csBp2l57vkp5svUB5U3qONMyCwU'
const openai = new OpenAI(OPEN_AI_API_KEY)

;(async () => {
  console.log('hello world, here comes the magic')

  const gptResponse = await openai.complete({
    engine: 'davinci',
    prompt: 'this is a test',
    maxTokens: 5,
    temperature: 0.9,
    topP: 1,
    n: 1,
    stream: false,
    stop: ['\n', 'testing'],
  })

  console.log(gptResponse.data)
})()
;(async () => {
  const gptResponse = await openai.search({
    engine: 'davinci',
    documents: ['White House', 'hospital', 'school'],
    query: 'the president',
  })

  console.log(gptResponse.data)
})()

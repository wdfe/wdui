
export default (
  {
    development: {
      test1: process.env.API_DOMAIN + 'test.json'
    },
    production: {
      test1: process.env.API_DOMAIN + 'test1.json'
    },
    testing: {
      test1: process.env.API_DOMAIN + 'test2.json'
    }
  }
)[ process.env.NODE_ENV ]

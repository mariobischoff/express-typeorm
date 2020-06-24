import setupApp from './app'

(async () => {
  try {
    const app = await setupApp()
    app.listen(3333, () => {
      console.log(`api running on port ${3333}`)
    })
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
})()

import Container from './components/Container'

function App() {
  return (
    <>
      <div className="flex justify-center items-center w-full h-screen">
        <Container
          heading={'Improve your front-end skills by building projects'}
          paragraph={
            'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level'
          }
        />
      </div>
    </>
  )
}

export default App

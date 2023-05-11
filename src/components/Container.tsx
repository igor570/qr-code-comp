import QrCode from './QrCode'

interface Props {
  heading: string
  paragraph: string
}

const Container = ({ heading, paragraph }: Props) => {
  return (
    <>
      <div className="w-72 h-[28rem] bg-white rounded-2xl drop-shadow-lg text-lg">
        <QrCode />
        <p className="text-center pt-4 pl-4 pr-4 font-bold ">{heading}</p>
        <p className="text-sm text-center p-6 pt-3 font-normal">{paragraph}</p>
      </div>
    </>
  )
}

export default Container

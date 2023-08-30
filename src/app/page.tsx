import Image from 'next/image'

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <div className='relative h-screen w-screen'>
        <div className='absolute bottom-[100px] inset-x-0 flex_center flex-col'>
          {/*Name and Role*/}
          <h1 className='text-secondary_lightgray name'>Andres Molina</h1>
          <h4 className='text-secondary_darkgray name__role'>Software Developer</h4>

          {/*Projects Botton -> Should Redirect to more projects*/}
          <button className='project_button border-solid border-2 border-comp_green rounded-xl'>
            <p className='project_button__text text-comp_green-100'>Projects</p>
          </button>
        </div>
      </div>
    </main>
  )
}
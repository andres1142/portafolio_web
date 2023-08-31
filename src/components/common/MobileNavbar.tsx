import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Bars3Icon, AcademicCapIcon, UserIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

function MobileNavbar() {
  return (
    <div className='flex items-center justify-end w-full text-right bg-secondary_darkgray'>
      <Menu as='div' className='relative inline-block text-lelf '>
        <div>
          <Menu.Button>
            <Bars3Icon className='h-10 w-10 text-secondary-darkgray mr-5' />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease duration-500 transform"
          enterFrom="opacity-0 -translate-y-20 -z-20"
          enterTo="opacity-100 translate-y-0 -z-10"

          leave="transition ease duration-300 transform"
          leaveFrom="opacity-100 translate-y-0 -z-10"
          leaveTo="opacity-0 -translate-y-20 -z-20"
        >
          <div className='w-screen absolute right-0'>
            <Menu.Items className='w-full flex flex-col items-start bg-secondary_darkgray rounded-b-sm'>
              <Menu.Item>
                {({ active }) => (
                  <button className='flex gap-2 menu_option h-12'>
                    <AcademicCapIcon className='ml-5 w-7 h-7 '/>
                    Projects
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button className='flex gap-2 menu_option h-12'>
                    <UserIcon className='ml-5 w-7 h-7'/>
                    About
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button className='flex gap-2 menu_option h-12'>
                    <ChatBubbleLeftRightIcon className='ml-5 w-7 h-7'/>
                    Contact Me
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </div>
        </Transition>
      </Menu>
    </div >
  )
}

export default MobileNavbar


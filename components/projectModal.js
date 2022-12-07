

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useEffect } from 'react'


import styles from '../styles/Modal.module.css'


import {AiOutlineClose} from 'react-icons/ai'

import Carousel from 'better-react-carousel'

const Gallery = () => {
  return (
    <Carousel cols={1} rows={1} loop >
      <Carousel.Item>
        <img width="100%" src="/imgs/insidertrends/slide1.png" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="/imgs/insidertrends/slide1.png" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="/imgs/insidertrends/slide1.png" />
      </Carousel.Item>
    </Carousel>
  )
}


export default function MyModal(props) {
//   let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    props.setIsOpen(false)
  }


  let data = {}

    if(props.index == 0) {
      data = {
        title: "Insider Trends",
        subtitle: "Insider Trends is a stock “library” iOS app coded in React Native that allows users to create multiple accounts, explore the most viewed stocks on the app, search for stocks, view information about a stock, and add or remove stocks from their library. Insider Trends aims to provide detailed information for people new to the stock market and give them a place to keep track of all their favorite stocks.",
        textBody: " There are lots of “stocks” apps that exist on the app store, but most of them are over complicated and cater to users who have previous knowledge about the stock market. Furthermore, these applications gather and share information from the user. The target audiences for Insider Trends are users who are new to the stock market and want their financial information to be private to them. \n  Insider Trends started out as an independent study I created to learn more about mobile application development. My goal for Insider Trends was to learn as much as possible about mobile app development by developing and publishing my own iOS app. Insider Trends is a stock “library” iOS app coded in React Native that allows users to create multiple accounts, explore the most viewed stocks on the app, search for stocks, view information about a stock, and add or remove stocks from their library. During my independent study, I was unable to release Insider Trends to the app store due to data hierarchy problems and scalability issues. After completing a software engineering summer internship for a social media recommendation app this past summer - RecSpot - I could finally fix these complex problems with my newly gained knowledge and problem-solving skills. I published Insider Trends to the Apple App Store this past September, and since then have had friends and family download and use the app. My goal for the design of Insider Trends is to give the user a friendly, accessible, and easy-to-use interface to encourage all people to explore the stock market and a platform that keeps their data private. Insider Trends taught me the end-to-end process of developing a mobile app and how to keep user data private.",
        images: ["/imgs/insidertrends/slide1.png", "/imgs/insidertrends/slide2.png", "/imgs/insidertrends/slide3.png", "/imgs/insidertrends/slide4.png", "/imgs/insidertrends/slide5.png", "/imgs/insidertrends/slide6.png"]
      }
    } else if (props.index == 1) {
      data = {
        title: "Top Tech Stocks",
        subtitle: "Web application that displays detailed information about the biggest tech companies and allows the user to sort them by employees and market cap, and add the stock to their library where they can see the cumulative market cap and daily percent change. ",
        textBody: "After researching different web applications that display stock market information they all seem to be cluttered with information and difficult to navigate. Top Tech Stocks targets users interested in big tech companies with a clean and easy-to-use interface. I opted to utilize an API to give users real-time stock data and a data-hierarchy system that optimizes load time by loading all of the data at once and passing user actions down to child components. After multiple design iterations, I decided on a black, green, and blue color scheme. I use blue to represent percent change when it is negative because it feels less harsh than red and black/grey colors to give the foreground a sleek look. Top Tech Stocks gave me more experience working with and displaying real-time data. I will also use it as a base for the Insider Trends web experience when the time comes.",
        images: ["/imgs/toptech/slide1.png", "/imgs/toptech/slide2.png", "/imgs/toptech/slide3.png", "/imgs/toptech/slide4.png", "/imgs/toptech/slide5.png", "/imgs/toptech/slide6.png"]
      }
    } else if (props.index == 2) {
      data = {
        title: "Pills2Me Redesign",
        subtitle: "Alongside a small team, I helped redesign a startup's user interface for iOS and mock up the user experience. The startup we worked with Pills2Me, a delivery application for pharmaceuticals. We created a hi-fidelity mobile prototype and shared it with the start-up team.",
        textBody: "Before starting the design for Pills2Me we designated a target group and determined what they will need to easily use the application. The target group is the elderly or friends/children of the elderly who are trying to make it easier for them to get their medication. For our first design iteration, we each sketched a user interface design and wrote out some of the user experience features. Surprisingly we all had very different designs and after discussing how we can combine the designs together we came up with our first prototype. Our first prototype consisted of a create an account, schedule delivery, and en route page. Before sending the startup a finished prototype we shared the design with fellow classmates and an industry professional to receive feedback. This project taught me about the iterative design process and how valuable receiving feedback from outside of your team is. Furthermore, I learned the ins and outs of Figma and how to leverage design themes to create a beautiful user interface.",
        images: ["/imgs/pills2Me/slide1.png", "/imgs/pills2Me/slide2.png", "/imgs/pills2Me/slide3.png", "/imgs/pills2Me/slide4.png"]
      }
    } else if (props.index == 3) {
      data = {
        title: "Eye Tracking",
        subtitle: "With a team, I helped prototype a website, compute A/B testing on the website, and generate a heatmap utilizing test subjects and where they were looking when using the website prototype.",
        textBody: "Lots of technology companies utilize A/B testing to garner feedback on new UI/UX implementations. For large tech companies, small interface changes affect large amounts of people, thus any change must be tested to guarantee user satisfaction. Our group came up with two different designs to gauge how users react to different UI choices.",
        images: ["/imgs/nest1.png", "/imgs/nest2.png"]
      }
    }

  
  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      {/* <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div> */}

      <Transition appear show={props.isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex flex-col transform overflow-hidden rounded-2xl bg-white p-10 text-left align-middle shadow-xl transition-all">

                  <button className = {styles.closeButton} onClick = {() => closeModal()}>
                    <AiOutlineClose color = "white" size = {20}/>
                  </button>
                  {/* <Dialog.Title
                    as="h3"
                    className={styles.title}
                  >
                    {"Insider Trends"}
                  </Dialog.Title> */}
                  {/* <div className="mt-2">
                    <p className="text-sm text-gray-500">
                    Insider Trends started out as an independent study I created to learn more about mobile application development. My goal for Insider Trends was to learn as much as possible about mobile app development by developing and publishing my own iOS app.
                    </p>
                  </div>

                  <div className = {styles.galleryContainer}>
                    <Gallery/>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div> */}

                  <div className = {styles.container}>

                    <div className = {styles.header}>
                      <h3 className = {styles.title}>
                        {data.title}
                      </h3>

                      <a className = {styles.linkContainer}>

                        <p className = {styles.linkText}>
                            Website
                        </p>

                      </a>



                      
                    </div>

                    <h4 className = {styles.subtitle}>
                      {data.subtitle}
                    </h4>

                    <div className = {styles.sectionContainer}>

                      <p className = {styles.sectionText}>
                      {data.textBody}
                      </p>

                      <div className = {styles.galleryContainer}>

                      
                      <Carousel cols={1} rows={1} loop >
                        <Carousel.Item>
                          <img width="100%" src={data.images[0]} />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img width="100%" src={data.images[1]} />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img width="100%" src={data.images[2]} />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img width="100%" src={data.images[3]} />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img width="100%" src={data.images[4]} />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img width="100%" src={data.images[5]} />
                        </Carousel.Item>
                      </Carousel>
  


                      </div>



                    </div>





                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
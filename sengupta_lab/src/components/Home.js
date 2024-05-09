import React from 'react'

const Home = () => {

  return (
    <>
      <div className="home flex justify-center items-center-auto pb-2">
        <img src='https://humantechnopole.it/wp-content/uploads/2020/08/shutterstock_314077820-scaled.jpg' alt="" className="object-cover" />
      </div>
      <p className="text-2xl lg:text-3xl xl:text-3xl text-center lg:text-left font-bold p-2">
        Spotting spectacular molecular patterns that determine health, diseases and drug actions
      </p>
      <p className="px-4 lg:px-2 mt-4 lg:mt-8 mb-8 text-lg lg:text-xl xl:text-2xl text-gray-400 leading-relaxed text-center lg:text-left">
        We develop new computational approaches to study collective behavior of biomolecules and use these insights to understand pathogenesis of diseases such as cancers. Further, we aim to spot the signs of genetically biased drug actions. Our approaches are highly interdisciplinary, combining bulk/single cell omics, molecular biology, bio/chemo informatics and computing at scale. We make conscious efforts to take our technologies to patients through strong industry-academia partnerships.
      </p>

    </>
  )
}

export default Home
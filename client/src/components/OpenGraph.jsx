import { Helmet } from 'react-helmet'; 

export default function OpenGraph() {
  return (
    <div>
        <Helmet>
        <meta property="og:title" content="Maxwell Estate" /> 
        <meta property="og:description" content="Maxwell Estate is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible." /> 
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/real-estate-marketplace-afc7a.appspot.com/o/1701046281887-sale4.png?alt=media&token=9534639d-59f7-4a0b-b731-5d675ce0d556" /> 
        <meta property="og:url" content="https://maxwell-real-estate.onrender.com" /> 
        </Helmet>
    </div>
  )
}

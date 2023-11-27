import { Helmet } from 'react-helmet'; 

export default function OpenGraph() {
  return (
    <div>
        <Helmet>
            {/* Open Graph */}
            <meta property="og:url" content="https://maxwell-real-estate.onrender.com/" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Maxwell Real Estate APP" />
            <meta property="og:description" content="Maxwell Estate is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods." />
            <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/real-estate-marketplace-afc7a.appspot.com/o/1701046281887-sale4.png?alt=media&token=9534639d-59f7-4a0b-b731-5d675ce0d556" />
            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content="maxwell-real-estate.onrender.com" />
            <meta property="twitter:url" content="https://maxwell-real-estate.onrender.com/" />
            <meta name="twitter:title" content="Maxwell Real Estate APP" />
            <meta name="twitter:description" content="Maxwell Estate is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods." />
            <meta name="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/real-estate-marketplace-afc7a.appspot.com/o/1701046281887-sale4.png?alt=media&token=9534639d-59f7-4a0b-b731-5d675ce0d556" />
            <meta name="twitter:creator" content="@xiecrypto1996" />
        </Helmet>
    </div>
  )
}

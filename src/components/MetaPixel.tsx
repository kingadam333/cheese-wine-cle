import Script from "next/script";

// Meta (Facebook) Pixel ID for ad tracking/analytics. Pixel IDs are public
// identifiers embedded in page source, not secrets, so it's fine to commit.
//
// Cross-domain note: ticket purchases complete on tastecle.com, a domain we
// don't control. TicketLink.tsx fires an InitiateCheckout event here (on
// this domain) when someone clicks "Get Tickets", and forwards fbclid/UTM
// params to TasteCLE so the click can still be correlated manually in Ads
// Manager. For Meta to stitch the full funnel together automatically
// (view -> click -> purchase as one journey), TasteCLE would need to load
// this same Pixel ID on their checkout pages, and this Pixel ID would need
// to be added as an additional domain under Events Manager -> this pixel ->
// Settings -> Configure Web Events -> Add domains. That requires access to
// TasteCLE's site, which we don't have from this repo.
const META_PIXEL_ID = "372028963594033";

export default function MetaPixel() {
  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${META_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}

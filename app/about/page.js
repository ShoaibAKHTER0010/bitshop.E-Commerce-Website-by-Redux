"use client"
import Image from 'next/image';
import Navbar from '../components/Navbar';
export default function About() {
  return (
    <>
    <Navbar/>
      <section className="bg-white py-8">
        <div className=" mx-auto px-8 md:px-20">
          <div className="text-center py-10 md:py-20">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-lg text-gray-600">
              Welcome to Bitshop, your number one source for all things [product]. We are dedicated to giving you the
              very best of [product], with a focus on dependability, customer service, and uniqueness.
            </p>
          </div>
          <div className="flex flex-wrap ">
            <div className="w-full md:w-1/2  md:mb-0">
              <Image src="/images/bit-img.png" alt="Our Team" className="rounded-lg shadow-lg" width={"500"} height={"700"} />
            </div>
            <div className="w-full md:w-1/2  pt-10 md:pt-0">
              <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
              <p className="text-gray-600 mb-4">
                Founded in [2021] by [m.virat-koli], Bitshop has come a long way from its beginnings in a [back-market danyore]. When [ahmad] first started out, [his] passion for [busness] drove them to
                [action], and gave [him] the impetus to turn hard work and inspiration into a booming online
                store.
              </p>
              <p className="text-gray-600">
                We now serve customers all over [pakistan], and are thrilled to be a part of the [loyal] wing of the
                [stylish cloths] industry.
              </p>
              <h3 className="text-2xl font-semibold mb-4 mt-8">Our Mission</h3>
              <p className="text-gray-600">
                Our mission is to provide high-quality [products/services] that bring joy and value to our customers
                lives.
              </p>

              <div className="mt-12">
  <h3 className="text-2xl font-semibold mb-4">Customer Care</h3>
  <p className="text-gray-600">
    At Bitshop, we prioritize our customers above all else. Our dedicated customer care team is always here to assist you with any questions, concerns, or issues you may encounter. We strive to provide timely and effective solutions to ensure your shopping experience is seamless and enjoyable. Your satisfaction is our top priority, and we are committed to offering you the best service possible. Whether you need help with an order, product information, or any other inquiry, we are just a call or email away.
  </p>
</div>


  {/* links............. */}

  <div className=" pt-16 md:pt-40">
            <h3 className="text-2xl font-semibold mb-4">Connect with Us</h3>
            <div className="flex  space-x-6">
              <a href="https://www.instagram.com/yourinstagram" className="text-gray-600 hover:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8" viewBox="0 0 24 24">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.243 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.243 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.243-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.243-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.012-4.947.072-1.451.065-2.918.385-3.993 1.461-1.076 1.075-1.396 2.542-1.461 3.993-.06 1.28-.072 1.688-.072 4.947s.012 3.667.072 4.947c.065 1.451.385 2.918 1.461 3.993 1.075 1.076 2.542 1.396 3.993 1.461 1.28.06 1.688.072 4.947.072s3.667-.012 4.947-.072c1.451-.065 2.918-.385 3.993-1.461 1.076-1.075 1.396-2.542 1.461-3.993.06-1.28.072-1.688.072-4.947s-.012-3.667-.072-4.947c-.065-1.451-.385-2.918-1.461-3.993-1.075-1.076-2.542-1.396-3.993-1.461-1.28-.06-1.688-.072-4.947-.072z"
                  ></path>
                  <path
                    d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.164a3.953 3.953 0 110-7.906 3.953 3.953 0 010 7.906zm6.406-11.848a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"
                  ></path>
                </svg>
              </a>
              <a href="https://t.me/yourtelegram" className="text-gray-600 hover:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8" viewBox="0 0 24 24">
                  <path d="M12 0c6.628 0 12 5.372 12 12s-5.372 12-12 12-12-5.372-12-12 5.372-12 12-12zm5.11 8.69c.186-.759-.263-1.064-.878-.838l-12.15 4.618c-.761.292-.75.705-.137.899l3.111.972 7.195-4.523c.34-.216.652-.099.397.137l-5.837 5.355-.238 3.292c.342 0 .491-.155.671-.339l1.611-1.555 3.354 2.463c.617.348 1.068.169 1.225-.576l2.241-10.128zm0 0"></path>
                </svg>
              </a>
              <a href="https://www.facebook.com/yourfacebook" className="text-gray-600 hover:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.325 1.325 1.325h11.494v-9.267h-3.117v-3.615h3.117v-2.676c0-3.065 1.864-4.736 4.582-4.736 1.309 0 2.437.097 2.764.141v3.209h-1.897c-1.487 0-1.775.707-1.775 1.742v2.32h3.561l-.466 3.615h-3.095v9.267h6.068c.733 0 1.325-.592 1.325-1.325v-21.35c0-.733-.592-1.325-1.325-1.325zm0 0"></path>
                </svg>
              </a>
              <a href="https://www.bitshop.com" className="text-gray-600 hover:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8" viewBox="0 0 24 24">
                  <path d="M12 0c-6.628 0-12 5.372-12 12s5.372 12 12 12 12-5.372 12-12-5.372-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm0-18c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 14c-3.313 0-6-2.687-6-6s2.687-6 6-6 6 2.687 6 6-2.687 6-6 6zm0-10c-2.213 0-4 1.787-4 4s1.787 4 4 4 4-1.787 4-4-1.787-4-4-4zm0 6c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm0-4c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm0 0"></path>
                </svg>
              </a>
            </div>
          </div>

           
            </div>
          </div>
        
        </div>
      </section>
    </>
  );
}

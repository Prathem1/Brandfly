'use client';

export default function PaymentPage() {
  return (
    <section className="site-container">
      <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white flex flex-col items-center justify-center px-6 py-16 mt-[2cm]">
        
        {/* Heading Section */}
        <div className="max-w-3xl text-center">
          <div className="bg-yellow-300 rounded-full px-5 py-3 sm:px-6 sm:py-4 inline-block mb-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 ">
              Secure & Instant Payments
            </h1>
          </div>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Easily make payments using UPI. We accept <span className="font-semibold text-gray-800">Google Pay</span> and <span className="font-semibold text-gray-800">Paytm</span> — just scan & pay.  
            Your transactions are <span className="text-green-600 font-medium">100% secure</span> and hassle-free.
          </p>
        </div>

        {/* QR Cards Section */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
          {/* Google Pay */}
          <div className="group w-full max-w-sm aspect-square bg-yellow-300 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out mx-auto">
            <img
              src="/payment/payment1.png"
              alt="Paytm QR"
              className="w-full h-full object-contain rounded-xl"
            />
            <p className="text-center mt-4 font-semibold text-gray-800 text-lg">
              Paytm
            </p>
          </div>

          {/* Paytm */}
          <div className="group w-full max-w-sm aspect-square bg-yellow-300 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out mx-auto">
            <img
              src="/payment/payment2.png"
              alt="Google Pay QR"
              className="w-full h-full object-contain rounded-xl"
            />
            <p className="text-center mt-4 font-semibold text-gray-800 text-lg">
               Google Pay
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <p className="mt-12 text-sm text-gray-500">
          ⚡ Instant confirmation & zero hidden charges.
        </p>
      </div>
    </section>
  );
}

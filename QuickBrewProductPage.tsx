import React from 'react';

const QuickBrewProductPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">

      {/* Section 1: Hero */}
      <section className="bg-gradient-to-r from-[#6f4e37] to-[#3d2b1f] text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Coffee in 10 Seconds – No Machines, No Mess
        </h1>
        <p className="text-xl mb-6">
          Barista-grade taste. Zero sugar. Always ready.
        </p>
        <div className="flex justify-center gap-4 mb-6">
          <span className="bg-white text-[#6f4e37] px-4 py-2 rounded-full text-sm font-semibold">No Sugar</span>
          <span className="bg-white text-[#6f4e37] px-4 py-2 rounded-full text-sm font-semibold">Portable</span>
          <span className="bg-white text-[#6f4e37] px-4 py-2 rounded-full text-sm font-semibold">Barista Taste</span>
        </div>
        <button className="bg-white text-[#3d2b1f] font-bold px-8 py-3 rounded-2xl shadow-md">Buy Now</button>
      </section>

      {/* Section 2–7 (previously omitted) */}
      <section className="max-w-3xl mx-auto py-10 px-4 bg-[#fdf9f4] rounded-2xl shadow mt-8 text-center">
        <h2 className="text-3xl font-bold mb-2">₨2,999</h2>
        <p className="text-gray-700 mb-4">30-Day Money Back Guarantee ✅</p>
        <div className="flex justify-center items-center gap-3 mb-6">
          <label htmlFor="quantity" className="font-medium">Quantity:</label>
          <select id="quantity" className="border px-4 py-2 rounded text-gray-800">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <button className="bg-[#3d2b1f] hover:bg-[#4f382a] text-white px-8 py-3 rounded-full text-lg font-semibold shadow">Add to Cart</button>
      </section>

      <section className="grid md:grid-cols-2 items-center gap-10 px-4 py-16 bg-[#fff8f1]">
        <div>
          <h3 className="text-3xl font-bold mb-2">Tired of bitter, slow coffee?</h3>
          <p className="text-lg">Traditional coffee takes time and machines. QuickBrew works instantly with just water.</p>
        </div>
        <img src="https://via.placeholder.com/400x300" alt="Using QuickBrew" className="rounded-xl shadow-md" />
      </section>

      <section className="bg-white py-16 px-4">
        <h3 className="text-2xl font-bold mb-8 text-center">Why People Love QuickBrew</h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-[#f4f1ee] p-6 rounded-xl shadow">
            <h4 className="font-bold text-xl mb-2">⚡ Fast Brew</h4>
            <p>Just add hot water and stir – ready in 10 seconds.</p>
          </div>
          <div className="bg-[#f4f1ee] p-6 rounded-xl shadow">
            <h4 className="font-bold text-xl mb-2">🧳 Travel Ready</h4>
            <p>Small, light packs for your bag or pocket.</p>
          </div>
          <div className="bg-[#f4f1ee] p-6 rounded-xl shadow">
            <h4 className="font-bold text-xl mb-2">🍫 Café Taste</h4>
            <p>Rich flavor that tastes like it’s from a café.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#fffefb] py-16 px-4">
        <h3 className="text-2xl font-bold mb-6 text-center">What’s Inside?</h3>
        <ul className="grid md:grid-cols-2 gap-4 max-w-xl mx-auto list-disc pl-5">
          <li>100% Arabica Beans</li>
          <li>No Sugar or Additives</li>
          <li>Vegan Friendly</li>
          <li>Micro-ground Instant Blend</li>
        </ul>
      </section>

      <section className="bg-[#fdf9f4] py-16 px-4">
        <h3 className="text-2xl font-bold mb-8 text-center">Customer Reviews</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-xl shadow text-sm">
            <p>“Best instant coffee I’ve had. It’s so smooth.”</p>
            <div className="mt-2 font-semibold">Ali Raza ⭐⭐⭐⭐⭐</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow text-sm">
            <p>“QuickBrew saved me every morning before office.”</p>
            <div className="mt-2 font-semibold">Fatima B. ⭐⭐⭐⭐⭐</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow text-sm">
            <p>“Rich café flavor without the sugar. Love it.”</p>
            <div className="mt-2 font-semibold">Umer S. ⭐⭐⭐⭐⭐</div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <h3 className="text-2xl font-bold mb-8 text-center">How QuickBrew Compares</h3>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse w-full text-center">
            <thead>
              <tr className="bg-[#3d2b1f] text-white">
                <th className="px-4 py-2">Feature</th>
                <th className="px-4 py-2">QuickBrew</th>
                <th className="px-4 py-2">Instant Coffee</th>
                <th className="px-4 py-2">K-Cups</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#fdf9f4]">
                <td className="border px-4 py-2">Price / Month</td>
                <td className="border px-4 py-2 font-bold">₨2,999</td>
                <td className="border px-4 py-2">₨4,000</td>
                <td className="border px-4 py-2">₨5,500</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Time to Brew</td>
                <td className="border px-4 py-2">10 sec</td>
                <td className="border px-4 py-2">5 min</td>
                <td className="border px-4 py-2">3 min</td>
              </tr>
              <tr className="bg-[#fdf9f4]">
                <td className="border px-4 py-2">Sugar-Free</td>
                <td className="border px-4 py-2">✅</td>
                <td className="border px-4 py-2">❌</td>
                <td className="border px-4 py-2">❌</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Taste</td>
                <td className="border px-4 py-2">Rich</td>
                <td className="border px-4 py-2">Bitter</td>
                <td className="border px-4 py-2">OK</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 8: Final CTA */}
      <section className="bg-[#3d2b1f] text-white py-16 px-4 text-center">
        <h3 className="text-3xl font-bold mb-4">Ready for Better Coffee?</h3>
        <p className="mb-6">Limited stock. 30-Day Guarantee. Order Now!</p>
        <button className="bg-white text-[#3d2b1f] font-bold px-10 py-4 rounded-full text-lg">Buy Now – ₨2,999</button>
      </section>

    </div>
  );
};

export default QuickBrewProductPage;
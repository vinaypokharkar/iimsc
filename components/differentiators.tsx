import React from 'react';

const differentiators = [
  {
    number: 1,
    title: 'Candidate-First Approach',
    description: "We put you at the center of everything. With 30+ years of combined expertise, we help Indian automotive professionals build real careers with Europe's most respected brands.",
  },
  {
    number: 2,
    title: "Europe's Largest Automotive Network",
    description: 'Choose from 60+ top automotive companies across Europe. From passenger vehicles and trucks to machinery, modifications, tires, and inspection – we connect you to the right opportunity.',
  },
  {
    number: 3,
    title: 'Simple Process, Trusted Results',
    description: 'With 1,200+ placements across 8 countries, our dedicated managers guide you from start to finish. No advance payments – your trust and success come first.',
  },
  {
    number: 4,
    title: 'Support Beyond Recruitment',
    description: "From job change guidance to relocation, family support, and settling your kids abroad – we stay with you long after placement. For us, it's a relationship, not a transaction.",
  },
];

const Differentiators = () => {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-6xl font-bold text-black tracking-tight leading-[1.1]">
              What Makes IIMSC <br/>
              <span className="bg-gradient-to-r from-[#5C4DFF] via-[#33348D] to-[#1E1E1E] bg-clip-text text-transparent italic">Different</span>
            </h2>
          </div>
          <p className="text-gray-600 max-w-md text-lg font-light pb-2">
            We don't just fill positions. We build bridges between potential and opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {differentiators.map((item, index) => (
            <div 
              key={item.number} 
              className={`relative p-10 rounded-3xl bg-white/80 backdrop-blur-sm overflow-hidden group hover:bg-white hover:shadow-xl transition-all duration-500 border border-gray-100 ${index === 0 || index === 3 ? 'md:col-span-2' : ''}`}
            >
              <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                <div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5C4DFF]/10 to-[#33348D]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <span className="text-xl font-bold text-[#5C4DFF]">{item.number}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4 group-hover:text-[#33348D] transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">{item.description}</p>
                </div>
              </div>
              
              {/* Decorative Number */}
              <div className="absolute -right-10 -bottom-20 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                <span className="text-[15rem] font-bold text-black leading-none select-none">
                  {item.number}
                </span>
              </div>
              
              {/* Gradient Line on Hover */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#5C4DFF] to-[#33348D] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;

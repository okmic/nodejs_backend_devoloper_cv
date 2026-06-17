import { siteData } from '../../data'

export default function Hero() {
  const { hero } = siteData

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden px-4">
      <div className="relative z-10 text-center w-full max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#68A063]/30 bg-[#68A063]/5 backdrop-blur-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-[#68A063] animate-pulse"></span>
          <span className="text-[#68A063] text-xs font-mono tracking-wider">NODE.JS BACKEND</span>
          <span className="text-gray-500 text-xs">|</span>
          <span className="text-gray-400 text-xs font-mono">DEVELOPER</span>
        </div>

        <div className="mb-8 sm:mb-16">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-4 leading-tight tracking-tighter">
            {hero.title.split(' ')[0]}
            <span className="inline-block mt-2 sm:mt-0 text-transparent bg-clip-text bg-gradient-to-r from-[#68A063] to-[#7CB873]">
              {' '}{hero.title.split(' ')[1]}
            </span>
          </h1>
          
          <p className="text-base sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light px-4">
            {hero.description}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mb-8 sm:mb-12">
          {hero.stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-xl sm:text-3xl font-mono font-bold text-[#68A063] mb-1 sm:mb-2 transition-all duration-300 group-hover:text-[#7CB873] group-hover:scale-105">
                {stat.number}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider font-light">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <button 
            onClick={() => scrollToSection('contact')}
            className="w-full cursor-pointer sm:w-auto px-6 py-3 sm:px-8 sm:py-4 border-2 border-[#68A063] text-[#68A063] font-bold rounded-lg hover:bg-[#68A063] hover:text-white transition-all duration-300 transform hover:scale-105 text-sm sm:text-base font-mono tracking-wider"
          >
            {hero.buttonValue}
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
          
          <button 
            onClick={() => scrollToSection('about')}
            className="w-full cursor-pointer sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-gray-400 font-medium rounded-lg hover:text-white transition-all duration-300 text-sm sm:text-base border border-transparent hover:border-[#68A063]/30"
          >
            Узнать больше
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollToSection('about')}>
        <div className="w-4 h-6 sm:w-6 sm:h-10 border-2 border-[#68A063]/50 rounded-full flex justify-center hover:border-[#68A063] transition-all duration-300">
          <div className="w-1 h-2 sm:h-3 bg-[#68A063] rounded-full mt-1 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
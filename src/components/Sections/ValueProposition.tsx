import { siteData } from '../../data'

export default function ValueProposition() {
  const { about } = siteData
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-10 w-48 h-48 sm:w-72 sm:h-72 bg-[#68A063]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-10 w-64 h-64 sm:w-96 sm:h-96 bg-[#7CB873]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-64 sm:h-64 bg-[#68A063]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(104,160,99,0.15) 0%, transparent 50%)`
      }}></div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#68A063] to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#7CB873] to-transparent opacity-30"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-black/80 rounded-xl sm:rounded-2xl border border-[#68A063]/30 mb-6 sm:mb-8 backdrop-blur-xl">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#68A063] rounded-full animate-pulse"></div>
            <span className="text-[#68A063] text-xs sm:text-sm font-mono font-bold tracking-[0.2em]">
              {about.title}
            </span>
          </div>

          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            <h2 className="text-2xl sm:text-4xl lg:text-6xl xl:text-7xl font-black text-white leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#68A063] via-[#7CB873] to-[#68A063]">
                {about.title1}
              </span>
              <span className="text-white">{about.subTitle1}</span>
            </h2>
            <h2 className="text-2xl sm:text-4xl lg:text-6xl xl:text-7xl font-black text-white leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7CB873] via-[#68A063] to-[#7CB873]">
                {about.subSubTitle1}
              </span>
              <span className="text-white"> {about.subSubSubTitle1}</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed font-light mt-6 sm:mt-8 px-2">
            {about.title2}
            <span className="text-white font-medium"> {about.subTitle2}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {about.items.map((value, index) => {
            const IconComponent = value.icon
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-40 transition-all duration-700 blur-xl group-hover:blur-lg scale-95 group-hover:scale-100`}></div>

                <div className="relative bg-gradient-to-br from-[#68A063]/5 to-[#7CB873]/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-[#68A063]/20 group-hover:border-[#68A063]/50 transition-all duration-500 h-full overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500`}></div>

                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden opacity-40 group-hover:opacity-70 transition-opacity duration-300">
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#68A063] group-hover:border-[#7CB873] transition-colors duration-300"></div>
                  </div>

                  <div className="absolute top-3 sm:top-4 lg:top-6 left-3 sm:left-4 lg:left-6 opacity-60">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#68A063]/20 leading-none group-hover:text-[#68A063]/30 transition-colors duration-300 font-mono">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  <div className="relative z-10 h-full flex flex-col">
                    <div className="mb-4 sm:mb-6 flex-1">
                      <div className="flex items-start justify-between mb-3 sm:mb-4">
                        <div className={`p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-gradient-to-r ${value.gradient} backdrop-blur-sm transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-[0_0_30px_rgba(104,160,99,0.2)] group-hover:shadow-[0_0_50px_rgba(104,160,99,0.3)]`}>
                          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                        </div>

                        <div className={`inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r ${value.gradient} rounded-xl sm:rounded-2xl backdrop-blur-sm border border-white/30 shadow-[0_0_20px_rgba(104,160,99,0.2)] group-hover:shadow-[0_0_40px_rgba(104,160,99,0.3)] transition-all duration-300`}>
                          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                          <span className="text-white text-xs font-mono font-bold tracking-wider whitespace-nowrap">
                            {value.metric}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 lg:mb-4 leading-tight font-mono tracking-wide group-hover:text-[#7CB873] transition-colors duration-300">
                        {value.title}
                      </h3>

                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light group-hover:text-gray-200 transition-colors duration-300">
                        {value.description}
                      </p>
                    </div>

                    <div className="space-y-1.5 sm:space-y-2">
                      {value.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${value.gradient} flex-shrink-0 group-hover:scale-125 transition-transform duration-300`}></div>
                          <span className="leading-tight font-mono">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 right-3 sm:right-4 lg:right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-[#68A063] to-[#7CB873] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(104,160,99,0.4)] group-hover:shadow-[0_0_60px_rgba(104,160,99,0.5)] transition-all duration-300">
                        <div className="w-2 h-2 sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-black rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {about.stats.map((stat, index) => (
            <div
              key={index}
              className="group relative text-center p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: stat.delay }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>

              <div className="absolute inset-0 bg-gradient-to-br from-[#68A063]/5 to-[#7CB873]/5 backdrop-blur-sm border border-[#68A063]/20 rounded-xl sm:rounded-2xl group-hover:border-[#68A063]/50 transition-all duration-300"></div>

              <div className="relative z-10">
                <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black text-white mb-1 sm:mb-2 font-mono group-hover:text-[#7CB873] transition-colors duration-300">
                  {stat.number}
                  <span className="text-[#68A063] group-hover:text-[#7CB873] transition-colors duration-300">
                    {stat.suffix}
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-gray-400 leading-tight font-light group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

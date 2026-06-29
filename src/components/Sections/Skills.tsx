import { siteData } from '../../data'
import { Server, Database, Zap, Cloud, Layers, BookOpen } from 'lucide-react'

export default function Skills() {
  const { skills } = siteData
  const getCategoryIcon = (categoryName: string) => {
    const icons: Record<string, React.ComponentType<any>> = {
      "Node.js": Server,
      "Базы данных": Database,
      "Инфраструктура": Cloud,
      "Архитектура": Layers,
      "Изучаю": BookOpen
    }
    return icons[categoryName] || Zap
  }
  const getSkillIcon = (skillName: string) => {
    const icons: Record<string, React.ComponentType<any>> = skills.skillIcons
    return icons[skillName] || Zap
  }

  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(104,160,99,0.06),transparent_50%)]"></div>
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(104,160,99,0.1) 0%, transparent 50%)`
      }}></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#68A063] to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#7CB873] to-transparent opacity-30"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/80 rounded-xl border border-[#68A063]/20 mb-6 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-[#68A063] animate-pulse"></div>
            <span className="text-[#68A063] text-sm font-mono tracking-[0.2em] font-medium">
              {skills.title}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-black text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#68A063] to-[#7CB873]">
              {skills.title1.split(' ')[0]}
            </span>
            <span className="text-white ml-2">{skills.title1.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-light">
            {skills.subtitle1}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-[600px] mx-auto lg:max-w-none">
          {skills.categories.map((category, index) => {
            const CategoryIcon = getCategoryIcon(category.category)
            const gradient = "from-[#68A063] to-[#7CB873]"
            const isLearning = category.category === "Изучаю"
            return (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-2xl opacity-0 group-hover:opacity-30 transition-all duration-700 blur-xl group-hover:blur-lg scale-95 group-hover:scale-100`}></div>

                <div className={`relative bg-gradient-to-br from-[#68A063]/5 to-[#7CB873]/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border transition-all duration-500 h-[280px] sm:h-[320px] lg:h-[340px] flex flex-col w-[90vw] max-w-[600px] mx-auto lg:w-auto lg:max-w-none overflow-hidden ${
                  isLearning
                    ? 'border-[#68A063]/30 hover:border-[#68A063]/60'
                    : 'border-[#68A063]/10 hover:border-[#68A063]/30'
                }`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500`}></div>

                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden opacity-40 group-hover:opacity-70 transition-opacity duration-300">
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#68A063] group-hover:border-[#7CB873] transition-colors duration-300"></div>
                  </div>

                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 opacity-60">
                    <div className="text-3xl sm:text-4xl font-black text-[#68A063]/20 leading-none group-hover:text-[#68A063]/30 transition-colors duration-300 font-mono">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  <div className="absolute -top-8 -right-8 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-bl from-[#68A063]/5 to-transparent rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
                  <div className="absolute -bottom-8 -left-8 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-tr from-[#7CB873]/5 to-transparent rounded-full group-hover:scale-150 transition-transform duration-1000"></div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-6 relative z-10 flex-shrink-0">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 sm:p-2.5 bg-gradient-to-r ${gradient} rounded-lg sm:rounded-xl shadow-[0_0_30px_rgba(104,160,99,0.15)] group-hover:shadow-[0_0_40px_rgba(104,160,99,0.25)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                        <CategoryIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <h3 className="text-base sm:text-xl font-mono font-semibold text-white tracking-wide group-hover:text-[#7CB873] transition-colors duration-300">
                        {category.category}
                      </h3>
                    </div>
                    <span className={`px-3 sm:px-4 py-1 sm:py-1.5 bg-gradient-to-r ${gradient} rounded-full text-white text-[10px] sm:text-xs font-mono font-medium shadow-[0_0_20px_rgba(104,160,99,0.15)] whitespace-nowrap flex-shrink-0`}>
                      {category.level}
                    </span>
                  </div>

                  <div className="space-y-3 sm:space-y-4 relative z-10 flex-1 overflow-hidden">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = getSkillIcon(skill.name)
                      return (
                        <div key={skillIndex} className="group/skill">
                          <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                              <div className="p-1 rounded-md bg-[#68A063]/5 group-hover/skill:bg-[#68A063]/10 transition-all duration-300 flex-shrink-0">
                                <SkillIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 group-hover/skill:text-[#68A063] transition-colors duration-300" />
                              </div>
                              <span className="text-gray-300 text-xs sm:text-sm font-mono group-hover/skill:text-white transition-colors duration-300 truncate">
                                {skill.name}
                              </span>
                            </div>
                            <span className="text-[#68A063] text-xs sm:text-sm font-mono font-medium group-hover/skill:text-[#7CB873] transition-colors duration-300 flex-shrink-0 ml-2">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-900/80 rounded-full h-1.5 sm:h-2 overflow-hidden border border-[#68A063]/5">
                            <div
                              className={`h-1.5 sm:h-2 rounded-full transition-all duration-1000 ease-out`}
                              style={{
                                width: `${skill.level}%`,
                                background: `linear-gradient(90deg, #68A063, #7CB873)`,
                                boxShadow: `0 0 20px rgba(104,160,99,0.2)`
                              }}
                            ></div>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <div className="absolute -bottom-3 -right-3 w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-[#68A063]/5 to-[#7CB873]/5 rounded-full blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-[600px] mx-auto lg:max-w-none">
          <a
            href={skills.stats.title1Link}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 sm:p-8 md:p-10 bg-black/60 rounded-xl border border-[#68A063]/10 hover:border-[#68A063]/30 transition-all duration-300 hover:bg-black/80 hover:shadow-[0_0_40px_rgba(104,160,99,0.08)] cursor-pointer"
          >
            <div className="flex items-center gap-3 justify-center mb-2">
              <div className="w-2 h-2 rounded-full bg-[#68A063] animate-pulse"></div>
              <span className="text-[#68A063] font-mono text-base sm:text-lg group-hover:text-[#7CB873] transition-colors duration-300 font-semibold">{skills.stats.title1}</span>
            </div>
            <div className="text-gray-400 text-sm sm:text-base font-light text-center group-hover:text-gray-300 transition-colors duration-300">Проекты и портфолио →</div>
          </a>

          <a
            href={skills.stats.title2Link}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 sm:p-8 md:p-10 bg-black/60 rounded-xl border border-[#68A063]/10 hover:border-[#68A063]/30 transition-all duration-300 hover:bg-black/80 hover:shadow-[0_0_40px_rgba(104,160,99,0.08)] cursor-pointer"
          >
            <div className="flex items-center gap-3 justify-center mb-2">
              <div className="w-2 h-2 rounded-full bg-[#7CB873] animate-pulse"></div>
              <span className="text-[#7CB873] font-mono text-base sm:text-lg group-hover:text-[#68A063] transition-colors duration-300 font-semibold">{skills.stats.title2}</span>
            </div>
            <div className="text-gray-400 text-sm sm:text-base font-light text-center group-hover:text-gray-300 transition-colors duration-300">Образование и ценности →</div>
          </a>
        </div>
      </div>
    </section>
  )
}

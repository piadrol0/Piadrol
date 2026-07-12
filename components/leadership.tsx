// "use client"
// import Image from "next/image"
// import { useLanguage } from "@/components/language-provider"

// export function Leadership() {
//   const { t } = useLanguage()
//   return <section id="leadership" className="section-shell leadership-section"><div className="section-intro narrow"><p className="section-label">{t.leadership.label}</p><h2>{t.leadership.title}</h2></div><div className="people-grid">{t.leadership.people.map(person => <article key={person.role}> {person.initials.startsWith("/") ? (
//     <div className="w-[128] h-[128]">

//       <Image
//         src={person.initials}
//         alt={person.name}
//         width={180}
//         height={180}
//         className="h-full w-full  rounded-full object-cover"
//       />
//     </div>
//   ) : (
//     <span>{person.initials}</span>
//   )}<div><p className="person-role">{person.role}</p><h3>{person.name}</h3><p className="person-bio">{person.bio}</p></div></article>)}</div></section>
// }
"use client"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export function Leadership() {
  const { t } = useLanguage()
  return <section id="leadership" className="section-shell leadership-section">
    <div className="section-intro narrow">
      <p className="section-label">{t.leadership.label}</p>
      <h2>{t.leadership.title}</h2>
    </div>
    <div className="people-grid">{t.leadership.people.map(person =>
      <article key={person.role}>
        {person.initials.startsWith("/") ? (
          <div className="w-[128] h-[128]">

            <Image
              src={person.initials}
              alt={person.name}
              width={180}
              height={180}
              className="h-full w-full  rounded-full object-cover"
            />
          </div>
        ) : (
          <span>{""}</span>
        )}
        <div><p className="person-role">{person.role}</p>
          <h3>{person.name}</h3>
          <p className="person-bio">{person.bio}</p>
        </div></article>
    )}
    </div>
  </section>
}



import Link from 'next/link'

export default function PermisInfo() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12">
          <span className="inline-block text-ocean-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Guide pratique
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            {"Le permis bateau \u00e0 Metz : tout ce qu'il faut savoir"}
          </h2>
        </div>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
          <h3 className="font-heading text-xl font-bold text-navy-900">
            {"Pourquoi passer son permis bateau en Moselle ?"}
          </h3>
          <p>
            {"La Moselle est l'un des plus beaux cours d'eau navigables de France. De Metz \u00e0 Coblence en Allemagne, le fleuve offre plus de 300 kilom\u00e8tres de voies navigables travers\u00e9es par des paysages vari\u00e9s : les rives urbaines de Metz, les coteaux viticoles du Luxembourg, les for\u00eats de la vall\u00e9e mosellane et les villages pittoresques de Rh\u00e9nanie. Passer son permis bateau \u00e0 Metz, c'est s'ouvrir les portes de ce r\u00e9seau fluvial unique, reli\u00e9 au Rhin, \u00e0 la Sarre et aux canaux fran\u00e7ais."}
          </p>
          <p>
            {"Le port de plaisance de Metz, situ\u00e9 au c\u0153ur de la ville, constitue le point de d\u00e9part id\u00e9al pour la formation pratique. Les stagiaires naviguent dans des conditions r\u00e9elles de trafic fluvial, avec des \u00e9cluses automatis\u00e9es, des passages de pont et un courant mod\u00e9r\u00e9 qui permet d'acqu\u00e9rir les bons r\u00e9flexes de navigation en toute s\u00e9curit\u00e9."}
          </p>

          <h3 className="font-heading text-xl font-bold text-navy-900">
            {"Les diff\u00e9rents permis plaisance"}
          </h3>
          <p>
            {"Le <strong>permis c\u00f4tier</strong> (option c\u00f4ti\u00e8re) est le permis le plus demand\u00e9 en France. Il autorise la conduite d'un bateau \u00e0 moteur en mer, jusqu'\u00e0 6 milles nautiques d'un abri, et sur l'ensemble des eaux int\u00e9rieures. C'est le permis polyvalent par excellence : il permet aussi bien de piloter un bateau sur la Moselle que de louer un bateau lors de vos vacances sur la C\u00f4te d'Azur ou en Bretagne."}
          </p>
          <p>
            {"Le <strong>permis fluvial</strong> (th\u00e9orie eaux int\u00e9rieures) est con\u00e7u sp\u00e9cifiquement pour la navigation sur les rivi\u00e8res, canaux et lacs. Il est id\u00e9al si vous pr\u00e9voyez de naviguer exclusivement sur les voies int\u00e9rieures, comme la Moselle, le canal de la Marne au Rhin ou les lacs vosgiens. La formation aborde les sp\u00e9cificit\u00e9s de la navigation fluviale : fonctionnement des \u00e9cluses, signalisation de rivi\u00e8re, r\u00e8gles de croisement et interaction avec le trafic commercial."}
          </p>
          <p>
            {"L'<strong>extension hauturi\u00e8re</strong> s'adresse aux d\u00e9tenteurs du permis c\u00f4tier qui souhaitent naviguer au-del\u00e0 des 6 milles, sans limite de distance. La formation approfondie couvre la navigation astronomique, l'utilisation du GPS et des cartes marines, la m\u00e9t\u00e9orologie avanc\u00e9e et la gestion d'une travers\u00e9e hauturi\u00e8re. Cet examen est exclusivement th\u00e9orique."}
          </p>

          <h3 className="font-heading text-xl font-bold text-navy-900">
            {"D\u00e9roulement de la formation et de l'examen"}
          </h3>
          <p>
            {"La formation au permis bateau se compose de deux volets compl\u00e9mentaires. La partie th\u00e9orique dure entre 5 et 8 heures, r\u00e9parties en cours du soir, en stage week-end ou en e-learning. Les th\u00e8mes abord\u00e9s incluent la r\u00e9glementation maritime, le balisage, la s\u00e9curit\u00e9 en mer, la m\u00e9t\u00e9o et les man\u0153uvres de base. La partie pratique se d\u00e9roule sur la Moselle pendant 3h30 avec un moniteur agr\u00e9\u00e9 : accostage, appareillage, man\u0153uvre d'homme \u00e0 la mer, passage d'\u00e9cluse pour le fluvial."}
          </p>
          <p>
            {"L'examen th\u00e9orique est un QCM de 40 questions pass\u00e9 dans un centre La Poste agr\u00e9\u00e9, disponible presque tous les jours \u00e0 Metz. Vous avez droit \u00e0 5 erreurs maximum. Le r\u00e9sultat est disponible sous 48 heures en ligne. La partie pratique est valid\u00e9e directement par le formateur lors de la s\u00e9ance de navigation. Le permis bateau est d\u00e9livr\u00e9 par la DDTM et envoy\u00e9 par courrier. Il est valable \u00e0 vie."}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/blog/comment-passer-permis-bateau-metz-guide-complet" className="text-ocean-600 hover:text-ocean-700 text-sm font-medium underline">
              {"Guide complet du permis bateau \u00e0 Metz"}
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/blog/5-erreurs-eviter-examen-permis-bateau" className="text-ocean-600 hover:text-ocean-700 text-sm font-medium underline">
              {"5 erreurs \u00e0 \u00e9viter \u00e0 l'examen"}
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/blog/naviguer-sur-la-moselle-guide-pratique" className="text-ocean-600 hover:text-ocean-700 text-sm font-medium underline">
              {"Naviguer sur la Moselle"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

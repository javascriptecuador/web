import React from "react";
import codeConductImg from "../images/code-of-conduct.svg";
import Layout from "../components/layout/layout";
const codeConduct = () => {
  return (
    <div>
      <Layout>
        <h2 className="text-center mt-4">Code of conduct</h2>
        <img className="mx-auto my-5" src={codeConductImg} />
        <p className="text-justify  w-11/12 mx-auto">
          Este Código de Conducta establece estándares de comportamiento para
          todas las personas que se involucren en los espacios de participación
          que estén alojados y/o asociados con la comunidad Javascript Ecuador,
          ya sean presenciales o virtuales. Estas normas aplican a todo tipo de
          participante, incluyendo, pero no limitado a, administradores,
          moderadores de los foros y miembros de la comunidad; incluyendo a los
          visitantes poco frecuentes.
        </p>
        <section className="mb-10">
          <article className="text-justify  w-11/12 mx-auto">
            <h3 className="w-11/12 m-0 mt-4" style={{ marginBlock: 0 }}>
              Nuestro Compromiso
            </h3>
            <p>
              Todos los involucrados en la comunidad de Javascript Ecuador
              buscamos crear y fomentar una comunidad abierta y acogedora,
              nosotros como contribuyentes y administradores nos comprometemos a
              hacer de la participación en este proyecto y nuestra comunidad una
              experiencia libre de acoso para todos, independientemente de la
              edad, dimensión corporal, discapacidad, etnia, identidad y
              expresión de género, nivel de experiencia, nacionalidad,
              apariencia física, raza, religión, identidad u orientación sexual.
              La comunidad Javascript Ecuador celebra la diversidad de su
              comunidad. Para la organización es de crucial importancia que
              estos espacios de participación presenciales y virtuales sean
              ámbitos inclusivos, seguros y libres de discriminación y/o
              violencia de cualquier tipo.
            </p>
          </article>
          <article className="text-justify  w-11/12 mx-auto">
            <h3 className="w-11/12 m-0 mt-4" style={{ marginBlock: 0 }}>
              Nuestros Estándares
            </h3>
            <p>
              Ejemplos de comportamiento que contribuyen a crear un ambiente
              positivo:
            </p>
            <ul className="list-disc my-2  mx-auto w-11/12">
              <li>Uso de lenguaje amable e inclusivo </li>
              <li>Respeto a diferentes puntos de vista y experiencias</li>
              <li>Aceptación de críticas constructivas</li>
              <li>Enfocarse en lo que es mejor para la comunidad</li>
              <li>Mostrar empatía a otros miembros de la comunidad</li>
              <li>
                Contribuir al debate con comentarios razonables e informados
              </li>
              <li>
                Obrar de manera justa y de buena fe en las interacciones con
                otros participantes/miembros de la comunidad
              </li>
            </ul>
            <p>Ejemplos de comportamiento inaceptable por participantes:</p>
            <ul className="list-disc my-2  mx-auto w-11/12">
              <li>
                Uso de lenguaje o imágenes sexuales y atención sexual no deseada
              </li>
              <li>
                Comentarios insultantes o despectivos (trolling) y ataques
                personales o político
              </li>
              <li>Acoso público o privado</li>
              <li>
                No ser respetuoso con los límites razonables de comunicación,
                como "déjame en paz", "vete" o "No estoy discutiendo/hablando
                esto contigo".
              </li>
              <li>
                Actos discriminatorio, incluyendo pero no limitado a
                discriminación por condición de género, tamaño corporal, origen
                étnico, nacionalidad, origen social, edad, estado civil,
                orientación sexual, ideología, opiniones políticas, religión,
                habilidad mental o física, u otras.
              </li>
              <li>
                Publicación de información privada de terceros sin su
                consentimiento, como direcciones físicas o electrónicas
              </li>
              <li>
                Otros tipos de conducta que pudieran considerarse inapropiadas
                en un entorno profesional.
              </li>
            </ul>
          </article>
          <article className="text-justify  w-11/12 mx-auto">
            <h3 className="w-11/12 m-0 mt-4" style={{ marginBlock: 0 }}>
              Nuestras responsabilidades
            </h3>
            <p>
              Los administradores del proyecto son responsables de clarificar
              los estándares de comportamiento aceptable y se espera que tomen
              medidas correctivas y apropiadas en respuesta a situaciones de
              conducta inaceptable. Los administradores del proyecto tienen el
              derecho y la responsabilidad de eliminar, editar o rechazar
              comentarios, commits, código, ediciones de documentación, issues,
              y otras contribuciones que no estén alineadas con este Código de
              Conducta, o de prohibir temporal o permanentemente a cualquier
              colaborador cuyo comportamiento sea inapropiado, amenazante,
              ofensivo o perjudicial.
            </p>
          </article>
          <article className="text-justify  w-11/12 mx-auto">
            <h3 className="w-11/12 m-0 mt-4" style={{ marginBlock: 0 }}>
              Alcance
            </h3>
            <p>
              Este código de conducta aplica tanto a espacios del proyecto como
              a espacios públicos donde un individuo esté en representación del
              proyecto o comunidad. Ejemplos de esto incluye el uso de la cuenta
              oficial de correo electrónico, publicaciones a través de las redes
              sociales oficiales, o presentaciones con personas designadas en
              eventos online u offline. La representación del proyecto puede ser
              clarificada explicitamente por los administradores del proyecto.
            </p>
          </article>
          <article className="text-justify  w-11/12 mx-auto">
            <h3 className="w-11/12 m-0 mt-4" style={{ marginBlock: 0 }}>
              Aplicación
            </h3>
            <p>
              Las conductas inaceptables listadas anteriormente no serán
              toleradas por parte de ningún miembro de la comunidad,
              independientemente de su función en la comunidad. Ejemplos de
              abuso, acoso u otro tipo de comportamiento inaceptable puede ser
              reportado al equipo del proyecto en
              javascriptecuador"arroba"gmail.com. Todas las quejas serán
              revisadas e investigadas, generando un resultado apropiado a las
              circunstancias. El equipo del proyecto está obligado a mantener
              confidencialidad de la persona que reportó el incidente. Detalles
              específicos acerca de las políticas de aplicación pueden ser
              publicadas por separado. Administradores que no sigan o que no
              hagan cumplir este Código de Conducta pueden ser eliminados de
              forma temporal o permanente del equipo administrador.
            </p>
          </article>
          <article className="text-justify  w-11/12 mx-auto">
            <h3 className="w-11/12 m-0 mt-4" style={{ marginBlock: 0 }}>
              Atribución
            </h3>
            <p>Este Código de Conducta es una adaptación de:</p>
            <ul className="list-disc my-2  mx-auto w-11/12">
              <li>
                Contributor Covenant, versión 1.4, disponible en:
                <br />
                <a
                  className="underline text-blue-500 hover:text-red-500"
                  href="https://www.contributor-covenant.org/es/version/1/4/code-of-conduct.html"
                >
                  https://www.contributor-covenant.org/es/version/1/4/code-of-conduct.html
                </a>
              </li>
              <li>
                Código de Conducta de LACNIC, disponible en: <br />
                <a
                  className="underline text-blue-500 hover:text-red-500"
                  href="https://www.lacnic.net/4038/1/lacnic/codigo-de-conducta-de-la-comunidad-de-lacnic"
                >
                  https://www.lacnic.net/4038/1/lacnic/codigo-de-conducta-de-la-comunidad-de-lacnic
                </a>
              </li>
            </ul>
          </article>
        </section>
      </Layout>
    </div>
  );
};

export default codeConduct;

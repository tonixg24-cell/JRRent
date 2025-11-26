import React from 'react';

// 1. Definición de tipos para los datos de la empresa y props de componentes
interface CompanyData {
  titular: string;
  domicilio: string;
  cif: string;
  email: string;
}

interface ConditionItemProps {
  text: string;
}

// Datos de contacto de la empresa
const companyData: CompanyData = {
  titular: "J.R Rent",
  domicilio: "calle llobregat 74, hospitalet",
  cif: "55164060D",
  email: "juansan945@gmail.com",
};

// Componente auxiliar para renderizar cada ítem de condición
const ConditionItem = ({ text }: ConditionItemProps) => (
  <li className="flex items-start mb-2">
    <svg
      className="w-5 h-5 text-teal-600 mr-2 mt-1 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
    <span className="text-gray-700 leading-relaxed">{text}</span>
  </li>
);

// Componente principal
const TerminosYCondiciones = () => {
  // Definición de las secciones de los Términos
  const sections = [
    {
      id: 1,
      title: "Identificación de la empresa",
      content: (
        <div className="space-y-2 text-gray-700">
          <p>
            El presente sitio web es titularidad de <strong className="font-semibold">{companyData.titular}</strong>, con domicilio en <strong className="font-semibold">{companyData.domicilio}</strong>.
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>
              <strong className="font-semibold">CIF:</strong> {companyData.cif}
            </li>
            <li>
              <strong className="font-semibold">Correo de contacto:</strong>{' '}
              <a
                href={`mailto:${companyData.email}`}
                className="text-teal-600 hover:text-teal-800 underline transition duration-150"
              >
                {companyData.email}
              </a>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 2,
      title: "Objeto del servicio",
      content: (
        <div className="space-y-2 text-gray-700">
          <p>
            A través de esta página web, <strong className="font-semibold">J.R Rent</strong> ofrece servicios de alquiler de coches y furgonetas sin conductor, disponibles para particulares y empresas.
          </p>
          <p>
            El uso del sitio web y la realización de una reserva implican la aceptación plena de los presentes Términos y Condiciones.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      title: "Condiciones de alquiler",
      content: (
        <ul className="list-none p-0">
          <ConditionItem text="El arrendatario debe tener mínimo 21 años y carnet de conducir válido en España con al menos 2 años de antigüedad." />
          <ConditionItem text="Se requerirá DNI, NIE o pasaporte en vigor." />
          <ConditionItem text="El vehículo se entregará en las condiciones acordadas y deberá devolverse en el mismo estado." />
          <ConditionItem text="El alquiler no incluye combustible, peajes ni multas, que serán responsabilidad del cliente." />
          <ConditionItem text="No se permite el uso del vehículo para transporte comercial no autorizado, competiciones, subarriendo o conducción bajo los efectos del alcohol o drogas." />
        </ul>
      ),
    },
    {
      id: 4,
      title: "Reservas y pagos",
      content: (
        <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
          <li>
            Las reservas se realizan exclusivamente online, mediante pago anticipado total del importe del alquiler.
          </li>
          <li>
            Los precios mostrados incluyen IVA y seguros obligatorios (ver condiciones específicas del seguro al momento de la reserva).
          </li>
          <li>
            J.R Rent se reserva el derecho de rechazar o cancelar reservas en caso de errores evidentes en precios o disponibilidad.
          </li>
        </ul>
      ),
    },
    {
      id: 5,
      title: "Depósito de seguridad (fianza)",
      content: (
        <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
          <li>
            En el momento de la recogida del vehículo podrá requerirse una fianza mediante tarjeta de crédito o débito para cubrir posibles daños o incumplimientos contractuales.
          </li>
          <li>
            El importe de la fianza se reembolsará íntegramente una vez comprobado el estado del vehículo y el cumplimiento de las condiciones del alquiler.
          </li>
        </ul>
      ),
    },
    {
      id: 6,
      title: "Política de cancelación y reembolsos",
      content: (
        <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
          <li>
            <strong className="font-semibold">Cancelación con más de 24 horas de antelación:</strong> reembolso del 100% del importe pagado.
          </li>
          <li>
            <strong className="font-semibold">Cancelación con menos de 24 horas:</strong> reembolso del 50% del importe pagado.
          </li>
          <li>
            No se realizará ningún reembolso si el cliente no se presenta a recoger el vehículo sin notificación previa.
          </li>
        </ul>
      ),
    },
    {
      id: 7,
      title: "Entrega y devolución",
      content: (
        <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
          <li>
            El vehículo deberá recogerse y devolverse en el lugar, fecha y hora acordados.
          </li>
          <li>
            Los retrasos en la devolución podrán generar cargos adicionales.
          </li>
          <li>
            J.R Rent podrá rescindir el contrato en caso de incumplimiento grave por parte del cliente.
          </li>
        </ul>
      ),
    },
    {
      id: 8,
      title: "Responsabilidad del cliente",
      content: (
        <>
          <p className="mb-2 text-gray-700">El cliente será responsable de:</p>
          <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
            <li>Cualquier daño causado al vehículo por negligencia o mal uso.</li>
            <li>Sanciones administrativas o multas derivadas del uso del vehículo durante el período de alquiler.</li>
            <li>Pérdida de llaves, documentación o accesorios.</li>
          </ul>
        </>
      ),
    },
    {
      id: 9,
      title: "Responsabilidad de J.R Rent",
      content: (
        <>
          <p className="mb-2 text-gray-700">
            J.R Rent se compromete a mantener sus vehículos en condiciones óptimas de uso y seguridad.
          </p>
          <p className="mb-2 text-gray-700">
            No obstante, no será responsable de:
          </p>
          <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
            <li>Retrasos o fallos debidos a causas de fuerza mayor (accidentes, tráfico, climatología, etc.).</li>
            <li>Daños indirectos, lucro cesante o perjuicios económicos derivados del uso o imposibilidad de uso del vehículo.</li>
          </ul>
        </>
      ),
    },
    {
      id: 10,
      title: "Uso del sitio web",
      content: (
        <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
          <li>El usuario se compromete a hacer un uso lícito, diligente y responsable del sitio web.</li>
          <li>Está prohibido el uso fraudulento, la recolección de datos de otros usuarios o el acceso no autorizado a áreas restringidas.</li>
          <li>J.R Rent no se hace responsable de posibles errores técnicos o interrupciones temporales del servicio web.</li>
        </ul>
      ),
    },
    {
      id: 11,
      title: "Propiedad intelectual",
      content: (
        <p className="text-gray-700">
          Todos los contenidos del sitio (textos, imágenes, logotipos, marcas, etc.) son propiedad de J.R Rent o de sus legítimos titulares, y están protegidos por la legislación de propiedad intelectual e industrial.
        </p>
      ),
    },
    {
      id: 12,
      title: "Protección de datos personales",
      content: (
        <div className="space-y-2 text-gray-700">
          <p>
            J.R Rent cumple con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).
          </p>
          <ul className="list-disc list-outside ml-5 space-y-2">
            <li>
              Los datos personales facilitados se tratarán para la gestión de reservas, contratos y comunicaciones con los clientes.
            </li>
            <li>
              El usuario podrá ejercer sus derechos de acceso, rectificación, supresión, oposición, portabilidad y limitación del tratamiento mediante solicitud escrita a{' '}
              <a
                href={`mailto:${companyData.email}`}
                className="text-teal-600 hover:text-teal-800 underline transition duration-150"
              >
                {companyData.email}
              </a>
              .
            </li>
            <li>
              Para más información, consulte nuestra <strong className="font-semibold">Política de Privacidad</strong> completa disponible en el sitio web.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 13,
      title: "Legislación y jurisdicción aplicable",
      content: (
        <p className="text-gray-700">
          Los presentes Términos y Condiciones se rigen por la legislación española. Cualquier controversia se someterá a los Juzgados y Tribunales de Barcelona, salvo que la normativa aplicable establezca otra cosa.
        </p>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-10 sm:py-16 font-inter">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado Principal */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-teal-800 sm:text-5xl tracking-tight">
            🧾 TÉRMINOS Y CONDICIONES
          </h1>
          <p className="mt-3 text-xl text-gray-500 font-medium">
            DE USO Y ALQUILER
          </p>
          <p className="mt-2 text-sm text-gray-400">
            J.R Rent – Barcelona (España)
          </p>
        </div>

        {/* Contenedor de las Secciones */}
        <div className="bg-white shadow-xl rounded-xl p-6 sm:p-10 space-y-8 border-t-4 border-teal-600"> 
          {sections.map((section) => (
            <div key={section.id} className="pt-4 border-b border-gray-100 last:border-b-0">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                {section.id}. {section.title}
              </h2>
              <div className="mb-6 pl-1">{section.content}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default TerminosYCondiciones;

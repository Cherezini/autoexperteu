import type { Metadata } from 'next';
import SourcingForm from '@/components/SourcingForm';

function copy(locale: string) {
  const isES = locale === 'es';
  const isEN = locale === 'en';

  const stepsES = [
    'Solicitud del cliente',
    'Revisión de la solicitud y respuesta sobre la viabilidad',
    'Firma del contrato',
    'Pago del anticipo de selección',
    'Selección del vehículo (España + Europa, subastas)',
    'Diagnóstico en nuestro taller',
    'Verificación legal de documentos',
    'Logística y entrega',
    'Matriculación en España',
    'Entrega del vehículo al cliente',
  ];

  const stepsEN = [
    'Client request',
    'Request review and feasibility reply',
    'Contract signing',
    'Upfront sourcing fee payment',
    'Car sourcing (Spain + Europe, auctions)',
    'Diagnostics in our workshop',
    'Legal document check',
    'Logistics and delivery',
    'Registration in Spain',
    'Car handover to the client',
  ];

  const stepsRU = [
    'Заявка клиента',
    'Рассмотрение заявки и ответ о возможности подбора',
    'Подписание договора',
    'Оплата аванса за подбор',
    'Подбор автомобиля (Испания + Европа, аукционы)',
    'Проверка на собственной СТО',
    'Юридическая проверка документов',
    'Доставка',
    'Регистрация в Испании',
    'Передача автомобиля клиенту',
  ];

  if (isES) {
    return {
      title: 'Coche a la carta | Autopodbor y compra de coche en España',
      description:
        'Coche a la carta: selección de coche en España y Europa, subastas, diagnóstico en taller propio, verificación legal, entrega y matriculación en España.',
      h1: 'Coche a la carta',
      intro:
        'Servicio principal de Autoexpert EU: selección de coche en España y en Europa (incluidas subastas), verificación técnica y legal, logística, y acompañamiento hasta la matriculación en España.',
      auctions:
        'Nuestra empresa está registrada en las principales subastas de Europa, incluidas subastas B2B cerradas a las que solo pueden acceder personas jurídicas que hayan confirmado su legalidad.',
      stepsTitle: 'Etapas de trabajo',
      steps: stepsES,
      importTitle: 'Importación desde Europa (dentro del servicio)',
      importText:
        'Trabajamos con países como Alemania, Bélgica, Países Bajos y Francia, incluyendo subastas europeas. El objetivo es que recibas el coche listo para registrarlo en España.',
      formNote:
        'Rellena el formulario: la solicitud se enviará a WhatsApp de Autoexpert EU (+34 722 75 66 95).',
    };
  }

  if (isEN) {
    return {
      title: 'Car sourcing | Turnkey car purchase in Spain',
      description:
        'Car sourcing: Spain and Europe (including auctions), diagnostics in our own workshop, legal check, delivery and Spanish registration.',
      h1: 'Car sourcing',
      intro:
        'Our main service: sourcing a car in Spain and across Europe (including auctions), technical and legal checks, logistics, and support up to registration in Spain.',
      auctions:
        'Our company is registered on the major European auctions, including closed B2B auctions that are available only to legal entities with verified compliance.',
      stepsTitle: 'Workflow steps',
      steps: stepsEN,
      importTitle: 'Import from Europe (part of the service)',
      importText:
        'We work with Germany, Belgium, the Netherlands, France and other markets, including European auctions. The goal is to deliver a car ready for registration in Spain.',
      formNote:
        'Fill in the form: your request will be sent to Autoexpert EU WhatsApp (+34 722 75 66 95).',
    };
  }

  return {
    title: 'Автоподбор под ключ | Autoexpert EU Испания',
    description:
      'Автоподбор под ключ в Испании и Европе (аукционы): проверка на СТО, юридическая проверка, доставка и регистрация в Испании.',
    h1: 'Автоподбор под ключ',
    intro:
      'Основная услуга Autoexpert EU: подбор автомобиля в Испании и Европе (включая аукционы), техническая и юридическая проверка, доставка и сопровождение до регистрации в Испании.',
    auctions:
      'Наша компания зарегистрирована на всех крупнейших аукционах Европы, включая закрытые B2B-аукционы, где регистрация доступна только юридическим лицам, подтвердившим свою легальность.',
    stepsTitle: 'Этапы работы',
    steps: stepsRU,
    importTitle: 'Импорт из Европы (внутри услуги)',
    importText:
      'Работаем с Германией, Бельгией, Нидерландами, Францией и другими рынками, включая европейские аукционы. Цель — передать автомобиль, готовый к постановке на учёт в Испании.',
    formNote:
      'Заполните форму: заявка уйдёт в WhatsApp Autoexpert EU (+34 722 75 66 95).',
  };
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const c = copy(params.locale);
  return { title: c.title, description: c.description };
}

export default function SourcingPage({ params }: { params: { locale: string } }) {
  const c = copy(params.locale);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold">{c.h1}</h1>
        <p className="text-neutral-700 max-w-3xl">{c.intro}</p>
        <p className="text-neutral-700 max-w-3xl">{c.auctions}</p>
      </div>

      
<section className="rounded-xl border p-5 bg-white space-y-3">
  <h2 className="text-xl font-semibold text-center">{c.stepsTitle}</h2>

  <ol className="list-decimal pl-5 space-y-1 text-sm text-neutral-700">
        {c.steps.map((s: string, i: number) => (
          <li key={i}>{s}</li>
        ))}
      </ol>
</section>

      <section className="rounded-xl border p-5 bg-white space-y-2">
        <h2 className="text-xl font-semibold text-center">{c.importTitle}</h2>
        <p className="text-neutral-700 text-sm text-justify">{c.importText}</p>
      </section>

      <div className="text-sm text-neutral-700">{c.formNote}</div>
      <SourcingForm locale={params.locale} />
    </div>
  );
}
